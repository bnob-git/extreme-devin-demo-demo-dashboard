import { getSortQueryVariables } from "./sort";

describe("categories/views/CategoryList/sort.ts", () => {
  it("should export getSortQueryVariables", () => {
    expect(getSortQueryVariables).toBeDefined();
  });
});
