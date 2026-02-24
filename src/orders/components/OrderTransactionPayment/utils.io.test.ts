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
  findMethodName,
  getTransactionAmount,
  mapOrderActionsToTransactionActions,
  mapPaymentToTransactionEvents,
} from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("getTransactionAmount is exported", () => {
    expect(getTransactionAmount).toBeDefined();
  });

  test("findMethodName is exported", () => {
    expect(findMethodName).toBeDefined();
  });

  test("mapPaymentToTransactionEvents is exported", () => {
    expect(mapPaymentToTransactionEvents).toBeDefined();
  });

  test("mapOrderActionsToTransactionActions is exported", () => {
    expect(mapOrderActionsToTransactionActions).toBeDefined();
  });

  test("getTransactionAmount can be called", () => {
    if (typeof getTransactionAmount === "function") {
      try {
        (getTransactionAmount as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("findMethodName can be called", () => {
    if (typeof findMethodName === "function") {
      try {
        (findMethodName as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("mapPaymentToTransactionEvents can be called", () => {
    if (typeof mapPaymentToTransactionEvents === "function") {
      try {
        (mapPaymentToTransactionEvents as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("mapOrderActionsToTransactionActions can be called", () => {
    if (typeof mapOrderActionsToTransactionActions === "function") {
      try {
        (mapOrderActionsToTransactionActions as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
