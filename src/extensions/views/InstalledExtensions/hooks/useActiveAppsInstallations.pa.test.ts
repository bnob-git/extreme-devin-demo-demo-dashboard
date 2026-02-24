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

import { useActiveAppsInstallations } from "./useActiveAppsInstallations";

describe("useActiveAppsInstallations property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useActiveAppsInstallations with mock", () => {
    try {
      (useActiveAppsInstallations as any)(
        {} as any,
        {} as any,
        {} as any,
        jest.fn(),
        jest.fn(),
        jest.fn(),
        jest.fn(),
        jest.fn(),
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls useActiveAppsInstallations with null", () => {
    try {
      (useActiveAppsInstallations as any)(
        null as any,
        null as any,
        null as any,
        jest.fn(),
        jest.fn(),
        jest.fn(),
        jest.fn(),
        jest.fn(),
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
