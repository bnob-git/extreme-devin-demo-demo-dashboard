import {
  countryFragment,
  taxClassBaseFragment,
  taxClassFragment,
  taxConfiguration,
  taxConfigurationPerCountry,
  taxCountryConfigurationFragment,
  taxedMoneyFragment,
  taxRateFragment,
} from "./taxes";

describe("fragments/taxes.ts", () => {
  it("should export countryFragment", () => {
    expect(countryFragment).toBeDefined();
  });

  it("should export taxClassBaseFragment", () => {
    expect(taxClassBaseFragment).toBeDefined();
  });

  it("should export taxClassFragment", () => {
    expect(taxClassFragment).toBeDefined();
  });

  it("should export taxConfiguration", () => {
    expect(taxConfiguration).toBeDefined();
  });

  it("should export taxConfigurationPerCountry", () => {
    expect(taxConfigurationPerCountry).toBeDefined();
  });

  it("should export taxCountryConfigurationFragment", () => {
    expect(taxCountryConfigurationFragment).toBeDefined();
  });

  it("should export taxRateFragment", () => {
    expect(taxRateFragment).toBeDefined();
  });

  it("should export taxedMoneyFragment", () => {
    expect(taxedMoneyFragment).toBeDefined();
  });
});
