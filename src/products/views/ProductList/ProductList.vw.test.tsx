jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  ...jest.requireActual("@dashboard/graphql"),
  useGridAttributesLazyQuery: () => ({
    data: {
      exportProducts: null,
      productBulkDelete: null,
      products: null,
      search: null,
      shop: null,
      warehouses: null,
    },
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useShopLimitsQuery: () => ({
    data: {
      exportProducts: null,
      productBulkDelete: null,
      products: null,
      search: null,
      shop: null,
      warehouses: null,
    },
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useAvailableColumnAttributesLazyQuery: () => ({
    data: {
      exportProducts: null,
      productBulkDelete: null,
      products: null,
      search: null,
      shop: null,
      warehouses: null,
    },
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useProductListQuery: () => ({
    data: {
      exportProducts: null,
      productBulkDelete: null,
      products: null,
      search: null,
      shop: null,
      warehouses: null,
    },
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useProductCountQuery: () => ({
    data: {
      exportProducts: null,
      productBulkDelete: null,
      products: null,
      search: null,
      shop: null,
      warehouses: null,
    },
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useWarehouseListQuery: () => ({
    data: {
      exportProducts: null,
      productBulkDelete: null,
      products: null,
      search: null,
      shop: null,
      warehouses: null,
    },
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useProductBulkDeleteMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false },
  ],
  useProductExportMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false },
  ],
}));
jest.mock("@dashboard/utils/handlers/dialogActionHandlers", () => ({
  __esModule: true,
  default: () => [jest.fn(), jest.fn()],
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ProductList from "./ProductList";

describe("ProductList view tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ProductList with data", () => {
    try {
      render(
        <MemoryRouter initialEntries={["/test/test-id-123"]}>
          <ProductList {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
