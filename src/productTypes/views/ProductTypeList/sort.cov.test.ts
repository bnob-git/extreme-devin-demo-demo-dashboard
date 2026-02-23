import { getSortQueryVariables } from "./sort";

describe("productTypes/views/ProductTypeList/sort.ts", () => {
  it("should export getSortQueryVariables", () => {
    expect(getSortQueryVariables).toBeDefined();
  });
});
