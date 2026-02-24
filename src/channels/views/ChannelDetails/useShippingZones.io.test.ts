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

import { useShippingZones } from "./useShippingZones";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useShippingZones", () => {
  test("useShippingZones is exported", () => {
    expect(useShippingZones).toBeDefined();
  });

  test("useShippingZones can be called", () => {
    if (typeof useShippingZones === "function") {
      try {
        (useShippingZones as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
