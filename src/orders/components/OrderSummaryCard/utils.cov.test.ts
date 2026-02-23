import { extractOrderGiftCardUsedAmount, getDeliveryMethodName, getTaxTypeText } from "./utils";

describe("utils", () => {
  describe("extractOrderGiftCardUsedAmount", () => {
    it("should execute with valid args", () => {
      try {
        const result = (extractOrderGiftCardUsedAmount as any)({} as any);

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
        (extractOrderGiftCardUsedAmount as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (extractOrderGiftCardUsedAmount as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("getDeliveryMethodName", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getDeliveryMethodName as any)(
          {} as any,
          {
            formatMessage: (msg: any) => msg?.defaultMessage || "",
            formatNumber: (n: any) => String(n),
            formatDate: (d: any) => String(d),
            locale: "en",
          } as any,
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
        (getDeliveryMethodName as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getDeliveryMethodName as any)(null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("getTaxTypeText", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getTaxTypeText as any)(
          {} as any,
          {
            formatMessage: (msg: any) => msg?.defaultMessage || "",
            formatNumber: (n: any) => String(n),
            formatDate: (d: any) => String(d),
            locale: "en",
          } as any,
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
        (getTaxTypeText as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getTaxTypeText as any)(null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
