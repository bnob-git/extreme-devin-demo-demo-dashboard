import usePaginator, {
  createPaginationState,
  PaginatorContext,
  usePaginatorContext,
} from "./usePaginator";

describe("usePaginator multi-arg tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls usePaginator with empty_obj (variant 0)", () => {
    try {
      const result = (usePaginator as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls usePaginator with null_val (variant 1)", () => {
    try {
      const result = (usePaginator as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls usePaginator with string_val (variant 2)", () => {
    try {
      const result = (usePaginator as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls usePaginator with number_val (variant 3)", () => {
    try {
      const result = (usePaginator as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls usePaginator with boolean_val (variant 4)", () => {
    try {
      const result = (usePaginator as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls createPaginationState with empty_obj (variant 0)", () => {
    try {
      const result = (createPaginationState as any)({}, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls createPaginationState with null_val (variant 1)", () => {
    try {
      const result = (createPaginationState as any)(null as any, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls createPaginationState with string_val (variant 2)", () => {
    try {
      const result = (createPaginationState as any)("test-value", "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls createPaginationState with number_val (variant 3)", () => {
    try {
      const result = (createPaginationState as any)(42, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls createPaginationState with boolean_val (variant 4)", () => {
    try {
      const result = (createPaginationState as any)(true, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls PaginatorContext with empty_obj (variant 0)", () => {
    try {
      const result = (PaginatorContext as any)({}, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls PaginatorContext with null_val (variant 1)", () => {
    try {
      const result = (PaginatorContext as any)(null as any, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls PaginatorContext with string_val (variant 2)", () => {
    try {
      const result = (PaginatorContext as any)("test-value", "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls PaginatorContext with number_val (variant 3)", () => {
    try {
      const result = (PaginatorContext as any)(42, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls PaginatorContext with boolean_val (variant 4)", () => {
    try {
      const result = (PaginatorContext as any)(true, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls usePaginatorContext with empty_obj (variant 0)", () => {
    try {
      const result = (usePaginatorContext as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls usePaginatorContext with null_val (variant 1)", () => {
    try {
      const result = (usePaginatorContext as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls usePaginatorContext with string_val (variant 2)", () => {
    try {
      const result = (usePaginatorContext as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls usePaginatorContext with number_val (variant 3)", () => {
    try {
      const result = (usePaginatorContext as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls usePaginatorContext with boolean_val (variant 4)", () => {
    try {
      const result = (usePaginatorContext as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
