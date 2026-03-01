import GiftCardUpdateExpirySelect from "./GiftCardUpdateExpirySelect";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("GiftCardUpdateExpirySelect", () => {
  test("default export is defined", () => {
    expect(GiftCardUpdateExpirySelect).toBeDefined();
  });
});
