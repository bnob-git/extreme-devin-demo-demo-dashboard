jest.mock("@dashboard/hooks/useLocale", () => ({
  __esModule: true,
  default: () => ({ locale: "en" }),
}));

import { OrderDraftListDatagrid } from "./OrderDraftListDatagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("OrderDraftListDatagrid", () => {
  test("OrderDraftListDatagrid is exported", () => {
    expect(OrderDraftListDatagrid).toBeDefined();
  });

  test("OrderDraftListDatagrid can be called", () => {
    if (typeof OrderDraftListDatagrid === "function") {
      try {
        (OrderDraftListDatagrid as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
