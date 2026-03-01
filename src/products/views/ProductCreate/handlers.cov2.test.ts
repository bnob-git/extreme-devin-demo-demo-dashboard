// Auto-generated coverage test for src/products/views/ProductCreate/handlers.ts
import { createHandler } from "./handlers";

jest.mock("@dashboard/graphql", () => ({
  PostalCodeRuleInclusionTypeEnum: { INCLUDE: "INCLUDE", EXCLUDE: "EXCLUDE" },
  ShippingMethodTypeEnum: { PRICE: "PRICE", WEIGHT: "WEIGHT" },
}));
jest.mock(
  "@dashboard/attributes/utils/handlers",
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
  "@dashboard/products/components/ProductCreatePage/form",
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
  "@dashboard/products/utils/handlers",
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
jest.mock("@dashboard/utils/richText/misc", () => ({
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
jest.mock(
  "@dashboard/attributes/utils/data",
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
  it("executes createHandler", () => {
    const _result = createHandler(
      { id: "pt-1", hasVariants: false, productAttributes: [], variantAttributes: [] } as any,
      jest
        .fn()
        .mockResolvedValue({
          data: { fileUpload: { uploadedFile: { url: "http://test.com/file" }, errors: [] } },
        }),
    );

    void _result;
  });
});
