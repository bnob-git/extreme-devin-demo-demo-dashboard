import { giftCardHistoryMessages, giftCardHistoryTimelineMessages } from "./messages";

describe("giftCards/GiftCardUpdate/GiftCardHistory/messages.ts", () => {
  it("should export giftCardHistoryMessages", () => {
    expect(giftCardHistoryMessages).toBeDefined();
  });

  it("should export giftCardHistoryTimelineMessages", () => {
    expect(giftCardHistoryTimelineMessages).toBeDefined();
  });
});
