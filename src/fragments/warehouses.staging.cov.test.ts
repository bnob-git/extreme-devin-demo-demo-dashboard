import {
  warehouseDetailsFragment,
  warehouseFragment,
  warehouseWithShippingFragment,
} from "./warehouses.staging";

describe("fragments/warehouses.staging.ts", () => {
  it("should export warehouseDetailsFragment", () => {
    expect(warehouseDetailsFragment).toBeDefined();
  });

  it("should export warehouseFragment", () => {
    expect(warehouseFragment).toBeDefined();
  });

  it("should export warehouseWithShippingFragment", () => {
    expect(warehouseWithShippingFragment).toBeDefined();
  });
});
