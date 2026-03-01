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

import makeSearch, { searchProductAttributes } from "./useAvailableProductAttributeSearch";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useAvailableProductAttributeSearch", () => {
  test("default export is defined", () => {
    expect(makeSearch).toBeDefined();
  });

  test("searchProductAttributes is exported", () => {
    expect(searchProductAttributes).toBeDefined();
  });
});
