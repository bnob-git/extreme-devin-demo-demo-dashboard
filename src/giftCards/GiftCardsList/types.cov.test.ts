import {
  GiftCardListActionParamsEnum,
  GiftCardListFilterKeys,
  GiftCardListUrlFiltersEnum,
  GiftCardUrlSortField,
} from "./types";

describe("giftCards/GiftCardsList/types.ts", () => {
  it("should export GiftCardListActionParamsEnum", () => {
    expect(GiftCardListActionParamsEnum).toBeDefined();
  });

  it("should export GiftCardListFilterKeys", () => {
    expect(GiftCardListFilterKeys).toBeDefined();
  });

  it("should export GiftCardListUrlFiltersEnum", () => {
    expect(GiftCardListUrlFiltersEnum).toBeDefined();
  });

  it("should export GiftCardUrlSortField", () => {
    expect(GiftCardUrlSortField).toBeDefined();
  });
});
