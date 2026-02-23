import {
  useDataLineMoneyStyles,
  useDataLineSettledStyles,
  useDataLineStyles,
  useManualRefundCardStyles,
  useStyles,
} from "./styles";

describe("orders/components/OrderSendRefundPage/styles.ts", () => {
  it("should export useDataLineMoneyStyles", () => {
    expect(useDataLineMoneyStyles).toBeDefined();
  });

  it("should export useDataLineSettledStyles", () => {
    expect(useDataLineSettledStyles).toBeDefined();
  });

  it("should export useDataLineStyles", () => {
    expect(useDataLineStyles).toBeDefined();
  });

  it("should export useManualRefundCardStyles", () => {
    expect(useManualRefundCardStyles).toBeDefined();
  });

  it("should export useStyles", () => {
    expect(useStyles).toBeDefined();
  });
});
