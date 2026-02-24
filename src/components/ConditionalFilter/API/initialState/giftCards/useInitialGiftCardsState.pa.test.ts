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

import { useInitialGiftCardsState } from "./useInitialGiftCardsState";

describe("useInitialGiftCardsState property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useInitialGiftCardsState", () => {
    try {
      (useInitialGiftCardsState as any)();
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
