import GiftCardTagInput from "./GiftCardTagInput";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("GiftCardTagInput", () => {
  test("default export is defined", () => {
    expect(GiftCardTagInput).toBeDefined();
  });
});
