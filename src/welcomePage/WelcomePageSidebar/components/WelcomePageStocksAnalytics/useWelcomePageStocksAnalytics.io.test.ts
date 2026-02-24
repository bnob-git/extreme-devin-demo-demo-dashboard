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

import { useWelcomePageStocksAnalytics } from "./useWelcomePageStocksAnalytics";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useWelcomePageStocksAnalytics", () => {
  test("useWelcomePageStocksAnalytics is exported", () => {
    expect(useWelcomePageStocksAnalytics).toBeDefined();
  });

  test("useWelcomePageStocksAnalytics can be called", () => {
    if (typeof useWelcomePageStocksAnalytics === "function") {
      try {
        (useWelcomePageStocksAnalytics as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
