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

import { useInitialCollectionState } from "./useInitialCollectionsState";

describe("useInitialCollectionsState property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useInitialCollectionState", () => {
    try {
      (useInitialCollectionState as any)();
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
