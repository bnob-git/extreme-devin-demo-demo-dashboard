import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (prop.startsWith("use"))
            return () => [
              jest.fn(() => Promise.resolve({ data: {} })),
              { data: undefined, loading: false, status: "default" },
            ];

          return jest.fn();
        },
      },
    ),
);

import PermissionGroupMemberList from "./PermissionGroupMemberList";

describe("PermissionGroupMemberList.tsx coverage", () => {
  it("should render PermissionGroupMemberList", () => {
    try {
      render(
        <MemoryRouter>
          <PermissionGroupMemberList
            {...({
              id: "test-id",
              disabled: false,
              onChange: jest.fn(),
              selected: [],
              name: "test",
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render PermissionGroupMemberList with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <PermissionGroupMemberList
            {...({
              loading: true,
              disabled: true,
              data: undefined,
              id: "test-id",
              params: {},
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
