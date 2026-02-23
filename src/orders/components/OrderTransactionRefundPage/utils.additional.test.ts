import { OrderGrantedRefundStatusEnum } from "@dashboard/graphql";

import {
  canRefundShipping,
  getMaxQtyToRefund,
  getRefundFormSubmitBehavior,
  getRefundStatusColor,
  getRefundStatusLabel,
  getRefundViewTitle,
  getSelectedProductsValue,
  handleLinesToRefundChange,
  handleReasonChange,
  validateQty,
} from "./utils";

const mockIntl = {
  formatMessage: jest.fn(msg => msg?.defaultMessage || "translated"),
} as any;

describe("OrderTransactionRefundPage/utils additional tests", () => {
  describe("canRefundShipping", () => {
    it("should return true when no refund with shipping exists", () => {
      const order = { grantedRefunds: [] } as any;

      expect(canRefundShipping(order, undefined)).toBe(true);
    });

    it("should return true when draft refund is the one with shipping", () => {
      const draftRefund = { id: "refund-1", shippingCostsIncluded: true };
      const order = { grantedRefunds: [draftRefund] } as any;

      expect(canRefundShipping(order, draftRefund as any)).toBe(true);
    });

    it("should return false when another refund has shipping", () => {
      const otherRefund = { id: "refund-1", shippingCostsIncluded: true };
      const draftRefund = { id: "refund-2", shippingCostsIncluded: false };
      const order = { grantedRefunds: [otherRefund] } as any;

      expect(canRefundShipping(order, draftRefund as any)).toBe(false);
    });

    it("should return true for undefined order", () => {
      expect(canRefundShipping(undefined, undefined)).toBe(true);
    });
  });

  describe("validateQty", () => {
    it("should return empty string for no update value", () => {
      validateQty({
        update: { row: 0, value: "" as any },
        order: { lines: [{ id: "l1", quantity: 10 }] } as any,
        draftRefund: undefined,
      });
      expect(result).toBe("");
    });

    it("should return empty string for no order", () => {
      validateQty({
        update: { row: 0, value: 5 },
        order: undefined,
        draftRefund: undefined,
      });
      expect(result).toBe("");
    });

    it("should return 0 for negative value", () => {
      const order = {
        lines: [{ id: "l1", quantity: 10 }],
        grantedRefunds: [],
      } as any;

      validateQty({
        update: { row: 0, value: -5 },
        order,
        draftRefund: undefined,
      });
      expect(result).toBe(0);
    });

    it("should cap at max qty to refund", () => {
      const order = {
        lines: [{ id: "l1", quantity: 5 }],
        grantedRefunds: [],
      } as any;

      validateQty({
        update: { row: 0, value: 10 },
        order,
        draftRefund: undefined,
      });
      expect(result).toBe(5);
    });

    it("should return valid value within range", () => {
      const order = {
        lines: [{ id: "l1", quantity: 10 }],
        grantedRefunds: [],
      } as any;

      validateQty({
        update: { row: 0, value: 3 },
        order,
        draftRefund: undefined,
      });
      expect(result).toBe(3);
    });

    it("should handle string value for parsing", () => {
      const order = {
        lines: [{ id: "l1", quantity: 10 }],
        grantedRefunds: [],
      } as any;

      validateQty({
        update: { row: 0, value: "3" },
        order,
        draftRefund: undefined,
      });
      expect(result).toBe(3);
    });

    it("should return 0 for NaN string value", () => {
      const order = {
        lines: [{ id: "l1", quantity: 10 }],
        grantedRefunds: [],
      } as any;

      validateQty({
        update: { row: 0, value: "abc" },
        order,
        draftRefund: undefined,
      });
      expect(result).toBe(0);
    });
  });

  describe("handleLinesToRefundChange", () => {
    it("should update line quantity via setValue", () => {
      const setValue = jest.fn();
      const linesToRefund = [{ quantity: 0, reason: "" }];

      handleLinesToRefundChange({
        data: { row: 0, value: 5 },
        index: 0,
        linesToRefund,
        setValue,
      });
      expect(setValue).toHaveBeenCalledWith(
        "linesToRefund.0",
        { quantity: 5, reason: "" },
        { shouldDirty: true },
      );
    });
  });

  describe("handleReasonChange", () => {
    it("should update reason via refundFieldsUpdate", () => {
      const update = jest.fn();
      const linesToRefund = [{ quantity: 3, reason: "" }];

      handleReasonChange({
        reason: "Damaged",
        index: 0,
        linesToRefund,
        refundFieldsUpdate: update,
      });
      expect(update).toHaveBeenCalledWith(0, { quantity: 3, reason: "Damaged" });
    });
  });

  describe("getSelectedProductsValue", () => {
    it("should sum selected products value", () => {
      const order = {
        lines: [{ unitPrice: { gross: { amount: 10 } } }, { unitPrice: { gross: { amount: 20 } } }],
      } as any;
      const linesToRefund = [{ quantity: 2 }, { quantity: 3 }];

      getSelectedProductsValue({ linesToRefund, order });
      expect(result).toBe(80);
    });

    it("should handle NaN quantity", () => {
      const order = {
        lines: [{ unitPrice: { gross: { amount: 10 } } }],
      } as any;
      const linesToRefund = [{ quantity: NaN }];

      getSelectedProductsValue({ linesToRefund, order });
      expect(result).toBe(0);
    });
  });

  describe("getRefundViewTitle", () => {
    it("should return edit title when draftRefund exists", () => {
      const draftRefund = { id: "refund-1" } as any;

      getRefundViewTitle(draftRefund, mockIntl);
      expect(mockIntl.formatMessage).toHaveBeenCalled();
    });

    it("should return create title when no draftRefund", () => {
      getRefundViewTitle(undefined, mockIntl);
      expect(mockIntl.formatMessage).toHaveBeenCalled();
    });
  });

  describe("getRefundStatusColor", () => {
    it("should return success for SUCCESS", () => {
      expect(getRefundStatusColor(OrderGrantedRefundStatusEnum.SUCCESS)).toBe("success");
    });

    it("should return error for FAILURE", () => {
      expect(getRefundStatusColor(OrderGrantedRefundStatusEnum.FAILURE)).toBe("error");
    });

    it("should return warning for PENDING", () => {
      expect(getRefundStatusColor(OrderGrantedRefundStatusEnum.PENDING)).toBe("warning");
    });

    it("should return neutral for NONE", () => {
      expect(getRefundStatusColor(OrderGrantedRefundStatusEnum.NONE)).toBe("neutral");
    });
  });

  describe("getRefundStatusLabel", () => {
    it("should return label for SUCCESS", () => {
      getRefundStatusLabel(OrderGrantedRefundStatusEnum.SUCCESS, mockIntl);
      expect(mockIntl.formatMessage).toHaveBeenCalled();
    });

    it("should return label for FAILURE", () => {
      getRefundStatusLabel(OrderGrantedRefundStatusEnum.FAILURE, mockIntl);
      expect(mockIntl.formatMessage).toHaveBeenCalled();
    });

    it("should return label for PENDING", () => {
      getRefundStatusLabel(OrderGrantedRefundStatusEnum.PENDING, mockIntl);
      expect(mockIntl.formatMessage).toHaveBeenCalled();
    });

    it("should return draft label for NONE", () => {
      getRefundStatusLabel(OrderGrantedRefundStatusEnum.NONE, mockIntl);
      expect(mockIntl.formatMessage).toHaveBeenCalled();
    });
  });

  describe("getMaxQtyToRefund", () => {
    it("should return 0 for no rowData", () => {
      expect(
        getMaxQtyToRefund({ rowData: undefined, order: {} as any, draftRefund: undefined }),
      ).toBe(0);
    });

    it("should return full quantity when no other refunds", () => {
      getMaxQtyToRefund({
        rowData: { id: "line-1", quantity: 10 },
        order: { grantedRefunds: [] } as any,
        draftRefund: undefined,
      });
      expect(result).toBe(10);
    });

    it("should subtract other refunded quantities", () => {
      getMaxQtyToRefund({
        rowData: { id: "line-1", quantity: 10 },
        order: {
          grantedRefunds: [
            {
              id: "refund-1",
              lines: [{ orderLine: { id: "line-1" }, quantity: 3 }],
            },
          ],
        } as any,
        draftRefund: undefined,
      });
      expect(result).toBe(7);
    });

    it("should exclude current draft refund from calculation", () => {
      const draftRefund = {
        id: "refund-1",
        lines: [{ orderLine: { id: "line-1" }, quantity: 3 }],
      };

      getMaxQtyToRefund({
        rowData: { id: "line-1", quantity: 10 },
        order: { grantedRefunds: [draftRefund] } as any,
        draftRefund: draftRefund as any,
      });
      expect(result).toBe(10);
    });
  });

  describe("getRefundFormSubmitBehavior", () => {
    const onSaveDraft = jest.fn();
    const onTransferFunds = jest.fn();

    it("should return save draft behavior when not canHandlePayments", () => {
      getRefundFormSubmitBehavior({
        canHandlePayments: false,
        isDirty: false,
        isEdit: true,
        onTransferFundsState: "default",
        onSaveDraft,
        onSaveDraftState: "default",
        onTransferFunds,
        intl: mockIntl,
      });
      expect(result.onSubmit).toBe(onSaveDraft);
    });

    it("should return transfer funds behavior when all conditions met", () => {
      getRefundFormSubmitBehavior({
        canHandlePayments: true,
        isDirty: false,
        isEdit: true,
        onTransferFundsState: "default",
        onSaveDraft,
        onSaveDraftState: "default",
        onTransferFunds,
        intl: mockIntl,
      });
      expect(result.onSubmit).toBe(onTransferFunds);
    });
  });
});
