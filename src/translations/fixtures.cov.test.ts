import { languages } from "./fixtures";

describe("translations/fixtures.ts", () => {
  it("should export languages", () => {
    expect(languages).toBeDefined();
  });
});
