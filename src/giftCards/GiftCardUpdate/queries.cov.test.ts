import { GIFT_CARD_DETAILS_QUERY, giftCardDetails } from "./queries";

describe("giftCards/GiftCardUpdate/queries.ts", () => {
  it("should export GIFT_CARD_DETAILS_QUERY", () => {
    expect(GIFT_CARD_DETAILS_QUERY).toBeDefined();
  });

  it("should export giftCardDetails", () => {
    expect(giftCardDetails).toBeDefined();
  });
});
