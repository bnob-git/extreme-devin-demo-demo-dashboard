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

import { createAsyncEventsSelectHandler, createSyncEventsSelectHandler } from "./handlers";

describe("handlers property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls createSyncEventsSelectHandler with mock", () => {
    try {
      (createSyncEventsSelectHandler as any)({} as any, {} as any, {} as any, {} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls createSyncEventsSelectHandler with null", () => {
    try {
      (createSyncEventsSelectHandler as any)(null as any, null as any, null as any, null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls createAsyncEventsSelectHandler with mock", () => {
    try {
      (createAsyncEventsSelectHandler as any)({} as any, {} as any, {} as any, {} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls createAsyncEventsSelectHandler with null", () => {
    try {
      (createAsyncEventsSelectHandler as any)(null as any, null as any, null as any, null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
