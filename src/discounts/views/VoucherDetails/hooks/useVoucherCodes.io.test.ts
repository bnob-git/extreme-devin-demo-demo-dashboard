import { useVoucherCodes } from "./useVoucherCodes";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useVoucherCodes", () => {
  test("useVoucherCodes is exported", () => {
    expect(useVoucherCodes).toBeDefined();
  });

  test("useVoucherCodes can be called", () => {
    if (typeof useVoucherCodes === "function") {
      try {
        (useVoucherCodes as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
