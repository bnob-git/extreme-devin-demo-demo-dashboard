import { getSortQueryVariables } from "./sort";

describe("orders/views/OrderDraftList/sort.ts", () => {
  it("should export getSortQueryVariables", () => {
    expect(getSortQueryVariables).toBeDefined();
  });
});
