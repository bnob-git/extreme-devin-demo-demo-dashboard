import { getSortQueryVariables } from "./sort";

describe("warehouses/views/WarehouseList/sort.ts", () => {
  it("should export getSortQueryVariables", () => {
    expect(getSortQueryVariables).toBeDefined();
  });
});
