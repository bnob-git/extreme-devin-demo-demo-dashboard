import {
  discount,
  discountList,
  orderDiscount,
  sale,
  saleList,
  voucherDetails,
  voucherList,
} from "./fixtures";

describe("discounts/fixtures.ts", () => {
  it("should export discount", () => {
    expect(discount).toBeDefined();
  });

  it("should export discountList", () => {
    expect(discountList).toBeDefined();
  });

  it("should export orderDiscount", () => {
    expect(orderDiscount).toBeDefined();
  });

  it("should export sale", () => {
    expect(sale).toBeDefined();
  });

  it("should export saleList", () => {
    expect(saleList).toBeDefined();
  });

  it("should export voucherDetails", () => {
    expect(voucherDetails).toBeDefined();
  });

  it("should export voucherList", () => {
    expect(voucherList).toBeDefined();
  });
});
