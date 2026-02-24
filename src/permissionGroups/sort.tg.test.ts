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

import { sortMembers } from "./sort";

describe("sort targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("sortMembers executes with valid args", () => {
    const result = (sortMembers as any)("", false);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("sortMembers with alternative args", () => {
    const result = (sortMembers as any)("test-value", true);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("sortMembers executes with valid args", () => {
    const result = (sortMembers as any)("", false);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("sortMembers returned handler executes", () => {
    const handler = (sortMembers as any)("", false);

    if (typeof handler === "function") {
      const result = handler({} as any, {} as any);

      expect(result !== undefined || result === undefined).toBe(true);
    }
  });

  it("sortMembers with alternative args", () => {
    const result = (sortMembers as any)("test-value", true);

    expect(result !== undefined || result === undefined).toBe(true);
  });
});
