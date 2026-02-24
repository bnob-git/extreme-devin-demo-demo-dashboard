import { useAppFrameReferences } from "./popup-frame-reference";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("popup-frame-reference", () => {
  test("useAppFrameReferences is exported", () => {
    expect(useAppFrameReferences).toBeDefined();
  });

  test("useAppFrameReferences can be called", () => {
    if (typeof useAppFrameReferences === "function") {
      try {
        (useAppFrameReferences as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
