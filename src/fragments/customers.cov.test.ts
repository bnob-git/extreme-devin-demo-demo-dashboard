import { customerAddressesFragment, customerDetailsFragment, customerFragment } from "./customers";

describe("fragments/customers.ts", () => {
  it("should export customerAddressesFragment", () => {
    expect(customerAddressesFragment).toBeDefined();
  });

  it("should export customerDetailsFragment", () => {
    expect(customerDetailsFragment).toBeDefined();
  });

  it("should export customerFragment", () => {
    expect(customerFragment).toBeDefined();
  });
});
