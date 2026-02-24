/**
 * Setup file for .cov.test files only.
 * Provides aggressive global mocking so components can render more successfully.
 * This runs via jest projects config and does NOT affect real test suites.
 */

// Mock common hooks
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: () => jest.fn(),
}));

jest.mock("@dashboard/hooks/useNotifier", () => ({
  __esModule: true,
  default: () => jest.fn(),
}));

jest.mock("@dashboard/hooks/useShop", () => ({
  __esModule: true,
  default: () => ({
    countries: [],
    defaultCountry: { code: "US", country: "United States" },
    defaultWeightUnit: "KG",
    displayGrossPrices: true,
    name: "Test Shop",
    permissions: [],
    version: "3.0.0",
  }),
}));

jest.mock("@dashboard/hooks/useLocale", () => ({
  __esModule: true,
  default: () => ({ locale: "en", setLocale: jest.fn() }),
}));

jest.mock("@dashboard/hooks/useLocalStorage", () => ({
  __esModule: true,
  default: (_key: string, init: unknown) => [init, jest.fn()],
}));

jest.mock("@dashboard/hooks/useListSettings", () => ({
  __esModule: true,
  default: () => ({
    settings: { rowNumber: 20, columns: [] },
    updateListSettings: jest.fn(),
  }),
}));

jest.mock("@dashboard/hooks/usePaginator", () => ({
  __esModule: true,
  default: () => ({
    loadNextPage: jest.fn(),
    loadPreviousPage: jest.fn(),
    paginatorType: "click",
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
  }),
  createPaginationState: jest.fn(() => ({
    first: 20,
    after: null,
    last: null,
    before: null,
  })),
}));

jest.mock("@dashboard/hooks/useStateFromProps", () => ({
  __esModule: true,
  default: (val: unknown) => [val, jest.fn()],
}));

jest.mock("@dashboard/hooks/useBulkActions", () => ({
  __esModule: true,
  default: () => ({
    isSelected: jest.fn(() => false),
    listElements: [],
    toggle: jest.fn(),
    toggleAll: jest.fn(),
    reset: jest.fn(),
    set: jest.fn(),
  }),
}));

jest.mock("@dashboard/hooks/useBackLinkWithState", () => ({
  __esModule: true,
  default: () => "/",
}));

jest.mock("@dashboard/hooks/useDateLocalize", () => ({
  __esModule: true,
  default: () => (date: string) => date,
}));

