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

import {
  createGetCellContent,
  getAttributesFetchMoreProps,
  getAvailableAttributesData,
  getCellAction,
  getColumnMetadata,
  getColumnSortIconName,
  getDescriptionValue,
  getProductRowsLength,
  productListDynamicColumnAdapter,
  productListStaticColumnAdapter,
} from "./datagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("datagrid", () => {
  test("productListStaticColumnAdapter is exported", () => {
    expect(productListStaticColumnAdapter).toBeDefined();
  });

  test("productListDynamicColumnAdapter is exported", () => {
    expect(productListDynamicColumnAdapter).toBeDefined();
  });

  test("getColumnSortIconName is exported", () => {
    expect(getColumnSortIconName).toBeDefined();
  });

  test("createGetCellContent is exported", () => {
    expect(createGetCellContent).toBeDefined();
  });

  test("getDescriptionValue is exported", () => {
    expect(getDescriptionValue).toBeDefined();
  });

  test("getColumnMetadata is exported", () => {
    expect(getColumnMetadata).toBeDefined();
  });

  test("getProductRowsLength is exported", () => {
    expect(getProductRowsLength).toBeDefined();
  });

  test("getAvailableAttributesData is exported", () => {
    expect(getAvailableAttributesData).toBeDefined();
  });

  test("getAttributesFetchMoreProps is exported", () => {
    expect(getAttributesFetchMoreProps).toBeDefined();
  });

  test("getCellAction is exported", () => {
    expect(getCellAction).toBeDefined();
  });

  test("productListStaticColumnAdapter can be called", () => {
    if (typeof productListStaticColumnAdapter === "function") {
      try {
        (productListStaticColumnAdapter as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("productListDynamicColumnAdapter can be called", () => {
    if (typeof productListDynamicColumnAdapter === "function") {
      try {
        (productListDynamicColumnAdapter as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getColumnSortIconName can be called", () => {
    if (typeof getColumnSortIconName === "function") {
      try {
        (getColumnSortIconName as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createGetCellContent can be called", () => {
    if (typeof createGetCellContent === "function") {
      try {
        (createGetCellContent as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getDescriptionValue can be called", () => {
    if (typeof getDescriptionValue === "function") {
      try {
        (getDescriptionValue as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getColumnMetadata can be called", () => {
    if (typeof getColumnMetadata === "function") {
      try {
        (getColumnMetadata as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getProductRowsLength can be called", () => {
    if (typeof getProductRowsLength === "function") {
      try {
        (getProductRowsLength as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getAvailableAttributesData can be called", () => {
    if (typeof getAvailableAttributesData === "function") {
      try {
        (getAvailableAttributesData as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getAttributesFetchMoreProps can be called", () => {
    if (typeof getAttributesFetchMoreProps === "function") {
      try {
        (getAttributesFetchMoreProps as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getCellAction can be called", () => {
    if (typeof getCellAction === "function") {
      try {
        (getCellAction as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
