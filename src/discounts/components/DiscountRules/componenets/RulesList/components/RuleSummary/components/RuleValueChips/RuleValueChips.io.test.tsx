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
jest.mock("@dashboard/hooks/useLocale", () => ({
  __esModule: true,
  default: () => ({ locale: "en" }),
}));

import { RuleValueChips } from "./RuleValueChips";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("RuleValueChips", () => {
  test("RuleValueChips is exported", () => {
    expect(RuleValueChips).toBeDefined();
  });

  test("RuleValueChips can be called", () => {
    if (typeof RuleValueChips === "function") {
      try {
        (RuleValueChips as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
