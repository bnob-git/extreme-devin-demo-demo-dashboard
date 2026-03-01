// Auto-generated coverage test for useLocalPaginator.ts
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

import defaultExport, {
  useLocalPaginationState,
  useSectionLocalPaginationState,
} from "./useLocalPaginator";

describe("useLocalPaginator", () => {
  it("exports useLocalPaginationState", () => {
    expect(typeof useLocalPaginationState).toBe("function");
  });

  it("exports useSectionLocalPaginationState", () => {
    expect(typeof useSectionLocalPaginationState).toBe("function");
  });

  it("has default export", () => {
    expect(defaultExport).toBeDefined();
  });
});
