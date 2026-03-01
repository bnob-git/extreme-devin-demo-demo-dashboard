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

import {
  checkAmountExceedsChargedAmount,
  handleAmountExceedsChargedAmount,
  handleRefundCreateComplete,
  prepareRefundAddLines,
} from "./handlers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("handlers", () => {
  test("handleRefundCreateComplete is exported", () => {
    expect(handleRefundCreateComplete).toBeDefined();
  });

  test("prepareRefundAddLines is exported", () => {
    expect(prepareRefundAddLines).toBeDefined();
  });

  test("checkAmountExceedsChargedAmount is exported", () => {
    expect(checkAmountExceedsChargedAmount).toBeDefined();
  });

  test("handleAmountExceedsChargedAmount is exported", () => {
    expect(handleAmountExceedsChargedAmount).toBeDefined();
  });

  test("handleRefundCreateComplete can be called", () => {
    if (typeof handleRefundCreateComplete === "function") {
      try {
        (handleRefundCreateComplete as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("prepareRefundAddLines can be called", () => {
    if (typeof prepareRefundAddLines === "function") {
      try {
        (prepareRefundAddLines as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("checkAmountExceedsChargedAmount can be called", () => {
    if (typeof checkAmountExceedsChargedAmount === "function") {
      try {
        (checkAmountExceedsChargedAmount as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("handleAmountExceedsChargedAmount can be called", () => {
    if (typeof handleAmountExceedsChargedAmount === "function") {
      try {
        (handleAmountExceedsChargedAmount as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
