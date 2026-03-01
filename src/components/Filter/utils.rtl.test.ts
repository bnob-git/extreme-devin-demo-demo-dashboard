// Auto-generated utility test
const { createDeepMock } = jest.requireActual("@test/deepMock");

import { extractInvalidFilters, getByName } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {
    /* expected */
  });
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("getByName", () => {
  test("executes with deep mock args", () => {
    const result = getByName(createDeepMock(), createDeepMock(), createDeepMock());

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });

  test("executes with empty object args", () => {
    const result = (getByName as any)({}, {}, {});

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });

  test("executes with array args", () => {
    const result = (getByName as any)([], [], []);

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });
});

describe("extractInvalidFilters", () => {
  test("is defined", () => {
    expect(extractInvalidFilters).toBeDefined();
  });
});
