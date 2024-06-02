// This file is auto-generated by @hey-api/openapi-ts

/**
 * Weblink metadata
 */
export type WeblinkMeta = {
  /**
   * Weblink URL
   */
  url: string;
  /**
   * Weblink title
   */
  title?: string;
  /**
   * Weblink ID (if it already exists)
   */
  linkId?: string;
  /**
   * Storage key for the weblink
   * @deprecated
   */
  storageKey?: string;
};

/**
 * Resource metadata
 */
export type ResourceMeta = WeblinkMeta;

/**
 * Resource type
 */
export type ResourceType = 'weblink';

export type ResourceListItem = {
  /**
   * Resource ID
   */
  resourceId: string;
  /**
   * Resource type
   */
  resourceType: ResourceType;
  /**
   * Resource metadata
   */
  data?: ResourceMeta;
  /**
   * Whether this resource is public
   */
  isPublic: boolean;
  /**
   * Collection creation time
   */
  createdAt: string;
  /**
   * Collection creation time
   */
  updatedAt: string;
};

export type CollectionListItem = {
  /**
   * Collection ID
   */
  collectionId: string;
  /**
   * Collection title
   */
  title: string;
  /**
   * Collection description
   */
  description?: string;
  /**
   * Whether this collection is public
   */
  isPublic?: boolean;
  /**
   * Collection creation time
   */
  createdAt: string;
  /**
   * Collection creation time
   */
  updatedAt: string;
};

export type ResourceDetail = ResourceListItem & {
  /**
   * Document content for this resource
   */
  doc?: string;
};

export type CollectionDetail = CollectionListItem & {
  /**
   * Collection resources
   */
  resources?: Array<ResourceListItem>;
};

/**
 * Source metadata
 */
export type SourceMeta = {
  /**
   * Source URL
   */
  source?: string;
  /**
   * Source title
   */
  title?: number;
};

/**
 * Source of the message
 */
export type Source = {
  /**
   * Source URL
   */
  url?: string;
  /**
   * Source title
   */
  title?: string;
  /**
   * Source content
   */
  pageContent?: string;
  /**
   * Relativity score
   */
  score?: number;
  /**
   * Source metadata
   * @deprecated
   */
  metadata?: SourceMeta;
};

/**
 * Chat message type
 */
export type MessageType = 'ai' | 'human' | 'system';

/**
 * Chat message
 */
export type ChatMessage = {
  /**
   * Message type
   */
  type: MessageType;
  /**
   * Message content
   */
  content: string;
  /**
   * Message creation time
   */
  createdAt: string;
  /**
   * Message update time
   */
  updatedAt?: string;
};

/**
 * Conversation list item
 */
export type ConversationListItem = {
  /**
   * Conversation ID
   */
  convId?: string;
  /**
   * Conversation title
   */
  title?: string;
  /**
   * Last message content
   */
  lastMessage?: string;
  /**
   * Number of chat messages in this conversation
   */
  messageCount?: number;
  /**
   * Related content ID
   */
  contentId?: string;
  /**
   * Origin page host
   */
  origin?: string;
  /**
   * Origin page title
   */
  originPageTitle?: string;
  /**
   * Origin page url
   */
  originPageUrl?: string;
  /**
   * Conversation creation time
   */
  createdAt?: string;
  /**
   * Conversation creation time
   */
  updatedAt?: string;
};

export type ConversationDetail = ConversationListItem & {
  /**
   * Conversation messages
   */
  messages?: Array<ChatMessage>;
};

/**
 * Chat task type
 */
export type ChatTaskType =
  | 'chat'
  | 'genTitle'
  | 'quickAction'
  | 'searchEnhanceKeyword'
  | 'searchEnhanceSummarize'
  | 'searchEnhanceAsk';

/**
 * Content retrieval filter
 */
export type RetrieveFilter = {
  /**
   * List of web links
   * @deprecated
   */
  weblinkList?: Array<Source>;
  /**
   * List of URLs to retrieve
   */
  urls?: Array<string>;
  /**
   * List of resource IDs to retrieve
   */
  resourceIds?: Array<string>;
  /**
   * List of collection IDs to retrieve
   */
  collectionIds?: Array<string>;
};

/**
 * Chat payload
 */
export type ChatPayload = {
  /**
   * Question
   */
  question: string;
  /**
   * Content retrieval filter
   */
  filter?: RetrieveFilter;
};

