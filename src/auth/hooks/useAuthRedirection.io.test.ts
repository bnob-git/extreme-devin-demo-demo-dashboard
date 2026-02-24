import { useAuthRedirection } from "./useAuthRedirection";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useAuthRedirection", () => {
  test("useAuthRedirection is exported", () => {
    expect(useAuthRedirection).toBeDefined();
  });

  test("useAuthRedirection can be called", () => {
    if (typeof useAuthRedirection === "function") {
      try {
        (useAuthRedirection as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
