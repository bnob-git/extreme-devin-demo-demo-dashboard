import { orderPaymentActionButtonMessages, orderPaymentMessages } from "./messages";

describe("orders/components/OrderPaymentSummaryCard/messages.ts", () => {
  it("should export orderPaymentActionButtonMessages", () => {
    expect(orderPaymentActionButtonMessages).toBeDefined();
  });

  it("should export orderPaymentMessages", () => {
    expect(orderPaymentMessages).toBeDefined();
  });
});
