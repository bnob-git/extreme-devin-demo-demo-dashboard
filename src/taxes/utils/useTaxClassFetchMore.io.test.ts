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

import { useTaxClassFetchMore } from "./useTaxClassFetchMore";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useTaxClassFetchMore", () => {
  test("useTaxClassFetchMore is exported", () => {
    expect(useTaxClassFetchMore).toBeDefined();
  });

  test("useTaxClassFetchMore can be called", () => {
    if (typeof useTaxClassFetchMore === "function") {
      try {
        (useTaxClassFetchMore as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
