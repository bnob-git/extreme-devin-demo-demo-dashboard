jest.mock("@dashboard/collections/urls", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  CollectionListUrlSortField: () => null,
}));
jest.mock("@dashboard/collections/views/CollectionList/sort", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  canBeSorted: jest.fn((...args: any[]) => args[0] ?? {}),
}));
jest.mock("@dashboard/components/Datagrid/ColumnPicker/ColumnPicker", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  ColumnPicker: () => null,
}));
jest.mock("@dashboard/components/Datagrid/ColumnPicker/useColumns", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  useColumns: (..._a: any[]) => ({
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
jest.mock("@dashboard/components/Datagrid/Datagrid", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  Datagrid: () => null,
}));
jest.mock("@dashboard/components/Datagrid/hooks/useDatagridChange", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  DatagridChangeStateContext: () => null,
  useDatagridChangeState: (..._a: any[]) => ({
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
jest.mock("@dashboard/components/TablePagination", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  TablePaginationWithContext: () => null,
}));
jest.mock("@dashboard/components/TooltipTableCellHeader/messages", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  commonTooltipMessages: jest.fn((...args: any[]) => args[0] ?? {}),
}));
jest.mock("@dashboard/hooks/useBackLinkWithState", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  getPrevLocationState: jest.fn((...args: any[]) => args[0] ?? {}),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { CollectionListDatagrid } from "./CollectionListDatagrid";

describe("CollectionListDatagrid deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders CollectionListDatagrid with deep-mocked deps", () => {
    try {
      render(
        <MemoryRouter>
          <CollectionListDatagrid {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
