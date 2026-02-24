import ProductMediaNavigation from "./ProductMediaNavigation";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ProductMediaNavigation", () => {
  test("default export is defined", () => {
    expect(ProductMediaNavigation).toBeDefined();
  });
});
