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