/**
 * Quick action type
 */
export type QuickActionType = 'selection' | 'summary';

/**
 * Quick action task payload
 */
export type QuickActionTaskPayload = {
  /**
   * Question
   */
  question?: string;
  /**
   * Quick action type
   */
  actionType?: QuickActionType;
  /**
   * Prompt for this action
   */
  actionPrompt?: string;
  /**
   * Reference for this action
   */
  reference?: string;
  /**
   * Content retrieval filter
   */
  filter?: RetrieveFilter;
};

/**
 * Chat task
 */
export type ChatTask = {
  /**
   * Task type
   */
  taskType: ChatTaskType;
  /**
   * Whether to dry run the task
   */
  dryRun?: boolean;
  /**
   * Conversation ID, a new conversation will be created if empty or non-existent
   */
  convId?: string;
  /**
   * Chat locale
   */
  locale?: string;
  /**
   * Chat data
   */
  data?: unknown;
};

/**
 * Resource index status
 */
export type IndexStatus = 'init' | 'processing' | 'finish' | 'failed' | 'unavailable';

/**
 * Weblink parse source
 */
export type ParseSource = 'serverCrawl' | 'clientUpload';

export type PingWeblinkData = {
  /**
   * Weblink ID
   */
  linkId?: string;
  /**
   * Weblink parse status
   */
  parseStatus?: IndexStatus;
  /**
   * Weblink chunking status
   */
  chunkStatus?: IndexStatus;
  /**
   * Summary of the weblink
   */
  summary?: string;
  /**
   * Related questions for this weblink summary
   */
  relationQuestions?: Array<string>;
  /**
   * Weblink parse source
   */
  parseSource?: ParseSource;
};

export type WeblinkDTO = {
  /**
   * Weblink ID
   */
  linkId?: string;
  /**
   * Weblink URL
   */
  url?: string;
  /**
   * Weblink title
   */
  title?: string;
  /**
   * Origin page host
   */
  origin?: string;
  /**
   * Origin page title
   */
  originPageTitle?: string;
  /**
   * Origin page url
   */
  originPageUrl?: string;
  /**
   * Weblink index status
   */
  indexStatus?: IndexStatus;
  /**
   * Weblink creation time
   */
  createdAt?: string;
  /**
   * Weblink update time
   */
  updatedAt?: string;
};

export type ContentDTO = {
  /**
   * Content ID
   */
  contentId: string;
  /**
   * Content title
   */
  title: string;
  /**
   * Content abstract
   */
  abstract?: string;
  /**
   * Content metadata
   */
  meta?: string;
  /**
   * Content creation time
   */
  createdAt: string;
  /**
   * Content update time
   */
  updatedAt: string;
};

export type ContentMetaRecord = {
  /**
   * Meta key
   */
  key: string;
  /**
   * Meta name
   */
  name: string;
  /**
   * Meta relativity score
   */
  score: number;
  /**
   * Reason for classification
   */
  reason: string;
};

export type ContentMeta = {
  /**
   * Topic list
   */
  topics?: Array<ContentMetaRecord>;
  /**
   * Content type list
   */
  contentType?: Array<ContentMetaRecord>;
  /**
   * Content format list
   */
  formats?: Array<ContentMetaRecord>;
};

export type ContentDetail = ContentDTO & {
  /**
   * Content
   */
  content?: string;
  /**
   * Content source list
   */
  source?: Array<Source>;
  /**
   * Content metadata
   */
  meta?: ContentMeta;
};

export type Digest = ContentDTO & {
  /**
   * Topic key
   */
  topicKey: string;
  /**
   * User ID
   */
  uid?: string;
  /**
   * Digest date
   */
  date: string;
};

export type Feed = ContentDTO & {
  /**
   * Read count
   */
  readCount?: number;
  /**
   * Ask follow count
   */
  askFollow?: number;
};

export type UserSettings = {
  /**
   * User ID
   */
  uid: string;
  /**
   * User avatar
   */
  avatar: string;
  /**
   * User name
   */
  name: string;
  /**
   * User email
   */
  email: string;
  /**
   * Whether email is verified
   */
  emailVerified?: boolean;
  /**
   * User UI locale
   */
  uiLocale?: string;
  /**
   * User output locale
   */
  outputLocale?: string;
};

export type BaseResponse = {
  /**
   * Whether the operation was successful
   */
  success: boolean;
  /**
   * Error message
   */
  errMsg?: string;
};

