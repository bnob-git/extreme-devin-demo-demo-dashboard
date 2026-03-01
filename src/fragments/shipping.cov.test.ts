import {
  shippingMethodTypeFragment,
  shippingMethodWithExcludedProductsFragment,
  shippingMethodWithPostalCodesFragment,
  shippingZoneDetailsFragment,
  shippingZoneFragment,
} from "./shipping";

describe("fragments/shipping.ts", () => {
  it("should export shippingMethodTypeFragment", () => {
    expect(shippingMethodTypeFragment).toBeDefined();
  });

  it("should export shippingMethodWithExcludedProductsFragment", () => {
    expect(shippingMethodWithExcludedProductsFragment).toBeDefined();
  });

  it("should export shippingMethodWithPostalCodesFragment", () => {
    expect(shippingMethodWithPostalCodesFragment).toBeDefined();
  });

  it("should export shippingZoneDetailsFragment", () => {
    expect(shippingZoneDetailsFragment).toBeDefined();
  });

  it("should export shippingZoneFragment", () => {
    expect(shippingZoneFragment).toBeDefined();
  });
});
