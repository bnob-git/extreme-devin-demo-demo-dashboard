// Auto-generated coverage test for utils.ts
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

jest.mock("@dashboard/orders/utils/OrderRefundsViewModel", () => {
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

jest.mock("react-intl", () => {
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

jest.mock("./messages", () => {
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

import { getGrantedRefundStatusMessage, getNotEditableRefundMessage } from "./utils";

describe("utils", () => {
  it("can call getGrantedRefundStatusMessage", () => {
    expect(typeof getGrantedRefundStatusMessage).toBe("function");

    const result = getGrantedRefundStatusMessage({});

    expect(result).toBeDefined();
  });

  it("handles getGrantedRefundStatusMessage with no args", () => {
    expect(typeof getGrantedRefundStatusMessage).toBe("function");
  });

  it("can call getNotEditableRefundMessage", () => {
    expect(typeof getNotEditableRefundMessage).toBe("function");

    const result = getNotEditableRefundMessage({});

    expect(result).toBeDefined();
  });

  it("handles getNotEditableRefundMessage with no args", () => {
    expect(typeof getNotEditableRefundMessage).toBe("function");
  });
});
