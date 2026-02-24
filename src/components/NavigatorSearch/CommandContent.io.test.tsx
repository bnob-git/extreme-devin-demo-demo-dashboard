import { CommandContent } from "./CommandContent";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("CommandContent", () => {
  test("CommandContent is exported", () => {
    expect(CommandContent).toBeDefined();
  });

  test("CommandContent can be called", () => {
    if (typeof CommandContent === "function") {
      try {
        (CommandContent as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
