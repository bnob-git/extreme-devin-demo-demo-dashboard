import { giftCardActivate, giftCardDeactivate } from "./mutations";

describe("giftCards/GiftCardUpdate/GiftCardUpdatePageHeader/mutations.ts", () => {
  it("should export giftCardActivate", () => {
    expect(giftCardActivate).toBeDefined();
  });

  it("should export giftCardDeactivate", () => {
    expect(giftCardDeactivate).toBeDefined();
  });
});
