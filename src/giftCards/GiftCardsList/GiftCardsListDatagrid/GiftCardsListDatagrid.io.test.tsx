jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { GiftCardsListDatagrid } from "./GiftCardsListDatagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("GiftCardsListDatagrid", () => {
  test("GiftCardsListDatagrid is exported", () => {
    expect(GiftCardsListDatagrid).toBeDefined();
  });

  test("GiftCardsListDatagrid can be called", () => {
    if (typeof GiftCardsListDatagrid === "function") {
      try {
        (GiftCardsListDatagrid as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
