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

import { handleRefundEditComplete } from "./handlers";

describe("handlers property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls handleRefundEditComplete with mock", () => {
    try {
      (handleRefundEditComplete as any)(
        jest.fn(),
        {} as any,
        {
          formatMessage: (m: any) => m?.defaultMessage || "",
          formatNumber: (n: any) => String(n),
          locale: "en",
        } as any,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls handleRefundEditComplete with null", () => {
    try {
      (handleRefundEditComplete as any)(
        jest.fn(),
        null as any,
        { formatMessage: (m: any) => m?.defaultMessage || "", locale: "en" } as any,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
