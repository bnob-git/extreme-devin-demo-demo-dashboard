// Auto-generated utility test

jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_: any, p: string) => {
          if (p === "__esModule") return true;

          return p;
        },
      },
    ),
);

import {
  createProductTypeConstraintElement,
  createWrappedValueProvider,
  getFilteredProductOptions,
  stripGlobalConstraints,
} from "./useModalProductFilter";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {
    /* expected */
  });
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("getFilteredProductOptions", () => {
  test("is defined", () => {
    expect(getFilteredProductOptions).toBeDefined();
  });
});

describe("createProductTypeConstraintElement", () => {
  test("is defined", () => {
    expect(createProductTypeConstraintElement).toBeDefined();
  });
});

describe("stripGlobalConstraints", () => {
  test("is defined", () => {
    expect(stripGlobalConstraints).toBeDefined();
  });
});

describe("createWrappedValueProvider", () => {
  test("is defined", () => {
    expect(createWrappedValueProvider).toBeDefined();
  });
});
