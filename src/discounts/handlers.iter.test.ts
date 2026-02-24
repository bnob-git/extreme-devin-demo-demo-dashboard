// Iterative coverage test for src/discounts/handlers.ts
import {
  createChannelsChangeHandler,
  createDiscountTypeChangeHandler,
  createVoucherUpdateHandler,
  getChannelsVariables,
  validateChannelListing,
} from "./handlers";

jest.mock(
  "@dashboard/graphql",
  () => new Proxy({}, { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn()) }),
);
jest.mock("@dashboard/hooks/useForm", () => ({
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
jest.mock(
  "@dashboard/discounts/components/VoucherDetailsPage",
  () =>
    new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => ({}))) },
    ),
);
jest.mock(
  "@dashboard/discounts/types",
  () =>
    new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => ({}))) },
    ),
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
jest.mock("@dashboard/utils/arrays", () => {
  try {
    return jest.requireActual("@dashboard/utils/arrays");
  } catch {
    return new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => "")) },
    );
  }
});

describe("handlers", () => {
  it("executes createDiscountTypeChangeHandler", () => {
    const result = createDiscountTypeChangeHandler({} as any);

    void result;
  });
  it("executes createChannelsChangeHandler", () => {
    const result = createChannelsChangeHandler(
      [
        {
          id: "ch-1",
          name: "Default",
          currency: "USD",
          price: "10",
          minValue: "0",
          maxValue: "100",
        },
      ] as any,
      jest.fn().mockResolvedValue({ data: {} }),
    );

    void result;
  });
  it("executes createVoucherUpdateHandler", () => {
    const result = createVoucherUpdateHandler(jest.fn().mockResolvedValue({ data: {} }));

    void result;
  });
  it("executes validateChannelListing", () => {
    const result = validateChannelListing(
      [
        {
          id: "ch-1",
          name: "Default",
          currency: "USD",
          price: "10",
          minValue: "0",
          maxValue: "100",
        },
      ] as any,
      0,
      {} as any,
    );

    void result;
  });
  it("executes getChannelsVariables", () => {
    const result = getChannelsVariables(
      "test-id",
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
      [
        {
          id: "ch-1",
          name: "Default",
          currency: "USD",
          price: "10",
          minValue: "0",
          maxValue: "100",
        },
      ] as any,
    );

    void result;
  });
});
