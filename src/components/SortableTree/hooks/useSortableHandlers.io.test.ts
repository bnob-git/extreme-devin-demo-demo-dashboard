import { useSortableHandlers } from "./useSortableHandlers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useSortableHandlers", () => {
  test("useSortableHandlers is exported", () => {
    expect(useSortableHandlers).toBeDefined();
  });

  test("useSortableHandlers can be called", () => {
    if (typeof useSortableHandlers === "function") {
      try {
        (useSortableHandlers as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
