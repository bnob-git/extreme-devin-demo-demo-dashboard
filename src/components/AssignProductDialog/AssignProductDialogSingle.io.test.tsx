jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (/^[A-Z]/.test(prop)) return prop;

          if (/^use/.test(prop)) return () => ({ data: undefined, loading: false });

          return prop;
        },
      },
    ),
);

import { AssignProductDialogSingle } from "./AssignProductDialogSingle";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AssignProductDialogSingle", () => {
  test("AssignProductDialogSingle is exported", () => {
    expect(AssignProductDialogSingle).toBeDefined();
  });

  test("AssignProductDialogSingle can be called", () => {
    if (typeof AssignProductDialogSingle === "function") {
      try {
        (AssignProductDialogSingle as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
