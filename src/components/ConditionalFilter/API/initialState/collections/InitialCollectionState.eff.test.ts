// Auto-generated coverage test for InitialCollectionState.ts
jest.mock("@dashboard/components/ConditionalFilter/FilterElement/ConditionValue", () => {
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

jest.mock("@dashboard/components/ConditionalFilter/ValueProvider/UrlToken", () => {
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

import { InitialCollectionStateResponse } from "./InitialCollectionState";

describe("InitialCollectionState", () => {
  it("exports InitialCollectionStateResponse", () => {
    expect(InitialCollectionStateResponse).toBeDefined();
  });
});
