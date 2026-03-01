import { OrderDiscountType } from "@dashboard/graphql";

import {
  getAllFulfillmentLinesPriceSum,
  getAttributesCaption,
  getDiscountTypeLabel,
  getFulfillmentFormsetQuantity,
  getItemPriceAndQuantity,
  getLineAllocationWithHighestQuantity,
  getLineAvailableQuantityInWarehouse,
  getOrderCharged,
  getOrderLineAvailableQuantity,
  getRefundedLinesPriceSum,
  getToFulfillOrderLines,
  getWarehousesFromOrderLines,
  getWarehouseStock,
  isAnyAddressEditModalOpen,
  mergeRepeatedOrderLines,
  prepareMoney,
  transformFuflillmentLinesToStockFormsetData,
} from "./data";

const mockIntl = {
  formatMessage: jest.fn((msg, _values) => msg?.defaultMessage || "translated"),
} as any;

describe("orders/utils/data additional tests", () => {
  describe("getOrderCharged", () => {
    it("should return totalCharged when available", () => {
      const order = { totalCharged: { amount: 100, currency: "USD" } } as any;

      expect(getOrderCharged(order)).toEqual({ amount: 100, currency: "USD" });
    });

    it("should fallback to totalCaptured", () => {
      const order = { totalCaptured: { amount: 50, currency: "USD" } } as any;

      expect(getOrderCharged(order)).toEqual({ amount: 50, currency: "USD" });
    });
  });

  describe("getToFulfillOrderLines", () => {
    it("should filter lines with quantityToFulfill > 0", () => {
      const lines = [
        { id: "1", quantityToFulfill: 5 },
        { id: "2", quantityToFulfill: 0 },
        { id: "3", quantityToFulfill: 3 },
      ] as any;
      const result = getToFulfillOrderLines(lines);

      expect(result).toHaveLength(2);
      expect(result[0].id).toBe("1");
      expect(result[1].id).toBe("3");
    });

    it("should return empty array for undefined", () => {
      expect(getToFulfillOrderLines(undefined)).toEqual([]);
    });
  });

  describe("getWarehousesFromOrderLines", () => {
    it("should extract unique warehouses from order lines", () => {
      const lines = [
        {
          variant: {
            stocks: [
              { warehouse: { id: "wh-1", name: "Warehouse 1" } },
              { warehouse: { id: "wh-2", name: "Warehouse 2" } },
            ],
          },
        },
        {
          variant: {
            stocks: [{ warehouse: { id: "wh-1", name: "Warehouse 1" } }],
          },
        },
      ] as any;
      const result = getWarehousesFromOrderLines(lines);

      expect(result).toHaveLength(2);
    });

    it("should handle lines without variant", () => {
      const lines = [{ variant: null }] as any;
      const result = getWarehousesFromOrderLines(lines);

      expect(result).toEqual([]);
    });
  });

  describe("getItemPriceAndQuantity", () => {
    it("should return empty object for empty orderLines", () => {
      expect(
        getItemPriceAndQuantity({
          orderLines: [],
          itemsQuantities: [],
          id: "1",
        }),
      ).toEqual({});
    });

    it("should return unit price and quantity", () => {
      const orderLines = [{ id: "line-1", unitPrice: { gross: { amount: 10 } } }] as any;
      const itemsQuantities = [{ id: "line-1", value: 3 }] as any;
      const result = getItemPriceAndQuantity({
        orderLines,
        itemsQuantities,
        id: "line-1",
      });

      expect(result.selectedQuantity).toBe(3);
      expect(result.unitPrice).toEqual({ gross: { amount: 10 } });
    });
  });

  describe("getRefundedLinesPriceSum", () => {
    it("should sum refunded lines prices", () => {
      const lines = [
        { id: "1", unitPrice: { gross: { amount: 10 } } },
        { id: "2", unitPrice: { gross: { amount: 20 } } },
      ] as any;
      const refundedQuantities = [
        { id: "1", value: 2 },
        { id: "2", value: 1 },
      ] as any;

      expect(getRefundedLinesPriceSum(lines, refundedQuantities)).toBe(40);
    });
  });

  describe("getAllFulfillmentLinesPriceSum", () => {
    it("should sum fulfillment lines prices", () => {
      const fulfillments = [
        {
          lines: [{ id: "fl-1", orderLine: { unitPrice: { gross: { amount: 15 } } } }],
        },
      ] as any;
      const quantities = [{ id: "fl-1", value: 2 }] as any;

      expect(getAllFulfillmentLinesPriceSum(fulfillments, quantities)).toBe(30);
    });
  });

  describe("mergeRepeatedOrderLines", () => {
    it("should merge repeated order lines", () => {
      const lines = [
        { orderLine: { id: "ol-1" }, quantity: 2 },
        { orderLine: { id: "ol-1" }, quantity: 3 },
        { orderLine: { id: "ol-2" }, quantity: 1 },
      ] as any;
      const result = mergeRepeatedOrderLines(lines);

      expect(result).toHaveLength(2);
      expect(result[0].quantity).toBe(5);
      expect(result[1].quantity).toBe(1);
    });

    it("should handle undefined input", () => {
      expect(mergeRepeatedOrderLines(undefined as any)).toEqual([]);
    });
  });

  describe("getOrderLineAvailableQuantity", () => {
    it("should return 0 for null stock", () => {
      expect(getOrderLineAvailableQuantity({} as any, null as any)).toBe(0);
    });

    it("should calculate available quantity", () => {
      const line = {
        allocations: [{ warehouse: { id: "wh-1" }, quantity: 5 }],
      } as any;
      const stock = {
        warehouse: { id: "wh-1" },
        quantity: 20,
        quantityAllocated: 10,
      } as any;

      expect(getOrderLineAvailableQuantity(line, stock)).toBe(15);
    });
  });

  describe("getWarehouseStock", () => {
    it("should find stock by warehouse id", () => {
      const stocks = [
        { warehouse: { id: "wh-1" }, quantity: 10 },
        { warehouse: { id: "wh-2" }, quantity: 20 },
      ] as any;

      expect(getWarehouseStock(stocks, "wh-2")?.quantity).toBe(20);
    });

    it("should return undefined for not found", () => {
      expect(getWarehouseStock([], "wh-1")).toBeUndefined();
    });
  });

  describe("getLineAvailableQuantityInWarehouse", () => {
    it("should return 0 for line without variant stocks", () => {
      expect(
        getLineAvailableQuantityInWarehouse({ variant: null } as any, { id: "wh-1" } as any),
      ).toBe(0);
    });

    it("should return 0 when stock not found in warehouse", () => {
      const line = {
        variant: {
          stocks: [{ warehouse: { id: "wh-1" }, quantity: 10, quantityAllocated: 0 }],
        },
      } as any;

      expect(getLineAvailableQuantityInWarehouse(line, { id: "wh-2" } as any)).toBe(0);
    });

    it("should return available quantity for matching warehouse", () => {
      const line = {
        variant: {
          stocks: [{ warehouse: { id: "wh-1" }, quantity: 10, quantityAllocated: 3 }],
        },
        allocations: [],
      } as any;
      const warehouse = { id: "wh-1" } as any;

      expect(getLineAvailableQuantityInWarehouse(line, warehouse)).toBe(7);
    });
  });

  describe("getLineAllocationWithHighestQuantity", () => {
    it("should return allocation with highest quantity", () => {
      const line = {
        allocations: [
          { warehouse: { id: "wh-1" }, quantity: 5 },
          { warehouse: { id: "wh-2" }, quantity: 10 },
          { warehouse: { id: "wh-3" }, quantity: 3 },
        ],
      } as any;
      const result = getLineAllocationWithHighestQuantity(line);

      expect(result?.quantity).toBe(10);
    });

    it("should handle single allocation", () => {
      const line = {
        allocations: [{ warehouse: { id: "wh-1" }, quantity: 5 }],
      } as any;

      expect(getLineAllocationWithHighestQuantity(line)?.quantity).toBe(5);
    });
  });

  describe("transformFuflillmentLinesToStockFormsetData", () => {
    it("should transform fulfillment lines to formset data", () => {
      const lines = [{ orderLine: { id: "ol-1" }, quantity: 3 }] as any;
      const warehouse = { id: "wh-1", name: "Warehouse 1" } as any;
      const result = transformFuflillmentLinesToStockFormsetData(lines, warehouse);

      expect(result).toEqual([
        {
          data: null,
          id: "ol-1",
          value: [{ quantity: 3, warehouse }],
        },
      ]);
    });

    it("should handle undefined lines", () => {
      expect(transformFuflillmentLinesToStockFormsetData(undefined as any, {} as any)).toEqual([]);
    });
  });

  describe("getAttributesCaption", () => {
    it("should return empty string for no attributes", () => {
      expect(getAttributesCaption([])).toBe("");
    });

    it("should return empty string for undefined", () => {
      expect(getAttributesCaption(undefined)).toBe("");
    });

    it("should join attribute values with separator", () => {
      const attributes = [
        { values: [{ name: "Red" }, { name: "Blue" }] },
        { values: [{ name: "Large" }] },
      ] as any;

      expect(getAttributesCaption(attributes)).toBe(" / Red, Blue / Large");
    });
  });

  describe("prepareMoney", () => {
    it("should create money object", () => {
      const result = prepareMoney(100, "USD");

      expect(result).toEqual({
        __typename: "Money",
        amount: 100,
        currency: "USD",
      });
    });

    it("should fallback to USD when currency is undefined", () => {
      const result = prepareMoney(50, undefined as any);

      expect(result.currency).toBe("USD");
    });
  });

  describe("isAnyAddressEditModalOpen", () => {
    it("should return false for undefined", () => {
      expect(isAnyAddressEditModalOpen(undefined)).toBe(false);
    });

    it("should return true for edit-customer-addresses", () => {
      expect(isAnyAddressEditModalOpen("edit-customer-addresses")).toBe(true);
    });

    it("should return true for edit-shipping-address", () => {
      expect(isAnyAddressEditModalOpen("edit-shipping-address")).toBe(true);
    });

    it("should return true for edit-billing-address", () => {
      expect(isAnyAddressEditModalOpen("edit-billing-address")).toBe(true);
    });

    it("should return false for other values", () => {
      expect(isAnyAddressEditModalOpen("some-other-modal")).toBe(false);
    });
  });

  describe("getDiscountTypeLabel", () => {
    it("should return label for MANUAL type", () => {
      const discount = { type: OrderDiscountType.MANUAL, name: "Test" } as any;

      getDiscountTypeLabel(discount, mockIntl);
      expect(mockIntl.formatMessage).toHaveBeenCalled();
    });

    it("should return label for VOUCHER type", () => {
      const discount = { type: OrderDiscountType.VOUCHER, name: "VOUCHER10" } as any;

      getDiscountTypeLabel(discount, mockIntl);
      expect(mockIntl.formatMessage).toHaveBeenCalled();
    });

    it("should return label for ORDER_PROMOTION type", () => {
      const discount = {
        type: OrderDiscountType.ORDER_PROMOTION,
        name: "Promo: Detail",
      } as any;
      const result = getDiscountTypeLabel(discount, mockIntl);

      expect(result).toBe("Promo");
    });

    it("should return dash when ORDER_PROMOTION name only has separator", () => {
      const discount = { type: OrderDiscountType.ORDER_PROMOTION, name: ":" } as any;
      const result = getDiscountTypeLabel(discount, mockIntl);

      expect(result).toBe("-");
    });

    it("should return label for PROMOTION type", () => {
      const discount = { type: OrderDiscountType.PROMOTION, name: "Test" } as any;

      getDiscountTypeLabel(discount, mockIntl);
      expect(mockIntl.formatMessage).toHaveBeenCalled();
    });

    it("should return label for SALE type", () => {
      const discount = { type: OrderDiscountType.SALE, name: "Test" } as any;

      getDiscountTypeLabel(discount, mockIntl);
      expect(mockIntl.formatMessage).toHaveBeenCalled();
    });
  });

  describe("getFulfillmentFormsetQuantity", () => {
    it("should return quantity from formset data", () => {
      const formsetData = [{ id: "line-1", value: [{ quantity: 5, warehouse: {} }] }] as any;
      const line = { id: "line-1" } as any;

      expect(getFulfillmentFormsetQuantity(formsetData, line)).toBe(5);
    });

    it("should return undefined for missing line", () => {
      expect(getFulfillmentFormsetQuantity([], { id: "missing" } as any)).toBeUndefined();
    });
  });
});
