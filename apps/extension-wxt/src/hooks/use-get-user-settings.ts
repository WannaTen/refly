import { useEffect, useTransition } from 'react';
import { useMatch, useNavigate } from '@refly-packages/ai-workspace-common/utils/router';

// request
import { LocalSettings, defaultLocalSettings, useUserStore } from '@refly-packages/ai-workspace-common/stores/user';
import { safeParseJSON, safeStringifyJSON } from '@refly-packages/ai-workspace-common/utils/parse';

import { LOCALE } from '@refly/common-types';
import { useTranslation } from 'react-i18next';
import { Message as message } from '@arco-design/web-react';
import { useCopilotStore } from '@/modules/toggle-copilot/stores/copilot';
import { mapDefaultLocale } from '@/utils/locale';
import { storage } from '@refly-packages/ai-workspace-common/utils/storage';
import { useStorage } from './use-storage';
// request
import getClient from '@refly-packages/ai-workspace-common/requests/proxiedRequest';
import { useExtensionMessage } from './use-extension-message';
// import { checkBrowserArc } from '@/utils/browser';
import { getRuntime } from '@refly-packages/ai-workspace-common/utils/env';
import { UserSettings } from '@refly/openapi-schema';
import { browser } from 'wxt/browser';

interface ExternalLoginPayload {
  name: string;
  data: {
    status: 'success' | 'failed';
    token?: string;
    user?: UserSettings;
  };
}

