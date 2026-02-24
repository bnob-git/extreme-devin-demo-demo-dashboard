import GiftCardCustomerSelectField from "./GiftCardCustomerSelectField";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("GiftCardCustomerSelectField", () => {
  test("default export is defined", () => {
    expect(GiftCardCustomerSelectField).toBeDefined();
  });
});
