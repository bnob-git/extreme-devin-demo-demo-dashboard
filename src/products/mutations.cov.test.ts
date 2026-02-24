import {
  productBulkDeleteMutation,
  ProductChannelListingUpdateMutation,
  productCreateMutation,
  productDeleteMutation,
  productExportMutation,
  productMediaCreateMutation,
  productMediaDeleteMutation,
  productMediaReorder,
  productMediaUpdateMutation,
  productUpdateMutation,
  ProductVariantBulkCreateMutation,
  ProductVariantBulkDeleteMutation,
  ProductVariantBulkUpdateMutation,
  ProductVariantChannelListingUpdateMutation,
  ProductVariantPreorderDeactivateMutation,
  productVariantReorder,
  productVariantSetDefault,
  variantCreateMutation,
  variantDeleteMutation,
  variantMediaAssignMutation,
  variantMediaUnassignMutation,
  variantUpdateMutation,
} from "./mutations";

describe("products/mutations.ts", () => {
  it("should export ProductChannelListingUpdateMutation", () => {
    expect(ProductChannelListingUpdateMutation).toBeDefined();
  });

  it("should export ProductVariantBulkCreateMutation", () => {
    expect(ProductVariantBulkCreateMutation).toBeDefined();
  });

  it("should export ProductVariantBulkDeleteMutation", () => {
    expect(ProductVariantBulkDeleteMutation).toBeDefined();
  });

  it("should export ProductVariantBulkUpdateMutation", () => {
    expect(ProductVariantBulkUpdateMutation).toBeDefined();
  });

  it("should export ProductVariantChannelListingUpdateMutation", () => {
    expect(ProductVariantChannelListingUpdateMutation).toBeDefined();
  });

  it("should export ProductVariantPreorderDeactivateMutation", () => {
    expect(ProductVariantPreorderDeactivateMutation).toBeDefined();
  });

  it("should export productBulkDeleteMutation", () => {
    expect(productBulkDeleteMutation).toBeDefined();
  });

  it("should export productCreateMutation", () => {
    expect(productCreateMutation).toBeDefined();
  });

  it("should export productDeleteMutation", () => {
    expect(productDeleteMutation).toBeDefined();
  });

  it("should export productExportMutation", () => {
    expect(productExportMutation).toBeDefined();
  });

  it("should export productMediaCreateMutation", () => {
    expect(productMediaCreateMutation).toBeDefined();
  });

  it("should export productMediaDeleteMutation", () => {
    expect(productMediaDeleteMutation).toBeDefined();
  });

  it("should export productMediaReorder", () => {
    expect(productMediaReorder).toBeDefined();
  });

  it("should export productMediaUpdateMutation", () => {
    expect(productMediaUpdateMutation).toBeDefined();
  });

  it("should export productUpdateMutation", () => {
    expect(productUpdateMutation).toBeDefined();
  });

  it("should export productVariantReorder", () => {
    expect(productVariantReorder).toBeDefined();
  });

  it("should export productVariantSetDefault", () => {
    expect(productVariantSetDefault).toBeDefined();
  });

  it("should export variantCreateMutation", () => {
    expect(variantCreateMutation).toBeDefined();
  });

  it("should export variantDeleteMutation", () => {
    expect(variantDeleteMutation).toBeDefined();
  });

  it("should export variantMediaAssignMutation", () => {
    expect(variantMediaAssignMutation).toBeDefined();
  });

  it("should export variantMediaUnassignMutation", () => {
    expect(variantMediaUnassignMutation).toBeDefined();
  });

  it("should export variantUpdateMutation", () => {
    expect(variantUpdateMutation).toBeDefined();
  });
});
