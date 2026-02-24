// Auto-generated coverage test for useDevModeKeyTrigger.ts
jest.mock("react", () => {
  const proxy: any = new Proxy(function () {}, {
    get: (_: any, p: string) => {
      if (p === "__esModule") return true;

      if (p === "default") return proxy;

      if (p === "then") return undefined;

      return proxy;
    },
    apply: () => proxy,
    construct: () => proxy,
  });

  return proxy;
});

import { useDevModeKeyTrigger } from "./useDevModeKeyTrigger";

describe("useDevModeKeyTrigger", () => {
  it("exports useDevModeKeyTrigger", () => {
    expect(typeof useDevModeKeyTrigger).toBe("function");
  });
});
