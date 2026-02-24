import GiftCardStatusChip from "./GiftCardStatusChip";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("GiftCardStatusChip", () => {
  test("default export is defined", () => {
    expect(GiftCardStatusChip).toBeDefined();
  });
});
