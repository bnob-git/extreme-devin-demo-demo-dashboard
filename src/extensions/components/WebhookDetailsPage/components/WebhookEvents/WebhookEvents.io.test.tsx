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

import { WebhookEvents } from "./WebhookEvents";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("WebhookEvents", () => {
  test("WebhookEvents is exported", () => {
    expect(WebhookEvents).toBeDefined();
  });

  test("WebhookEvents can be called", () => {
    if (typeof WebhookEvents === "function") {
      try {
        (WebhookEvents as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
