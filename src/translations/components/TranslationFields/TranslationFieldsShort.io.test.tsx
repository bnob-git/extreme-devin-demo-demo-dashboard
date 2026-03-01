import TranslationFieldsShort from "./TranslationFieldsShort";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("TranslationFieldsShort", () => {
  test("default export is defined", () => {
    expect(TranslationFieldsShort).toBeDefined();
  });
});
