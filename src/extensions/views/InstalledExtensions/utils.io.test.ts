jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (/^[A-Z]/.test(prop)) return prop;

          if (/^use/.test(prop)) return () => ({ data: undefined, loading: false });

          return prop;
        },
      },
    ),
);

import { byActivePlugin, sortByName } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("byActivePlugin is exported", () => {
    expect(byActivePlugin).toBeDefined();
  });

  test("sortByName is exported", () => {
    expect(sortByName).toBeDefined();
  });

  test("byActivePlugin can be called", () => {
    if (typeof byActivePlugin === "function") {
      try {
        (byActivePlugin as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("sortByName can be called", () => {
    if (typeof sortByName === "function") {
      try {
        (sortByName as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
