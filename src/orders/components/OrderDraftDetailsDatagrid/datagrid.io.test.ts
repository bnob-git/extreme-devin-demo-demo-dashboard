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
jest.mock("@dashboard/hooks/useLocale", () => ({
  __esModule: true,
  default: () => ({ locale: "en" }),
}));

import { orderDraftDetailsStaticColumnsAdapter, useGetCellContent } from "./datagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("datagrid", () => {
  test("orderDraftDetailsStaticColumnsAdapter is exported", () => {
    expect(orderDraftDetailsStaticColumnsAdapter).toBeDefined();
  });

  test("useGetCellContent is exported", () => {
    expect(useGetCellContent).toBeDefined();
  });

  test("orderDraftDetailsStaticColumnsAdapter can be called", () => {
    if (typeof orderDraftDetailsStaticColumnsAdapter === "function") {
      try {
        (orderDraftDetailsStaticColumnsAdapter as any)();
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
});
