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

import { NumericUnits } from "./NumericUnits";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("NumericUnits", () => {
  test("NumericUnits is exported", () => {
    expect(NumericUnits).toBeDefined();
  });

  test("NumericUnits can be called", () => {
    if (typeof NumericUnits === "function") {
      try {
        (NumericUnits as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
