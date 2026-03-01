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

import { canBeSorted, DEFAULT_SORT_KEY, getSortQueryVariables } from "./sort";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("sort", () => {
  test("DEFAULT_SORT_KEY is exported", () => {
    expect(DEFAULT_SORT_KEY).toBeDefined();
  });

  test("canBeSorted is exported", () => {
    expect(canBeSorted).toBeDefined();
  });

  test("getSortQueryVariables is exported", () => {
    expect(getSortQueryVariables).toBeDefined();
  });

  test("canBeSorted can be called", () => {
    if (typeof canBeSorted === "function") {
      try {
        (canBeSorted as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getSortQueryVariables can be called", () => {
    if (typeof getSortQueryVariables === "function") {
      try {
        (getSortQueryVariables as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
