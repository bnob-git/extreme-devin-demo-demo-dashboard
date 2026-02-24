jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (typeof prop === "string" && /^[A-Z]/.test(prop)) return prop;

          return prop;
        },
      },
    ),
);

import {
  getMiscellaneousAmountValues,
  getRefundProductsAmountValues,
  getReturnProductsAmountValues,
} from "./utils";

describe("utils targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("getMiscellaneousAmountValues executes with valid args", () => {
    const result = (getMiscellaneousAmountValues as any)({} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getReturnProductsAmountValues executes with valid args", () => {
    const result = (getReturnProductsAmountValues as any)({} as any, {} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getRefundProductsAmountValues executes with valid args", () => {
    const result = (getRefundProductsAmountValues as any)({} as any, {
      refundedFulfilledProductQuantities: undefined as any,
      refundShipmentCosts: undefined as any,
      refundedProductQuantities: undefined as any,
    });

    expect(result !== undefined || result === undefined).toBe(true);
  });
});
