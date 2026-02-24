import GiftCardBulkCreateSuccessDialog from "./GiftCardBulkCreateSuccessDialog";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("GiftCardBulkCreateSuccessDialog", () => {
  test("default export is defined", () => {
    expect(GiftCardBulkCreateSuccessDialog).toBeDefined();
  });
});
