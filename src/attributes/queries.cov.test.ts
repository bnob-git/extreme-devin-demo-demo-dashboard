import { attributeDetails, attributeList } from "./queries";

describe("attributes/queries.ts", () => {
  it("should export attributeDetails", () => {
    expect(attributeDetails).toBeDefined();
  });

  it("should export attributeList", () => {
    expect(attributeList).toBeDefined();
  });
});
