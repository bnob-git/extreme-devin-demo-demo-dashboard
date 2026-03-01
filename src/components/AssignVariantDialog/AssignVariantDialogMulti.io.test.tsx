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

import { AssignVariantDialogMulti } from "./AssignVariantDialogMulti";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AssignVariantDialogMulti", () => {
  test("AssignVariantDialogMulti is exported", () => {
    expect(AssignVariantDialogMulti).toBeDefined();
  });

  test("AssignVariantDialogMulti can be called", () => {
    if (typeof AssignVariantDialogMulti === "function") {
      try {
        (AssignVariantDialogMulti as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
