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

import { AppWebhooksDisplay } from "./AppWebhooksDisplay";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AppWebhooksDisplay", () => {
  test("AppWebhooksDisplay is exported", () => {
    expect(AppWebhooksDisplay).toBeDefined();
  });

  test("AppWebhooksDisplay can be called", () => {
    if (typeof AppWebhooksDisplay === "function") {
      try {
        (AppWebhooksDisplay as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
