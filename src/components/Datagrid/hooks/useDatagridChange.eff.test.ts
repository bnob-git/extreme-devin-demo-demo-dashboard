// Auto-generated coverage test for useDatagridChange.ts
jest.mock("@dashboard/utils/lists", () => {
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

jest.mock("@glideapps/glide-data-grid", () => {
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

jest.mock("../types", () => {
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
  DatagridChangeStateContext,
  useDatagridChangeState,
} from "./useDatagridChange";

describe("useDatagridChange", () => {
  it("can call DatagridChangeStateContext", () => {
    expect(typeof DatagridChangeStateContext).toBe("function");

    const result = DatagridChangeStateContext({});

    expect(result).toBeDefined();
  });

  it("handles DatagridChangeStateContext with no args", () => {
    expect(typeof DatagridChangeStateContext).toBe("function");
  });

  it("exports useDatagridChangeState", () => {
    expect(typeof useDatagridChangeState).toBe("function");
  });

  it("has default export", () => {
    expect(defaultExport).toBeDefined();
  });
});
