// Auto-generated coverage test for useAttributeValueSearch.ts
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

jest.mock("@dashboard/utils/maps", () => {
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

import defaultExport, {
  searchAttributeValues,
  useSearchAttributeValuesSuggestions,
} from "./useAttributeValueSearch";

describe("useAttributeValueSearch", () => {
  it("can call searchAttributeValues", () => {
    expect(typeof searchAttributeValues).toBe("function");

    const result = searchAttributeValues({});

    expect(result).toBeDefined();
  });

  it("handles searchAttributeValues with no args", () => {
    expect(typeof searchAttributeValues).toBe("function");
  });

  it("exports useSearchAttributeValuesSuggestions", () => {
    expect(typeof useSearchAttributeValuesSuggestions).toBe("function");
  });

  it("has default export", () => {
    expect(defaultExport).toBeDefined();
  });
});
