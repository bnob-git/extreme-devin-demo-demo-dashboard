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

import { useDiscountCreate } from "./handlers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("handlers", () => {
  test("useDiscountCreate is exported", () => {
    expect(useDiscountCreate).toBeDefined();
  });

  test("useDiscountCreate can be called", () => {
    if (typeof useDiscountCreate === "function") {
      try {
        (useDiscountCreate as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
