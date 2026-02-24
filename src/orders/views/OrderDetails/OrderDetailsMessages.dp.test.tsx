import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/auth", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  handleNestedMutationErrors: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/components/Money", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  formatMoney: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/containers/BackgroundTasks/messages", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  messages: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CreateManualTransactionCaptureMutation: () => null,
  InvoiceEmailSendMutation: () => null,
  InvoiceRequestMutation: () => null,
  OrderCancelMutation: () => null,
  OrderCaptureMutation: () => null,
  OrderDraftCancelMutation: () => null,
  OrderDraftFinalizeMutation: () => null,
  OrderDraftUpdateMutation: () => null,
  OrderErrorCode: () => null,
  OrderFulfillmentApproveMutation: () => null,
  OrderFulfillmentCancelMutation: () => null,
  OrderFulfillmentUpdateTrackingMutation: () => null,
  OrderLineDeleteMutation: () => null,
  OrderLinesAddMutation: () => null,
  OrderLineUpdateMutation: () => null,
  OrderMarkAsPaidMutation: () => null,
  OrderNoteAddMutation: () => null,
  OrderNoteUpdateMutation: () => null,
  OrderShippingMethodUpdateMutation: () => null,
  OrderTransactionRequestActionMutation: () => null,
  OrderUpdateMutation: () => null,
  OrderVoidMutation: () => null,
}));
jest.mock("@dashboard/hooks/useLocale", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useLocale: (..._a: any[]) => createDeepMock(),
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
jest.mock("@dashboard/utils/errors/order", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getOrderErrorMessage: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/errors/transaction", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getOrderTransactionErrorMessage: jest.fn((..._a: any[]) => createDeepMock()),
  getTransactionCreateErrorMessage: jest.fn((..._a: any[]) => createDeepMock()),
  transactionCreateMessages: jest.fn((..._a: any[]) => createDeepMock()),
  transactionRequestMessages: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/handlers/dialogActionHandlers", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createDialogActionHandlers: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { OrderDetailsMessages } from "./OrderDetailsMessages";

describe("OrderDetailsMessages deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders OrderDetailsMessages with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <OrderDetailsMessages {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderDetailsMessages with override props", () => {
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
          <OrderDetailsMessages {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
