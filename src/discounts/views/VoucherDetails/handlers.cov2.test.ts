// Auto-generated coverage test for src/discounts/views/VoucherDetails/handlers.ts
import { createUpdateHandler } from "./handlers";

jest.mock(
  "@dashboard/discounts/types",
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
  "@dashboard/discounts/handlers",
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
  "@dashboard/discounts/components/VoucherDetailsPage",
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
jest.mock(
  "@dashboard/channels/utils",
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

describe("handlers.ts", () => {
  it("executes createUpdateHandler", () => {
    const _result = createUpdateHandler(
      {} as any,
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
      {} as any,
    );

    void _result;
  });
});
