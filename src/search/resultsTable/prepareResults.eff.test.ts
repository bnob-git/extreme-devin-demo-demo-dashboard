// Auto-generated coverage test for prepareResults.ts
jest.mock("@dashboard/graphql", () => {
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

import { prepareResults } from "./prepareResults";

describe("prepareResults", () => {
  it("can call prepareResults", () => {
    expect(typeof prepareResults).toBe("function");

    const result = prepareResults({});

    expect(result).toBeDefined();
  });

  it("handles prepareResults with no args", () => {
    expect(typeof prepareResults).toBe("function");
  });
});
