jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: () => jest.fn(),
}));
jest.mock("@dashboard/hooks/useNotifier", () => ({
  __esModule: true,
  default: () => jest.fn(),
}));
jest.mock("@dashboard/hooks/useLocale", () => ({
  __esModule: true,
  default: () => ({ locale: "en", setLocale: jest.fn() }),
}));
jest.mock("@dashboard/utils/handlers/dialogActionHandlers", () => ({
  __esModule: true,
  default: () => [jest.fn(), jest.fn()],
}));
jest.mock("@dashboard/auth", () => ({
  handleNestedMutationErrors: jest.fn(),
}));
jest.mock("@dashboard/components/Money", () => ({
  formatMoney: () => "$10.00",
}));
jest.mock("@dashboard/utils/errors/order", () => ({
  __esModule: true,
  default: () => "Order error",
}));
jest.mock("@dashboard/utils/errors/transaction", () => ({
  getOrderTransactionErrorMessage: () => "Transaction error",
  getTransactionCreateErrorMessage: () => "Create error",
  transactionCreateMessages: { success: { id: "s", defaultMessage: "Success" } },
  transactionRequestMessages: { success: { id: "s", defaultMessage: "Success" } },
}));
jest.mock("@dashboard/graphql", () => ({
  OrderErrorCode: { INSUFFICIENT_STOCK: "INSUFFICIENT_STOCK" },
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { OrderDetailsMessages } from "./OrderDetailsMessages";

describe("OrderDetailsMessages", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  const defaultProps = {
    id: "order-1",
    params: {} as any,
  };

  function renderWithHandlers(callback: (handlers: any) => void) {
    render(
      <MemoryRouter>
        <OrderDetailsMessages {...defaultProps}>
          {handlers => {
            callback(handlers);

            return <div>test</div>;
          }}
        </OrderDetailsMessages>
      </MemoryRouter>,
    );
  }

  it("renders and provides all handlers", () => {
    renderWithHandlers(handlers => {
      expect(handlers.handlePaymentCapture).toBeDefined();
      expect(handlers.handleOrderMarkAsPaid).toBeDefined();
      expect(handlers.handleOrderCancel).toBeDefined();
      expect(handlers.handleDraftCancel).toBeDefined();
      expect(handlers.handleOrderVoid).toBeDefined();
      expect(handlers.handleNoteAdd).toBeDefined();
      expect(handlers.handleNoteUpdate).toBeDefined();
      expect(handlers.handleUpdate).toBeDefined();
      expect(handlers.handleDraftUpdate).toBeDefined();
      expect(handlers.handleShippingMethodUpdate).toBeDefined();
      expect(handlers.handleOrderLineDelete).toBeDefined();
      expect(handlers.handleOrderLinesAdd).toBeDefined();
      expect(handlers.handleOrderLineUpdate).toBeDefined();
      expect(handlers.handleOrderFulfillmentApprove).toBeDefined();
      expect(handlers.handleOrderFulfillmentCancel).toBeDefined();
      expect(handlers.handleOrderFulfillmentUpdate).toBeDefined();
      expect(handlers.handleDraftFinalize).toBeDefined();
      expect(handlers.handleInvoiceGeneratePending).toBeDefined();
      expect(handlers.handleInvoiceGenerateFinished).toBeDefined();
      expect(handlers.handleInvoiceSend).toBeDefined();
      expect(handlers.handleTransactionAction).toBeDefined();
      expect(handlers.handleAddManualTransaction).toBeDefined();
    });
  });

  it("handlePaymentCapture - success", () => {
    renderWithHandlers(h => {
      h.handlePaymentCapture({ orderCapture: { errors: [] } });
    });
  });

  it("handlePaymentCapture - with errors", () => {
    renderWithHandlers(h => {
      h.handlePaymentCapture({ orderCapture: { errors: [{ code: "INVALID" }] } });
    });
  });

  it("handleOrderMarkAsPaid - success", () => {
    renderWithHandlers(h => {
      h.handleOrderMarkAsPaid({ orderMarkAsPaid: { errors: [] } });
    });
  });

  it("handleOrderCancel - success", () => {
    renderWithHandlers(h => {
      h.handleOrderCancel({ orderCancel: { errors: [] } });
    });
  });

  it("handleDraftCancel - success", () => {
    renderWithHandlers(h => {
      h.handleDraftCancel({ draftOrderDelete: { errors: [] } });
    });
  });

  it("handleOrderVoid - success", () => {
    renderWithHandlers(h => {
      h.handleOrderVoid({ orderVoid: { errors: [] } });
    });
  });

  it("handleNoteAdd - success", () => {
    renderWithHandlers(h => {
      h.handleNoteAdd({ orderNoteAdd: { errors: [] } });
    });
  });

  it("handleNoteUpdate - success", () => {
    renderWithHandlers(h => {
      h.handleNoteUpdate({ orderNoteUpdate: { errors: [] } });
    });
  });

  it("handleUpdate - success", () => {
    renderWithHandlers(h => {
      h.handleUpdate({ orderUpdate: { errors: [] } });
    });
  });

  it("handleDraftUpdate - success", () => {
    renderWithHandlers(h => {
      h.handleDraftUpdate({ draftOrderUpdate: { errors: [] } });
    });
  });

  it("handleShippingMethodUpdate - success", () => {
    renderWithHandlers(h => {
      h.handleShippingMethodUpdate({ orderUpdateShipping: { errors: [] } });
    });
  });

  it("handleOrderLineDelete - success", () => {
    renderWithHandlers(h => {
      h.handleOrderLineDelete({ orderLineDelete: { errors: [] } });
    });
  });

  it("handleOrderLinesAdd - success", () => {
    renderWithHandlers(h => {
      h.handleOrderLinesAdd({ orderLinesCreate: { errors: [] } });
    });
  });

  it("handleOrderLineUpdate - success", () => {
    renderWithHandlers(h => {
      h.handleOrderLineUpdate({ orderLineUpdate: { errors: [] } });
    });
  });

  it("handleOrderLineUpdate - with errors", () => {
    renderWithHandlers(h => {
      h.handleOrderLineUpdate({
        orderLineUpdate: { errors: [{ code: "INVALID", message: "err", field: "f" }] },
      });
    });
  });

  it("handleOrderFulfillmentApprove - success", () => {
    renderWithHandlers(h => {
      h.handleOrderFulfillmentApprove({ orderFulfillmentApprove: { errors: [] } });
    });
  });

  it("handleOrderFulfillmentApprove - with non-stock errors", () => {
    renderWithHandlers(h => {
      h.handleOrderFulfillmentApprove({
        orderFulfillmentApprove: { errors: [{ code: "INVALID", message: "err" }] },
      });
    });
  });

  it("handleOrderFulfillmentApprove - with stock errors", () => {
    renderWithHandlers(h => {
      h.handleOrderFulfillmentApprove({
        orderFulfillmentApprove: {
          errors: [{ code: "INSUFFICIENT_STOCK", message: "no stock" }],
        },
      });
    });
  });

  it("handleOrderFulfillmentCancel - success", () => {
    renderWithHandlers(h => {
      h.handleOrderFulfillmentCancel({ orderFulfillmentCancel: { errors: [] } });
    });
  });

  it("handleOrderFulfillmentUpdate - success", () => {
    renderWithHandlers(h => {
      h.handleOrderFulfillmentUpdate({ orderFulfillmentUpdateTracking: { errors: [] } });
    });
  });

  it("handleDraftFinalize - success", () => {
    renderWithHandlers(h => {
      h.handleDraftFinalize({ draftOrderComplete: { errors: [] } });
    });
  });

  it("handleInvoiceGeneratePending - success", () => {
    renderWithHandlers(h => {
      h.handleInvoiceGeneratePending({ invoiceRequest: { errors: [] } });
    });
  });

  it("handleInvoiceGenerateFinished - success", () => {
    renderWithHandlers(h => {
      h.handleInvoiceGenerateFinished({ invoiceRequest: { errors: [] } });
    });
  });

  it("handleInvoiceSend - success", () => {
    renderWithHandlers(h => {
      h.handleInvoiceSend({ invoiceSendNotification: { errors: [] } });
    });
  });

  it("handleTransactionAction - success", () => {
    renderWithHandlers(h => {
      h.handleTransactionAction({
        transactionRequestAction: { errors: [] },
      });
    });
  });

  it("handleTransactionAction - with errors", () => {
    renderWithHandlers(h => {
      h.handleTransactionAction({
        transactionRequestAction: { errors: [{ code: "INVALID", message: "err" }] },
      });
    });
  });

  it("handleAddManualTransaction - success", () => {
    renderWithHandlers(h => {
      h.handleAddManualTransaction({
        transactionCreate: {
          errors: [],
          transaction: { chargedAmount: { amount: 10, currency: "USD" } },
        },
      });
    });
  });

  it("handleAddManualTransaction - with errors", () => {
    renderWithHandlers(h => {
      h.handleAddManualTransaction({
        transactionCreate: {
          errors: [{ code: "INVALID", message: "err" }],
          transaction: null,
        },
      });
    });
  });
});
