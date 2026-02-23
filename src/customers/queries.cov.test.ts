import { customerAddresses, customerCreateData, customerDetails, customerList } from "./queries";

describe("customers/queries.ts", () => {
  it("should export customerAddresses", () => {
    expect(customerAddresses).toBeDefined();
  });

  it("should export customerCreateData", () => {
    expect(customerCreateData).toBeDefined();
  });

  it("should export customerDetails", () => {
    expect(customerDetails).toBeDefined();
  });

  it("should export customerList", () => {
    expect(customerList).toBeDefined();
  });
});
