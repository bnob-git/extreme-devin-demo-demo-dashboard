import {
  promotionDetailsFragments,
  promotionFragment,
  promotionRuleChannelFragment,
  promotionRuleDetailsFragment,
  saleDetailsFragment,
  saleFragment,
  voucherCodeFragment,
  voucherDetailsFragment,
  voucherFragment,
} from "./discounts";

describe("fragments/discounts.ts", () => {
  it("should export promotionDetailsFragments", () => {
    expect(promotionDetailsFragments).toBeDefined();
  });

  it("should export promotionFragment", () => {
    expect(promotionFragment).toBeDefined();
  });

  it("should export promotionRuleChannelFragment", () => {
    expect(promotionRuleChannelFragment).toBeDefined();
  });

  it("should export promotionRuleDetailsFragment", () => {
    expect(promotionRuleDetailsFragment).toBeDefined();
  });

  it("should export saleDetailsFragment", () => {
    expect(saleDetailsFragment).toBeDefined();
  });

  it("should export saleFragment", () => {
    expect(saleFragment).toBeDefined();
  });

  it("should export voucherCodeFragment", () => {
    expect(voucherCodeFragment).toBeDefined();
  });

  it("should export voucherDetailsFragment", () => {
    expect(voucherDetailsFragment).toBeDefined();
  });

  it("should export voucherFragment", () => {
    expect(voucherFragment).toBeDefined();
  });
});
