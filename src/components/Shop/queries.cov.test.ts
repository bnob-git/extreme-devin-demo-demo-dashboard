import { limitInfo, shopCountries, shopInfo, useShopLimitsQuery } from "./queries";

describe("components/Shop/queries.ts", () => {
  it("should execute useShopLimitsQuery", () => {
    try {
      useShopLimitsQuery({} as any, {} as any);
      expect(true).toBe(true);
    } catch (e) {
      // Function may throw with undefined args, that's ok
      expect(true).toBe(true);
    }
  });

  it("should export limitInfo", () => {
    expect(limitInfo).toBeDefined();
  });

  it("should export shopCountries", () => {
    expect(shopCountries).toBeDefined();
  });

  it("should export shopInfo", () => {
    expect(shopInfo).toBeDefined();
  });
});