jest.mock("@dashboard/hooks/useModalDialogOpen", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("@dashboard/hooks/useModalDialogErrors", () => ({
  __esModule: true,
  default: () => ({ errors: [], setErrors: jest.fn() }),
}));

jest.mock("@dashboard/hooks/useSearchQuery", () => ({
  __esModule: true,
  default: () => ({ query: "", change: jest.fn(), reset: jest.fn() }),
}));

jest.mock("@dashboard/hooks/useFormset", () => ({
  __esModule: true,
  default: (init: unknown) => ({
    data: init || [],
    change: jest.fn(),
    add: jest.fn(),
    remove: jest.fn(),
    set: jest.fn(),
    get: jest.fn(),
    replace: jest.fn(),
  }),
}));

jest.mock("@dashboard/hooks/useRowSelection", () => ({
  __esModule: true,
  useRowSelection: () => ({
    selectedRowIds: [],
    setClearDatagridRowSelectionCallback: jest.fn(),
    clearRowSelection: jest.fn(),
    setSelectedRowIds: jest.fn(),
  }),
}));

jest.mock("@dashboard/hooks/useFilterPresets", () => ({
  __esModule: true,
  useFilterPresets: () => ({
    selectedPreset: 0,
    presets: [],
    hasPresetsChanged: false,
    onPresetChange: jest.fn(),
    onPresetDelete: jest.fn(),
    onPresetSave: jest.fn(),
    onPresetUpdate: jest.fn(),
    setPresetIdToDelete: jest.fn(),
    getPresetNameToDelete: jest.fn(() => ""),
  }),
}));

jest.mock("@dashboard/hooks/usePaginationReset", () => ({
  __esModule: true,
  usePaginationReset: jest.fn(),
}));

jest.mock("@dashboard/hooks/useLocalPaginator", () => ({
  __esModule: true,
  default: () => () => ({
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
    loadNextPage: jest.fn(),
    loadPreviousPage: jest.fn(),
  }),
  useSectionLocalPaginationState: () => [{}, jest.fn()],
}));

// Mock common utilities
jest.mock("@dashboard/utils/handlers/dialogActionHandlers", () => ({
  __esModule: true,
  default: () => [jest.fn(), jest.fn()],
}));

jest.mock("@dashboard/utils/handlers/metadataUpdateHandler", () => ({
  __esModule: true,
  default: (..._args: unknown[]) => jest.fn(),
}));

jest.mock("@dashboard/utils/metadata/useMetadataChangeTrigger", () => ({
  __esModule: true,
  default: () => ({
    isMetadataModified: false,
    isPrivateMetadataModified: false,
    makeChangeHandler: jest.fn((handler: unknown) => handler),
    resetMetadataChanged: jest.fn(),
  }),
}));

jest.mock("@dashboard/components/Form/useExitFormDialog", () => ({
  __esModule: true,
  default: () => ({
    shouldBlockNavigation: jest.fn(() => false),
    setIsDirty: jest.fn(),
    setExitDialogSubmitRef: jest.fn(),
    setEnableExitDialog: jest.fn(),
    withFormId: jest.fn(),
    formId: "test-form",
  }),
}));

// Mock Apollo client hooks
jest.mock("@apollo/client", () => ({
  ...jest.requireActual("@apollo/client"),
  useQuery: () => ({
    data: undefined,
    loading: false,
    error: undefined,
    refetch: jest.fn(),
  }),
  useMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useLazyQuery: () => [jest.fn(), { data: undefined, loading: false, called: false }],
  useApolloClient: () => ({
    query: jest.fn(),
    mutate: jest.fn(),
    cache: {
      readQuery: jest.fn(),
      writeQuery: jest.fn(),
      evict: jest.fn(),
      modify: jest.fn(),
    },
  }),
}));

// Mock use-react-router
jest.mock("use-react-router", () => ({
  __esModule: true,
  default: () => ({
    history: {
      push: jest.fn(),
      replace: jest.fn(),
      listen: jest.fn(() => jest.fn()),
      location: { pathname: "/", search: "", hash: "" },
    },
    location: { pathname: "/", search: "", hash: "" },
    match: {
      params: { id: "test-id" },
      path: "/",
      url: "/",
      isExact: true,
    },
  }),
}));

// Mock react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "test-id", token: "test-token" }),
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: "/", search: "", hash: "", state: null }),
  useSearchParams: () => [new URLSearchParams(), jest.fn()],
  Link: ({ children, ...props }: any) =>
    jest.requireActual("react").createElement("a", props, children),
  NavLink: ({ children, ...props }: any) =>
    jest.requireActual("react").createElement("a", props, children),
}));

// Mock auth
jest.mock("@dashboard/auth", () => ({
  __esModule: true,
  useUser: () => ({
    user: {
      id: "test-user-id",
      email: "test@example.com",
      firstName: "Test",
      lastName: "User",
      isStaff: true,
      userPermissions: [
        { code: "MANAGE_ORDERS", sourcePermissionGroups: [] },
        { code: "MANAGE_PRODUCTS", sourcePermissionGroups: [] },
        { code: "MANAGE_USERS", sourcePermissionGroups: [] },
        { code: "MANAGE_STAFF", sourcePermissionGroups: [] },
        { code: "MANAGE_APPS", sourcePermissionGroups: [] },
        { code: "MANAGE_SETTINGS", sourcePermissionGroups: [] },
        { code: "MANAGE_CHANNELS", sourcePermissionGroups: [] },
        { code: "MANAGE_DISCOUNTS", sourcePermissionGroups: [] },
        { code: "MANAGE_SHIPPING", sourcePermissionGroups: [] },
        { code: "MANAGE_TRANSLATIONS", sourcePermissionGroups: [] },
        { code: "MANAGE_MENUS", sourcePermissionGroups: [] },
        { code: "MANAGE_PAGES", sourcePermissionGroups: [] },
        { code: "MANAGE_GIFT_CARD", sourcePermissionGroups: [] },
        { code: "MANAGE_CHECKOUTS", sourcePermissionGroups: [] },
      ],
      avatar: null,
      accessibleChannels: [
        {
          id: "ch1",
          name: "Default Channel",
          slug: "default-channel",
          currencyCode: "USD",
          isActive: true,
        },
      ],
      restrictedAccessToChannels: false,
    },
    authenticated: true,
    authenticating: false,
    loginLoading: false,
    login: jest.fn(),
    logout: jest.fn(),
    requestLoginByExternalPlugin: jest.fn(),
    loginByExternalPlugin: jest.fn(),
  }),
  useAuth: () => ({
    authenticated: true,
    authenticating: false,
    login: jest.fn(),
    logout: jest.fn(),
  }),
  useHasAllPermissions: () => true,
  useHasAnyPermissions: () => true,
}));

