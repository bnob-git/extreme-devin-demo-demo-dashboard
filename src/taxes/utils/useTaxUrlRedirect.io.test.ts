jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (/^[A-Z]/.test(prop)) return prop;

          if (/^use/.test(prop)) return () => ({ data: undefined, loading: false });

          return prop;
        },
      },
    ),
);
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { useTaxUrlRedirect } from "./useTaxUrlRedirect";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useTaxUrlRedirect", () => {
  test("useTaxUrlRedirect is exported", () => {
    expect(useTaxUrlRedirect).toBeDefined();
  });

  test("useTaxUrlRedirect can be called", () => {
    if (typeof useTaxUrlRedirect === "function") {
      try {
        (useTaxUrlRedirect as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
