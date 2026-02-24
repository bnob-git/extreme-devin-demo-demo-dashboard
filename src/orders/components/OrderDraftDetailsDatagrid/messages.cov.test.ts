import { columnsMessages, messages } from "./messages";

describe("orders/components/OrderDraftDetailsDatagrid/messages.ts", () => {
  it("should export columnsMessages", () => {
    expect(columnsMessages).toBeDefined();
  });

  it("should export messages", () => {
    expect(messages).toBeDefined();
  });
});
