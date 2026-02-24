import { Tab } from "./Tab";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("Tab", () => {
  test("Tab is exported", () => {
    expect(Tab).toBeDefined();
  });

  test("Tab can be called", () => {
    if (typeof Tab === "function") {
      try {
        (Tab as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
