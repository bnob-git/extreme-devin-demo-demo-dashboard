import { DEFAULT_SORT_KEY, getSortQueryVariables } from "./sort";

describe("orders/views/OrderList/sort.ts", () => {
  it("should export DEFAULT_SORT_KEY", () => {
    expect(DEFAULT_SORT_KEY).toBeDefined();
  });

  it("should export getSortQueryVariables", () => {
    expect(getSortQueryVariables).toBeDefined();
  });
});
