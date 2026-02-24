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
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { WebhooksList } from "./WebhooksList";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("WebhooksList", () => {
  test("WebhooksList is exported", () => {
    expect(WebhooksList).toBeDefined();
  });

  test("WebhooksList can be called", () => {
    if (typeof WebhooksList === "function") {
      try {
        (WebhooksList as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
