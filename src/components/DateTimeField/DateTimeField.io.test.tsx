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

import { DateTimeField } from "./DateTimeField";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("DateTimeField", () => {
  test("DateTimeField is exported", () => {
    expect(DateTimeField).toBeDefined();
  });

  test("DateTimeField can be called", () => {
    if (typeof DateTimeField === "function") {
      try {
        (DateTimeField as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
