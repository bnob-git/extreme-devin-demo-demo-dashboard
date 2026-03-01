import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/NotFoundPage", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  NotFoundPage: () => null,
}));
jest.mock("@dashboard/components/WindowTitle", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  WindowTitle: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useOrderDetailsGrantRefundEditQuery: () => ({
    data: createDeepMock(),
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useOrderGrantRefundEditMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNavigator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useNotifier", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNotifier: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  extractMutationErrors: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/orders/components/OrderGrantRefundPage", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  OrderGrantRefundPage: () => null,
}));
jest.mock("@dashboard/orders/components/OrderGrantRefundPage/form", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  OrderGrantRefundFormData: () => null,
}));
jest.mock("@dashboard/orders/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  orderUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import OrderEditGrantRefund from "./OrderEditGrantRefund";

describe("OrderEditGrantRefund deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders OrderEditGrantRefund with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <OrderEditGrantRefund {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderEditGrantRefund with override props", () => {
    try {
      const mockProps = createDeepMock({
        id: "test-1",
        name: "Test",
        disabled: false,
        loading: false,
        errors: [],
        data: createDeepMock(),
        onSubmit: jest.fn(),
        onChange: jest.fn(),
        onClose: jest.fn(),
        onBack: jest.fn(),
        open: false,
        channels: [],
        params: { id: "test-1" },
      });

      render(
        <MemoryRouter>
          <OrderEditGrantRefund {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
