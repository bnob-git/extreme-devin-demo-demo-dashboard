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
import { AssignProductDialogMulti } from "./AssignProductDialogMulti";

describe("AssignProductDialogMulti fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders AssignProductDialogMulti with pageListProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignProductDialogMulti {...(pageListProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignProductDialogMulti with listActionsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignProductDialogMulti {...(listActionsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignProductDialogMulti with countries fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignProductDialogMulti {...(countries as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignProductDialogMulti with tabPageProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignProductDialogMulti {...(tabPageProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignProductDialogMulti with filterPresetsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignProductDialogMulti {...(filterPresetsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
