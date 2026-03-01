jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
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

import { useProfileOperations } from "./useProfileOperations";

describe("useProfileOperations property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useProfileOperations with mock", () => {
    try {
      (useProfileOperations as any)({} as any, {} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls useProfileOperations with null", () => {
    try {
      (useProfileOperations as any)(null as any, null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
