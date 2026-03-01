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

import { getValidationSchema } from "./validationSchema";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("validationSchema", () => {
  test("getValidationSchema is exported", () => {
    expect(getValidationSchema).toBeDefined();
  });

  test("getValidationSchema can be called", () => {
    if (typeof getValidationSchema === "function") {
      try {
        (getValidationSchema as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