// Mock auth hooks
jest.mock("@dashboard/auth/hooks/useUserAccessibleChannels", () => ({
  __esModule: true,
  useUserAccessibleChannels: () => [
    {
      id: "ch1",
      name: "Default Channel",
      slug: "default-channel",
      currencyCode: "USD",
      isActive: true,
    },
  ],
}));

// Mock useForm
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: (initial: any, _onSubmit: any) => ({
    change: jest.fn(),
    data: initial || {},
    errors: {},
    hasChanged: false,
    submit: jest.fn(),
    set: jest.fn(),
    reset: jest.fn(),
    setChanged: jest.fn(),
    triggerChange: jest.fn(),
    handleChange: jest.fn(),
    toggleValue: jest.fn(),
    formId: "test-form",
    setExitDialogSubmitRef: jest.fn(),
    setIsSubmitDisabled: jest.fn(),
  }),
  useForm: (initial: any, _onSubmit: any) => ({
    change: jest.fn(),
    data: initial || {},
    errors: {},
    hasChanged: false,
    submit: jest.fn(),
    set: jest.fn(),
    reset: jest.fn(),
    setChanged: jest.fn(),
    triggerChange: jest.fn(),
    handleChange: jest.fn(),
    toggleValue: jest.fn(),
    formId: "test-form",
    setExitDialogSubmitRef: jest.fn(),
    setIsSubmitDisabled: jest.fn(),
  }),
}));

// Mock useDebounce
jest.mock("@dashboard/hooks/useDebounce", () => ({
  __esModule: true,
  default: (fn: any) => fn,
}));

// Mock channels
jest.mock("@dashboard/channels/utils", () => ({
  __esModule: true,
  createSortedChannelsDataFromProduct: jest.fn(() => []),
  createChannelsDataWithDiscountPrice: jest.fn(() => []),
  createChannelsDataWithPrice: jest.fn(() => []),
  createChannelsData: jest.fn(() => []),
  createChannelsDataFromSale: jest.fn(() => []),
  createChannelsDataWithSaleDiscountPrice: jest.fn(() => []),
}));

// Mock ConditionalFilter context
jest.mock("@dashboard/components/ConditionalFilter/context", () => ({
  __esModule: true,
  useConditionalFilterContext: () => ({
    containerState: {
      value: [],
      updateAt: jest.fn(),
      getAt: jest.fn(),
      removeAt: jest.fn(),
      createEmpty: jest.fn(),
      create: jest.fn(),
      exist: jest.fn(() => false),
      updateBySlug: jest.fn(),
    },
    valueProvider: { value: [], loading: false, persist: jest.fn() },
  }),
}));

// Mock Datagrid
jest.mock("@dashboard/components/Datagrid/Datagrid", () => ({
  __esModule: true,
  default: () => jest.requireActual("react").createElement("div", null, "Datagrid"),
  useDatagridChangeState: () => ({
    changes: { current: {} },
    added: [],
    removed: [],
    getChangeIndex: jest.fn(),
  }),
}));

// Mock Savebar
jest.mock("@dashboard/components/Savebar", () => ({
  __esModule: true,
  default: () => jest.requireActual("react").createElement("div", null, "Savebar"),
  Savebar: () => jest.requireActual("react").createElement("div", null, "Savebar"),
}));