export const useGetUserSettings = () => {
  const userStore = useUserStore();
  const navigate = useNavigate();
  const copilotStore = useCopilotStore();

  const [messageData] = useExtensionMessage<ExternalLoginPayload>('refly-login-notify', (req, res) => {
    res.send('recevied msg');
  });

  const { i18n } = useTranslation();
  const [token, setToken] = useStorage('token', '', 'sync');
  const { t } = useTranslation();

  const [loginNotification, setLoginNotification] = useStorage('refly-login-notify', '', 'sync');

  const getLoginStatus = async () => {
    try {
      let { localSettings, userProfile } = useUserStore.getState();
      const lastStatusIsLogin = !!userProfile?.uid;

      const res = await getClient().getSettings();

      console.log('loginStatus', res);

      if (res?.error) {
        userStore.resetState();
        setLoginNotification('');
        // await storage.removeItem('local:refly-user-profile');
        // await storage.removeItem('local:refly-local-settings');
        navigate('/login');
      } else {
        userStore.setUserProfile(res?.data!);

        // 增加 localSettings
        let uiLocale = mapDefaultLocale(res?.data?.uiLocale!) as LOCALE;
        let outputLocale = res?.data?.outputLocale as LOCALE;

        // 先写回
        localSettings = {
          ...localSettings,
          uiLocale,
          outputLocale,
          isLocaleInitialized: true,
        } as LocalSettings;

        // 说明是第一次注册使用，此时没有 locale，需要写回
        if (!uiLocale && !outputLocale) {
          uiLocale = (mapDefaultLocale(navigator?.language) || LOCALE.EN) as LOCALE;
          outputLocale = (navigator?.language || LOCALE.EN) as LOCALE;
          // 不阻塞写回用户配置
          getClient().updateSettings({
            body: { uiLocale, outputLocale },
          });

          // 如果是初始化的再替换
          localSettings = {
            ...localSettings,
            uiLocale,
            outputLocale,
            isLocaleInitialized: false,
          };
        }

        // 应用 locale
        i18n.changeLanguage(uiLocale);
        userStore.setLocalSettings(localSettings);

        // await storage.setItem('sync:refly-user-profile', safeStringifyJSON(res?.data));
        // await storage.setItem('sync:refly-local-settings', safeStringifyJSON(localSettings));

        if (!lastStatusIsLogin) {
          navigate('/');
        }
      }
    } catch (err) {
      console.log('getLoginStatus err', err);
      userStore.resetState();
      // await storage.removeItem('sync:refly-user-profile');
      // await storage.removeItem('sync:refly-local-settings');
      setLoginNotification('');
      navigate('/login');
    }
  };

  const handleLoginStatus = async ({ data }: ExternalLoginPayload) => {
    if (data?.status === 'success') {
      try {
        let { localSettings, userProfile } = useUserStore.getState();
        const lastStatusIsLogin = !!userProfile?.uid;

        const res = await getClient().getSettings();

        console.log('loginStatus', res);

        if (res?.error) {
          userStore.setUserProfile(undefined);
          userStore.setToken('');
          setToken('');
          // await await storage.removeItem('sync:refly-user-profile');
          // await await storage.removeItem('sync:refly-local-settings');

          navigate('/login');
          message.error(t('extension.loginPage.status.failed'));
        } else {
          userStore.setUserProfile(res?.data!);
          userStore.setToken(data?.token);
          setToken(data?.token as string);
          await storage.setItem('sync:refly-user-profile', safeStringifyJSON(res?.data));

          // 增加 localSettings
          let uiLocale = res?.data?.uiLocale as LOCALE;
          let outputLocale = res?.data?.outputLocale as LOCALE;

          // 先写回
          localSettings = {
            ...localSettings,
            uiLocale,
            outputLocale,
            isLocaleInitialized: true,
          };

          // 说明是第一次注册使用，此时没有 locale，需要写回
          if (!uiLocale && !outputLocale) {
            uiLocale = (navigator?.language || LOCALE.EN) as LOCALE;
            outputLocale = (navigator?.language || LOCALE.EN) as LOCALE;
            // 不阻塞写回用户配置
            getClient().updateSettings({
              body: { uiLocale, outputLocale },
            });
            // 如果是初始化的再替换
            localSettings = {
              ...localSettings,
              uiLocale,
              outputLocale,
              isLocaleInitialized: false,
            };
          }

          // 应用 locale
          i18n.changeLanguage(uiLocale);

          userStore.setLocalSettings(localSettings);
          // await storage.setItem('sync:refly-user-profile', safeStringifyJSON(res?.data));
          // await storage.setItem('sync:refly-local-settings', safeStringifyJSON(localSettings));

          message.success(t('extension.loginPage.status.success'));

          if (!lastStatusIsLogin) {
            navigate('/');
          }
        }
      } catch (err) {
        console.log('getLoginStatus err', err);
        userStore.setUserProfile(undefined);
        userStore.setLocalSettings(defaultLocalSettings);
        userStore.setToken('');
        setToken('');
        // await await storage.removeItem('sync:refly-user-profile');
        // await await storage.removeItem('sync:refly-local-settings');

        navigate('/login');
      }
    } else {
      // message.error(t("loginPage.status.failed"))
    }

    userStore.setIsCheckingLoginStatus(false);
  };

  useEffect(() => {
    if (messageData?.name === 'refly-login-notify') {
      handleLoginStatus(messageData);
    }
  }, [messageData]);
  // sync storage
  useEffect(() => {
    console.log('loginNotification', loginNotification);
    if (loginNotification) {
      const data = safeParseJSON(loginNotification);
      handleLoginStatus(data);
    }
  }, [loginNotification]);

  // 监听打开关闭
  useEffect(() => {
    if (copilotStore?.isCopilotOpen) {
      getLoginStatus();
    }
  }, [copilotStore?.isCopilotOpen]);

  // 收到消息之后，关闭窗口，保活检查
  const handleExtensionMessage = (request: any) => {
    if (request?.name === 'reflyStatusCheck' && getRuntime() === 'extension-csui') {
      getLoginStatus();
      // checkBrowserArc();
    }
  };

  useEffect(() => {
    browser.runtime.onMessage.addListener(handleExtensionMessage);

    return () => {
      browser.runtime.onMessage.removeListener(handleExtensionMessage);
    };
  }, []);

  return {
    getLoginStatus,
  };
};
