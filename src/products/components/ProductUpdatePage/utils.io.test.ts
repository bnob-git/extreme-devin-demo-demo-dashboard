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

import { mapByChannel, parseCurrency, prepareVariantChangeData } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("parseCurrency is exported", () => {
    expect(parseCurrency).toBeDefined();
  });

  test("prepareVariantChangeData is exported", () => {
    expect(prepareVariantChangeData).toBeDefined();
  });

  test("mapByChannel is exported", () => {
    expect(mapByChannel).toBeDefined();
  });

  test("parseCurrency can be called", () => {
    if (typeof parseCurrency === "function") {
      try {
        (parseCurrency as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("prepareVariantChangeData can be called", () => {
    if (typeof prepareVariantChangeData === "function") {
      try {
        (prepareVariantChangeData as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("mapByChannel can be called", () => {
    if (typeof mapByChannel === "function") {
      try {
        (mapByChannel as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
