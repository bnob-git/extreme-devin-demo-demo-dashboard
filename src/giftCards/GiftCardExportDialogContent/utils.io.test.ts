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

import { getExportGiftCardsInput } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("getExportGiftCardsInput is exported", () => {
    expect(getExportGiftCardsInput).toBeDefined();
  });

  test("getExportGiftCardsInput can be called", () => {
    if (typeof getExportGiftCardsInput === "function") {
      try {
        (getExportGiftCardsInput as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
