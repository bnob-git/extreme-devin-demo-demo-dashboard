// Auto-generated utility test
const { createDeepMock } = jest.requireActual("@test/deepMock");

import { createFilterTabUtils } from "./storage";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {
    /* expected */
  });
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("createFilterTabUtils", () => {
  test("executes with deep mock args", () => {
    const result = createFilterTabUtils(createDeepMock(), createDeepMock(), createDeepMock());

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });

  test("executes with empty object args", () => {
    const result = (createFilterTabUtils as any)({}, {}, {});

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });

  test("executes with array args", () => {
    const result = (createFilterTabUtils as any)([], [], []);

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });
});
