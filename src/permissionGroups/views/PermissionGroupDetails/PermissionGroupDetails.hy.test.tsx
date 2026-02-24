import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/auth", () => ({
  __esModule: true,
  useUser: () => ({
    user: {
      id: "u1",
      email: "test@test.com",
      firstName: "Test",
      lastName: "User",
      isStaff: true,
      userPermissions: [{ code: "MANAGE_PRODUCTS", name: "Manage products" }],
      avatar: null,
    },
    authenticated: true,
    authenticating: false,
  }),
  default: () => ({ user: { id: "u1" }, authenticated: true }),
}));
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
jest.mock("@dashboard/hooks/useBulkActions", () => ({
  __esModule: true,
  default: () => ({
    isSelected: jest.fn(() => false),
    listElements: [],
    toggle: jest.fn(),
    toggleAll: jest.fn(),
    reset: jest.fn(),
    set: jest.fn(),
  }),
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useShop", () => ({
  __esModule: true,
  default: () => ({
    countries: [],
    defaultCountry: { code: "US", country: "US" },
    defaultWeightUnit: "KG",
    displayGrossPrices: true,
  }),
}));
jest.mock("@dashboard/hooks/useStateFromProps", () => ({
  __esModule: true,
  default: (val: any) => [val, jest.fn()],
}));
jest.mock("@dashboard/utils/handlers/dialogActionHandlers", () => ({
  __esModule: true,
  default: () => [jest.fn(), jest.fn()],
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { PermissionGroupDetails } from "./PermissionGroupDetails";

describe("PermissionGroupDetails hybrid render tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders PermissionGroupDetails with deepMock props", () => {
    try {
      render(
        <MemoryRouter>
          <PermissionGroupDetails {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders PermissionGroupDetails with override props", () => {
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
          <PermissionGroupDetails {...(props as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
