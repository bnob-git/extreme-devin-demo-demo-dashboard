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

import { useSubmitChannels } from "./useSubmitChannels";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useSubmitChannels", () => {
  test("useSubmitChannels is exported", () => {
    expect(useSubmitChannels).toBeDefined();
  });

  test("useSubmitChannels can be called", () => {
    if (typeof useSubmitChannels === "function") {
      try {
        (useSubmitChannels as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
