import {
  createManualTransactionCapture,
  createManualTransactionRefund,
  fulfillOrder,
  invoiceEmailSendMutation,
  invoiceRequestMutation,
  orderCancelMutation,
  orderCaptureMutation,
  orderConfirmMutation,
  orderDiscountAddMutation,
  orderDiscountDeleteMutation,
  orderDiscountUpdateMutation,
  orderDraftBulkCancelMutation,
  orderDraftCancelMutation,
  orderDraftCreateMutation,
  orderDraftFinalizeMutation,
  orderDraftUpdateMutation,
  orderFulfillmentApproveMutation,
  orderFulfillmentCancelMutation,
  orderFulfillmentRefundProductsMutation,
  orderFulfillmentUpdateTrackingMutation,
  orderGrantRefundAddMutation,
  orderGrantRefundAddWithOrderMutation,
  orderGrantRefundEditMutation,
  orderLineDeleteMutation,
  orderLineDiscountRemoveMutation,
  orderLineDiscountUpdateMutation,
  orderLinesAddMutation,
  orderLineUpdateMutation,
  orderMarkAsPaidMutation,
  orderNoteAddMutation,
  orderNoteUpdateMutation,
  orderRefundMutation,
  orderReturnCreateMutation,
  orderSendRefundForGrantedRefund,
  orderSendRefundMutation,
  orderSettingsUpdateMutation,
  orderShippingMethodUpdateMutation,
  orderTransactionRequestActionMutation,
  orderUpdateMutation,
  orderVoidMutation,
} from "./mutations";

describe("orders/mutations.ts", () => {
  it("should export createManualTransactionCapture", () => {
    expect(createManualTransactionCapture).toBeDefined();
  });

  it("should export createManualTransactionRefund", () => {
    expect(createManualTransactionRefund).toBeDefined();
  });

  it("should export fulfillOrder", () => {
    expect(fulfillOrder).toBeDefined();
  });

  it("should export invoiceEmailSendMutation", () => {
    expect(invoiceEmailSendMutation).toBeDefined();
  });

  it("should export invoiceRequestMutation", () => {
    expect(invoiceRequestMutation).toBeDefined();
  });

  it("should export orderCancelMutation", () => {
    expect(orderCancelMutation).toBeDefined();
  });

  it("should export orderCaptureMutation", () => {
    expect(orderCaptureMutation).toBeDefined();
  });

  it("should export orderConfirmMutation", () => {
    expect(orderConfirmMutation).toBeDefined();
  });

  it("should export orderDiscountAddMutation", () => {
    expect(orderDiscountAddMutation).toBeDefined();
  });

  it("should export orderDiscountDeleteMutation", () => {
    expect(orderDiscountDeleteMutation).toBeDefined();
  });

  it("should export orderDiscountUpdateMutation", () => {
    expect(orderDiscountUpdateMutation).toBeDefined();
  });

  it("should export orderDraftBulkCancelMutation", () => {
    expect(orderDraftBulkCancelMutation).toBeDefined();
  });

  it("should export orderDraftCancelMutation", () => {
    expect(orderDraftCancelMutation).toBeDefined();
  });

  it("should export orderDraftCreateMutation", () => {
    expect(orderDraftCreateMutation).toBeDefined();
  });

  it("should export orderDraftFinalizeMutation", () => {
    expect(orderDraftFinalizeMutation).toBeDefined();
  });

  it("should export orderDraftUpdateMutation", () => {
    expect(orderDraftUpdateMutation).toBeDefined();
  });

  it("should export orderFulfillmentApproveMutation", () => {
    expect(orderFulfillmentApproveMutation).toBeDefined();
  });

  it("should export orderFulfillmentCancelMutation", () => {
    expect(orderFulfillmentCancelMutation).toBeDefined();
  });

  it("should export orderFulfillmentRefundProductsMutation", () => {
    expect(orderFulfillmentRefundProductsMutation).toBeDefined();
  });

  it("should export orderFulfillmentUpdateTrackingMutation", () => {
    expect(orderFulfillmentUpdateTrackingMutation).toBeDefined();
  });

  it("should export orderGrantRefundAddMutation", () => {
    expect(orderGrantRefundAddMutation).toBeDefined();
  });

  it("should export orderGrantRefundAddWithOrderMutation", () => {
    expect(orderGrantRefundAddWithOrderMutation).toBeDefined();
  });

  it("should export orderGrantRefundEditMutation", () => {
    expect(orderGrantRefundEditMutation).toBeDefined();
  });

  it("should export orderLineDeleteMutation", () => {
    expect(orderLineDeleteMutation).toBeDefined();
  });

  it("should export orderLineDiscountRemoveMutation", () => {
    expect(orderLineDiscountRemoveMutation).toBeDefined();
  });

  it("should export orderLineDiscountUpdateMutation", () => {
    expect(orderLineDiscountUpdateMutation).toBeDefined();
  });

  it("should export orderLineUpdateMutation", () => {
    expect(orderLineUpdateMutation).toBeDefined();
  });

  it("should export orderLinesAddMutation", () => {
    expect(orderLinesAddMutation).toBeDefined();
  });

  it("should export orderMarkAsPaidMutation", () => {
    expect(orderMarkAsPaidMutation).toBeDefined();
  });

  it("should export orderNoteAddMutation", () => {
    expect(orderNoteAddMutation).toBeDefined();
  });

  it("should export orderNoteUpdateMutation", () => {
    expect(orderNoteUpdateMutation).toBeDefined();
  });

  it("should export orderRefundMutation", () => {
    expect(orderRefundMutation).toBeDefined();
  });

  it("should export orderReturnCreateMutation", () => {
    expect(orderReturnCreateMutation).toBeDefined();
  });

  it("should export orderSendRefundForGrantedRefund", () => {
    expect(orderSendRefundForGrantedRefund).toBeDefined();
  });

  it("should export orderSendRefundMutation", () => {
    expect(orderSendRefundMutation).toBeDefined();
  });

  it("should export orderSettingsUpdateMutation", () => {
    expect(orderSettingsUpdateMutation).toBeDefined();
  });

  it("should export orderShippingMethodUpdateMutation", () => {
    expect(orderShippingMethodUpdateMutation).toBeDefined();
  });

  it("should export orderTransactionRequestActionMutation", () => {
    expect(orderTransactionRequestActionMutation).toBeDefined();
  });

  it("should export orderUpdateMutation", () => {
    expect(orderUpdateMutation).toBeDefined();
  });

  it("should export orderVoidMutation", () => {
    expect(orderVoidMutation).toBeDefined();
  });
});
