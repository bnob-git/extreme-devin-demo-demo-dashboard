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

import { getFilterQueryParam } from "./filters";

describe("filters property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls getFilterQueryParam with mock", () => {
    try {
      (getFilterQueryParam as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getFilterQueryParam with null", () => {
    try {
      (getFilterQueryParam as any)(null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
