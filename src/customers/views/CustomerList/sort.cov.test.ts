import { getSortQueryVariables } from "./sort";

describe("customers/views/CustomerList/sort.ts", () => {
  it("should export getSortQueryVariables", () => {
    expect(getSortQueryVariables).toBeDefined();
  });
});
