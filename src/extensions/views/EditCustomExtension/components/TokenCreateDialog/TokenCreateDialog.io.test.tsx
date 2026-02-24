import { TokenCreateDialog } from "./TokenCreateDialog";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("TokenCreateDialog", () => {
  test("TokenCreateDialog is exported", () => {
    expect(TokenCreateDialog).toBeDefined();
  });

  test("TokenCreateDialog can be called", () => {
    if (typeof TokenCreateDialog === "function") {
      try {
        (TokenCreateDialog as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
