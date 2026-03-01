jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import ProductVariantNavigation from "./ProductVariantNavigation";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ProductVariantNavigation", () => {
  test("default export is defined", () => {
    expect(ProductVariantNavigation).toBeDefined();
  });
});
