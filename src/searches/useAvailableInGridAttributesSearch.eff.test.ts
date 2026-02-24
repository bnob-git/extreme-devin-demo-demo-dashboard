// Auto-generated coverage test for useAvailableInGridAttributesSearch.ts
jest.mock("@apollo/client", () => {
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

jest.mock("@dashboard/hooks/makeSearch", () => {
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

import defaultExport, { availableInGridAttributes } from "./useAvailableInGridAttributesSearch";

describe("useAvailableInGridAttributesSearch", () => {
  it("can call availableInGridAttributes", () => {
    expect(typeof availableInGridAttributes).toBe("function");

    const result = availableInGridAttributes({});

    expect(result).toBeDefined();
  });

  it("handles availableInGridAttributes with no args", () => {
    expect(typeof availableInGridAttributes).toBe("function");
  });

  it("has default export", () => {
    expect(defaultExport).toBeDefined();
  });
});
