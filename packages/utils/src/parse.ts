export const safeParseJSON = (value: any, errorCallback?: (e: unknown) => any): any => {
  try {
    return JSON.parse(value);
  } catch (e) {
    if (errorCallback) {
      return errorCallback(e);
    } else {
      return undefined;
    }
  }
};

export const safeStringifyJSON = (value: any, errorCallback?: (e: unknown) => string): string => {
  try {
    return JSON.stringify(value);
  } catch (e) {
    if (errorCallback) {
      return errorCallback(e);
    } else {
      return '';
    }
  }
};

export const safeEqual = (val1, val2): boolean => {
  return val1 && val2 && val1 === val2;
};

export function isJSON(variable: any): boolean {
  if (typeof variable !== 'string' || !variable.startsWith('{') || !variable.endsWith('}')) {
    return false;
  }
  try {
    JSON.parse(variable);
    return true;
  } catch (error) {
    return false;
  }
}

export const markdownCitationParse = (markdown: string) => {
  return (markdown || '')
    ?.replace(/\[\[([cC])itation/g, '[citation')
    .replace(/[cC]itation:(\d+)]]/g, 'citation:$1]')
    .replace(/\[\[([cC]itation:\d+)]](?!])/g, `[$1]`)
    .replace(/\[[cC]itation:(\d+)]/g, '[citation]($1)')
    .replace(/【[cC]itation:(\d+)】/g, '[citation]($1)');
};
