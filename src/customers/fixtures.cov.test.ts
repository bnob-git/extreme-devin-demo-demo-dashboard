import { customer, customerList, customers } from "./fixtures";

describe("customers/fixtures.ts", () => {
  it("should export customer", () => {
    expect(customer).toBeDefined();
  });

  it("should export customerList", () => {
    expect(customerList).toBeDefined();
  });

  it("should export customers", () => {
    expect(customers).toBeDefined();
  });
});
