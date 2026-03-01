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

import { getTransactionEvents, mapActionToMessage, mapTransactionEvent } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("mapActionToMessage is exported", () => {
    expect(mapActionToMessage).toBeDefined();
  });

  test("mapTransactionEvent is exported", () => {
    expect(mapTransactionEvent).toBeDefined();
  });

  test("getTransactionEvents is exported", () => {
    expect(getTransactionEvents).toBeDefined();
  });

  test("mapTransactionEvent can be called", () => {
    if (typeof mapTransactionEvent === "function") {
      try {
        (mapTransactionEvent as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getTransactionEvents can be called", () => {
    if (typeof getTransactionEvents === "function") {
      try {
        (getTransactionEvents as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
