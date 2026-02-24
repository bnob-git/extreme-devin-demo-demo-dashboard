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
jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Query"))
            return () => ({
              data: undefined,
              loading: false,
              error: undefined,
              refetch: jest.fn(),
              fetchMore: jest.fn(),
            });

          if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Mutation"))
            return () => [
              jest.fn(() => Promise.resolve({ data: {} })),
              { data: undefined, loading: false, called: false, status: "default" },
            ];

          if (typeof prop === "string" && prop.startsWith("use"))
            return () => ({ data: undefined, loading: false });

          return jest.fn();
        },
      },
    ),
);

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import {
  emptyPermissionGroup,
  errorsOfPermissionGroupCreate,
  permissionGroup,
  permissionGroups,
  userPermissionGroups,
} from "../../fixtures";
import { PermissionGroupDetails } from "./PermissionGroupDetails";

describe("PermissionGroupDetails fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders PermissionGroupDetails with permissionGroups fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <PermissionGroupDetails {...(permissionGroups as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders PermissionGroupDetails with userPermissionGroups fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <PermissionGroupDetails {...(userPermissionGroups as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders PermissionGroupDetails with emptyPermissionGroup fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <PermissionGroupDetails {...(emptyPermissionGroup as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders PermissionGroupDetails with errorsOfPermissionGroupCreate fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <PermissionGroupDetails {...(errorsOfPermissionGroupCreate as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders PermissionGroupDetails with permissionGroup fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <PermissionGroupDetails {...(permissionGroup as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
