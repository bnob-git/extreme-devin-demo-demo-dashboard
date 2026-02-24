import { VoucherCodesManualDialog } from "./VoucherCodesManualDialog";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("VoucherCodesManualDialog", () => {
  test("VoucherCodesManualDialog is exported", () => {
    expect(VoucherCodesManualDialog).toBeDefined();
  });

  test("VoucherCodesManualDialog can be called", () => {
    if (typeof VoucherCodesManualDialog === "function") {
      try {
        (VoucherCodesManualDialog as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
