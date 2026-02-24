import {
  discountList,
  giftLabels,
  promotionDetails,
  PromotionDetailsQuery,
  ruleConditionsSelectedOptionsDetails,
  saleDetails,
  saleList,
  voucherCodes,
  voucherDetails,
  voucherList,
} from "./queries";

describe("discounts/queries.ts", () => {
  it("should export PromotionDetailsQuery", () => {
    expect(PromotionDetailsQuery).toBeDefined();
  });

  it("should export discountList", () => {
    expect(discountList).toBeDefined();
  });

  it("should export giftLabels", () => {
    expect(giftLabels).toBeDefined();
  });

  it("should export promotionDetails", () => {
    expect(promotionDetails).toBeDefined();
  });

  it("should export ruleConditionsSelectedOptionsDetails", () => {
    expect(ruleConditionsSelectedOptionsDetails).toBeDefined();
  });

  it("should export saleDetails", () => {
    expect(saleDetails).toBeDefined();
  });

  it("should export saleList", () => {
    expect(saleList).toBeDefined();
  });

  it("should export voucherCodes", () => {
    expect(voucherCodes).toBeDefined();
  });

  it("should export voucherDetails", () => {
    expect(voucherDetails).toBeDefined();
  });

  it("should export voucherList", () => {
    expect(voucherList).toBeDefined();
  });
});
