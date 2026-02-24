import { CUSTOMER_GIFT_CARD_LIST_QUERY, customerGiftCardListQuery } from "./queries";

describe("giftCards/components/GiftCardCustomerCard/queries.ts", () => {
  it("should export CUSTOMER_GIFT_CARD_LIST_QUERY", () => {
    expect(CUSTOMER_GIFT_CARD_LIST_QUERY).toBeDefined();
  });

  it("should export customerGiftCardListQuery", () => {
    expect(customerGiftCardListQuery).toBeDefined();
  });
});
