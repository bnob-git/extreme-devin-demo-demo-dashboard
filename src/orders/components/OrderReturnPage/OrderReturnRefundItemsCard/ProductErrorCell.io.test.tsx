import ProductErrorCell from "./ProductErrorCell";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ProductErrorCell", () => {
  test("default export is defined", () => {
    expect(ProductErrorCell).toBeDefined();
  });
});
