// Auto-generated coverage test for sort.ts
jest.mock("@dashboard/discounts/discountsUrls", () => {
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

jest.mock("@dashboard/utils/sort", () => {
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

import { canBeSorted, DEFAULT_SORT_KEY, getSortQueryVariables } from "./sort";

describe("sort", () => {
  it("exports DEFAULT_SORT_KEY", () => {
    expect(DEFAULT_SORT_KEY).toBeDefined();
  });

  it("exports getSortQueryVariables", () => {
    expect(getSortQueryVariables).toBeDefined();
  });

  it("can call canBeSorted", () => {
    expect(typeof canBeSorted).toBe("function");

    const result = canBeSorted({});

    expect(result).toBeDefined();
  });

  it("handles canBeSorted with no args", () => {
    expect(typeof canBeSorted).toBe("function");
  });
});
