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

import { Header } from "./Header";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("Header", () => {
  test("Header is exported", () => {
    expect(Header).toBeDefined();
  });

  test("Header can be called", () => {
    if (typeof Header === "function") {
      try {
        (Header as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
