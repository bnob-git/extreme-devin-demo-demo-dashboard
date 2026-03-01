import {
  taxClassCreate,
  taxClassDelete,
  taxClassUpdate,
  taxConfigurationUpdate,
  taxCountryConfigurationDelete,
  taxCountryConfigurationUpdate,
} from "./mutations";

describe("taxes/mutations.ts", () => {
  it("should export taxClassCreate", () => {
    expect(taxClassCreate).toBeDefined();
  });

  it("should export taxClassDelete", () => {
    expect(taxClassDelete).toBeDefined();
  });

  it("should export taxClassUpdate", () => {
    expect(taxClassUpdate).toBeDefined();
  });

  it("should export taxConfigurationUpdate", () => {
    expect(taxConfigurationUpdate).toBeDefined();
  });

  it("should export taxCountryConfigurationDelete", () => {
    expect(taxCountryConfigurationDelete).toBeDefined();
  });

  it("should export taxCountryConfigurationUpdate", () => {
    expect(taxCountryConfigurationUpdate).toBeDefined();
  });
});
