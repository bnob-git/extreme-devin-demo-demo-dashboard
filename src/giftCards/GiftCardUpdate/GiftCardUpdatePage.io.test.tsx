jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import GiftCardUpdatePage from "./GiftCardUpdatePage";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("GiftCardUpdatePage", () => {
  test("default export is defined", () => {
    expect(GiftCardUpdatePage).toBeDefined();
  });
});
