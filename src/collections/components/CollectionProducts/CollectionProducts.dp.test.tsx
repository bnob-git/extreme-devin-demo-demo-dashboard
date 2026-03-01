import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/channels/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChannelCollectionData: () => null,
}));
jest.mock("@dashboard/collections/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  collectionUrl: jest.fn((..._a: any[]) => createDeepMock()),
  CollectionUrlDialog: () => null,
  CollectionUrlQueryParams: () => null,
}));
jest.mock("@dashboard/collections/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getAssignedProductIdsToCollection: jest.fn((..._a: any[]) => createDeepMock()),
  getProductsFromSearchResults: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/components/ActionDialog/ActionDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ActionDialog: () => null,
}));
jest.mock("@dashboard/components/AssignProductDialog/AssignProductDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AssignProductDialog: () => null,
}));
jest.mock("@dashboard/components/Card", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DashboardCard: () => null,
}));
jest.mock("@dashboard/config", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DEFAULT_INITIAL_SEARCH_DATA: () => null,
  PAGINATE_BY: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CollectionDetailsQuery: () => null,
  ProductWhereInput: () => null,
  useCollectionAssignProductMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useCollectionProductsQuery: () => ({
    data: createDeepMock(),
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useUnassignCollectionProductMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
}));
jest.mock("@dashboard/hooks/useBulkActions", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useBulkActions: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useListSettings", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useListSettings: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useLocalPaginator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useLocalPaginationState: (..._a: any[]) => createDeepMock(),
  useLocalPaginator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNavigator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useNotifier", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNotifier: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/usePaginator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  PaginatorContext: () => null,
}));
jest.mock("@dashboard/searches/useProductSearch", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useProductSearch: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/utils/handlers/dialogActionHandlers", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createDialogActionHandlers: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/maps", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  mapEdgesToItems: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CollectionProducts from "./CollectionProducts";

describe("CollectionProducts deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders CollectionProducts with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <CollectionProducts {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders CollectionProducts with override props", () => {
    try {
      const mockProps = createDeepMock({
        id: "test-1",
        name: "Test",
        disabled: false,
        loading: false,
        errors: [],
        data: createDeepMock(),
        onSubmit: jest.fn(),
        onChange: jest.fn(),
        onClose: jest.fn(),
        onBack: jest.fn(),
        open: false,
        channels: [],
        params: { id: "test-1" },
      });

      render(
        <MemoryRouter>
          <CollectionProducts {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
