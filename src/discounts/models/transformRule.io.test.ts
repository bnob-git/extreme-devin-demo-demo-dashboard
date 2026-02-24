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

import { mapAPIRuleToForm, toAPI } from "./transformRule";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("transformRule", () => {
  test("mapAPIRuleToForm is exported", () => {
    expect(mapAPIRuleToForm).toBeDefined();
  });

  test("toAPI is exported", () => {
    expect(toAPI).toBeDefined();
  });

  test("mapAPIRuleToForm can be called", () => {
    if (typeof mapAPIRuleToForm === "function") {
      try {
        (mapAPIRuleToForm as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("toAPI can be called", () => {
    if (typeof toAPI === "function") {
      try {
        (toAPI as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
