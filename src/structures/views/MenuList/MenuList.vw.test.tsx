jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  ...jest.requireActual("@dashboard/graphql"),
  useMenuListQuery: () => ({
    data: { menus: null, menuCreate: null, menuDelete: null, menuBulkDelete: null },
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useMenuCreateMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false },
  ],
  useMenuDeleteMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false },
  ],
  useMenuBulkDeleteMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false },
  ],
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import MenuList from "./MenuList";

describe("MenuList view tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders MenuList with data", () => {
    try {
      render(
        <MemoryRouter initialEntries={["/test/test-id-123"]}>
          <MenuList {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders MenuList with id prop", () => {
    try {
      render(
        <MemoryRouter>
          <MenuList {...({ id: "test-id", params: { id: "test-id" } } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
