import {
  bulkRemoveCustomers,
  createCustomer,
  createCustomerAddress,
  removeCustomer,
  removeCustomerAddress,
  setCustomerDefaultAddress,
  updateCustomer,
  updateCustomerAddress,
} from "./mutations";

describe("customers/mutations.ts", () => {
  it("should export bulkRemoveCustomers", () => {
    expect(bulkRemoveCustomers).toBeDefined();
  });

  it("should export createCustomer", () => {
    expect(createCustomer).toBeDefined();
  });

  it("should export createCustomerAddress", () => {
    expect(createCustomerAddress).toBeDefined();
  });

  it("should export removeCustomer", () => {
    expect(removeCustomer).toBeDefined();
  });

  it("should export removeCustomerAddress", () => {
    expect(removeCustomerAddress).toBeDefined();
  });

  it("should export setCustomerDefaultAddress", () => {
    expect(setCustomerDefaultAddress).toBeDefined();
  });

  it("should export updateCustomer", () => {
    expect(updateCustomer).toBeDefined();
  });

  it("should export updateCustomerAddress", () => {
    expect(updateCustomerAddress).toBeDefined();
  });
});
