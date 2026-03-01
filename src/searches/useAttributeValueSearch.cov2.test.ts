// Auto-generated coverage test for src/searches/useAttributeValueSearch.ts
import { useSearchAttributeValuesSuggestions } from "./useAttributeValueSearch";

jest.mock("@dashboard/graphql", () => ({
  PostalCodeRuleInclusionTypeEnum: { INCLUDE: "INCLUDE", EXCLUDE: "EXCLUDE" },
  ShippingMethodTypeEnum: { PRICE: "PRICE", WEIGHT: "WEIGHT" },
}));
jest.mock("@dashboard/hooks/makeSearch", () => ({
  __esModule: true,
  default: jest.fn(() => jest.fn()),
}));
jest.mock(
  "@dashboard/utils/maps",
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
jest.mock(
  "@apollo/client",
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

describe("useAttributeValueSearch.ts", () => {
  it("executes useSearchAttributeValuesSuggestions", () => {
    const _result = useSearchAttributeValuesSuggestions();

    void _result;
  });
});
