import AttributeSwatchField from "./AttributeSwatchField";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AttributeSwatchField", () => {
  test("default export is defined", () => {
    expect(AttributeSwatchField).toBeDefined();
  });
});
