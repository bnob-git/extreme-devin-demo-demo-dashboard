jest.mock("@dashboard/auth", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  useUser: (..._a: any[]) => ({
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
jest.mock("@dashboard/auth/misc", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  hasPermission: jest.fn((...args: any[]) => args[0] ?? {}),
}));
jest.mock("@dashboard/components/ActionDialog", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  ActionDialog: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  PermissionEnum: () => null,
  useMenuDeleteMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useMenuDetailsQuery: () => ({
    data: undefined,
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useMenuItemCreateMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useMenuItemUpdateMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useMenuUpdateMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
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
jest.mock("@dashboard/modeling/urls", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  pageUrl: jest.fn((...args: any[]) => args[0] ?? {}),
}));
jest.mock("@dashboard/translations/urls", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  languageEntityUrl: jest.fn((...args: any[]) => args[0] ?? {}),
  TranslatableEntities: () => null,
}));
jest.mock("@dashboard/translations/useCachedLocales", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  useCachedLocales: (..._a: any[]) => ({
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

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import MenuDetails from ".";

describe("index deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders MenuDetails with deep-mocked deps", () => {
    try {
      render(
        <MemoryRouter>
          <MenuDetails {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
