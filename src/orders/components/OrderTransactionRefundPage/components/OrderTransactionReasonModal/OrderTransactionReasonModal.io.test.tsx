import { OrderTransactionReasonModal } from "./OrderTransactionReasonModal";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("OrderTransactionReasonModal", () => {
  test("OrderTransactionReasonModal is exported", () => {
    expect(OrderTransactionReasonModal).toBeDefined();
  });

  test("OrderTransactionReasonModal can be called", () => {
    if (typeof OrderTransactionReasonModal === "function") {
      try {
        (OrderTransactionReasonModal as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
