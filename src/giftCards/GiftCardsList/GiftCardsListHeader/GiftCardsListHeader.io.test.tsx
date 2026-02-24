jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import GiftCardsListHeader from "./GiftCardsListHeader";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("GiftCardsListHeader", () => {
  test("default export is defined", () => {
    expect(GiftCardsListHeader).toBeDefined();
  });
});
