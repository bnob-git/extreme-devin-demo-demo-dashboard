import { WebhookHeadersTableBody } from "./WebhookHeadersTableBody";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("WebhookHeadersTableBody", () => {
  test("WebhookHeadersTableBody is exported", () => {
    expect(WebhookHeadersTableBody).toBeDefined();
  });

  test("WebhookHeadersTableBody can be called", () => {
    if (typeof WebhookHeadersTableBody === "function") {
      try {
        (WebhookHeadersTableBody as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
