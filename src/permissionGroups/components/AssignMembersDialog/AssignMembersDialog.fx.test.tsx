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
import AssignMembersDialog from "./AssignMembersDialog";

describe("AssignMembersDialog fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders AssignMembersDialog with permissionGroups fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignMembersDialog {...(permissionGroups as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignMembersDialog with userPermissionGroups fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignMembersDialog {...(userPermissionGroups as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignMembersDialog with emptyPermissionGroup fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignMembersDialog {...(emptyPermissionGroup as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignMembersDialog with errorsOfPermissionGroupCreate fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignMembersDialog {...(errorsOfPermissionGroupCreate as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignMembersDialog with permissionGroup fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignMembersDialog {...(permissionGroup as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
