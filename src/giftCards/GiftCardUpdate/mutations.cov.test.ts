import {
  giftCardBulkActivate,
  giftCardBulkDeactivate,
  giftCardTimelineNoteAdd,
  giftCardUpdate,
} from "./mutations";

describe("giftCards/GiftCardUpdate/mutations.ts", () => {
  it("should export giftCardBulkActivate", () => {
    expect(giftCardBulkActivate).toBeDefined();
  });

  it("should export giftCardBulkDeactivate", () => {
    expect(giftCardBulkDeactivate).toBeDefined();
  });

  it("should export giftCardTimelineNoteAdd", () => {
    expect(giftCardTimelineNoteAdd).toBeDefined();
  });

  it("should export giftCardUpdate", () => {
    expect(giftCardUpdate).toBeDefined();
  });
});
