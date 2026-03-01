import {
  collectionDetailsFragment,
  collectionFragment,
  collectionProductFragment,
  collectionWithTotalProductsFragment,
} from "./collections";

describe("fragments/collections.ts", () => {
  it("should export collectionDetailsFragment", () => {
    expect(collectionDetailsFragment).toBeDefined();
  });

  it("should export collectionFragment", () => {
    expect(collectionFragment).toBeDefined();
  });

  it("should export collectionProductFragment", () => {
    expect(collectionProductFragment).toBeDefined();
  });

  it("should export collectionWithTotalProductsFragment", () => {
    expect(collectionWithTotalProductsFragment).toBeDefined();
  });
});
