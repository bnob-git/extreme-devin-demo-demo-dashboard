import {
  channelUsabilityData,
  defaultGraphiQLQuery,
  DevModeQuery,
  orderDetailsGrantedRefund,
  orderDetailsGrantedRefundEdit,
  orderDetailsQuery,
  orderDetailsWithMetadataQuery,
  orderDraftListQuery,
  orderFulfillData,
  orderFulfillSettingsQuery,
  orderLinesMetadata,
  orderListQuery,
  orderRefundData,
  orderSettingsQuery,
  orderTransactionsData,
  refundSettings,
} from "./queries";

describe("orders/queries.ts", () => {
  it("should export DevModeQuery", () => {
    expect(DevModeQuery).toBeDefined();
  });

  it("should export channelUsabilityData", () => {
    expect(channelUsabilityData).toBeDefined();
  });

  it("should export defaultGraphiQLQuery", () => {
    expect(defaultGraphiQLQuery).toBeDefined();
  });

  it("should export orderDetailsGrantedRefund", () => {
    expect(orderDetailsGrantedRefund).toBeDefined();
  });

  it("should export orderDetailsGrantedRefundEdit", () => {
    expect(orderDetailsGrantedRefundEdit).toBeDefined();
  });

  it("should export orderDetailsQuery", () => {
    expect(orderDetailsQuery).toBeDefined();
  });

  it("should export orderDetailsWithMetadataQuery", () => {
    expect(orderDetailsWithMetadataQuery).toBeDefined();
  });

  it("should export orderDraftListQuery", () => {
    expect(orderDraftListQuery).toBeDefined();
  });

  it("should export orderFulfillData", () => {
    expect(orderFulfillData).toBeDefined();
  });

  it("should export orderFulfillSettingsQuery", () => {
    expect(orderFulfillSettingsQuery).toBeDefined();
  });

  it("should export orderLinesMetadata", () => {
    expect(orderLinesMetadata).toBeDefined();
  });

  it("should export orderListQuery", () => {
    expect(orderListQuery).toBeDefined();
  });

  it("should export orderRefundData", () => {
    expect(orderRefundData).toBeDefined();
  });

  it("should export orderSettingsQuery", () => {
    expect(orderSettingsQuery).toBeDefined();
  });

  it("should export orderTransactionsData", () => {
    expect(orderTransactionsData).toBeDefined();
  });

  it("should export refundSettings", () => {
    expect(refundSettings).toBeDefined();
  });
});
