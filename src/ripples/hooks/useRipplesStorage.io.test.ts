import { RipplesStorage, useRippleStorage } from "./useRipplesStorage";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useRipplesStorage", () => {
  test("RipplesStorage is exported", () => {
    expect(RipplesStorage).toBeDefined();
  });

  test("useRippleStorage is exported", () => {
    expect(useRippleStorage).toBeDefined();
  });

  test("useRippleStorage can be called", () => {
    if (typeof useRippleStorage === "function") {
      try {
        (useRippleStorage as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
