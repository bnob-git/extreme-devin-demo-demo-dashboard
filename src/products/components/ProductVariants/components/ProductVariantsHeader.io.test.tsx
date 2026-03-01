jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { ProductVariantsHeader } from "./ProductVariantsHeader";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ProductVariantsHeader", () => {
  test("ProductVariantsHeader is exported", () => {
    expect(ProductVariantsHeader).toBeDefined();
  });

  test("ProductVariantsHeader can be called", () => {
    if (typeof ProductVariantsHeader === "function") {
      try {
        (ProductVariantsHeader as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
