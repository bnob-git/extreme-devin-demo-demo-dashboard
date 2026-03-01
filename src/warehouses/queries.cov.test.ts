import { warehouseDetails, warehouseList, warehousesCount } from "./queries";

describe("warehouses/queries.ts", () => {
  it("should export warehouseDetails", () => {
    expect(warehouseDetails).toBeDefined();
  });

  it("should export warehouseList", () => {
    expect(warehouseList).toBeDefined();
  });

  it("should export warehousesCount", () => {
    expect(warehousesCount).toBeDefined();
  });
});
