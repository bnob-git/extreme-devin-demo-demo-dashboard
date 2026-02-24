// Iterative coverage test for src/channels/pages/ChannelDetailsPage/handlers.ts
import {
  createShippingZoneAddHandler,
  createShippingZoneRemoveHandler,
  createWarehouseAddHandler,
  createWarehouseRemoveHandler,
  createWarehouseReorderHandler,
} from "./handlers";

jest.mock("@dashboard/hooks/makeTopLevelSearch/utils", () => ({
  __esModule: true,
  default: jest.fn(() => jest.fn()),
}));
jest.mock("@dashboard/hooks/makeTopLevelSearch", () => ({
  __esModule: true,
  default: jest.fn(() => jest.fn()),
}));
jest.mock("@dashboard/misc", () => ({
  getMutationErrors: (result: any) => {
    if (!result?.data) return [];

    const data = result.data;

    for (const key of Object.keys(data)) {
      if (data[key]?.errors) return data[key].errors;
    }

    return [];
  },
  extractMutationErrors: async (promise: any) => {
    const result = await promise;

    if (!result?.data) return [];

    const data = result.data;

    for (const key of Object.keys(data)) {
      if (data[key]?.errors?.length > 0) return data[key].errors;
    }

    return [];
  },
  getMutationState: (..._args: any[]) => "default" as any,
  joinDateTime: (date: string, time: string) => date + "T" + time,
  splitDateTime: (dt: string) => ({ date: dt?.split("T")[0] || "", time: dt?.split("T")[1] || "" }),
  weight: (w: any) => w,
  maybe: (val: any, fn: any) => (val ? fn(val) : undefined),
  findValueInEnum: (val: any, _obj: any) => val,
  findInEnum: (val: any, _obj: any) => val,
  decimal: (v: any) => v,
  getStringOrPlaceholder: (s: any) => s || "",
  mapEdgesToItems: (data: any) => data?.edges?.map((e: any) => e.node) || [],
}));
jest.mock("@dashboard/utils/lists", () => {
  try {
    return jest.requireActual("@dashboard/utils/lists");
  } catch {
    return new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => "")) },
    );
  }
});
jest.mock(
  "@dashboard/channels/components/ChannelForm",
  () =>
    new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => ({}))) },
    ),
);
jest.mock(
  "@dashboard/types",
  () =>
    new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => ({}))) },
    ),
);

describe("handlers", () => {
  it("executes createShippingZoneAddHandler", () => {
    const result = createShippingZoneAddHandler(
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
      {} as any,
      {} as any,
    );

    void result;
  });
  it("executes createShippingZoneRemoveHandler", () => {
    const result = createShippingZoneRemoveHandler(
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
      {} as any,
    );

    void result;
  });
  it("executes createWarehouseAddHandler", () => {
    const result = createWarehouseAddHandler(
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
      {} as any,
      {} as any,
    );

    void result;
  });
  it("executes createWarehouseRemoveHandler", () => {
    const result = createWarehouseRemoveHandler(
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
      {} as any,
    );

    void result;
  });
  it("executes createWarehouseReorderHandler", () => {
    const result = createWarehouseReorderHandler(
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
      {} as any,
    );

    void result;
  });
});
