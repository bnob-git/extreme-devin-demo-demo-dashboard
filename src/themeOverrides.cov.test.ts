import { paletteOverrides, themeOverrides } from "./themeOverrides";

describe("themeOverrides.ts", () => {
  it("should export paletteOverrides", () => {
    expect(paletteOverrides).toBeDefined();
  });

  it("should export themeOverrides", () => {
    expect(themeOverrides).toBeDefined();
  });
});
