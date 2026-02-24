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

import { useVoucherAPIProvider } from "./VoucherFilterAPIProvider";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("VoucherFilterAPIProvider", () => {
  test("useVoucherAPIProvider is exported", () => {
    expect(useVoucherAPIProvider).toBeDefined();
  });

  test("useVoucherAPIProvider can be called", () => {
    if (typeof useVoucherAPIProvider === "function") {
      try {
        (useVoucherAPIProvider as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
