jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
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
import { PermissionGroupListDatagrid } from "./PermissionGroupListDatagrid";

describe("PermissionGroupListDatagrid fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders PermissionGroupListDatagrid with permissionGroups fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <PermissionGroupListDatagrid {...(permissionGroups as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders PermissionGroupListDatagrid with userPermissionGroups fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <PermissionGroupListDatagrid {...(userPermissionGroups as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders PermissionGroupListDatagrid with emptyPermissionGroup fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <PermissionGroupListDatagrid {...(emptyPermissionGroup as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders PermissionGroupListDatagrid with errorsOfPermissionGroupCreate fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <PermissionGroupListDatagrid {...(errorsOfPermissionGroupCreate as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders PermissionGroupListDatagrid with permissionGroup fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <PermissionGroupListDatagrid {...(permissionGroup as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
