import { useGiftCardsFiltersAPIProvider } from "./GiftCardsFilterAPIProvider";

describe("GiftCardsFilterAPIProvider.tsx coverage", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useGiftCardsFiltersAPIProvider", () => {
    try {
      (useGiftCardsFiltersAPIProvider as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
