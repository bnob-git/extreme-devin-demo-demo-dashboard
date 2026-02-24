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

import { DEFAULT_SORT_KEY, getSortQueryVariables } from "./sort";

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

  test("getSortQueryVariables is exported", () => {
    expect(getSortQueryVariables).toBeDefined();
  });
});
