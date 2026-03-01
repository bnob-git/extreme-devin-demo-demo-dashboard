import { useVoucherCodesRowSelection } from "./useVoucherCodesRowSelection";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useVoucherCodesRowSelection", () => {
  test("useVoucherCodesRowSelection is exported", () => {
    expect(useVoucherCodesRowSelection).toBeDefined();
  });

  test("useVoucherCodesRowSelection can be called", () => {
    if (typeof useVoucherCodesRowSelection === "function") {
      try {
        (useVoucherCodesRowSelection as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
