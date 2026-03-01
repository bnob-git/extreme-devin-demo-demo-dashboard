// Auto-generated RTL render test
const { createDeepMock } = jest.requireActual("@test/deepMock");

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
              data: createDeepMock(),
              loading: false,
              error: undefined,
              refetch: jest.fn(),
              fetchMore: jest.fn(),
            });

          if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Mutation"))
            return () => [
              jest.fn(() => Promise.resolve({ data: {} })),
              { data: undefined, loading: false, called: false },
            ];

          if (typeof prop === "string" && prop.startsWith("use"))
            return () => ({ data: createDeepMock(), loading: false });

          return prop;
        },
      },
    ),
);

jest.mock("@dashboard/hooks/useModalDialogOpen", () => ({
  __esModule: true,
  default: () => createDeepMock(),
  useModalDialogOpen: () => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useSearchQuery", () => ({
  __esModule: true,
  default: () => createDeepMock(),
  useSearchQuery: () => createDeepMock(),
}));
jest.mock(
  "@dashboard/misc",
  () =>
    new Proxy(
      {},
      {
        get: (_: any, p: string) => {
          if (p === "__esModule") return true;

          if (/^use/.test(p)) return () => createDeepMock();

          if (/^[A-Z]/.test(p)) return (props: any) => props?.children || null;

          return jest.fn();
        },
      },
    ),
);
jest.mock(
  "@dashboard/types",
  () =>
    new Proxy(
      {},
      {
        get: (_: any, p: string) => {
          if (p === "__esModule") return true;

          if (/^use/.test(p)) return () => createDeepMock();

          if (/^[A-Z]/.test(p)) return (props: any) => props?.children || null;

          return jest.fn();
        },
      },
    ),
);

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { AssignVariantDialogSingle } from "./AssignVariantDialogSingle";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {
    /* expected */
  });
  jest.spyOn(console, "warn").mockImplementation(() => {
    /* expected */
  });
  jest.spyOn(console, "log").mockImplementation(() => {
    /* expected */
  });
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AssignVariantDialogSingle", () => {
  test("renders without crashing", () => {
    const props = createDeepMock();

    render(
      <MemoryRouter>
        <AssignVariantDialogSingle {...props} />
      </MemoryRouter>,
    );
    expect(true).toBe(true);
  });
});
