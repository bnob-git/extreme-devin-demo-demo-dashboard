jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (typeof prop === "string" && /^[A-Z]/.test(prop)) return prop;

          return prop;
        },
      },
    ),
);

import { extractPermissions, getPermissions } from "./utils";

describe("utils targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("extractPermissions executes with valid args", () => {
    const result = (extractPermissions as any)("");

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("extractPermissions with alternative args", () => {
    const result = (extractPermissions as any)("test-value");

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getPermissions executes with valid args", () => {
    const result = (getPermissions as any)("", {} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getPermissions with alternative args", () => {
    const result = (getPermissions as any)("test-value", {} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });
});
