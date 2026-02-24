import { countryFragment, languageFragment, limitFragment, shopFragment } from "./shop";

describe("fragments/shop.ts", () => {
  it("should export countryFragment", () => {
    expect(countryFragment).toBeDefined();
  });

  it("should export languageFragment", () => {
    expect(languageFragment).toBeDefined();
  });

  it("should export limitFragment", () => {
    expect(limitFragment).toBeDefined();
  });

  it("should export shopFragment", () => {
    expect(shopFragment).toBeDefined();
  });
});
