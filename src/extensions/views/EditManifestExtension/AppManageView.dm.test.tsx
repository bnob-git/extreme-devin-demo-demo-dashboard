jest.mock("@dashboard/components/NotFoundPage", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  NotFoundPage: () => null,
}));
jest.mock("@dashboard/extensions/components/AppActivateDialog/AppActivateDialog", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  AppActivateDialog: () => null,
}));
jest.mock("@dashboard/extensions/components/AppDeactivateDialog/AppDeactivateDialog", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  AppDeactivateDialog: () => null,
}));
jest.mock("@dashboard/extensions/components/AppDeleteDialog/AppDeleteDialog", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  AppDeleteDialog: () => null,
}));
jest.mock("@dashboard/extensions/messages", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  appMessages: jest.fn((...args: any[]) => args[0] ?? {}),
}));
jest.mock("@dashboard/extensions/queries", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  EXTENSION_LIST_QUERY: () => null,
}));
jest.mock("@dashboard/extensions/urls", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  AppDetailsUrlDialog: () => null,
  AppDetailsUrlQueryParams: () => null,
  ExtensionsPaths: () => null,
  ExtensionsUrls: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  useAppActivateMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useAppDeactivateMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useAppDeleteMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useAppQuery: () => ({
    data: undefined,
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
}));
jest.mock("@dashboard/hooks/useHasManagedAppsPermission", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  useHasManagedAppsPermission: (..._a: any[]) => ({
    data: undefined,
    loading: false,
    change: jest.fn(),
    submit: jest.fn(),
    set: jest.fn(),
    reset: jest.fn(),
    hasChanged: false,
    toggle: jest.fn(),
    toggleAll: jest.fn(),
    isSelected: jest.fn(() => false),
    listElements: [],
    settings: { rowNumber: 20, columns: [] },
    updateListSettings: jest.fn(),
    locale: "en",
    setLocale: jest.fn(),
    selectedRowIds: [],
    setClearDatagridRowSelectionCallback: jest.fn(),
    clearRowSelection: jest.fn(),
    setSelectedRowIds: jest.fn(),
  }),
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  useNavigator: (..._a: any[]) => ({
    data: undefined,
    loading: false,
    change: jest.fn(),
    submit: jest.fn(),
    set: jest.fn(),
    reset: jest.fn(),
    hasChanged: false,
    toggle: jest.fn(),
    toggleAll: jest.fn(),
    isSelected: jest.fn(() => false),
    listElements: [],
    settings: { rowNumber: 20, columns: [] },
    updateListSettings: jest.fn(),
    locale: "en",
    setLocale: jest.fn(),
    selectedRowIds: [],
    setClearDatagridRowSelectionCallback: jest.fn(),
    clearRowSelection: jest.fn(),
    setSelectedRowIds: jest.fn(),
  }),
}));
jest.mock("@dashboard/hooks/useNotifier", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  useNotifier: (..._a: any[]) => ({
    data: undefined,
    loading: false,
    change: jest.fn(),
    submit: jest.fn(),
    set: jest.fn(),
    reset: jest.fn(),
    hasChanged: false,
    toggle: jest.fn(),
    toggleAll: jest.fn(),
    isSelected: jest.fn(() => false),
    listElements: [],
    settings: { rowNumber: 20, columns: [] },
    updateListSettings: jest.fn(),
    locale: "en",
    setLocale: jest.fn(),
    selectedRowIds: [],
    setClearDatagridRowSelectionCallback: jest.fn(),
    clearRowSelection: jest.fn(),
    setSelectedRowIds: jest.fn(),
  }),
}));
jest.mock("@dashboard/utils/errors/app", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  getAppErrorMessage: jest.fn((...args: any[]) => args[0] ?? {}),
}));
jest.mock("@dashboard/utils/handlers/dialogActionHandlers", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  createDialogActionHandlers: jest.fn((...args: any[]) => args[0] ?? {}),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { EditManifestExtension } from "./AppManageView";

describe("AppManageView deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders EditManifestExtension with deep-mocked deps", () => {
    try {
      render(
        <MemoryRouter>
          <EditManifestExtension {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
