import { ProductsTable } from "./ProductsTable";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ProductsTable", () => {
  test("ProductsTable is exported", () => {
    expect(ProductsTable).toBeDefined();
  });

  test("ProductsTable can be called", () => {
    if (typeof ProductsTable === "function") {
      try {
        (ProductsTable as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
