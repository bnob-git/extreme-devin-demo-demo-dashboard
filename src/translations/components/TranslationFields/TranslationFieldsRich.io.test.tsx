import TranslationFieldsRich from "./TranslationFieldsRich";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("TranslationFieldsRich", () => {
  test("default export is defined", () => {
    expect(TranslationFieldsRich).toBeDefined();
  });
});
