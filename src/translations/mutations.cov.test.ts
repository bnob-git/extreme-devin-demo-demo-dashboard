import {
  updateAttributeTranslations,
  updateAttributeValueTranslations,
  updateCategoryTranslations,
  updateCollectionTranslations,
  updateMethodItemTranslations,
  updatePageTranslations,
  updateProductTranslations,
  updateProductVariantTranslations,
  updateSaleTranslations,
  updateShippingMethodTranslations,
  updateVoucherTranslations,
} from "./mutations";

describe("translations/mutations.ts", () => {
  it("should export updateAttributeTranslations", () => {
    expect(updateAttributeTranslations).toBeDefined();
  });

  it("should export updateAttributeValueTranslations", () => {
    expect(updateAttributeValueTranslations).toBeDefined();
  });

  it("should export updateCategoryTranslations", () => {
    expect(updateCategoryTranslations).toBeDefined();
  });

  it("should export updateCollectionTranslations", () => {
    expect(updateCollectionTranslations).toBeDefined();
  });

  it("should export updateMethodItemTranslations", () => {
    expect(updateMethodItemTranslations).toBeDefined();
  });

  it("should export updatePageTranslations", () => {
    expect(updatePageTranslations).toBeDefined();
  });

  it("should export updateProductTranslations", () => {
    expect(updateProductTranslations).toBeDefined();
  });

  it("should export updateProductVariantTranslations", () => {
    expect(updateProductVariantTranslations).toBeDefined();
  });

  it("should export updateSaleTranslations", () => {
    expect(updateSaleTranslations).toBeDefined();
  });

  it("should export updateShippingMethodTranslations", () => {
    expect(updateShippingMethodTranslations).toBeDefined();
  });

  it("should export updateVoucherTranslations", () => {
    expect(updateVoucherTranslations).toBeDefined();
  });
});
