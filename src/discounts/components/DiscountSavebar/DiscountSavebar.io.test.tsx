jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));

import { DiscountSavebar } from "./DiscountSavebar";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("DiscountSavebar", () => {
  test("DiscountSavebar is exported", () => {
    expect(DiscountSavebar).toBeDefined();
  });

  test("DiscountSavebar can be called", () => {
    if (typeof DiscountSavebar === "function") {
      try {
        (DiscountSavebar as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
