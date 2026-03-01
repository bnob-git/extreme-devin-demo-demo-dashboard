import { searchCustomers } from "./useCustomerSearch";

describe("searches/useCustomerSearch.ts", () => {
  it("should export searchCustomers", () => {
    expect(searchCustomers).toBeDefined();
  });
});
