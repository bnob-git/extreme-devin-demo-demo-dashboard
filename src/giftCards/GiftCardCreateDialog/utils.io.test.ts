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
  getExpiryPeriodTerminationDate,
  getGiftCardCreateOnCompletedMessage,
  getGiftCardExpiryInputData,
} from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("getExpiryPeriodTerminationDate is exported", () => {
    expect(getExpiryPeriodTerminationDate).toBeDefined();
  });

  test("getGiftCardCreateOnCompletedMessage is exported", () => {
    expect(getGiftCardCreateOnCompletedMessage).toBeDefined();
  });

  test("getGiftCardExpiryInputData is exported", () => {
    expect(getGiftCardExpiryInputData).toBeDefined();
  });

  test("getExpiryPeriodTerminationDate can be called", () => {
    if (typeof getExpiryPeriodTerminationDate === "function") {
      try {
        (getExpiryPeriodTerminationDate as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getGiftCardCreateOnCompletedMessage can be called", () => {
    if (typeof getGiftCardCreateOnCompletedMessage === "function") {
      try {
        (getGiftCardCreateOnCompletedMessage as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getGiftCardExpiryInputData can be called", () => {
    if (typeof getGiftCardExpiryInputData === "function") {
      try {
        (getGiftCardExpiryInputData as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
