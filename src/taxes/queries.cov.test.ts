import {
  taxClassAssign,
  taxClassesList,
  taxConfigurationsList,
  taxCountriesList,
  taxStrategyChoices,
} from "./queries";

describe("taxes/queries.ts", () => {
  it("should export taxClassAssign", () => {
    expect(taxClassAssign).toBeDefined();
  });

  it("should export taxClassesList", () => {
    expect(taxClassesList).toBeDefined();
  });

  it("should export taxConfigurationsList", () => {
    expect(taxConfigurationsList).toBeDefined();
  });

  it("should export taxCountriesList", () => {
    expect(taxCountriesList).toBeDefined();
  });

  it("should export taxStrategyChoices", () => {
    expect(taxStrategyChoices).toBeDefined();
  });
});
