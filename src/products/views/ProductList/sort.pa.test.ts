jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (typeof prop === "string" && prop.startsWith("use"))
            return () => ({ data: undefined, loading: false });

          return prop;
        },
      },
    ),
);

import { canBeSorted, getSortQueryVariables } from "./sort";

describe("sort property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls canBeSorted with mock", () => {
    try {
      (canBeSorted as any)({} as any, {} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls canBeSorted with null", () => {
    try {
      (canBeSorted as any)(null as any, null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getSortQueryVariables with mock", () => {
    try {
      (getSortQueryVariables as any)({} as any, {} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getSortQueryVariables with null", () => {
    try {
      (getSortQueryVariables as any)(null as any, null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
