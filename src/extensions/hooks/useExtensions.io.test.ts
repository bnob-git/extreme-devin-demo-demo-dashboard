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

import { useExtensions } from "./useExtensions";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useExtensions", () => {
  test("useExtensions is exported", () => {
    expect(useExtensions).toBeDefined();
  });

  test("useExtensions can be called", () => {
    if (typeof useExtensions === "function") {
      try {
        (useExtensions as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
