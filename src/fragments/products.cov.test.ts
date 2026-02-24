import {
  channelListingProductFragment,
  channelListingProductVariantFragment,
  channelListingProductWithoutPricingFragment,
  exportFileFragment,
  fragmentMoney,
  fragmentPreorder,
  fragmentProductMedia,
  fragmentVariant,
  priceRangeFragment,
  productDetailsVariant,
  productFragment,
  productFragmentDetails,
  productListAttribute,
  productVariantAttributesFragment,
  searchProduct,
  selectedVariantAttributeFragment,
  stockFragment,
  variantAttributeFragment,
} from "./products";

describe("fragments/products.ts", () => {
  it("should export channelListingProductFragment", () => {
    expect(channelListingProductFragment).toBeDefined();
  });

  it("should export channelListingProductVariantFragment", () => {
    expect(channelListingProductVariantFragment).toBeDefined();
  });

  it("should export channelListingProductWithoutPricingFragment", () => {
    expect(channelListingProductWithoutPricingFragment).toBeDefined();
  });

  it("should export exportFileFragment", () => {
    expect(exportFileFragment).toBeDefined();
  });

  it("should export fragmentMoney", () => {
    expect(fragmentMoney).toBeDefined();
  });

  it("should export fragmentPreorder", () => {
    expect(fragmentPreorder).toBeDefined();
  });

  it("should export fragmentProductMedia", () => {
    expect(fragmentProductMedia).toBeDefined();
  });

  it("should export fragmentVariant", () => {
    expect(fragmentVariant).toBeDefined();
  });

  it("should export priceRangeFragment", () => {
    expect(priceRangeFragment).toBeDefined();
  });

  it("should export productDetailsVariant", () => {
    expect(productDetailsVariant).toBeDefined();
  });

  it("should export productFragment", () => {
    expect(productFragment).toBeDefined();
  });

  it("should export productFragmentDetails", () => {
    expect(productFragmentDetails).toBeDefined();
  });

  it("should export productListAttribute", () => {
    expect(productListAttribute).toBeDefined();
  });

  it("should export productVariantAttributesFragment", () => {
    expect(productVariantAttributesFragment).toBeDefined();
  });

  it("should export searchProduct", () => {
    expect(searchProduct).toBeDefined();
  });

  it("should export selectedVariantAttributeFragment", () => {
    expect(selectedVariantAttributeFragment).toBeDefined();
  });

  it("should export stockFragment", () => {
    expect(stockFragment).toBeDefined();
  });

  it("should export variantAttributeFragment", () => {
    expect(variantAttributeFragment).toBeDefined();
  });
});
