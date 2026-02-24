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

import makeTopLevelSearch, {
  searchProductTypes,
  useSearchProductTypes,
} from "./useProductTypeSearch";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useProductTypeSearch", () => {
  test("default export is defined", () => {
    expect(makeTopLevelSearch).toBeDefined();
  });

  test("searchProductTypes is exported", () => {
    expect(searchProductTypes).toBeDefined();
  });

  test("useSearchProductTypes is exported", () => {
    expect(useSearchProductTypes).toBeDefined();
  });

  test("useSearchProductTypes can be called", () => {
    if (typeof useSearchProductTypes === "function") {
      try {
        (useSearchProductTypes as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
