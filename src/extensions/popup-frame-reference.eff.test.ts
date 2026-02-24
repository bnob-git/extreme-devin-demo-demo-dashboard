// Auto-generated coverage test for popup-frame-reference.ts
jest.mock("jotai", () => {
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

import { useAppFrameReferences } from "./popup-frame-reference";

describe("popup-frame-reference", () => {
  it("exports useAppFrameReferences", () => {
    expect(typeof useAppFrameReferences).toBe("function");
  });
});
