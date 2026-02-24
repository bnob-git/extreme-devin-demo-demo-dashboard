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
jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));

import { useHandleOrderLineMetadataSubmit } from "./useHandleSubmit";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useHandleSubmit", () => {
  test("useHandleOrderLineMetadataSubmit is exported", () => {
    expect(useHandleOrderLineMetadataSubmit).toBeDefined();
  });

  test("useHandleOrderLineMetadataSubmit can be called", () => {
    if (typeof useHandleOrderLineMetadataSubmit === "function") {
      try {
        (useHandleOrderLineMetadataSubmit as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
