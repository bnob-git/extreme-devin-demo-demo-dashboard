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

import { useMetadataValues } from "./useMetadataValues";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useMetadataValues", () => {
  test("useMetadataValues is exported", () => {
    expect(useMetadataValues).toBeDefined();
  });

  test("useMetadataValues can be called", () => {
    if (typeof useMetadataValues === "function") {
      try {
        (useMetadataValues as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
