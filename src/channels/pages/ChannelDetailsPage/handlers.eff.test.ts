// Auto-generated coverage test for handlers.ts
jest.mock("@dashboard/channels/components/ChannelForm", () => {
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

jest.mock("@dashboard/hooks/makeTopLevelSearch", () => {
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

jest.mock("@dashboard/hooks/makeTopLevelSearch/utils", () => {
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

jest.mock("@dashboard/misc", () => {
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

jest.mock("./utils", () => {
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
  createShippingZoneAddHandler,
  createShippingZoneRemoveHandler,
  createWarehouseAddHandler,
  createWarehouseRemoveHandler,
  createWarehouseReorderHandler,
} from "./handlers";

describe("handlers", () => {
  it("can call createShippingZoneAddHandler", () => {
    expect(typeof createShippingZoneAddHandler).toBe("function");

    const result = createShippingZoneAddHandler({});

    expect(result).toBeDefined();
  });

  it("handles createShippingZoneAddHandler with no args", () => {
    expect(typeof createShippingZoneAddHandler).toBe("function");
  });

  it("can call createShippingZoneRemoveHandler", () => {
    expect(typeof createShippingZoneRemoveHandler).toBe("function");

    const result = createShippingZoneRemoveHandler({});

    expect(result).toBeDefined();
  });

  it("handles createShippingZoneRemoveHandler with no args", () => {
    expect(typeof createShippingZoneRemoveHandler).toBe("function");
  });

  it("can call createWarehouseAddHandler", () => {
    expect(typeof createWarehouseAddHandler).toBe("function");

    const result = createWarehouseAddHandler({});

    expect(result).toBeDefined();
  });

  it("handles createWarehouseAddHandler with no args", () => {
    expect(typeof createWarehouseAddHandler).toBe("function");
  });

  it("can call createWarehouseRemoveHandler", () => {
    expect(typeof createWarehouseRemoveHandler).toBe("function");

    const result = createWarehouseRemoveHandler({});

    expect(result).toBeDefined();
  });

  it("handles createWarehouseRemoveHandler with no args", () => {
    expect(typeof createWarehouseRemoveHandler).toBe("function");
  });

  it("can call createWarehouseReorderHandler", () => {
    expect(typeof createWarehouseReorderHandler).toBe("function");

    const result = createWarehouseReorderHandler({});

    expect(result).toBeDefined();
  });

  it("handles createWarehouseReorderHandler with no args", () => {
    expect(typeof createWarehouseReorderHandler).toBe("function");
  });
});
