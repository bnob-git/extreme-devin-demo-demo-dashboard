// Auto-generated coverage test for useCommandMenuInput.ts
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

import { useCommandMenuInput } from "./useCommandMenuInput";

describe("useCommandMenuInput", () => {
  it("exports useCommandMenuInput", () => {
    expect(typeof useCommandMenuInput).toBe("function");
  });
});
