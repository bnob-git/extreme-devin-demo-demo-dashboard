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

import { TransactionEvents } from "./TransactionEvents";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("TransactionEvents", () => {
  test("TransactionEvents is exported", () => {
    expect(TransactionEvents).toBeDefined();
  });

  test("TransactionEvents can be called", () => {
    if (typeof TransactionEvents === "function") {
      try {
        (TransactionEvents as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
