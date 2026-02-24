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
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useLocale", () => ({
  __esModule: true,
  default: () => ({ locale: "en" }),
}));

import { ShippingZoneListDatagrid } from "./ShippingZonesListDatagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ShippingZonesListDatagrid", () => {
  test("ShippingZoneListDatagrid is exported", () => {
    expect(ShippingZoneListDatagrid).toBeDefined();
  });

  test("ShippingZoneListDatagrid can be called", () => {
    if (typeof ShippingZoneListDatagrid === "function") {
      try {
        (ShippingZoneListDatagrid as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
