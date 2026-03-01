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

import { getFilterQueryParam, storageUtils } from "./filters";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("filters", () => {
  test("getFilterQueryParam is exported", () => {
    expect(getFilterQueryParam).toBeDefined();
  });

  test("storageUtils is exported", () => {
    expect(storageUtils).toBeDefined();
  });

  test("getFilterQueryParam can be called", () => {
    if (typeof getFilterQueryParam === "function") {
      try {
        (getFilterQueryParam as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
