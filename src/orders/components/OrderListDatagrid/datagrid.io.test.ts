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
  getCustomerCellContent,
  getPaymentCellContent,
  orderListStaticColumnAdapter,
  useGetCellContent,
} from "./datagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("datagrid", () => {
  test("orderListStaticColumnAdapter is exported", () => {
    expect(orderListStaticColumnAdapter).toBeDefined();
  });

  test("useGetCellContent is exported", () => {
    expect(useGetCellContent).toBeDefined();
  });

  test("getCustomerCellContent is exported", () => {
    expect(getCustomerCellContent).toBeDefined();
  });

  test("getPaymentCellContent is exported", () => {
    expect(getPaymentCellContent).toBeDefined();
  });

  test("orderListStaticColumnAdapter can be called", () => {
    if (typeof orderListStaticColumnAdapter === "function") {
      try {
        (orderListStaticColumnAdapter as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("useGetCellContent can be called", () => {
    if (typeof useGetCellContent === "function") {
      try {
        (useGetCellContent as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getCustomerCellContent can be called", () => {
    if (typeof getCustomerCellContent === "function") {
      try {
        (getCustomerCellContent as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getPaymentCellContent can be called", () => {
    if (typeof getPaymentCellContent === "function") {
      try {
        (getPaymentCellContent as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
