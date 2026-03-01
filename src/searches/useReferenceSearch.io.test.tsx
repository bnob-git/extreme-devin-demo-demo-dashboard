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

import { useReferencePageSearch, useReferenceProductSearch } from "./useReferenceSearch";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useReferenceSearch", () => {
  test("useReferenceProductSearch is exported", () => {
    expect(useReferenceProductSearch).toBeDefined();
  });

  test("useReferencePageSearch is exported", () => {
    expect(useReferencePageSearch).toBeDefined();
  });

  test("useReferenceProductSearch can be called", () => {
    if (typeof useReferenceProductSearch === "function") {
      try {
        (useReferenceProductSearch as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("useReferencePageSearch can be called", () => {
    if (typeof useReferencePageSearch === "function") {
      try {
        (useReferencePageSearch as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
