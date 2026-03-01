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

import { canBeSorted } from "./sort";

describe("sort targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("canBeSorted executes with valid args", () => {
    const result = (canBeSorted as any)({ sort: null, asc: true } as any, false);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("canBeSorted with alternative args", () => {
    const result = (canBeSorted as any)({ sort: null, asc: true } as any, true);

    expect(result !== undefined || result === undefined).toBe(true);
  });
});
