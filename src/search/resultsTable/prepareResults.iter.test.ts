// Iterative coverage test for src/search/resultsTable/prepareResults.ts
import { prepareResults } from "./prepareResults";

jest.mock(
  "@dashboard/graphql",
  () => new Proxy({}, { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn()) }),
);

describe("prepareResults", () => {
  it("executes prepareResults", () => {
    const result = prepareResults({
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
});
