import {
  categoryDetailsFragment,
  categoryFragment,
  categoryWithAncestorFragment,
  categoryWithTotalProductsFragment,
} from "./categories";

describe("fragments/categories.ts", () => {
  it("should export categoryDetailsFragment", () => {
    expect(categoryDetailsFragment).toBeDefined();
  });

  it("should export categoryFragment", () => {
    expect(categoryFragment).toBeDefined();
  });

  it("should export categoryWithAncestorFragment", () => {
    expect(categoryWithAncestorFragment).toBeDefined();
  });

  it("should export categoryWithTotalProductsFragment", () => {
    expect(categoryWithTotalProductsFragment).toBeDefined();
  });
});
