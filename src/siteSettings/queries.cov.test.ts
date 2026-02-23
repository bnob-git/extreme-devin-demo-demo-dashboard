import { siteSettings } from "./queries";

describe("siteSettings/queries.ts", () => {
  it("should export siteSettings", () => {
    expect(siteSettings).toBeDefined();
  });
});
