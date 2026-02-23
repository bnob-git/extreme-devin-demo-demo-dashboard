import {
  customerGiftCardFragment,
  fragmentGiftCardsSettings,
  giftCardDataFragment,
  giftCardEventsFragment,
} from "./giftCards";

describe("fragments/giftCards.ts", () => {
  it("should export customerGiftCardFragment", () => {
    expect(customerGiftCardFragment).toBeDefined();
  });

  it("should export fragmentGiftCardsSettings", () => {
    expect(fragmentGiftCardsSettings).toBeDefined();
  });

  it("should export giftCardDataFragment", () => {
    expect(giftCardDataFragment).toBeDefined();
  });

  it("should export giftCardEventsFragment", () => {
    expect(giftCardEventsFragment).toBeDefined();
  });
});
