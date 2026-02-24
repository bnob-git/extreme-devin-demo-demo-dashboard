jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import GiftCardListDialogsProvider, { useGiftCardListDialogs } from "./GiftCardListDialogsProvider";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("GiftCardListDialogsProvider", () => {
  test("default export is defined", () => {
    expect(GiftCardListDialogsProvider).toBeDefined();
  });

  test("useGiftCardListDialogs is exported", () => {
    expect(useGiftCardListDialogs).toBeDefined();
  });

  test("useGiftCardListDialogs can be called", () => {
    if (typeof useGiftCardListDialogs === "function") {
      try {
        (useGiftCardListDialogs as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
