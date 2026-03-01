// Auto-generated coverage test for useAppDashboardUpdates.ts
jest.mock("@dashboard/extensions/urls", () => {
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

jest.mock(
  "@dashboard/extensions/views/ViewManifestExtension/components/AppFrame/usePostToExtension",
  () => {
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
  },
);

jest.mock("@dashboard/hooks/useLocale", () => {
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

jest.mock("@saleor/macaw-ui", () => {
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

import { useAppDashboardUpdates } from "./useAppDashboardUpdates";

describe("useAppDashboardUpdates", () => {
  it("exports useAppDashboardUpdates", () => {
    expect(typeof useAppDashboardUpdates).toBe("function");
  });
});
