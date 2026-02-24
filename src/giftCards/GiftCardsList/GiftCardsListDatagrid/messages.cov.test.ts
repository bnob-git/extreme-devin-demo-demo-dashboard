import { columnsMessages, messages } from "./messages";

describe("giftCards/GiftCardsList/GiftCardsListDatagrid/messages.ts", () => {
  it("should export columnsMessages", () => {
    expect(columnsMessages).toBeDefined();
  });

  it("should export messages", () => {
    expect(messages).toBeDefined();
  });
});
