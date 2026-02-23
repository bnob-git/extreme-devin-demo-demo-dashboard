import { clearRefundReasonType, setRefundReasonType } from "./mutations";

describe("refundsSettings/mutations.ts", () => {
  it("should export clearRefundReasonType", () => {
    expect(clearRefundReasonType).toBeDefined();
  });

  it("should export setRefundReasonType", () => {
    expect(setRefundReasonType).toBeDefined();
  });
});
