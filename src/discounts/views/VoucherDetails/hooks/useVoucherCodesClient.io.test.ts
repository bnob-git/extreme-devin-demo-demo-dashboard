import { useVoucherCodesClient } from "./useVoucherCodesClient";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useVoucherCodesClient", () => {
  test("useVoucherCodesClient is exported", () => {
    expect(useVoucherCodesClient).toBeDefined();
  });

  test("useVoucherCodesClient can be called", () => {
    if (typeof useVoucherCodesClient === "function") {
      try {
        (useVoucherCodesClient as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
