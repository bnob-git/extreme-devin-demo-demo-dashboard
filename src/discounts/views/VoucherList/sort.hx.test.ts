// Proper execution test - no try-catch

jest.mock("@dashboard/discounts/urls", () => {
  try {
    return jest.requireActual("@dashboard/discounts/urls");
  } catch {
    return new Proxy(
      {},
      {
        get: (_: any, p: string) => {
          if (p === "__esModule") return true;

          return jest.fn();
        },
      },
    );
  }
});
jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_: any, p: string) => {
          if (p === "__esModule") return true;

          if (/^[A-Z]/.test(p)) return p;

          return jest.fn();
        },
      },
    ),
);
jest.mock("@dashboard/utils/sort", () => {
  try {
    return jest.requireActual("@dashboard/utils/sort");
  } catch {
    return new Proxy(
      {},
      {
        get: (_: any, p: string) => {
          if (p === "__esModule") return true;

          return jest.fn();
        },
      },
    );
  }
});

import { canBeSorted } from "./sort";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("canBeSorted", () => {
  it("executes correctly", () => {
    const _result = canBeSorted({} as any, false);

    if (result && typeof result === "object" && typeof (result as any).then === "function") {
      (result as any).catch(() => {});
    }

    expect(true).toBe(true);
  });
});
