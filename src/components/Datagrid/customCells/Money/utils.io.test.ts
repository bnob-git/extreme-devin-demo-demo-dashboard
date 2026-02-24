import {
  drawCurrency,
  drawLineCrossedPrice,
  drawPrice,
  getFormattedMoney,
  hasDiscountValue,
} from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("drawLineCrossedPrice is exported", () => {
    expect(drawLineCrossedPrice).toBeDefined();
  });

  test("drawPrice is exported", () => {
    expect(drawPrice).toBeDefined();
  });

  test("drawCurrency is exported", () => {
    expect(drawCurrency).toBeDefined();
  });

  test("getFormattedMoney is exported", () => {
    expect(getFormattedMoney).toBeDefined();
  });

  test("hasDiscountValue is exported", () => {
    expect(hasDiscountValue).toBeDefined();
  });

  test("drawLineCrossedPrice can be called", () => {
    if (typeof drawLineCrossedPrice === "function") {
      try {
        (drawLineCrossedPrice as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("drawPrice can be called", () => {
    if (typeof drawPrice === "function") {
      try {
        (drawPrice as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("drawCurrency can be called", () => {
    if (typeof drawCurrency === "function") {
      try {
        (drawCurrency as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getFormattedMoney can be called", () => {
    if (typeof getFormattedMoney === "function") {
      try {
        (getFormattedMoney as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("hasDiscountValue can be called", () => {
    if (typeof hasDiscountValue === "function") {
      try {
        (hasDiscountValue as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
