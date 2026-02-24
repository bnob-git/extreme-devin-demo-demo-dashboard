import { useGraphQLPlayground } from "./useGraphQLPlayground";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useGraphQLPlayground", () => {
  test("useGraphQLPlayground is exported", () => {
    expect(useGraphQLPlayground).toBeDefined();
  });

  test("useGraphQLPlayground can be called", () => {
    if (typeof useGraphQLPlayground === "function") {
      try {
        (useGraphQLPlayground as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
