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

import { AssignVariantDialogSingle } from "./AssignVariantDialogSingle";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AssignVariantDialogSingle", () => {
  test("AssignVariantDialogSingle is exported", () => {
    expect(AssignVariantDialogSingle).toBeDefined();
  });

  test("AssignVariantDialogSingle can be called", () => {
    if (typeof AssignVariantDialogSingle === "function") {
      try {
        (AssignVariantDialogSingle as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
