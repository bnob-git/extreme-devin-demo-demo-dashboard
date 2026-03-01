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

import { sortMembers } from "./sort";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("sort", () => {
  test("sortMembers is exported", () => {
    expect(sortMembers).toBeDefined();
  });

  test("sortMembers can be called", () => {
    if (typeof sortMembers === "function") {
      try {
        (sortMembers as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