export type UpsertResourceRequest = {
  /**
   * Resource type
   */
  resourceType: ResourceType;
  /**
   * Resource title
   */
  title?: string;
  /**
   * Resource ID (only used for update)
   */
  resourceId?: string;
  /**
   * Collection ID (will create new collection if empty)
   */
  collectionId?: string;
  /**
   * Collection name
   */
  collectionName?: string;
  /**
   * Resource metadata
   */
  data: ResourceMeta;
  /**
   * Storage key for the resource
   */
  storageKey?: string;
  /**
   * Resource content (this will be ignored if storageKey was set)
   */
  content?: string;
  /**
   * Whether this resource is public
   */
  isPublic?: boolean;
};

export type UpsertResourceResponse = BaseResponse & {
  data?: ResourceListItem;
};

export type DeleteResourceRequest = {
  /**
   * Resource ID to delete
   */
  resourceId: string;
};

export type ListResourceResponse = BaseResponse & {
  /**
   * Resource list
   */
  data?: Array<ResourceListItem>;
};

export type GetResourceDetailResponse = BaseResponse & {
  /**
   * Resource data
   */
  data?: ResourceDetail;
};

export type UpsertCollectionRequest = {
  /**
   * Collection ID (only used for update)
   */
  collectionId?: string;
  /**
   * Collection title
   */
  title?: string;
  /**
   * Collection description
   */
  description?: string;
  /**
   * Whether this collection is public
   */
  isPublic?: boolean;
};

export type UpsertCollectionResponse = BaseResponse & {
  data?: CollectionListItem;
};

export type DeleteCollectionRequest = {
  /**
   * Collection ID to delete
   */
  collectionId: string;
};

export type ListCollectionResponse = BaseResponse & {
  /**
   * Collection list
   */
  data?: Array<CollectionListItem>;
};

export type GetCollectionDetailResponse = BaseResponse & {
  /**
   * Collection data
   */
  data?: CollectionDetail;
};

export type CreateConversationRequest = {
  /**
   * Conversation title
   */
  title?: string;
  /**
   * Related content ID
   */
  contentId?: string;
  /**
   * Related link ID
   */
  linkId?: string;
  /**
   * Conversation locale
   */
  locale?: string;
  /**
   * Origin page host
   */
  origin?: string;
  /**
   * Origin page title
   */
  originPageTitle?: string;
  /**
   * Origin page url
   */
  originPageUrl?: string;
};

export type CreateConversationResponse = BaseResponse & {
  /**
   * Created conversation
   */
  data?: ConversationListItem;
};

export type ListConversationResponse = BaseResponse & {
  /**
   * Conversation list
   */
  data?: Array<ConversationListItem>;
};

export type ChatRequest = {
  /**
   * chat task config
   */
  task?: ChatTask;
};

export type GetConversationDetailResponse = BaseResponse & {
  /**
   * Conversation data
   */
  data?: ConversationDetail;
};

export type PingWeblinkResponse = BaseResponse & {
  /**
   * Weblink ping result
   */
  data?: PingWeblinkData;
};

export type StoreWeblinkRequest = {
  /**
   * Weblink list
   */
  data?: Array<WeblinkDTO>;
};

export type ListWeblinkResponse = BaseResponse & {
  /**
   * Weblink list
   */
  data?: Array<WeblinkDTO>;
};

export type ListFeedResponse = BaseResponse & {
  /**
   * Feed list
   */
  data?: Array<Feed>;
};

export type ListDigestRequest = {
  /**
   * Page number
   */
  page?: number;
  /**
   * Page size
   */
  pageSize?: number;
  /**
   * Digest query filter
   */
  filter: {
    /**
     * Date filter
     */
    date?: {
      /**
       * Year
       */
      year?: number;
      /**
       * Month
       */
      month?: number;
      /**
       * Day
       */
      day?: number;
    };
    /**
     * Topic filter
     */
    topic?: string;
  };
};

export type ListDigestResponse = BaseResponse & {
  /**
   * Digest list
   */
  data?: Array<Digest>;
};

export type GetContentDetailResponse = BaseResponse & {
  /**
   * Content data
   */
  data?: ContentDetail;
};

export type UpdateUserSettingsRequest = {
  /**
   * UI locale
   */
  uiLocale?: string;
  /**
   * Output locale
   */
  outputLocale?: string;
};

