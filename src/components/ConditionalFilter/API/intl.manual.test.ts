jest.mock("@dashboard/graphql", () => ({
  AttributeTypeEnum: { PAGE_TYPE: "PAGE_TYPE", PRODUCT_TYPE: "PRODUCT_TYPE" },
  CollectionPublished: { PUBLISHED: "PUBLISHED", HIDDEN: "HIDDEN" },
  DiscountStatusEnum: { ACTIVE: "ACTIVE", EXPIRED: "EXPIRED", SCHEDULED: "SCHEDULED" },
  FulfillmentStatus: {
    CANCELED: "CANCELED",
    FULFILLED: "FULFILLED",
    REFUNDED: "REFUNDED",
    REFUNDED_AND_RETURNED: "REFUNDED_AND_RETURNED",
    REPLACED: "REPLACED",
    RETURNED: "RETURNED",
    WAITING_FOR_APPROVAL: "WAITING_FOR_APPROVAL",
  },
  OrderAuthorizeStatusEnum: { FULL: "FULL", PARTIAL: "PARTIAL", NONE: "NONE" },
  OrderChargeStatusEnum: {
    FULL: "FULL",
    PARTIAL: "PARTIAL",
    OVERCHARGED: "OVERCHARGED",
    NONE: "NONE",
  },
  OrderStatusFilter: {},
  PaymentMethodTypeEnum: { CARD: "CARD", OTHER: "OTHER" },
  ProductTypeEnum: { DIGITAL: "DIGITAL", SHIPPABLE: "SHIPPABLE" },
  StaffMemberStatus: { ACTIVE: "ACTIVE", DEACTIVATED: "DEACTIVATED" },
  VoucherDiscountType: { FIXED: "FIXED", PERCENTAGE: "PERCENTAGE", SHIPPING: "SHIPPING" },
}));
jest.mock("@dashboard/misc", () => ({
  transformOrderStatus: (status: string) => ({ localized: `order-${status}` }),
}));

import { getLocalizedLabel } from "./intl";

const mockIntl: any = {
  formatMessage: (msg: any) => msg?.defaultMessage || msg?.id || "translated",
};

