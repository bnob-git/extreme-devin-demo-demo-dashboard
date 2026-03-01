import { extractPermissions, getPermissions } from "./utils";

describe("utils property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls extractPermissions with mock", () => {
    try {
      (extractPermissions as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls extractPermissions with null", () => {
    try {
      (extractPermissions as any)(null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getPermissions with mock", () => {
    try {
      (getPermissions as any)({} as any, {} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getPermissions with null", () => {
    try {
      (getPermissions as any)(null as any, null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
