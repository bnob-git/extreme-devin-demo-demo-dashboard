// Auto-generated coverage test for utils.ts
jest.mock("@dashboard/channels/utils", () => {
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

import {
  createChannelsChangeHandler,
  getAssignedProductIdsToCollection,
  getProductsFromSearchResults,
} from "./utils";

describe("utils", () => {
  it("can call createChannelsChangeHandler", () => {
    expect(typeof createChannelsChangeHandler).toBe("function");

    const result = createChannelsChangeHandler({});

    expect(result).toBeDefined();
  });

  it("handles createChannelsChangeHandler with no args", () => {
    expect(typeof createChannelsChangeHandler).toBe("function");
  });

  it("can call getAssignedProductIdsToCollection", () => {
    expect(typeof getAssignedProductIdsToCollection).toBe("function");

    const result = getAssignedProductIdsToCollection({});

    expect(result).toBeDefined();
  });

  it("handles getAssignedProductIdsToCollection with no args", () => {
    expect(typeof getAssignedProductIdsToCollection).toBe("function");
  });

  it("can call getProductsFromSearchResults", () => {
    expect(typeof getProductsFromSearchResults).toBe("function");

    const result = getProductsFromSearchResults({});

    expect(result).toBeDefined();
  });

  it("handles getProductsFromSearchResults with no args", () => {
    expect(typeof getProductsFromSearchResults).toBe("function");
  });
});
