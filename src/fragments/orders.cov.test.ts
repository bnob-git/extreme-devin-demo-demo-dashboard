import {
  fragmentActivities,
  fragmentOrderDetails,
  fragmentOrderDetailsGrantRefund,
  fragmentOrderDetailsWithMetadata,
  fragmentOrderEvent,
  fragmentOrderFulfillLine,
  fragmentOrderGiftcard,
  fragmentOrderGiftCardEventBalance,
  fragmentOrderGrantedRefunds,
  fragmentOrderLine,
  fragmentOrderLineMetadata,
  fragmentOrderLineMetadataDetails,
  fragmentOrderLineStockData,
  fragmentOrderLineWithMetadata,
  fragmentOrderSettings,
  fragmentPayment,
  fragmentRefundOrderLine,
  fragmentShopOrderSettings,
  fulfillmentFragment,
  fulfillmentFragmentWithMetadata,
  grantRefundFulfillment,
  invoiceFragment,
  orderDetailsGrantedRefund,
  orderDiscount,
  orderLineGrantRefund,
  transactionBaseEvent,
  transactionBaseItemFragment,
  transactionEvent,
  transactionItemFragment,
} from "./orders";

describe("fragments/orders.ts", () => {
  it("should export fragmentActivities", () => {
    expect(fragmentActivities).toBeDefined();
  });

  it("should export fragmentOrderDetails", () => {
    expect(fragmentOrderDetails).toBeDefined();
  });

  it("should export fragmentOrderDetailsGrantRefund", () => {
    expect(fragmentOrderDetailsGrantRefund).toBeDefined();
  });

  it("should export fragmentOrderDetailsWithMetadata", () => {
    expect(fragmentOrderDetailsWithMetadata).toBeDefined();
  });

  it("should export fragmentOrderEvent", () => {
    expect(fragmentOrderEvent).toBeDefined();
  });

  it("should export fragmentOrderFulfillLine", () => {
    expect(fragmentOrderFulfillLine).toBeDefined();
  });

  it("should export fragmentOrderGiftCardEventBalance", () => {
    expect(fragmentOrderGiftCardEventBalance).toBeDefined();
  });

  it("should export fragmentOrderGiftcard", () => {
    expect(fragmentOrderGiftcard).toBeDefined();
  });

  it("should export fragmentOrderGrantedRefunds", () => {
    expect(fragmentOrderGrantedRefunds).toBeDefined();
  });

  it("should export fragmentOrderLine", () => {
    expect(fragmentOrderLine).toBeDefined();
  });

  it("should export fragmentOrderLineMetadata", () => {
    expect(fragmentOrderLineMetadata).toBeDefined();
  });

  it("should export fragmentOrderLineMetadataDetails", () => {
    expect(fragmentOrderLineMetadataDetails).toBeDefined();
  });

  it("should export fragmentOrderLineStockData", () => {
    expect(fragmentOrderLineStockData).toBeDefined();
  });

  it("should export fragmentOrderLineWithMetadata", () => {
    expect(fragmentOrderLineWithMetadata).toBeDefined();
  });

  it("should export fragmentOrderSettings", () => {
    expect(fragmentOrderSettings).toBeDefined();
  });

  it("should export fragmentPayment", () => {
    expect(fragmentPayment).toBeDefined();
  });

  it("should export fragmentRefundOrderLine", () => {
    expect(fragmentRefundOrderLine).toBeDefined();
  });

  it("should export fragmentShopOrderSettings", () => {
    expect(fragmentShopOrderSettings).toBeDefined();
  });

  it("should export fulfillmentFragment", () => {
    expect(fulfillmentFragment).toBeDefined();
  });

  it("should export fulfillmentFragmentWithMetadata", () => {
    expect(fulfillmentFragmentWithMetadata).toBeDefined();
  });

  it("should export grantRefundFulfillment", () => {
    expect(grantRefundFulfillment).toBeDefined();
  });

  it("should export invoiceFragment", () => {
    expect(invoiceFragment).toBeDefined();
  });

  it("should export orderDetailsGrantedRefund", () => {
    expect(orderDetailsGrantedRefund).toBeDefined();
  });

  it("should export orderDiscount", () => {
    expect(orderDiscount).toBeDefined();
  });

  it("should export orderLineGrantRefund", () => {
    expect(orderLineGrantRefund).toBeDefined();
  });

  it("should export transactionBaseEvent", () => {
    expect(transactionBaseEvent).toBeDefined();
  });

  it("should export transactionBaseItemFragment", () => {
    expect(transactionBaseItemFragment).toBeDefined();
  });

  it("should export transactionEvent", () => {
    expect(transactionEvent).toBeDefined();
  });

  it("should export transactionItemFragment", () => {
    expect(transactionItemFragment).toBeDefined();
  });
});
