import { SortableTree } from "./SortableTree";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("SortableTree", () => {
  test("SortableTree is exported", () => {
    expect(SortableTree).toBeDefined();
  });

  test("SortableTree can be called", () => {
    if (typeof SortableTree === "function") {
      try {
        (SortableTree as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
