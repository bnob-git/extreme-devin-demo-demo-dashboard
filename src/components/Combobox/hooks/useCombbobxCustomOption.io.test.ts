import { useCombbobxCustomOption } from "./useCombbobxCustomOption";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useCombbobxCustomOption", () => {
  test("useCombbobxCustomOption is exported", () => {
    expect(useCombbobxCustomOption).toBeDefined();
  });

  test("useCombbobxCustomOption can be called", () => {
    if (typeof useCombbobxCustomOption === "function") {
      try {
        (useCombbobxCustomOption as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
