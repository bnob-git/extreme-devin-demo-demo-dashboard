import { grantRefundPageMessages, productCardMessages } from "./messages";

describe("orders/components/OrderGrantRefundPage/messages.ts", () => {
  it("should export grantRefundPageMessages", () => {
    expect(grantRefundPageMessages).toBeDefined();
  });

  it("should export productCardMessages", () => {
    expect(productCardMessages).toBeDefined();
  });
});
