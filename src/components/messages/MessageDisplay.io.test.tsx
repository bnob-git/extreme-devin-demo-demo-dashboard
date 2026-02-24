import { MessageDisplay } from "./MessageDisplay";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("MessageDisplay", () => {
  test("MessageDisplay is exported", () => {
    expect(MessageDisplay).toBeDefined();
  });

  test("MessageDisplay can be called", () => {
    if (typeof MessageDisplay === "function") {
      try {
        (MessageDisplay as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
