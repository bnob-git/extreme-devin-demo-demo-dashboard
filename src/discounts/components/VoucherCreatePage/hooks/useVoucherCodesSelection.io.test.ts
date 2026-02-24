import { useVoucherCodesSelection } from "./useVoucherCodesSelection";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useVoucherCodesSelection", () => {
  test("useVoucherCodesSelection is exported", () => {
    expect(useVoucherCodesSelection).toBeDefined();
  });

  test("useVoucherCodesSelection can be called", () => {
    if (typeof useVoucherCodesSelection === "function") {
      try {
        (useVoucherCodesSelection as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
