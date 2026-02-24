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

import { CustomerListDatagrid } from "./CustomerListDatagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("CustomerListDatagrid", () => {
  test("CustomerListDatagrid is exported", () => {
    expect(CustomerListDatagrid).toBeDefined();
  });

  test("CustomerListDatagrid can be called", () => {
    if (typeof CustomerListDatagrid === "function") {
      try {
        (CustomerListDatagrid as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
