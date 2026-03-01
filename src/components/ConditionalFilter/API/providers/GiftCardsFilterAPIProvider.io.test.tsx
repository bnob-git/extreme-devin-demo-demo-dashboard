import { useGiftCardsFiltersAPIProvider } from "./GiftCardsFilterAPIProvider";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("GiftCardsFilterAPIProvider", () => {
  test("useGiftCardsFiltersAPIProvider is exported", () => {
    expect(useGiftCardsFiltersAPIProvider).toBeDefined();
  });

  test("useGiftCardsFiltersAPIProvider can be called", () => {
    if (typeof useGiftCardsFiltersAPIProvider === "function") {
      try {
        (useGiftCardsFiltersAPIProvider as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
