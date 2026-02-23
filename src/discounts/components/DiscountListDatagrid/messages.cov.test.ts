import { columnsMessages, messages } from "./messages";

describe("discounts/components/DiscountListDatagrid/messages.ts", () => {
  it("should export columnsMessages", () => {
    expect(columnsMessages).toBeDefined();
  });

  it("should export messages", () => {
    expect(messages).toBeDefined();
  });
});
