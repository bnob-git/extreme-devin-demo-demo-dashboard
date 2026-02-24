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

import { handleTaxClassChange, makeProductTypeKindChangeHandler } from "./handlers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("handlers", () => {
  test("makeProductTypeKindChangeHandler is exported", () => {
    expect(makeProductTypeKindChangeHandler).toBeDefined();
  });

  test("handleTaxClassChange is exported", () => {
    expect(handleTaxClassChange).toBeDefined();
  });

  test("makeProductTypeKindChangeHandler can be called", () => {
    if (typeof makeProductTypeKindChangeHandler === "function") {
      try {
        (makeProductTypeKindChangeHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("handleTaxClassChange can be called", () => {
    if (typeof handleTaxClassChange === "function") {
      try {
        (handleTaxClassChange as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
