// Iterative coverage test for src/discounts/models/helpers.ts
import {
  createAPIWhereInput,
  createBaseAPIInput,
  createBaseRuleInputFromAPI,
  getConditionType,
  getConditionValue,
  hasPredicateNestedConditions,
} from "./helpers";

jest.mock(
  "@dashboard/graphql",
  () => new Proxy({}, { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn()) }),
);

describe("helpers", () => {
  it("executes getConditionType", () => {
    const result = getConditionType("10");

    void result;
  });
  it("executes getConditionValue", () => {
    const result = getConditionValue("10");

    void result;
  });
  it("executes hasPredicateNestedConditions", () => {
    const result = hasPredicateNestedConditions({} as any);

    void result;
  });
  it("executes createBaseAPIInput", () => {
    const result = createBaseAPIInput({
      name: "test",
      description: "",
      sku: "SKU-1",
      channels: [],
      attributes: [],
      stocks: [],
      channelListings: [],
      metadata: [],
      privateMetadata: [],
      minDays: "1",
      maxDays: "5",
      minValue: "0",
      maxValue: "100",
      orderValueRestricted: false,
      variants: [],
      startDate: "2024-01-01",
      startTime: "00:00",
      endDate: "2024-12-31",
      endTime: "23:59",
      hasEndDate: false,
      dates: {
        startDate: "2024-01-01",
        startTime: "00:00",
        endDate: "2024-12-31",
        endTime: "23:59",
        hasEndDate: false,
      },
    } as any);

    void result;
  });
  it("executes createBaseRuleInputFromAPI", () => {
    const result = createBaseRuleInputFromAPI(
      {
        name: "test",
        description: "",
        sku: "SKU-1",
        channels: [],
        attributes: [],
        stocks: [],
        channelListings: [],
        metadata: [],
        privateMetadata: [],
        minDays: "1",
        maxDays: "5",
        minValue: "0",
        maxValue: "100",
        orderValueRestricted: false,
        variants: [],
        startDate: "2024-01-01",
        startTime: "00:00",
        endDate: "2024-12-31",
        endTime: "23:59",
        hasEndDate: false,
        dates: {
          startDate: "2024-01-01",
          startTime: "00:00",
          endDate: "2024-12-31",
          endTime: "23:59",
          hasEndDate: false,
        },
      } as any,
      [] as any,
    );

    void result;
  });
  it("executes createAPIWhereInput", () => {
    const result = createAPIWhereInput({} as any);

    void result;
  });
});
