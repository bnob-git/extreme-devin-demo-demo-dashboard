import { dataLineMessages, manualRefundMessages, refundPageMessages } from "./messages";

describe("orders/components/OrderSendRefundPage/messages.ts", () => {
  it("should export dataLineMessages", () => {
    expect(dataLineMessages).toBeDefined();
  });

  it("should export manualRefundMessages", () => {
    expect(manualRefundMessages).toBeDefined();
  });

  it("should export refundPageMessages", () => {
    expect(refundPageMessages).toBeDefined();
  });
});
