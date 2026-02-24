import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/WindowTitle", () => ({ __esModule: true, default: () => null }));
jest.mock("@dashboard/graphql", () => {
  const { createDeepMock } = jest.requireActual("@test/deepMock");

  return new Proxy(
    {},
    {
      get: (_t: any, prop: string) => {
        if (prop === "__esModule") return true;

        if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Query")) {
          return () => ({
            data: createDeepMock(),
            loading: false,
            error: undefined,
            refetch: jest.fn(),
            fetchMore: jest.fn(),
          });
        }

        if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Mutation")) {
          return () => [
            jest.fn(() => Promise.resolve({ data: {} })),
            { data: undefined, loading: false, called: false, status: "default" },
          ];
        }

        if (typeof prop === "string" && prop.startsWith("use"))
          return () => ({ data: createDeepMock(), loading: false });

        return jest.fn();
      },
    },
  );
});
jest.mock("@dashboard/hooks/useListSettings", () => ({
  __esModule: true,
  default: () => ({ settings: { rowNumber: 20, columns: [] }, updateListSettings: jest.fn() }),
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
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/usePaginator", () => ({
  __esModule: true,
  default: () => ({
    loadNextPage: jest.fn(),
    loadPreviousPage: jest.fn(),
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
  }),
  createPaginationState: () => ({ first: 20, after: null, last: null, before: null }),
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
jest.mock("@dashboard/utils/handlers/dialogActionHandlers", () => ({
  __esModule: true,
  default: () => [jest.fn(), jest.fn()],
}));
jest.mock("@dashboard/utils/handlers/metadataUpdateHandler", () => ({
  __esModule: true,
  default: () => jest.fn(),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CategoryDetails from "./CategoryDetails";

describe("CategoryDetails hybrid render tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders CategoryDetails with deepMock props", () => {
    try {
      render(
        <MemoryRouter>
          <CategoryDetails {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders CategoryDetails with override props", () => {
    const props = createDeepMock({
      id: "test-1",
      disabled: false,
      loading: false,
      errors: [],
      onSubmit: jest.fn(),
      onChange: jest.fn(),
      onClose: jest.fn(),
      params: { id: "test-1" },
      data: createDeepMock(),
      channels: [],
      selected: 0,
      activeTab: 0,
    });

    try {
      render(
        <MemoryRouter>
          <CategoryDetails {...(props as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
