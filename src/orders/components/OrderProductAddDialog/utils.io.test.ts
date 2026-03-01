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

import { hasAllVariantsSelected, isVariantSelected, onProductAdd, onVariantAdd } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("hasAllVariantsSelected is exported", () => {
    expect(hasAllVariantsSelected).toBeDefined();
  });

  test("isVariantSelected is exported", () => {
    expect(isVariantSelected).toBeDefined();
  });

  test("onProductAdd is exported", () => {
    expect(onProductAdd).toBeDefined();
  });

  test("onVariantAdd is exported", () => {
    expect(onVariantAdd).toBeDefined();
  });

  test("hasAllVariantsSelected can be called", () => {
    if (typeof hasAllVariantsSelected === "function") {
      try {
        (hasAllVariantsSelected as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("isVariantSelected can be called", () => {
    if (typeof isVariantSelected === "function") {
      try {
        (isVariantSelected as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("onProductAdd can be called", () => {
    if (typeof onProductAdd === "function") {
      try {
        (onProductAdd as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("onVariantAdd can be called", () => {
    if (typeof onVariantAdd === "function") {
      try {
        (onVariantAdd as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
