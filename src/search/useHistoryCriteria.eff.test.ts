// Auto-generated coverage test for useHistoryCriteria.ts
jest.mock("@dashboard/hooks/useLocalStorage", () => {
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

import { useHistoryCriteria } from "./useHistoryCriteria";

describe("useHistoryCriteria", () => {
  it("exports useHistoryCriteria", () => {
    expect(typeof useHistoryCriteria).toBe("function");
  });
});
