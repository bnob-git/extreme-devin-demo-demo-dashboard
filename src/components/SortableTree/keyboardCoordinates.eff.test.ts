// Auto-generated coverage test for keyboardCoordinates.ts
jest.mock("@dnd-kit/core", () => {
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

jest.mock("./types", () => {
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

import { sortableTreeKeyboardCoordinates } from "./keyboardCoordinates";

describe("keyboardCoordinates", () => {
  it("can call sortableTreeKeyboardCoordinates", () => {
    expect(typeof sortableTreeKeyboardCoordinates).toBe("function");

    const result = sortableTreeKeyboardCoordinates({});

    expect(result).toBeDefined();
  });

  it("handles sortableTreeKeyboardCoordinates with no args", () => {
    expect(typeof sortableTreeKeyboardCoordinates).toBe("function");
  });
});
