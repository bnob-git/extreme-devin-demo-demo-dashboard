import { categories, category, errors } from "./fixtures";

describe("categories/fixtures.ts", () => {
  it("should export categories", () => {
    expect(categories).toBeDefined();
  });

  it("should export category", () => {
    expect(category).toBeDefined();
  });

  it("should export errors", () => {
    expect(errors).toBeDefined();
  });
});