export type GetUserSettingsResponse = BaseResponse & {
  /**
   * User settings data
   */
  data?: UserSettings;
};

export type ListResourcesData = {
  query?: {
    /**
     * Target collection ID
     */
    collectionId?: string;
    /**
     * Page number
     */
    page?: number;
    /**
     * Page size
     */
    pageSize?: number;
  };
};

export type ListResourcesResponse = ListResourceResponse;

export type ListResourcesError = unknown;

export type GetResourceDetailData = {
  query: {
    /**
     * Resource ID to retrieve
     */
    resourceId: string;
  };
};

export type GetResourceDetailResponse2 = GetResourceDetailResponse;

export type GetResourceDetailError = unknown;

export type UpdateResourceData = {
  /**
   * Resource update request
   */
  body: UpsertResourceRequest;
};

export type UpdateResourceResponse = UpsertResourceResponse;

export type UpdateResourceError = unknown;

export type CreateResourceData = {
  /**
   * Resource creation request
   */
  body: UpsertResourceRequest;
};

export type CreateResourceResponse = UpsertResourceResponse;

export type CreateResourceError = unknown;

export type DeleteResourceData = {
  body: DeleteResourceRequest;
};

export type DeleteResourceResponse = BaseResponse;

export type DeleteResourceError = unknown;

export type ListCollectionsData = {
  query?: {
    /**
     * Page number
     */
    page?: number;
    /**
     * Page size
     */
    pageSize?: number;
  };
};

export type ListCollectionsResponse = ListCollectionResponse;

export type ListCollectionsError = unknown;

export type GetCollectionDetailData = {
  query: {
    /**
     * Collection ID to retrieve
     */
    collectionId: string;
  };
};

export type GetCollectionDetailResponse2 = GetCollectionDetailResponse;

export type GetCollectionDetailError = unknown;

export type UpdateCollectionData = {
  /**
   * Collection update request
   */
  body: UpsertCollectionRequest;
};

export type UpdateCollectionResponse = BaseResponse;

export type UpdateCollectionError = unknown;

export type CreateCollectionData = {
  /**
   * Collection creation request
   */
  body: UpsertCollectionRequest;
};

export type CreateCollectionResponse = BaseResponse;

export type CreateCollectionError = unknown;

export type DeleteCollectionData = {
  body: DeleteCollectionRequest;
};

export type DeleteCollectionResponse = BaseResponse;

export type DeleteCollectionError = unknown;

export type ListConversationsResponse = ListConversationResponse;

export type ListConversationsError = unknown;

export type ChatData = {
  /**
   * Chat request
   */
  body: ChatRequest;
};

export type ChatResponse = string;

export type ChatError = unknown;

export type CreateConversationData = {
  /**
   * Conversation creation request
   */
  body: CreateConversationRequest;
};

export type CreateConversationResponse2 = CreateConversationResponse;

export type CreateConversationError = unknown;

export type GetConversationDetailData = {
  path: {
    /**
     * Conversation ID
     */
    convId: string;
  };
};

export type GetConversationDetailResponse2 = GetConversationDetailResponse;

export type GetConversationDetailError = unknown;

export type PingWeblinkData2 = {
  query: {
    /**
     * Weblink URL
     */
    url: string;
  };
};

export type PingWeblinkResponse2 = PingWeblinkResponse;

export type PingWeblinkError = unknown;

export type StoreWeblinkData = {
  body: StoreWeblinkRequest;
};

export type StoreWeblinkResponse = BaseResponse;

export type StoreWeblinkError = unknown;

export type ListWeblinksData = {
  query?: {
    /**
     * Weblink ID
     */
    linkId?: string;
    /**
     * Page number
     */
    page?: number;
    /**
     * Page size
     */
    pageSize?: number;
    /**
     * Weblink URL
     */
    url?: string;
  };
};

export type ListWeblinksResponse = ListWeblinkResponse;

export type ListWeblinksError = unknown;

export type GetFeedListData = {
  query?: {
    /**
     * Page number
     */
    page?: number;
    /**
     * Page size
     */
    pageSize?: number;
  };
};

export type GetFeedListResponse = ListFeedResponse;

export type GetFeedListError = unknown;

export type GetDigestListData = {
  body: ListDigestRequest;
};

export type GetDigestListResponse = ListDigestResponse;

export type GetDigestListError = unknown;

export type GetContentDetailData = {
  path: {
    /**
     * Content ID
     */
    contentId: string;
  };
};

