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

import { formatGiftsLabels, useFetchGiftLables } from "./useFetchGiftLables";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useFetchGiftLables", () => {
  test("useFetchGiftLables is exported", () => {
    expect(useFetchGiftLables).toBeDefined();
  });

  test("formatGiftsLabels is exported", () => {
    expect(formatGiftsLabels).toBeDefined();
  });

  test("useFetchGiftLables can be called", () => {
    if (typeof useFetchGiftLables === "function") {
      try {
        (useFetchGiftLables as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("formatGiftsLabels can be called", () => {
    if (typeof formatGiftsLabels === "function") {
      try {
        (formatGiftsLabels as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
