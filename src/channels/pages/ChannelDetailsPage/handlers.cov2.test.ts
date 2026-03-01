// Auto-generated coverage test for src/channels/pages/ChannelDetailsPage/handlers.ts
import {
  createShippingZoneAddHandler,
  createShippingZoneRemoveHandler,
  createWarehouseAddHandler,
  createWarehouseRemoveHandler,
  createWarehouseReorderHandler,
} from "./handlers";

jest.mock("@dashboard/hooks/makeTopLevelSearch", () => ({
  __esModule: true,
  default: jest.fn(() => jest.fn()),
}));
jest.mock(
  "@dashboard/utils/lists",
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
  "@dashboard/channels/components/ChannelForm",
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
  "@dashboard/types",
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
jest.mock("@dashboard/hooks/makeTopLevelSearch/utils", () => ({
  __esModule: true,
  default: jest.fn(() => jest.fn()),
}));
jest.mock("./utils", () => ({}));
jest.mock("@dashboard/misc", () => ({
  extractMutationErrors: (p: any) =>
    p.then
      ? p.then((r: any) =>
          r?.data ? Object.values(r.data).flatMap((v: any) => (v as any)?.errors || []) : [],
        )
      : [],
  getMutationErrors: (result: any) => {
    if (!result?.data) return [];

    const data = result.data;

    for (const key of Object.keys(data)) {
      if (data[key]?.errors) return data[key].errors;
    }

    return [];
  },
  getMutationState: () => "default",
  weight: (w: any) => w,
  joinDateTime: (d: string, t: string) => d + "T" + t,
  getParsedDataForJsonStringField: (d: any) => d,
}));

describe("handlers.ts", () => {
  it("executes createShippingZoneAddHandler", () => {
    const _result = createShippingZoneAddHandler(
      {
        name: "test",
        description: "",
        channels: [],
        attributes: [],
        stocks: [],
        channelListings: [],
      } as any,
      {
        name: "test",
        description: "",
        channels: [],
        attributes: [],
        stocks: [],
        channelListings: [],
      } as any,
      jest.fn(),
    );

    void _result;
  });
  it("executes createShippingZoneRemoveHandler", () => {
    const _result = createShippingZoneRemoveHandler(
      {
        name: "test",
        description: "",
        channels: [],
        attributes: [],
        stocks: [],
        channelListings: [],
      } as any,
      jest.fn(),
    );

    void _result;
  });
  it("executes createWarehouseAddHandler", () => {
    const _result = createWarehouseAddHandler(
      {
        name: "test",
        description: "",
        channels: [],
        attributes: [],
        stocks: [],
        channelListings: [],
      } as any,
      {
        name: "test",
        description: "",
        channels: [],
        attributes: [],
        stocks: [],
        channelListings: [],
      } as any,
      jest.fn(),
    );

    void _result;
  });
  it("executes createWarehouseRemoveHandler", () => {
    const _result = createWarehouseRemoveHandler(
      {
        name: "test",
        description: "",
        channels: [],
        attributes: [],
        stocks: [],
        channelListings: [],
      } as any,
      jest.fn(),
    );

    void _result;
  });
  it("executes createWarehouseReorderHandler", () => {
    const _result = createWarehouseReorderHandler(
      {
        name: "test",
        description: "",
        channels: [],
        attributes: [],
        stocks: [],
        channelListings: [],
      } as any,
      jest.fn(),
    );

    void _result;
  });
});