export type GetContentDetailResponse2 = GetContentDetailResponse;

export type GetContentDetailError = unknown;

export type GetSettingsResponse = UserSettings;

export type GetSettingsError = unknown;

export type UpdateSettingsData = {
  body: UpdateUserSettingsRequest;
};

export type UpdateSettingsResponse = BaseResponse;

export type UpdateSettingsError = unknown;

export type $OpenApiTs = {
  '/knowledge/resource/list': {
    get: {
      req: ListResourcesData;
      res: {
        /**
         * Successful operation
         */
        '200': ListResourceResponse;
      };
    };
  };
  '/knowledge/resource/detail': {
    get: {
      req: GetResourceDetailData;
      res: {
        /**
         * successful operation
         */
        '200': GetResourceDetailResponse;
      };
    };
  };
  '/knowledge/resource/update': {
    post: {
      req: UpdateResourceData;
      res: {
        /**
         * successful operation
         */
        '200': UpsertResourceResponse;
      };
    };
  };
  '/knowledge/resource/new': {
    post: {
      req: CreateResourceData;
      res: {
        /**
         * successful operation
         */
        '200': UpsertResourceResponse;
      };
    };
  };
  '/knowledge/resource/delete': {
    post: {
      req: DeleteResourceData;
      res: {
        /**
         * Successful operation
         */
        '200': BaseResponse;
      };
    };
  };
  '/knowledge/collection/list': {
    get: {
      req: ListCollectionsData;
      res: {
        /**
         * Successful operation
         */
        '200': ListCollectionResponse;
      };
    };
  };
  '/knowledge/collection/detail': {
    get: {
      req: GetCollectionDetailData;
      res: {
        /**
         * successful operation
         */
        '200': GetCollectionDetailResponse;
      };
    };
  };
  '/knowledge/collection/update': {
    post: {
      req: UpdateCollectionData;
      res: {
        /**
         * successful operation
         */
        '200': BaseResponse;
      };
    };
  };
  '/knowledge/collection/new': {
    post: {
      req: CreateCollectionData;
      res: {
        /**
         * successful operation
         */
        '200': BaseResponse;
      };
    };
  };
  '/knowledge/collection/delete': {
    post: {
      req: DeleteCollectionData;
      res: {
        /**
         * Successful operation
         */
        '200': BaseResponse;
      };
    };
  };
  '/conversation/list': {
    get: {
      res: {
        /**
         * successful operation
         */
        '200': ListConversationResponse;
      };
    };
  };
  '/conversation/chat': {
    post: {
      req: ChatData;
      res: {
        /**
         * successful operation
         */
        '200': string;
      };
    };
  };
  '/conversation/new': {
    post: {
      req: CreateConversationData;
      res: {
        /**
         * successful operation
         */
        '200': CreateConversationResponse;
      };
    };
  };
  '/conversation/{convId}': {
    get: {
      req: GetConversationDetailData;
      res: {
        /**
         * successful operation
         */
        '200': GetConversationDetailResponse;
      };
    };
  };
  '/weblink/ping': {
    get: {
      req: PingWeblinkData2;
      res: {
        /**
         * successful operation
         */
        '200': PingWeblinkResponse;
      };
    };
  };
  '/weblink/store': {
    post: {
      req: StoreWeblinkData;
      res: {
        /**
         * successful operation
         */
        '200': BaseResponse;
      };
    };
  };
  '/weblink/list': {
    get: {
      req: ListWeblinksData;
      res: {
        /**
         * successful operation
         */
        '200': ListWeblinkResponse;
      };
    };
  };
  '/aigc/feed': {
    get: {
      req: GetFeedListData;
      res: {
        /**
         * successful operation
         */
        '200': ListFeedResponse;
      };
    };
  };
  '/aigc/digest': {
    post: {
      req: GetDigestListData;
      res: {
        /**
         * successful operation
         */
        '200': ListDigestResponse;
      };
    };
  };
  '/aigc/content/{contentId}': {
    get: {
      req: GetContentDetailData;
      res: {
        /**
         * successful operation
         */
        '200': GetContentDetailResponse;
      };
    };
  };
  '/user/settings': {
    get: {
      res: {
        /**
         * successful operation
         */
        '200': UserSettings;
      };
    };
    put: {
      req: UpdateSettingsData;
      res: {
        /**
         * successful operation
         */
        '200': BaseResponse;
      };
    };
  };
};
