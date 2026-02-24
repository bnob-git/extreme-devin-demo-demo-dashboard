import { modelTypes, refundsSettings } from "./queries";

describe("refundsSettings/queries.ts", () => {
  it("should export modelTypes", () => {
    expect(modelTypes).toBeDefined();
  });

  it("should export refundsSettings", () => {
    expect(refundsSettings).toBeDefined();
  });
});
