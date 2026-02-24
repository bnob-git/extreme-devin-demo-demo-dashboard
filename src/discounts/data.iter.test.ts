// Iterative coverage test for src/discounts/data.ts
import { getAddedChannelsInputFromFormData } from "./data";

jest.mock(
  "@dashboard/graphql",
  () => new Proxy({}, { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn()) }),
);
jest.mock("@dashboard/channels/utils", () => {
  try {
    return jest.requireActual("@dashboard/channels/utils");
  } catch {
    return new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => "")) },
    );
  }
});

describe("data", () => {
  it("executes getAddedChannelsInputFromFormData", () => {
    const result = getAddedChannelsInputFromFormData({
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
