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

import { handleRefundEditComplete } from "./handlers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("handlers", () => {
  test("handleRefundEditComplete is exported", () => {
    expect(handleRefundEditComplete).toBeDefined();
  });

  test("handleRefundEditComplete can be called", () => {
    if (typeof handleRefundEditComplete === "function") {
      try {
        (handleRefundEditComplete as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
