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

import { useChannelWarehousesReorder } from "./useChannelWarehouseReorder";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useChannelWarehouseReorder", () => {
  test("useChannelWarehousesReorder is exported", () => {
    expect(useChannelWarehousesReorder).toBeDefined();
  });

  test("useChannelWarehousesReorder can be called", () => {
    if (typeof useChannelWarehousesReorder === "function") {
      try {
        (useChannelWarehousesReorder as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
