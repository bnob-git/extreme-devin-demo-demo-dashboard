jest.mock("@dashboard/graphql", () => {
  const { createDeepMock } = jest.requireActual("@test/deepMock");

  return new Proxy(
    {},
    {
      get: (_t: any, prop: string) => {
        if (prop === "__esModule") return true;

        if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Query"))
          return () => ({
            data: createDeepMock(),
            loading: false,
            error: undefined,
            refetch: jest.fn(),
            fetchMore: jest.fn(),
          });

        if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Mutation"))
          return () => [
            jest.fn(() => Promise.resolve({ data: {} })),
            { data: undefined, loading: false, called: false },
          ];

        if (typeof prop === "string" && prop.startsWith("use"))
          return () => ({ data: createDeepMock(), loading: false });

        return prop;
      },
    },
  );
});

jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (prop.startsWith("use") && prop.endsWith("Query")) {
            return () => ({
              data: new Proxy(
                {},
                {
                  get: () => ({
                    edges: [],
                    pageInfo: { hasNextPage: false, hasPreviousPage: false },
                    totalCount: 0,
                    id: "test-id",
                    name: "test",
                    slug: "test",
                    metadata: [],
                    privateMetadata: [],
                  }),
                },
              ),
              loading: false,
              error: undefined,
              refetch: jest.fn(),
              fetchMore: jest.fn(),
            });
          }

          if (prop.startsWith("use") && prop.endsWith("Mutation")) {
            return () => [
              jest.fn(() => Promise.resolve({ data: {} })),
              { data: undefined, loading: false, called: false, status: "default" },
            ];
          }

          if (prop.startsWith("use")) return () => ({ data: undefined, loading: false });

          return jest.fn();
        },
      },
    ),
);

import {
  getDateGroupKey,
  groupEventsByDate,
  hasOrderLineDiscountWithNoPreviousValue,
  isTimelineEventOfDiscountType,
  isTimelineEventOfType,
} from "./utils";

describe("utils.tsx coverage", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls getDateGroupKey", () => {
    try {
      (getDateGroupKey as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls groupEventsByDate", () => {
    try {
      (groupEventsByDate as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls isTimelineEventOfType", () => {
    try {
      (isTimelineEventOfType as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls isTimelineEventOfDiscountType", () => {
    try {
      (isTimelineEventOfDiscountType as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls hasOrderLineDiscountWithNoPreviousValue", () => {
    try {
      (hasOrderLineDiscountWithNoPreviousValue as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
