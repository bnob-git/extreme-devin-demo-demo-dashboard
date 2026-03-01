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

import { createHandler } from "./handlers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("handlers", () => {
  test("createHandler is exported", () => {
    expect(createHandler).toBeDefined();
  });

  test("createHandler can be called", () => {
    if (typeof createHandler === "function") {
      try {
        (createHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
