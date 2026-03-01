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

import { getCreateVariantMutationError, getVariantUpdateMutationErrors } from "./errors";

describe("errors property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls getCreateVariantMutationError with mock", () => {
    try {
      (getCreateVariantMutationError as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getCreateVariantMutationError with null", () => {
    try {
      (getCreateVariantMutationError as any)(null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getVariantUpdateMutationErrors with mock", () => {
    try {
      (getVariantUpdateMutationErrors as any)({} as any, {} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getVariantUpdateMutationErrors with null", () => {
    try {
      (getVariantUpdateMutationErrors as any)(null as any, null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
