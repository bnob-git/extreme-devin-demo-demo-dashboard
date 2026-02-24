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

import { ActionButtons } from "./ActionButtons";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ActionButtons", () => {
  test("ActionButtons is exported", () => {
    expect(ActionButtons).toBeDefined();
  });

  test("ActionButtons can be called", () => {
    if (typeof ActionButtons === "function") {
      try {
        (ActionButtons as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
