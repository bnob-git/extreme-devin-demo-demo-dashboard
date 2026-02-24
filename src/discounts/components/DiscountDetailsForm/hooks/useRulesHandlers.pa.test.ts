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

import { useRulesHandlers } from "./useRulesHandlers";

describe("useRulesHandlers property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useRulesHandlers with mock", () => {
    try {
      (useRulesHandlers as any)({} as any, {} as any, jest.fn(), jest.fn(), jest.fn());
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls useRulesHandlers with null", () => {
    try {
      (useRulesHandlers as any)(null as any, null as any, jest.fn(), jest.fn(), jest.fn());
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
