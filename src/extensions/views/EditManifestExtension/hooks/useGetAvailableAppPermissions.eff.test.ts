// Auto-generated coverage test for useGetAvailableAppPermissions.ts
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

jest.mock("@dashboard/hooks/useShop", () => {
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

import { useGetAvailableAppPermissions } from "./useGetAvailableAppPermissions";

describe("useGetAvailableAppPermissions", () => {
  it("exports useGetAvailableAppPermissions", () => {
    expect(typeof useGetAvailableAppPermissions).toBe("function");
  });
});
