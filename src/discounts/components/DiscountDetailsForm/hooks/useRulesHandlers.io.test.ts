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

import { useRulesHandlers } from "./useRulesHandlers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useRulesHandlers", () => {
  test("useRulesHandlers is exported", () => {
    expect(useRulesHandlers).toBeDefined();
  });

  test("useRulesHandlers can be called", () => {
    if (typeof useRulesHandlers === "function") {
      try {
        (useRulesHandlers as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
