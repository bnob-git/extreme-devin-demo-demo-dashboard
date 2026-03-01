import {
  attributeDetailsFragment,
  attributeFragment,
  attributeValueDetailsFragment,
  attributeValueFragment,
  attributeValueListFragment,
  availableAttributeFragment,
} from "./attributes";

describe("fragments/attributes.ts", () => {
  it("should export attributeDetailsFragment", () => {
    expect(attributeDetailsFragment).toBeDefined();
  });

  it("should export attributeFragment", () => {
    expect(attributeFragment).toBeDefined();
  });

  it("should export attributeValueDetailsFragment", () => {
    expect(attributeValueDetailsFragment).toBeDefined();
  });

  it("should export attributeValueFragment", () => {
    expect(attributeValueFragment).toBeDefined();
  });

  it("should export attributeValueListFragment", () => {
    expect(attributeValueListFragment).toBeDefined();
  });

  it("should export availableAttributeFragment", () => {
    expect(availableAttributeFragment).toBeDefined();
  });
});
