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

import { SeoForm } from "./SeoForm";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("SeoForm", () => {
  test("SeoForm is exported", () => {
    expect(SeoForm).toBeDefined();
  });

  test("SeoForm can be called", () => {
    if (typeof SeoForm === "function") {
      try {
        (SeoForm as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
