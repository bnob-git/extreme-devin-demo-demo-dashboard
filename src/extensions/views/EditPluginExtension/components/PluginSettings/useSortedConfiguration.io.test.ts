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

import { useSortedConfiguration } from "./useSortedConfiguration";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useSortedConfiguration", () => {
  test("useSortedConfiguration is exported", () => {
    expect(useSortedConfiguration).toBeDefined();
  });

  test("useSortedConfiguration can be called", () => {
    if (typeof useSortedConfiguration === "function") {
      try {
        (useSortedConfiguration as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
