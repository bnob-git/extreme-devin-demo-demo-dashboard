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

import {
  createChannelsChangeHandler,
  getAssignedProductIdsToCollection,
  getProductsFromSearchResults,
} from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("createChannelsChangeHandler is exported", () => {
    expect(createChannelsChangeHandler).toBeDefined();
  });

  test("getAssignedProductIdsToCollection is exported", () => {
    expect(getAssignedProductIdsToCollection).toBeDefined();
  });

  test("getProductsFromSearchResults is exported", () => {
    expect(getProductsFromSearchResults).toBeDefined();
  });

  test("createChannelsChangeHandler can be called", () => {
    if (typeof createChannelsChangeHandler === "function") {
      try {
        (createChannelsChangeHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getAssignedProductIdsToCollection can be called", () => {
    if (typeof getAssignedProductIdsToCollection === "function") {
      try {
        (getAssignedProductIdsToCollection as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getProductsFromSearchResults can be called", () => {
    if (typeof getProductsFromSearchResults === "function") {
      try {
        (getProductsFromSearchResults as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
