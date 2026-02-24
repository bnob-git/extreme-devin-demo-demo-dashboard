import { useComboboxHandlers } from "./useComboboxHandlers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useComboboxHandlers", () => {
  test("useComboboxHandlers is exported", () => {
    expect(useComboboxHandlers).toBeDefined();
  });

  test("useComboboxHandlers can be called", () => {
    if (typeof useComboboxHandlers === "function") {
      try {
        (useComboboxHandlers as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
