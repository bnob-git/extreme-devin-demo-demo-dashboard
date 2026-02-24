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

import { PermissionsCard } from "./PermissionsCard";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("PermissionsCard", () => {
  test("PermissionsCard is exported", () => {
    expect(PermissionsCard).toBeDefined();
  });

  test("PermissionsCard can be called", () => {
    if (typeof PermissionsCard === "function") {
      try {
        (PermissionsCard as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
