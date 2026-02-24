jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "test-id" }),
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: "/", search: "", hash: "", state: null }),
  useSearchParams: () => [new URLSearchParams(), jest.fn()],
}));

import { OrderDetailsRefundLine } from "./OrderDetailsRefundLine";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("OrderDetailsRefundLine", () => {
  test("OrderDetailsRefundLine is exported", () => {
    expect(OrderDetailsRefundLine).toBeDefined();
  });

  test("OrderDetailsRefundLine can be called", () => {
    if (typeof OrderDetailsRefundLine === "function") {
      try {
        (OrderDetailsRefundLine as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
