import {
  pageAttributesFragment,
  pageDetailsFragment,
  pageFragment,
  pageSelectedAttribute,
} from "./pages";

describe("fragments/pages.ts", () => {
  it("should export pageAttributesFragment", () => {
    expect(pageAttributesFragment).toBeDefined();
  });

  it("should export pageDetailsFragment", () => {
    expect(pageDetailsFragment).toBeDefined();
  });

  it("should export pageFragment", () => {
    expect(pageFragment).toBeDefined();
  });

  it("should export pageSelectedAttribute", () => {
    expect(pageSelectedAttribute).toBeDefined();
  });
});
