import {
  accountErrorFragment,
  appErrorFragment,
  attributeErrorFragment,
  attributeTranslateErrorFragment,
  attributeValueTranslateErrorFragment,
  bulkProductErrorFragment,
  bulkStockErrorFragment,
  categoryTranslateErrorFragment,
  collectionChannelListingErrorFragment,
  collectionsErrorFragment,
  collectionTranslateErrorFragment,
  discountErrorFragment,
  exportErrorFragment,
  giftCardBulkCreateErrorFragment,
  giftCardCreateErrorFragment,
  giftCardErrorFragment,
  giftCardSettingsErrorFragment,
  invoiceErrorFragment,
  menuErrorFragment,
  metadataErrorFragment,
  orderErrorFragment,
  orderGrantRefundCreateErrorFragment,
  orderGrantRefundUpdateErrorFragment,
  orderSettingsErrorFragment,
  pageBulkPublishErrorFragment,
  pageBulkRemoveErrorFragment,
  pageErrorFragment,
  pageErrorWithAttributesFragment,
  pageTranslateErrorFragment,
  pageTypeBulkDeleteErrorFragment,
  pageTypeDeleteErrorFragment,
  permissionGroupErrorFragment,
  pluginErrorFragment,
  productAttributeAssignErrorFragment,
  productAttributeAssignmentUpdateErrorFragment,
  productAttributeUnassignErrorFragment,
  productChannelListingErrorFragment,
  productErrorFragment,
  productErrorWithAttributesFragment,
  productTranslateErrorFragment,
  productTypeBulkDeleteErrorFragment,
  productTypeBulkUpdateErrorFragment,
  productTypeCreateErrorFragment,
  productTypeDeleteErrorFragment,
  productTypeReorderAttributesErrorFragment,
  productVariantBulkError,
  productVariantStocksDeleteErrorFragment,
  productVariantTranslateErrorFragment,
  promotionCreateErrorFragment,
  promotionDeleteErrorFragment,
  promotionRuleCreateErrorFragment,
  promotionRuleDeleteErrorFragment,
  promotionRuleUpdateErrorFragment,
  promotionUpdateErrorFragment,
  saleBulkDeleteError,
  saleTranslateErrorFragment,
  shippingChannelsErrorFragment,
  shippingErrorFragment,
  shippingPriceTranslateErrorFragment,
  shopErrorFragment,
  shopFetchTaxRatesErrorFragment,
  shopSettingsUpdateErrorFragment,
  staffErrorFragment,
  stockErrorFragment,
  taxClassCreateError,
  taxClassDeleteError,
  taxClassUpdateError,
  taxConfigurationUpdateError,
  taxCountryConfigurationDeleteError,
  taxCountryConfigurationUpdateError,
  transactionCreateErrorFragment,
  transactionRequestActionErrorFragment,
  transactionRequestRefundForGrantedRefundErrorFragment,
  uploadErrorFragment,
  voucherBulkDeleteError,
  voucherTranslateErrorFragment,
  warehouseErrorFragment,
  webhookErrorFragment,
} from "./errors";

