import { refundGridMessages, refundStatuses } from "./messages";

describe("orders/components/OrderDetailsRefundTable/messages.ts", () => {
  it("should export refundGridMessages", () => {
    expect(refundGridMessages).toBeDefined();
  });

  it("should export refundStatuses", () => {
    expect(refundStatuses).toBeDefined();
  });
});
