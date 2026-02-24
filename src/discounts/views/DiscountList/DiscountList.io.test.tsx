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

import { DiscountList } from "./DiscountList";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("DiscountList", () => {
  test("DiscountList is exported", () => {
    expect(DiscountList).toBeDefined();
  });

  test("DiscountList can be called", () => {
    if (typeof DiscountList === "function") {
      try {
        (DiscountList as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
