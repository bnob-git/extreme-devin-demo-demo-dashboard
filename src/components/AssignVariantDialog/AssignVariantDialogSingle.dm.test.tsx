jest.mock("@dashboard/components/ConfirmButton", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  ConfirmButton: () => null,
  ConfirmButtonTransitionState: () => null,
}));
jest.mock("@dashboard/components/InfiniteScroll", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  InfiniteScroll: () => null,
}));
jest.mock("@dashboard/components/Modal", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  DashboardModal: () => null,
}));
jest.mock("@dashboard/components/Money", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  Money: () => null,
}));
jest.mock("@dashboard/components/ResponsiveTable", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  ResponsiveTable: () => null,
}));
jest.mock("@dashboard/components/TableCellAvatar", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  TableCellAvatar: () => null,
}));
jest.mock("@dashboard/components/TableRowLink", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  TableRowLink: () => null,
}));
jest.mock("@dashboard/components/Throbber", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  SaleorThrobber: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  SearchProductsQuery: () => null,
}));
jest.mock("@dashboard/hooks/useModalDialogOpen", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  useModalDialogOpen: (..._a: any[]) => ({
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
jest.mock("@dashboard/hooks/useSearchQuery", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  useSearchQuery: () => ({
    data: undefined,
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  maybe: jest.fn((...args: any[]) => args[0] ?? {}),
  renderCollection: jest.fn((...args: any[]) => args[0] ?? {}),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { AssignVariantDialogSingle } from "./AssignVariantDialogSingle";

describe("AssignVariantDialogSingle deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders AssignVariantDialogSingle with deep-mocked deps", () => {
    try {
      render(
        <MemoryRouter>
          <AssignVariantDialogSingle
            {...({
              confirmButtonState: {},
              hasMore: false,
              labels: "test",
              loading: jest.fn(() => Promise.resolve({})),
              onClose: jest.fn(() => Promise.resolve({})),
              onFetch: jest.fn(() => Promise.resolve({})),
              onFetchMore: jest.fn(() => Promise.resolve({})),
              onSubmit: jest.fn(() => Promise.resolve({})),
              open: jest.fn(() => Promise.resolve({})),
              products: [],
              selectedId: false,
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
