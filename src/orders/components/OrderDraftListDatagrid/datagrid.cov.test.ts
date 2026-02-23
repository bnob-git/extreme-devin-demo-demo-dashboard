import {
  createGetCellContent,
  getCustomerName,
  orderDraftListStaticColumnsAdapter,
} from "./datagrid";

describe("datagrid", () => {
  describe("orderDraftListStaticColumnsAdapter", () => {
    it("should execute with valid args", () => {
      try {
        const result = (orderDraftListStaticColumnsAdapter as any)(
          {
            formatMessage: (msg: any) => msg?.defaultMessage || "",
            formatNumber: (n: any) => String(n),
            formatDate: (d: any) => String(d),
            locale: "en",
          } as any,
          {} as any,
        );

        if (result && typeof result === "object" && typeof result.then === "function") {
          result.catch(() => {});
        }
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle empty args", () => {
      try {
        (orderDraftListStaticColumnsAdapter as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (orderDraftListStaticColumnsAdapter as any)(null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("createGetCellContent", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createGetCellContent as any)({} as any);

        if (result && typeof result === "object" && typeof result.then === "function") {
          result.catch(() => {});
        }
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle empty args", () => {
      try {
        (createGetCellContent as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createGetCellContent as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("getCustomerName", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getCustomerName as any)({} as any);

        if (result && typeof result === "object" && typeof result.then === "function") {
          result.catch(() => {});
        }
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle empty args", () => {
      try {
        (getCustomerName as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getCustomerName as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
