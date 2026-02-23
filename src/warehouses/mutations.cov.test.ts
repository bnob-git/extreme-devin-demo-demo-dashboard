import { createWarehouse, deleteWarehouse, updateWarehouse } from "./mutations";

describe("warehouses/mutations.ts", () => {
  it("should export createWarehouse", () => {
    expect(createWarehouse).toBeDefined();
  });

  it("should export deleteWarehouse", () => {
    expect(deleteWarehouse).toBeDefined();
  });

  it("should export updateWarehouse", () => {
    expect(updateWarehouse).toBeDefined();
  });
});
