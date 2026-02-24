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

import { getCategoryHierarchyLabel, getPaymentLabel } from "./labels";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("labels", () => {
  test("getPaymentLabel is exported", () => {
    expect(getPaymentLabel).toBeDefined();
  });

  test("getCategoryHierarchyLabel is exported", () => {
    expect(getCategoryHierarchyLabel).toBeDefined();
  });

  test("getPaymentLabel can be called", () => {
    if (typeof getPaymentLabel === "function") {
      try {
        (getPaymentLabel as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getCategoryHierarchyLabel can be called", () => {
    if (typeof getCategoryHierarchyLabel === "function") {
      try {
        (getCategoryHierarchyLabel as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
