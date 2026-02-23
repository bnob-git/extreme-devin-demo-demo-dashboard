import { useGiftCardCurrencies } from "./queries";

describe("giftCards/GiftCardsList/GiftCardListSearchAndFilters/queries.ts", () => {
  it("should export useGiftCardCurrencies", () => {
    expect(useGiftCardCurrencies).toBeDefined();
  });
});
