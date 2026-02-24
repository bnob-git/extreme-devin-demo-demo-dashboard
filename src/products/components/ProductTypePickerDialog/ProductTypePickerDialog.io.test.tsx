import ProductTypePickerDialog from "./ProductTypePickerDialog";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ProductTypePickerDialog", () => {
  test("default export is defined", () => {
    expect(ProductTypePickerDialog).toBeDefined();
  });
});
