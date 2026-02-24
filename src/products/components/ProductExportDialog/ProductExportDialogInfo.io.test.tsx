jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (/^[A-Z]/.test(prop)) return prop;

          if (/^use/.test(prop)) return () => ({ data: undefined, loading: false });

          return prop;
        },
      },
    ),
);

import ProductExportDialogInfo, {
  attributeNamePrefix,
  warehouseNamePrefix,
} from "./ProductExportDialogInfo";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ProductExportDialogInfo", () => {
  test("default export is defined", () => {
    expect(ProductExportDialogInfo).toBeDefined();
  });

  test("attributeNamePrefix is exported", () => {
    expect(attributeNamePrefix).toBeDefined();
  });

  test("warehouseNamePrefix is exported", () => {
    expect(warehouseNamePrefix).toBeDefined();
  });
});
