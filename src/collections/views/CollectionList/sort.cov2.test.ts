// Auto-generated coverage test for src/collections/views/CollectionList/sort.ts
import { canBeSorted } from "./sort";

jest.mock(
  "@dashboard/collections/urls",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, p: string) => {
          if (p === "__esModule") return true;

          return jest.fn(() => ({}));
        },
      },
    ),
);
jest.mock("@dashboard/graphql", () => ({
  PostalCodeRuleInclusionTypeEnum: { INCLUDE: "INCLUDE", EXCLUDE: "EXCLUDE" },
  ShippingMethodTypeEnum: { PRICE: "PRICE", WEIGHT: "WEIGHT" },
}));
jest.mock(
  "@dashboard/utils/sort",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, p: string) => {
          if (p === "__esModule") return true;

          return jest.fn(() => ({}));
        },
      },
    ),
);

describe("sort.ts", () => {
  it("executes canBeSorted", () => {
    const _result = canBeSorted(
      { sort: "name", asc: true } as any,
      [
        {
          id: "ch-1",
          name: "Default",
          price: "10",
          minValue: "0",
          maxValue: "100",
          currency: "USD",
        },
      ] as any[],
    );

    void _result;
  });
});
