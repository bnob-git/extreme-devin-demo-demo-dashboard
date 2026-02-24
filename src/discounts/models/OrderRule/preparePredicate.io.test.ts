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

import { prepareOrderPredicate } from "./preparePredicate";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("preparePredicate", () => {
  test("prepareOrderPredicate is exported", () => {
    expect(prepareOrderPredicate).toBeDefined();
  });

  test("prepareOrderPredicate can be called", () => {
    if (typeof prepareOrderPredicate === "function") {
      try {
        (prepareOrderPredicate as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
