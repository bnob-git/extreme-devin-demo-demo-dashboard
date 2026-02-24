import { categoryDetails, rootCategories } from "./queries";

describe("categories/queries.ts", () => {
  it("should export categoryDetails", () => {
    expect(categoryDetails).toBeDefined();
  });

  it("should export rootCategories", () => {
    expect(rootCategories).toBeDefined();
  });
});
