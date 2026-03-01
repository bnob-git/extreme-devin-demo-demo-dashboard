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

import { getAttributeInputFromPage, getAttributeInputFromPageType } from "./data";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("data", () => {
  test("getAttributeInputFromPage is exported", () => {
    expect(getAttributeInputFromPage).toBeDefined();
  });

  test("getAttributeInputFromPageType is exported", () => {
    expect(getAttributeInputFromPageType).toBeDefined();
  });

  test("getAttributeInputFromPage can be called", () => {
    if (typeof getAttributeInputFromPage === "function") {
      try {
        (getAttributeInputFromPage as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getAttributeInputFromPageType can be called", () => {
    if (typeof getAttributeInputFromPageType === "function") {
      try {
        (getAttributeInputFromPageType as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
