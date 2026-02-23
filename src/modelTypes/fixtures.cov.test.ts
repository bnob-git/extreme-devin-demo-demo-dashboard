import { pageType, pageTypes } from "./fixtures";

describe("modelTypes/fixtures.ts", () => {
  it("should export pageType", () => {
    expect(pageType).toBeDefined();
  });

  it("should export pageTypes", () => {
    expect(pageTypes).toBeDefined();
  });
});
