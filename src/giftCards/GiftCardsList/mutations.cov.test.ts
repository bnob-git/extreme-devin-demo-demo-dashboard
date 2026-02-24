import { bulkDeleteGiftCard, deleteGiftCard } from "./mutations";

describe("giftCards/GiftCardsList/mutations.ts", () => {
  it("should export bulkDeleteGiftCard", () => {
    expect(bulkDeleteGiftCard).toBeDefined();
  });

  it("should export deleteGiftCard", () => {
    expect(deleteGiftCard).toBeDefined();
  });
});
