import TextWithSelectField from "./TextWithSelectField";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("TextWithSelectField", () => {
  test("default export is defined", () => {
    expect(TextWithSelectField).toBeDefined();
  });
});
