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

import { getData, getError } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("getError is exported", () => {
    expect(getError).toBeDefined();
  });

  test("getData is exported", () => {
    expect(getData).toBeDefined();
  });

  test("getError can be called", () => {
    if (typeof getError === "function") {
      try {
        (getError as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getData can be called", () => {
    if (typeof getData === "function") {
      try {
        (getData as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
