import {
  productTypeCreateDataQuery,
  productTypeDetailsQuery,
  productTypeListQuery,
} from "./queries";

describe("productTypes/queries.ts", () => {
  it("should export productTypeCreateDataQuery", () => {
    expect(productTypeCreateDataQuery).toBeDefined();
  });

  it("should export productTypeDetailsQuery", () => {
    expect(productTypeDetailsQuery).toBeDefined();
  });

  it("should export productTypeListQuery", () => {
    expect(productTypeListQuery).toBeDefined();
  });
});
