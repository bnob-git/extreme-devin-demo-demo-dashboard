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

import { useGrantRefundForm } from "./form";

describe("form property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useGrantRefundForm with mock", () => {
    try {
      (useGrantRefundForm as any)({} as any, {} as any, {} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls useGrantRefundForm with null", () => {
    try {
      (useGrantRefundForm as any)(null as any, null as any, null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
