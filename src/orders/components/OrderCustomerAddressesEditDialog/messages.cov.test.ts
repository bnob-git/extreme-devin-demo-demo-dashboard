import { addressEditMessages, dialogMessages } from "./messages";

describe("orders/components/OrderCustomerAddressesEditDialog/messages.ts", () => {
  it("should export addressEditMessages", () => {
    expect(addressEditMessages).toBeDefined();
  });

  it("should export dialogMessages", () => {
    expect(dialogMessages).toBeDefined();
  });
});
