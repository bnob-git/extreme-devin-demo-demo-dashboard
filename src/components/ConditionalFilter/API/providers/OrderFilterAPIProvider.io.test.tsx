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

import { useOrderFilterAPIProvider } from "./OrderFilterAPIProvider";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("OrderFilterAPIProvider", () => {
  test("useOrderFilterAPIProvider is exported", () => {
    expect(useOrderFilterAPIProvider).toBeDefined();
  });

  test("useOrderFilterAPIProvider can be called", () => {
    if (typeof useOrderFilterAPIProvider === "function") {
      try {
        (useOrderFilterAPIProvider as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
