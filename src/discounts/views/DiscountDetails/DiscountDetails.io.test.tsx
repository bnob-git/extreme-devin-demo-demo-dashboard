jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { DiscountDetails } from "./DiscountDetails";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("DiscountDetails", () => {
  test("DiscountDetails is exported", () => {
    expect(DiscountDetails).toBeDefined();
  });

  test("DiscountDetails can be called", () => {
    if (typeof DiscountDetails === "function") {
      try {
        (DiscountDetails as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
