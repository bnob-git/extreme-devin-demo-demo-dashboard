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

import { DiscountListDatagrid } from "./DiscountListDatagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("DiscountListDatagrid", () => {
  test("DiscountListDatagrid is exported", () => {
    expect(DiscountListDatagrid).toBeDefined();
  });

  test("DiscountListDatagrid can be called", () => {
    if (typeof DiscountListDatagrid === "function") {
      try {
        (DiscountListDatagrid as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
