import { getUnitChoices, unitSystemChoices, unitTypeChoices } from "./utils";

describe("attributes/components/AttributeDetails/utils.ts", () => {
  it("should export getUnitChoices", () => {
    expect(getUnitChoices).toBeDefined();
  });

  it("should export unitSystemChoices", () => {
    expect(unitSystemChoices).toBeDefined();
  });

  it("should export unitTypeChoices", () => {
    expect(unitTypeChoices).toBeDefined();
  });
});
