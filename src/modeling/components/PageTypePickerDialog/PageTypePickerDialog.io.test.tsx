import PageTypePickerDialog from "./PageTypePickerDialog";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("PageTypePickerDialog", () => {
  test("default export is defined", () => {
    expect(PageTypePickerDialog).toBeDefined();
  });
});
