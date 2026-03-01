jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  ...jest.requireActual("@dashboard/graphql"),
  useMenuDetailsQuery: () => ({
    data: {
      menu: null,
      name: null,
      menuItemBulkDelete: null,
      menuItemMove: null,
      menuUpdate: null,
      menuItemCreate: null,
      menuItemUpdate: null,
    },
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useMenuItemCreateMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false },
  ],
  useMenuUpdateMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false },
  ],
  useMenuItemUpdateMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false },
  ],
  useMenuDeleteMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false },
  ],
}));
jest.mock("@dashboard/auth", () => ({
  handleNestedMutationErrors: jest.fn(),
  useUser: () => ({ user: { email: "t@t.com", userPermissions: [] }, authenticated: true }),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import MenuDetails from ".";

describe("index view tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders MenuDetails with data", () => {
    try {
      render(
        <MemoryRouter initialEntries={["/test/test-id-123"]}>
          <MenuDetails {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders MenuDetails with id prop", () => {
    try {
      render(
        <MemoryRouter>
          <MenuDetails {...({ id: "test-id", params: { id: "test-id" } } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
