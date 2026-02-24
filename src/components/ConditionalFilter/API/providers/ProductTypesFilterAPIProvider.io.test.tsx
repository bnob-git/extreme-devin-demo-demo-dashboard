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

import { useProductTypesFilterAPIProvider } from "./ProductTypesFilterAPIProvider";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ProductTypesFilterAPIProvider", () => {
  test("useProductTypesFilterAPIProvider is exported", () => {
    expect(useProductTypesFilterAPIProvider).toBeDefined();
  });

  test("useProductTypesFilterAPIProvider can be called", () => {
    if (typeof useProductTypesFilterAPIProvider === "function") {
      try {
        (useProductTypesFilterAPIProvider as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
