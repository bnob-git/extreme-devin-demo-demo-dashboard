import { OrderEventsEmailsEnum, OrderEventsEnum } from "@dashboard/graphql";

import { getEventMessage } from "./messages";

const mockIntl = {
  formatMessage: jest.fn((msg, _values) => msg?.defaultMessage || "translated"),
} as any;

const createEvent = (type: OrderEventsEnum, overrides = {}) =>
  ({
    type,
    user: { email: "user@example.com" },
    app: null,
    emailType: null,
    invoiceNumber: "INV-001",
    quantity: 3,
    ...overrides,
  }) as any;

describe("OrderHistory/messages", () => {
  beforeEach(() => {
    mockIntl.formatMessage.mockClear();
  });

  describe("getEventMessage", () => {
    it("should return message for CANCELED", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.CANCELED), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for ADDED_PRODUCTS", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.ADDED_PRODUCTS), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for DRAFT_CREATED", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.DRAFT_CREATED), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for REMOVED_PRODUCTS", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.REMOVED_PRODUCTS), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for EMAIL_SENT with DIGITAL_LINKS", () => {
      const event = createEvent(OrderEventsEnum.EMAIL_SENT, {
        emailType: OrderEventsEmailsEnum.DIGITAL_LINKS,
      });
      const result = getEventMessage(event, mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for EMAIL_SENT with FULFILLMENT_CONFIRMATION", () => {
      const event = createEvent(OrderEventsEnum.EMAIL_SENT, {
        emailType: OrderEventsEmailsEnum.FULFILLMENT_CONFIRMATION,
      });
      const result = getEventMessage(event, mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for EMAIL_SENT with CONFIRMED", () => {
      const event = createEvent(OrderEventsEnum.EMAIL_SENT, {
        emailType: OrderEventsEmailsEnum.CONFIRMED,
      });
      const result = getEventMessage(event, mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for EMAIL_SENT with PAYMENT_CONFIRMATION", () => {
      const event = createEvent(OrderEventsEnum.EMAIL_SENT, {
        emailType: OrderEventsEmailsEnum.PAYMENT_CONFIRMATION,
      });
      const result = getEventMessage(event, mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for EMAIL_SENT with SHIPPING_CONFIRMATION", () => {
      const event = createEvent(OrderEventsEnum.EMAIL_SENT, {
        emailType: OrderEventsEmailsEnum.SHIPPING_CONFIRMATION,
      });
      const result = getEventMessage(event, mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for EMAIL_SENT with TRACKING_UPDATED", () => {
      const event = createEvent(OrderEventsEnum.EMAIL_SENT, {
        emailType: OrderEventsEmailsEnum.TRACKING_UPDATED,
      });
      const result = getEventMessage(event, mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for EMAIL_SENT with ORDER_CANCEL", () => {
      const event = createEvent(OrderEventsEnum.EMAIL_SENT, {
        emailType: OrderEventsEmailsEnum.ORDER_CANCEL,
      });
      const result = getEventMessage(event, mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for EMAIL_SENT with ORDER_CONFIRMATION", () => {
      const event = createEvent(OrderEventsEnum.EMAIL_SENT, {
        emailType: OrderEventsEmailsEnum.ORDER_CONFIRMATION,
      });
      const result = getEventMessage(event, mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for EMAIL_SENT with ORDER_REFUND", () => {
      const event = createEvent(OrderEventsEnum.EMAIL_SENT, {
        emailType: OrderEventsEmailsEnum.ORDER_REFUND,
      });
      const result = getEventMessage(event, mockIntl);

      expect(result).toBeDefined();
    });

    it("should return empty string for EMAIL_SENT with unknown type", () => {
      const event = createEvent(OrderEventsEnum.EMAIL_SENT, {
        emailType: "UNKNOWN_TYPE",
      });
      const result = getEventMessage(event, mockIntl);

      expect(result).toBe("");
    });

    it("should return message for FULFILLMENT_CANCELED", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.FULFILLMENT_CANCELED), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for INVOICE_REQUESTED", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.INVOICE_REQUESTED), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for INVOICE_REQUESTED with app", () => {
      const event = createEvent(OrderEventsEnum.INVOICE_REQUESTED, {
        user: null,
        app: { name: "My App" },
      });
      const result = getEventMessage(event, mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for INVOICE_GENERATED", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.INVOICE_GENERATED), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for INVOICE_UPDATED", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.INVOICE_UPDATED), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for INVOICE_SENT", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.INVOICE_SENT), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for FULFILLMENT_AWAITS_APPROVAL", () => {
      const result = getEventMessage(
        createEvent(OrderEventsEnum.FULFILLMENT_AWAITS_APPROVAL),
        mockIntl,
      );

      expect(result).toBeDefined();
    });

    it("should return message for FULFILLMENT_FULFILLED_ITEMS", () => {
      const result = getEventMessage(
        createEvent(OrderEventsEnum.FULFILLMENT_FULFILLED_ITEMS),
        mockIntl,
      );

      expect(result).toBeDefined();
    });

    it("should return message for FULFILLMENT_REFUNDED", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.FULFILLMENT_REFUNDED), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for FULFILLMENT_RESTOCKED_ITEMS", () => {
      const result = getEventMessage(
        createEvent(OrderEventsEnum.FULFILLMENT_RESTOCKED_ITEMS),
        mockIntl,
      );

      expect(result).toBeDefined();
    });

    it("should return message for NOTE_ADDED", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.NOTE_ADDED), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for ORDER_FULLY_PAID", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.ORDER_FULLY_PAID), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for ORDER_MARKED_AS_PAID", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.ORDER_MARKED_AS_PAID), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for PLACED_AUTOMATICALLY_FROM_PAID_CHECKOUT", () => {
      const result = getEventMessage(
        createEvent(OrderEventsEnum.PLACED_AUTOMATICALLY_FROM_PAID_CHECKOUT),
        mockIntl,
      );

      expect(result).toBeDefined();
    });

    it("should return message for OVERSOLD_ITEMS", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.OVERSOLD_ITEMS), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for PAYMENT_CAPTURED", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.PAYMENT_CAPTURED), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for PAYMENT_FAILED", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.PAYMENT_FAILED), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for PAYMENT_REFUNDED", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.PAYMENT_REFUNDED), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for PAYMENT_VOIDED", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.PAYMENT_VOIDED), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for PLACED", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.PLACED), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for PLACED_FROM_DRAFT", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.PLACED_FROM_DRAFT), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for TRACKING_UPDATED", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.TRACKING_UPDATED), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for UPDATED_ADDRESS", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.UPDATED_ADDRESS), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for PAYMENT_AUTHORIZED", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.PAYMENT_AUTHORIZED), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for CONFIRMED", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.CONFIRMED), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for TRANSACTION_REFUND_REQUESTED", () => {
      const result = getEventMessage(
        createEvent(OrderEventsEnum.TRANSACTION_REFUND_REQUESTED),
        mockIntl,
      );

      expect(result).toBeDefined();
    });

    it("should return message for TRANSACTION_CHARGE_REQUESTED", () => {
      const result = getEventMessage(
        createEvent(OrderEventsEnum.TRANSACTION_CHARGE_REQUESTED),
        mockIntl,
      );

      expect(result).toBeDefined();
    });

    it("should return message for TRANSACTION_CANCEL_REQUESTED", () => {
      const result = getEventMessage(
        createEvent(OrderEventsEnum.TRANSACTION_CANCEL_REQUESTED),
        mockIntl,
      );

      expect(result).toBeDefined();
    });

    it("should return message for EXTERNAL_SERVICE_NOTIFICATION", () => {
      const result = getEventMessage(
        createEvent(OrderEventsEnum.EXTERNAL_SERVICE_NOTIFICATION),
        mockIntl,
      );

      expect(result).toBeDefined();
    });

    it("should return message for TRANSACTION_EVENT", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.TRANSACTION_EVENT), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for OTHER", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.OTHER), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for ORDER_REPLACEMENT_CREATED", () => {
      const result = getEventMessage(
        createEvent(OrderEventsEnum.ORDER_REPLACEMENT_CREATED),
        mockIntl,
      );

      expect(result).toBeDefined();
    });

    it("should return message for ORDER_DISCOUNT_DELETED", () => {
      const result = getEventMessage(createEvent(OrderEventsEnum.ORDER_DISCOUNT_DELETED), mockIntl);

      expect(result).toBeDefined();
    });

    it("should return message for ORDER_LINE_DISCOUNT_REMOVED", () => {
      const result = getEventMessage(
        createEvent(OrderEventsEnum.ORDER_LINE_DISCOUNT_REMOVED),
        mockIntl,
      );

      expect(result).toBeDefined();
    });
  });
});
