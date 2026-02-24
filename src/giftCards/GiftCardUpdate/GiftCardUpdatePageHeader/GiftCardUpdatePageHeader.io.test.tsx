import GiftCardUpdatePageHeader from "./GiftCardUpdatePageHeader";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("GiftCardUpdatePageHeader", () => {
  test("default export is defined", () => {
    expect(GiftCardUpdatePageHeader).toBeDefined();
  });
});
