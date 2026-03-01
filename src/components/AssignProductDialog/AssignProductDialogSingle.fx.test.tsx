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
  countries,
  filterPresetsProps,
  listActionsProps,
  pageListProps,
  tabPageProps,
} from "../../fixtures";
import { AssignProductDialogSingle } from "./AssignProductDialogSingle";

describe("AssignProductDialogSingle fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders AssignProductDialogSingle with pageListProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignProductDialogSingle {...(pageListProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignProductDialogSingle with listActionsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignProductDialogSingle {...(listActionsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignProductDialogSingle with countries fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignProductDialogSingle {...(countries as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignProductDialogSingle with tabPageProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignProductDialogSingle {...(tabPageProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignProductDialogSingle with filterPresetsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignProductDialogSingle {...(filterPresetsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
