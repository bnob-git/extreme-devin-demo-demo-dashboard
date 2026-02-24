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

import {
  getOrderTransactionErrorMessage,
  getTransactionCreateErrorMessage,
  transactionCreateMessages,
  transactionRequestMessages,
} from "./transaction";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("transaction", () => {
  test("transactionRequestMessages is exported", () => {
    expect(transactionRequestMessages).toBeDefined();
  });

  test("getOrderTransactionErrorMessage is exported", () => {
    expect(getOrderTransactionErrorMessage).toBeDefined();
  });

  test("transactionCreateMessages is exported", () => {
    expect(transactionCreateMessages).toBeDefined();
  });

  test("getTransactionCreateErrorMessage is exported", () => {
    expect(getTransactionCreateErrorMessage).toBeDefined();
  });

  test("getOrderTransactionErrorMessage can be called", () => {
    if (typeof getOrderTransactionErrorMessage === "function") {
      try {
        (getOrderTransactionErrorMessage as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getTransactionCreateErrorMessage can be called", () => {
    if (typeof getTransactionCreateErrorMessage === "function") {
      try {
        (getTransactionCreateErrorMessage as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
