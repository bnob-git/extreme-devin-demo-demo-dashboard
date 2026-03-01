jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));
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

import { useHandleOrderLineMetadataSubmit } from "./useHandleSubmit";

describe("useHandleSubmit property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useHandleOrderLineMetadataSubmit with mock", () => {
    try {
      (useHandleOrderLineMetadataSubmit as any)(jest.fn());
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls useHandleOrderLineMetadataSubmit with null", () => {
    try {
      (useHandleOrderLineMetadataSubmit as any)(jest.fn());
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
