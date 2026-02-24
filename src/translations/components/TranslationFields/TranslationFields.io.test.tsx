import TranslationFields from "./TranslationFields";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("TranslationFields", () => {
  test("default export is defined", () => {
    expect(TranslationFields).toBeDefined();
  });
});
