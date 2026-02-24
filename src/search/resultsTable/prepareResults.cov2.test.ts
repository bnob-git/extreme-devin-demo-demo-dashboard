// Auto-generated coverage test for src/search/resultsTable/prepareResults.ts
import { prepareResults } from "./prepareResults";

jest.mock("@dashboard/graphql", () => ({
  PostalCodeRuleInclusionTypeEnum: { INCLUDE: "INCLUDE", EXCLUDE: "EXCLUDE" },
  ShippingMethodTypeEnum: { PRICE: "PRICE", WEIGHT: "WEIGHT" },
}));

describe("prepareResults.ts", () => {
  it("executes prepareResults", () => {
    const _result = prepareResults({
      name: "test",
      description: "",
      channels: [],
      attributes: [],
      stocks: [],
      channelListings: [],
    } as any);

    void _result;
  });
});
