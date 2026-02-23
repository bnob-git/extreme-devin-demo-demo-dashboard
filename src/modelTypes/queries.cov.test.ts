import { pageTypeDetailsQuery, pageTypeListQuery } from "./queries";

describe("modelTypes/queries.ts", () => {
  it("should export pageTypeDetailsQuery", () => {
    expect(pageTypeDetailsQuery).toBeDefined();
  });

  it("should export pageTypeListQuery", () => {
    expect(pageTypeListQuery).toBeDefined();
  });
});
