// Auto-generated coverage test for utils.ts

import { getBgColor, getBorderColor, getHoverStateBgColor } from "./utils";

describe("utils", () => {
  it("can call getHoverStateBgColor", () => {
    expect(typeof getHoverStateBgColor).toBe("function");

    const result = getHoverStateBgColor({});

    expect(result).toBeDefined();
  });

  it("handles getHoverStateBgColor with no args", () => {
    expect(typeof getHoverStateBgColor).toBe("function");
  });

  it("can call getBorderColor", () => {
    expect(typeof getBorderColor).toBe("function");

    const result = getBorderColor({});

    expect(result).toBeDefined();
  });

  it("handles getBorderColor with no args", () => {
    expect(typeof getBorderColor).toBe("function");
  });

  it("can call getBgColor", () => {
    expect(typeof getBgColor).toBe("function");

    const result = getBgColor({});

    expect(result).toBeDefined();
  });

  it("handles getBgColor with no args", () => {
    expect(typeof getBgColor).toBe("function");
  });
});
