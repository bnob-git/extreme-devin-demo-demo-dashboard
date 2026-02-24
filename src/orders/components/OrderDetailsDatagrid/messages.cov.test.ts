import { columnsMessages, messages } from "./messages";

describe("orders/components/OrderDetailsDatagrid/messages.ts", () => {
  it("should export columnsMessages", () => {
    expect(columnsMessages).toBeDefined();
  });

  it("should export messages", () => {
    expect(messages).toBeDefined();
  });
});
