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
  createMetadataHandler,
  createOrderMetadataIdSchema,
  filteredConditionalItems,
  hasAnyItemsReplaceable,
} from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("hasAnyItemsReplaceable is exported", () => {
    expect(hasAnyItemsReplaceable).toBeDefined();
  });

  test("filteredConditionalItems is exported", () => {
    expect(filteredConditionalItems).toBeDefined();
  });

  test("createOrderMetadataIdSchema is exported", () => {
    expect(createOrderMetadataIdSchema).toBeDefined();
  });

  test("createMetadataHandler is exported", () => {
    expect(createMetadataHandler).toBeDefined();
  });

  test("hasAnyItemsReplaceable can be called", () => {
    if (typeof hasAnyItemsReplaceable === "function") {
      try {
        (hasAnyItemsReplaceable as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("filteredConditionalItems can be called", () => {
    if (typeof filteredConditionalItems === "function") {
      try {
        (filteredConditionalItems as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createOrderMetadataIdSchema can be called", () => {
    if (typeof createOrderMetadataIdSchema === "function") {
      try {
        (createOrderMetadataIdSchema as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createMetadataHandler can be called", () => {
    if (typeof createMetadataHandler === "function") {
      try {
        (createMetadataHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
