// Auto-generated coverage test for src/products/views/ProductUpdate/handlers/index.ts
import { createImageReorderHandler, createImageUploadHandler } from "./index";

jest.mock("@dashboard/graphql", () => ({
  PostalCodeRuleInclusionTypeEnum: { INCLUDE: "INCLUDE", EXCLUDE: "EXCLUDE" },
  ShippingMethodTypeEnum: { PRICE: "PRICE", WEIGHT: "WEIGHT" },
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
jest.mock("react-sortable-hoc", () => ({ ...jest.requireActual("react-sortable-hoc") }));
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

describe("index.ts", () => {
  it("executes createImageUploadHandler", () => {
    const _result = createImageUploadHandler(
      "test-id-1",
      jest.fn().mockResolvedValue({ data: {} }),
    );

    void _result;
  });
  it("executes createImageReorderHandler", () => {
    const _result = createImageReorderHandler({} as any, {} as any);

    void _result;
  });
});
