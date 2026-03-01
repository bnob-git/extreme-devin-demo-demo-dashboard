import GiftCardDeleteDialog from "./GiftCardListPageDeleteDialog";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("GiftCardListPageDeleteDialog", () => {
  test("default export is defined", () => {
    expect(GiftCardDeleteDialog).toBeDefined();
  });
});