describe("intl - getLocalizedLabel", () => {
  it("returns order status label", () => {
    const result = getLocalizedLabel("status", "UNFULFILLED", mockIntl);

    expect(result).toBe("order-UNFULFILLED");
  });

  it("returns authorize status FULL", () => {
    const result = getLocalizedLabel("authorizeStatus", "FULL", mockIntl);

    expect(typeof result).toBe("string");
  });

  it("returns authorize status PARTIAL", () => {
    const result = getLocalizedLabel("authorizeStatus", "PARTIAL", mockIntl);

    expect(typeof result).toBe("string");
  });

  it("returns authorize status NONE", () => {
    const result = getLocalizedLabel("authorizeStatus", "NONE", mockIntl);

    expect(typeof result).toBe("string");
  });

  it("returns authorize status default", () => {
    const result = getLocalizedLabel("authorizeStatus", "UNKNOWN", mockIntl);

    expect(result).toBe("UNKNOWN");
  });

  it("returns charge status FULL", () => {
    expect(typeof getLocalizedLabel("chargeStatus", "FULL", mockIntl)).toBe("string");
  });

  it("returns charge status PARTIAL", () => {
    expect(typeof getLocalizedLabel("chargeStatus", "PARTIAL", mockIntl)).toBe("string");
  });

  it("returns charge status OVERCHARGED", () => {
    expect(typeof getLocalizedLabel("chargeStatus", "OVERCHARGED", mockIntl)).toBe("string");
  });

  it("returns charge status NONE", () => {
    expect(typeof getLocalizedLabel("chargeStatus", "NONE", mockIntl)).toBe("string");
  });

  it("returns charge status default", () => {
    expect(getLocalizedLabel("chargeStatus", "UNKNOWN", mockIntl)).toBe("UNKNOWN");
  });

  it("returns published label PUBLISHED", () => {
    expect(typeof getLocalizedLabel("published", "PUBLISHED", mockIntl)).toBe("string");
  });

  it("returns published label HIDDEN", () => {
    expect(typeof getLocalizedLabel("published", "HIDDEN", mockIntl)).toBe("string");
  });

  it("returns published label default", () => {
    expect(getLocalizedLabel("published", "UNKNOWN", mockIntl)).toBe("UNKNOWN");
  });

  it("returns discount type FIXED", () => {
    expect(typeof getLocalizedLabel("discountType", "FIXED", mockIntl)).toBe("string");
  });

  it("returns discount type PERCENTAGE", () => {
    expect(typeof getLocalizedLabel("discountType", "PERCENTAGE", mockIntl)).toBe("string");
  });

  it("returns discount type SHIPPING", () => {
    expect(typeof getLocalizedLabel("discountType", "SHIPPING", mockIntl)).toBe("string");
  });

  it("returns voucher status ACTIVE", () => {
    expect(typeof getLocalizedLabel("voucherStatus", "ACTIVE", mockIntl)).toBe("string");
  });

  it("returns voucher status EXPIRED", () => {
    expect(typeof getLocalizedLabel("voucherStatus", "EXPIRED", mockIntl)).toBe("string");
  });

  it("returns voucher status SCHEDULED", () => {
    expect(typeof getLocalizedLabel("voucherStatus", "SCHEDULED", mockIntl)).toBe("string");
  });

  it("returns voucher status default", () => {
    expect(getLocalizedLabel("voucherStatus", "UNKNOWN", mockIntl)).toBe("UNKNOWN");
  });

  it("returns product type DIGITAL", () => {
    expect(typeof getLocalizedLabel("typeOfProduct", "DIGITAL", mockIntl)).toBe("string");
  });

  it("returns product type SHIPPABLE", () => {
    expect(typeof getLocalizedLabel("typeOfProduct", "SHIPPABLE", mockIntl)).toBe("string");
  });

  it("returns product type default", () => {
    expect(getLocalizedLabel("typeOfProduct", "UNKNOWN", mockIntl)).toBe("UNKNOWN");
  });

  it("returns staff member status ACTIVE", () => {
    expect(typeof getLocalizedLabel("staffMemberStatus", "ACTIVE", mockIntl)).toBe("string");
  });

  it("returns staff member status DEACTIVATED", () => {
    expect(typeof getLocalizedLabel("staffMemberStatus", "DEACTIVATED", mockIntl)).toBe("string");
  });

  it("returns staff member status default", () => {
    expect(getLocalizedLabel("staffMemberStatus", "UNKNOWN", mockIntl)).toBe("UNKNOWN");
  });

  it("returns attribute type PAGE_TYPE", () => {
    expect(typeof getLocalizedLabel("attributeType", "PAGE_TYPE", mockIntl)).toBe("string");
  });

  it("returns attribute type PRODUCT_TYPE", () => {
    expect(typeof getLocalizedLabel("attributeType", "PRODUCT_TYPE", mockIntl)).toBe("string");
  });

  it("returns attribute type default", () => {
    expect(getLocalizedLabel("attributeType", "UNKNOWN", mockIntl)).toBe("UNKNOWN");
  });

  it("returns payment method type CARD", () => {
    expect(typeof getLocalizedLabel("transactionsPaymentType", "CARD", mockIntl)).toBe("string");
  });

  it("returns payment method type OTHER", () => {
    expect(typeof getLocalizedLabel("transactionsPaymentType", "OTHER", mockIntl)).toBe("string");
  });

  it("returns payment method type default", () => {
    expect(getLocalizedLabel("transactionsPaymentType", "UNKNOWN", mockIntl)).toBe("UNKNOWN");
  });

  it("returns fulfillment status CANCELED", () => {
    expect(typeof getLocalizedLabel("fulfillmentStatus", "CANCELED", mockIntl)).toBe("string");
  });

  it("returns fulfillment status FULFILLED", () => {
    expect(typeof getLocalizedLabel("fulfillmentStatus", "FULFILLED", mockIntl)).toBe("string");
  });

  it("returns fulfillment status REFUNDED", () => {
    expect(typeof getLocalizedLabel("fulfillmentStatus", "REFUNDED", mockIntl)).toBe("string");
  });

  it("returns fulfillment status REFUNDED_AND_RETURNED", () => {
    expect(typeof getLocalizedLabel("fulfillmentStatus", "REFUNDED_AND_RETURNED", mockIntl)).toBe(
      "string",
    );
  });

  it("returns fulfillment status REPLACED", () => {
    expect(typeof getLocalizedLabel("fulfillmentStatus", "REPLACED", mockIntl)).toBe("string");
  });

  it("returns fulfillment status RETURNED", () => {
    expect(typeof getLocalizedLabel("fulfillmentStatus", "RETURNED", mockIntl)).toBe("string");
  });

  it("returns fulfillment status WAITING_FOR_APPROVAL", () => {
    expect(typeof getLocalizedLabel("fulfillmentStatus", "WAITING_FOR_APPROVAL", mockIntl)).toBe(
      "string",
    );
  });

  it("returns fulfillment status default", () => {
    expect(getLocalizedLabel("fulfillmentStatus", "UNKNOWN", mockIntl)).toBe("UNKNOWN");
  });

  it("returns value for unknown row type", () => {
    expect(getLocalizedLabel("unknownType" as any, "someValue", mockIntl)).toBe("someValue");
  });
});
