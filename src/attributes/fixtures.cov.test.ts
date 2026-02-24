import { attribute, attributes } from "./fixtures";

describe("attributes/fixtures.ts", () => {
  it("should export attribute", () => {
    expect(attribute).toBeDefined();
  });

  it("should export attributes", () => {
    expect(attributes).toBeDefined();
  });
});
