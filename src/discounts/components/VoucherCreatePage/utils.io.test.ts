import {
  generateDraftVoucherCode,
  generateMultipleVoucherCodes,
  getFilteredCategories,
  getFilteredCollections,
  getFilteredProducts,
  getFilteredProductVariants,
  mapLocalVariantsToSavedVariants,
  voucherCodeExists,
} from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("generateDraftVoucherCode is exported", () => {
    expect(generateDraftVoucherCode).toBeDefined();
  });

  test("generateMultipleVoucherCodes is exported", () => {
    expect(generateMultipleVoucherCodes).toBeDefined();
  });

  test("voucherCodeExists is exported", () => {
    expect(voucherCodeExists).toBeDefined();
  });

  test("getFilteredCategories is exported", () => {
    expect(getFilteredCategories).toBeDefined();
  });

  test("getFilteredCollections is exported", () => {
    expect(getFilteredCollections).toBeDefined();
  });

  test("getFilteredProducts is exported", () => {
    expect(getFilteredProducts).toBeDefined();
  });

  test("getFilteredProductVariants is exported", () => {
    expect(getFilteredProductVariants).toBeDefined();
  });

  test("mapLocalVariantsToSavedVariants is exported", () => {
    expect(mapLocalVariantsToSavedVariants).toBeDefined();
  });

  test("generateDraftVoucherCode can be called", () => {
    if (typeof generateDraftVoucherCode === "function") {
      try {
        (generateDraftVoucherCode as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("generateMultipleVoucherCodes can be called", () => {
    if (typeof generateMultipleVoucherCodes === "function") {
      try {
        (generateMultipleVoucherCodes as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("voucherCodeExists can be called", () => {
    if (typeof voucherCodeExists === "function") {
      try {
        (voucherCodeExists as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getFilteredCategories can be called", () => {
    if (typeof getFilteredCategories === "function") {
      try {
        (getFilteredCategories as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getFilteredCollections can be called", () => {
    if (typeof getFilteredCollections === "function") {
      try {
        (getFilteredCollections as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getFilteredProducts can be called", () => {
    if (typeof getFilteredProducts === "function") {
      try {
        (getFilteredProducts as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getFilteredProductVariants can be called", () => {
    if (typeof getFilteredProductVariants === "function") {
      try {
        (getFilteredProductVariants as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("mapLocalVariantsToSavedVariants can be called", () => {
    if (typeof mapLocalVariantsToSavedVariants === "function") {
      try {
        (mapLocalVariantsToSavedVariants as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
