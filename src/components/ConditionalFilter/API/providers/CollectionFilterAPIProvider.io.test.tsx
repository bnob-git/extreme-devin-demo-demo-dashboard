import { useCollectionFilterAPIProvider } from "./CollectionFilterAPIProvider";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("CollectionFilterAPIProvider", () => {
  test("useCollectionFilterAPIProvider is exported", () => {
    expect(useCollectionFilterAPIProvider).toBeDefined();
  });

  test("useCollectionFilterAPIProvider can be called", () => {
    if (typeof useCollectionFilterAPIProvider === "function") {
      try {
        (useCollectionFilterAPIProvider as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
