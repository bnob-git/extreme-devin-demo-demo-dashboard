import GiftCardEnableDisableSection from "./GiftCardEnableDisableSection";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("GiftCardEnableDisableSection", () => {
  test("default export is defined", () => {
    expect(GiftCardEnableDisableSection).toBeDefined();
  });
});
