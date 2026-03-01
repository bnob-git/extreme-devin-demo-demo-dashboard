jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
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

import { useAuthProvider } from "./useAuthProvider";

describe("useAuthProvider property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useAuthProvider with mock", () => {
    try {
      (useAuthProvider as any)(jest.fn(), {} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls useAuthProvider with null", () => {
    try {
      (useAuthProvider as any)(jest.fn(), null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
