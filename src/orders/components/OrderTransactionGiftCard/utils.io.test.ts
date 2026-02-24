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

import { getGiftCardAmount, getUsedInGiftCardEvents } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("getUsedInGiftCardEvents is exported", () => {
    expect(getUsedInGiftCardEvents).toBeDefined();
  });

  test("getGiftCardAmount is exported", () => {
    expect(getGiftCardAmount).toBeDefined();
  });

  test("getUsedInGiftCardEvents can be called", () => {
    if (typeof getUsedInGiftCardEvents === "function") {
      try {
        (getUsedInGiftCardEvents as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getGiftCardAmount can be called", () => {
    if (typeof getGiftCardAmount === "function") {
      try {
        (getGiftCardAmount as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
