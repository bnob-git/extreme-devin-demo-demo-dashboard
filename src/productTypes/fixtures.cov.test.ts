import { attributes, productType, productTypes, productTypeSearch } from "./fixtures";

describe("productTypes/fixtures.ts", () => {
  it("should export attributes", () => {
    expect(attributes).toBeDefined();
  });

  it("should export productType", () => {
    expect(productType).toBeDefined();
  });

  it("should export productTypeSearch", () => {
    expect(productTypeSearch).toBeDefined();
  });

  it("should export productTypes", () => {
    expect(productTypes).toBeDefined();
  });
});
