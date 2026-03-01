import {
  bulkEnableDisableSectionMessages,
  giftCardsListHeaderMenuItemsMessages,
  giftCardsListTableMessages,
  giftCardUpdateFormMessages,
} from "./messages";

describe("giftCards/GiftCardsList/messages.ts", () => {
  it("should export bulkEnableDisableSectionMessages", () => {
    expect(bulkEnableDisableSectionMessages).toBeDefined();
  });

  it("should export giftCardUpdateFormMessages", () => {
    expect(giftCardUpdateFormMessages).toBeDefined();
  });

  it("should export giftCardsListHeaderMenuItemsMessages", () => {
    expect(giftCardsListHeaderMenuItemsMessages).toBeDefined();
  });

  it("should export giftCardsListTableMessages", () => {
    expect(giftCardsListTableMessages).toBeDefined();
  });
});
