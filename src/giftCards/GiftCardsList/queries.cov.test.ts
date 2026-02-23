import {
  GIFT_CARD_LIST_QUERY,
  giftCardList,
  giftCardProductsCount,
  giftCardTotalCount,
} from "./queries";

describe("giftCards/GiftCardsList/queries.ts", () => {
  it("should export GIFT_CARD_LIST_QUERY", () => {
    expect(GIFT_CARD_LIST_QUERY).toBeDefined();
  });

  it("should export giftCardList", () => {
    expect(giftCardList).toBeDefined();
  });

  it("should export giftCardProductsCount", () => {
    expect(giftCardProductsCount).toBeDefined();
  });

  it("should export giftCardTotalCount", () => {
    expect(giftCardTotalCount).toBeDefined();
  });
});
