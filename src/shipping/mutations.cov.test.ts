import {
  bulkDeleteShippingRate,
  bulkDeleteShippingZone,
  createShippingRate,
  createShippingZone,
  deleteShippingRate,
  deleteShippingZone,
  shippingMethodChannelListingUpdate,
  shippingPriceExcludeProducts,
  shippingPriceRemoveProductsFromExclude,
  updateDefaultWeightUnit,
  updateShippingRate,
  updateShippingZone,
} from "./mutations";

describe("shipping/mutations.ts", () => {
  it("should export bulkDeleteShippingRate", () => {
    expect(bulkDeleteShippingRate).toBeDefined();
  });

  it("should export bulkDeleteShippingZone", () => {
    expect(bulkDeleteShippingZone).toBeDefined();
  });

  it("should export createShippingRate", () => {
    expect(createShippingRate).toBeDefined();
  });

  it("should export createShippingZone", () => {
    expect(createShippingZone).toBeDefined();
  });

  it("should export deleteShippingRate", () => {
    expect(deleteShippingRate).toBeDefined();
  });

  it("should export deleteShippingZone", () => {
    expect(deleteShippingZone).toBeDefined();
  });

  it("should export shippingMethodChannelListingUpdate", () => {
    expect(shippingMethodChannelListingUpdate).toBeDefined();
  });

  it("should export shippingPriceExcludeProducts", () => {
    expect(shippingPriceExcludeProducts).toBeDefined();
  });

  it("should export shippingPriceRemoveProductsFromExclude", () => {
    expect(shippingPriceRemoveProductsFromExclude).toBeDefined();
  });

  it("should export updateDefaultWeightUnit", () => {
    expect(updateDefaultWeightUnit).toBeDefined();
  });

  it("should export updateShippingRate", () => {
    expect(updateShippingRate).toBeDefined();
  });

  it("should export updateShippingZone", () => {
    expect(updateShippingZone).toBeDefined();
  });
});
