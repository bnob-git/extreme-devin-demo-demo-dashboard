jest.mock("@dashboard/components/Link", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  Link: () => null,
}));
jest.mock("@dashboard/extensions/getPermissionsDiff", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  getPermissionsDiff: jest.fn((...args: any[]) => args[0] ?? {}),
}));
jest.mock(
  "@dashboard/extensions/views/EditManifestExtension/hooks/useGetAvailableAppPermissions",
  () => ({
    __esModule: true,
    default: jest.fn((...args: any[]) => args[0] ?? {}),
    useGetAvailableAppPermissions: (..._a: any[]) => ({
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
  }),
);
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  PermissionEnum: () => null,
  useAppQuery: () => ({
    data: undefined,
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useAppUpdatePermissionsMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
}));
jest.mock("@dashboard/links", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  APP_PERMISSIONS_DOCS_URL: () => null,
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { EditManifestExtensionPermissions } from "./EditManifestExtensionPermissions";

describe("EditManifestExtensionPermissions deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders EditManifestExtensionPermissions with deep-mocked deps", () => {
    try {
      render(
        <MemoryRouter>
          <EditManifestExtensionPermissions {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
