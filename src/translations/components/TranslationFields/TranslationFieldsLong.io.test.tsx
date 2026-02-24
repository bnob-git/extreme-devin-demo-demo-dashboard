import TranslationFieldsLong from "./TranslationFieldsLong";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("TranslationFieldsLong", () => {
  test("default export is defined", () => {
    expect(TranslationFieldsLong).toBeDefined();
  });
});