describe("fragments/errors", () => {
  it("should export attributeErrorFragment", () => {
    expect(attributeErrorFragment).toBeDefined();
  });

  it("should export productErrorFragment", () => {
    expect(productErrorFragment).toBeDefined();
  });

  it("should export productErrorWithAttributesFragment", () => {
    expect(productErrorWithAttributesFragment).toBeDefined();
  });

  it("should export productChannelListingErrorFragment", () => {
    expect(productChannelListingErrorFragment).toBeDefined();
  });

  it("should export collectionChannelListingErrorFragment", () => {
    expect(collectionChannelListingErrorFragment).toBeDefined();
  });

  it("should export accountErrorFragment", () => {
    expect(accountErrorFragment).toBeDefined();
  });

  it("should export discountErrorFragment", () => {
    expect(discountErrorFragment).toBeDefined();
  });

  it("should export promotionCreateErrorFragment", () => {
    expect(promotionCreateErrorFragment).toBeDefined();
  });

  it("should export promotionUpdateErrorFragment", () => {
    expect(promotionUpdateErrorFragment).toBeDefined();
  });

  it("should export promotionDeleteErrorFragment", () => {
    expect(promotionDeleteErrorFragment).toBeDefined();
  });

  it("should export promotionRuleUpdateErrorFragment", () => {
    expect(promotionRuleUpdateErrorFragment).toBeDefined();
  });

  it("should export promotionRuleCreateErrorFragment", () => {
    expect(promotionRuleCreateErrorFragment).toBeDefined();
  });

  it("should export promotionRuleDeleteErrorFragment", () => {
    expect(promotionRuleDeleteErrorFragment).toBeDefined();
  });

  it("should export menuErrorFragment", () => {
    expect(menuErrorFragment).toBeDefined();
  });

  it("should export orderErrorFragment", () => {
    expect(orderErrorFragment).toBeDefined();
  });

  it("should export orderSettingsErrorFragment", () => {
    expect(orderSettingsErrorFragment).toBeDefined();
  });

  it("should export pageErrorFragment", () => {
    expect(pageErrorFragment).toBeDefined();
  });

  it("should export pageErrorWithAttributesFragment", () => {
    expect(pageErrorWithAttributesFragment).toBeDefined();
  });

  it("should export permissionGroupErrorFragment", () => {
    expect(permissionGroupErrorFragment).toBeDefined();
  });

  it("should export bulkProductErrorFragment", () => {
    expect(bulkProductErrorFragment).toBeDefined();
  });

  it("should export productVariantBulkError", () => {
    expect(productVariantBulkError).toBeDefined();
  });

  it("should export bulkStockErrorFragment", () => {
    expect(bulkStockErrorFragment).toBeDefined();
  });

  it("should export stockErrorFragment", () => {
    expect(stockErrorFragment).toBeDefined();
  });

  it("should export shippingChannelsErrorFragment", () => {
    expect(shippingChannelsErrorFragment).toBeDefined();
  });

  it("should export shippingErrorFragment", () => {
    expect(shippingErrorFragment).toBeDefined();
  });

  it("should export shopErrorFragment", () => {
    expect(shopErrorFragment).toBeDefined();
  });

  it("should export staffErrorFragment", () => {
    expect(staffErrorFragment).toBeDefined();
  });

  it("should export warehouseErrorFragment", () => {
    expect(warehouseErrorFragment).toBeDefined();
  });

  it("should export webhookErrorFragment", () => {
    expect(webhookErrorFragment).toBeDefined();
  });

  it("should export invoiceErrorFragment", () => {
    expect(invoiceErrorFragment).toBeDefined();
  });

  it("should export appErrorFragment", () => {
    expect(appErrorFragment).toBeDefined();
  });

  it("should export exportErrorFragment", () => {
    expect(exportErrorFragment).toBeDefined();
  });

  it("should export pluginErrorFragment", () => {
    expect(pluginErrorFragment).toBeDefined();
  });

  it("should export metadataErrorFragment", () => {
    expect(metadataErrorFragment).toBeDefined();
  });

  it("should export collectionsErrorFragment", () => {
    expect(collectionsErrorFragment).toBeDefined();
  });

  it("should export uploadErrorFragment", () => {
    expect(uploadErrorFragment).toBeDefined();
  });

  it("should export giftCardErrorFragment", () => {
    expect(giftCardErrorFragment).toBeDefined();
  });

  it("should export giftCardSettingsErrorFragment", () => {
    expect(giftCardSettingsErrorFragment).toBeDefined();
  });

  it("should export saleBulkDeleteError", () => {
    expect(saleBulkDeleteError).toBeDefined();
  });

  it("should export voucherBulkDeleteError", () => {
    expect(voucherBulkDeleteError).toBeDefined();
  });

  it("should export giftCardBulkCreateErrorFragment", () => {
    expect(giftCardBulkCreateErrorFragment).toBeDefined();
  });

  it("should export giftCardCreateErrorFragment", () => {
    expect(giftCardCreateErrorFragment).toBeDefined();
  });

  it("should export pageBulkPublishErrorFragment", () => {
    expect(pageBulkPublishErrorFragment).toBeDefined();
  });

  it("should export pageBulkRemoveErrorFragment", () => {
    expect(pageBulkRemoveErrorFragment).toBeDefined();
  });

  it("should export pageTypeDeleteErrorFragment", () => {
    expect(pageTypeDeleteErrorFragment).toBeDefined();
  });

  it("should export pageTypeBulkDeleteErrorFragment", () => {
    expect(pageTypeBulkDeleteErrorFragment).toBeDefined();
  });

  it("should export productVariantStocksDeleteErrorFragment", () => {
    expect(productVariantStocksDeleteErrorFragment).toBeDefined();
  });

  it("should export productTypeDeleteErrorFragment", () => {
    expect(productTypeDeleteErrorFragment).toBeDefined();
  });

  it("should export productTypeBulkDeleteErrorFragment", () => {
    expect(productTypeBulkDeleteErrorFragment).toBeDefined();
  });

  it("should export productTypeBulkUpdateErrorFragment", () => {
    expect(productTypeBulkUpdateErrorFragment).toBeDefined();
  });

  it("should export productAttributeAssignErrorFragment", () => {
    expect(productAttributeAssignErrorFragment).toBeDefined();
  });

  it("should export productAttributeUnassignErrorFragment", () => {
    expect(productAttributeUnassignErrorFragment).toBeDefined();
  });

  it("should export productTypeCreateErrorFragment", () => {
    expect(productTypeCreateErrorFragment).toBeDefined();
  });

  it("should export productTypeReorderAttributesErrorFragment", () => {
    expect(productTypeReorderAttributesErrorFragment).toBeDefined();
  });

  it("should export productAttributeAssignmentUpdateErrorFragment", () => {
    expect(productAttributeAssignmentUpdateErrorFragment).toBeDefined();
  });

  it("should export shopSettingsUpdateErrorFragment", () => {
    expect(shopSettingsUpdateErrorFragment).toBeDefined();
  });

  it("should export shopFetchTaxRatesErrorFragment", () => {
    expect(shopFetchTaxRatesErrorFragment).toBeDefined();
  });

  it("should export productTranslateErrorFragment", () => {
    expect(productTranslateErrorFragment).toBeDefined();
  });

  it("should export productVariantTranslateErrorFragment", () => {
    expect(productVariantTranslateErrorFragment).toBeDefined();
  });

  it("should export categoryTranslateErrorFragment", () => {
    expect(categoryTranslateErrorFragment).toBeDefined();
  });

  it("should export collectionTranslateErrorFragment", () => {
    expect(collectionTranslateErrorFragment).toBeDefined();
  });

  it("should export pageTranslateErrorFragment", () => {
    expect(pageTranslateErrorFragment).toBeDefined();
  });

  it("should export voucherTranslateErrorFragment", () => {
    expect(voucherTranslateErrorFragment).toBeDefined();
  });

  it("should export saleTranslateErrorFragment", () => {
    expect(saleTranslateErrorFragment).toBeDefined();
  });

  it("should export attributeTranslateErrorFragment", () => {
    expect(attributeTranslateErrorFragment).toBeDefined();
  });

  it("should export attributeValueTranslateErrorFragment", () => {
    expect(attributeValueTranslateErrorFragment).toBeDefined();
  });

  it("should export shippingPriceTranslateErrorFragment", () => {
    expect(shippingPriceTranslateErrorFragment).toBeDefined();
  });

  it("should export taxConfigurationUpdateError", () => {
    expect(taxConfigurationUpdateError).toBeDefined();
  });

  it("should export taxCountryConfigurationUpdateError", () => {
    expect(taxCountryConfigurationUpdateError).toBeDefined();
  });

  it("should export taxCountryConfigurationDeleteError", () => {
    expect(taxCountryConfigurationDeleteError).toBeDefined();
  });

  it("should export taxClassUpdateError", () => {
    expect(taxClassUpdateError).toBeDefined();
  });

  it("should export taxClassCreateError", () => {
    expect(taxClassCreateError).toBeDefined();
  });

  it("should export taxClassDeleteError", () => {
    expect(taxClassDeleteError).toBeDefined();
  });

  it("should export transactionRequestActionErrorFragment", () => {
    expect(transactionRequestActionErrorFragment).toBeDefined();
  });

  it("should export transactionCreateErrorFragment", () => {
    expect(transactionCreateErrorFragment).toBeDefined();
  });

  it("should export orderGrantRefundCreateErrorFragment", () => {
    expect(orderGrantRefundCreateErrorFragment).toBeDefined();
  });

  it("should export orderGrantRefundUpdateErrorFragment", () => {
    expect(orderGrantRefundUpdateErrorFragment).toBeDefined();
  });

  it("should export transactionRequestRefundForGrantedRefundErrorFragment", () => {
    expect(transactionRequestRefundForGrantedRefundErrorFragment).toBeDefined();
  });
});
