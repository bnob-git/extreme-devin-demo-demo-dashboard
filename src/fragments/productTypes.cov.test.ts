import { productTypeDetailsFragment, productTypeFragment } from "./productTypes";

describe("fragments/productTypes.ts", () => {
  it("should export productTypeDetailsFragment", () => {
    expect(productTypeDetailsFragment).toBeDefined();
  });

  it("should export productTypeFragment", () => {
    expect(productTypeFragment).toBeDefined();
  });
});
