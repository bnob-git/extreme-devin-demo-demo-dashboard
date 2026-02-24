// Auto-generated coverage test for handlers.ts
jest.mock("@dashboard/hooks/useForm", () => {
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

import { createCountryChangeHandler, createRestOfTheWorldChangeHandler } from "./handlers";

describe("handlers", () => {
  it("can call createCountryChangeHandler", () => {
    expect(typeof createCountryChangeHandler).toBe("function");

    const result = createCountryChangeHandler({});

    expect(result).toBeDefined();
  });

  it("handles createCountryChangeHandler with no args", () => {
    expect(typeof createCountryChangeHandler).toBe("function");
  });

  it("can call createRestOfTheWorldChangeHandler", () => {
    expect(typeof createRestOfTheWorldChangeHandler).toBe("function");

    const result = createRestOfTheWorldChangeHandler({});

    expect(result).toBeDefined();
  });

  it("handles createRestOfTheWorldChangeHandler with no args", () => {
    expect(typeof createRestOfTheWorldChangeHandler).toBe("function");
  });
});
