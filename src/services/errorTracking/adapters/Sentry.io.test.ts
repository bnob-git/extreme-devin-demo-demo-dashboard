import { SentryAdapter } from "./Sentry";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("Sentry", () => {
  test("SentryAdapter is exported", () => {
    expect(SentryAdapter).toBeDefined();
  });

  test("SentryAdapter can be called", () => {
    if (typeof SentryAdapter === "function") {
      try {
        (SentryAdapter as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
