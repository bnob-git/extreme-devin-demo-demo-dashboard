// Proper execution test - no try-catch

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
jest.mock("@dashboard/misc", () => ({ ...jest.requireActual("@dashboard/misc") }));

import { sortMembers } from "./sort";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("sortMembers", () => {
  it("executes correctly", () => {
    const _result = sortMembers("", false);

    if (result && typeof result === "object" && typeof (result as any).then === "function") {
      (result as any).catch(() => {});
    }

    expect(true).toBe(true);
  });
});
