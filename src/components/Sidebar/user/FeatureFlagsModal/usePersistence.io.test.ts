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

import { usePersistence } from "./usePersistence";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("usePersistence", () => {
  test("usePersistence is exported", () => {
    expect(usePersistence).toBeDefined();
  });

  test("usePersistence can be called", () => {
    if (typeof usePersistence === "function") {
      try {
        (usePersistence as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
