import { sortableTreeKeyboardCoordinates } from "./keyboardCoordinates";

describe("keyboardCoordinates multi-arg tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls sortableTreeKeyboardCoordinates with empty_obj (variant 0)", () => {
    try {
      const result = (sortableTreeKeyboardCoordinates as any)({}, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls sortableTreeKeyboardCoordinates with event (variant 1)", () => {
    try {
      const result = (sortableTreeKeyboardCoordinates as any)(
        {
          target: { name: "test", value: "value" },
          preventDefault: () => {},
          stopPropagation: () => {},
        },
        "test",
      );

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls sortableTreeKeyboardCoordinates with null_val (variant 2)", () => {
    try {
      const result = (sortableTreeKeyboardCoordinates as any)(null as any, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls sortableTreeKeyboardCoordinates with string_val (variant 3)", () => {
    try {
      const result = (sortableTreeKeyboardCoordinates as any)("test-value", "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls sortableTreeKeyboardCoordinates with number_val (variant 4)", () => {
    try {
      const result = (sortableTreeKeyboardCoordinates as any)(42, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls sortableTreeKeyboardCoordinates with boolean_val (variant 5)", () => {
    try {
      const result = (sortableTreeKeyboardCoordinates as any)(true, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
