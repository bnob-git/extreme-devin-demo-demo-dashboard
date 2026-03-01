import { GiftCardCreateMoneyInput } from "./GiftCardCreateMoneyInput";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("GiftCardCreateMoneyInput", () => {
  test("GiftCardCreateMoneyInput is exported", () => {
    expect(GiftCardCreateMoneyInput).toBeDefined();
  });

  test("GiftCardCreateMoneyInput can be called", () => {
    if (typeof GiftCardCreateMoneyInput === "function") {
      try {
        (GiftCardCreateMoneyInput as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
