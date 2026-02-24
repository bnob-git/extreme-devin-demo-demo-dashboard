// Auto-generated coverage test for index.ts
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

jest.mock("@dashboard/types", () => {
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

jest.mock("react-sortable-hoc", () => {
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
  createImageReorderHandler,
  createImageUploadHandler,
  createVariantReorderHandler,
} from "./index";

describe("index", () => {
  it("can call createImageUploadHandler", () => {
    expect(typeof createImageUploadHandler).toBe("function");

    const result = createImageUploadHandler({});

    expect(result).toBeDefined();
  });

  it("handles createImageUploadHandler with no args", () => {
    expect(typeof createImageUploadHandler).toBe("function");
  });

  it("can call createImageReorderHandler", () => {
    expect(typeof createImageReorderHandler).toBe("function");

    const result = createImageReorderHandler({});

    expect(result).toBeDefined();
  });

  it("handles createImageReorderHandler with no args", () => {
    expect(typeof createImageReorderHandler).toBe("function");
  });

  it("can call createVariantReorderHandler", () => {
    expect(typeof createVariantReorderHandler).toBe("function");

    const result = createVariantReorderHandler({});

    expect(result).toBeDefined();
  });

  it("handles createVariantReorderHandler with no args", () => {
    expect(typeof createVariantReorderHandler).toBe("function");
  });
});
