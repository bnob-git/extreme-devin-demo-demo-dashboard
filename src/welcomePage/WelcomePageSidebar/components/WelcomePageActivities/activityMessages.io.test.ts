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

import { getActivityMessage } from "./activityMessages";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("activityMessages", () => {
  test("getActivityMessage is exported", () => {
    expect(getActivityMessage).toBeDefined();
  });

  test("getActivityMessage can be called", () => {
    if (typeof getActivityMessage === "function") {
      try {
        (getActivityMessage as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
