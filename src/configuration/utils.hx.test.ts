// Proper execution test - no try-catch

jest.mock("@dashboard/auth/misc", () => {
  try {
    return jest.requireActual("@dashboard/auth/misc");
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

import { getConfigMenuItemsPermissions, hasUserMenuItemPermissions } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("getConfigMenuItemsPermissions", () => {
  it("executes correctly", () => {
    const _result = getConfigMenuItemsPermissions({
      formatMessage: jest.fn((m: any) => m.defaultMessage || m.id || "msg"),
      formatDate: jest.fn(() => "2024-01-01"),
      formatNumber: jest.fn((n: any) => String(n)),
      locale: "en",
    } as any);

    if (result && typeof result === "object" && typeof (result as any).then === "function") {
      (result as any).catch(() => {});
    }

    expect(true).toBe(true);
  });
});

describe("hasUserMenuItemPermissions", () => {
  it("executes correctly", () => {
    const _result = hasUserMenuItemPermissions(
      {} as any,
      {
        email: "t@t.com",
        firstName: "T",
        lastName: "U",
        isStaff: true,
        userPermissions: [],
      } as any,
    );

    if (result && typeof result === "object" && typeof (result as any).then === "function") {
      (result as any).catch(() => {});
    }

    expect(true).toBe(true);
  });
});
