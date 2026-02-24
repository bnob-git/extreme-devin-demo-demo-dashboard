import {
  menuDetailsFragment,
  menuFragment,
  menuItemFragment,
  menuItemNestedFragment,
} from "./navigation";

describe("fragments/navigation.ts", () => {
  it("should export menuDetailsFragment", () => {
    expect(menuDetailsFragment).toBeDefined();
  });

  it("should export menuFragment", () => {
    expect(menuFragment).toBeDefined();
  });

  it("should export menuItemFragment", () => {
    expect(menuItemFragment).toBeDefined();
  });

  it("should export menuItemNestedFragment", () => {
    expect(menuItemNestedFragment).toBeDefined();
  });
});
