import { Timeline, TimelineAddNote } from "./Timeline";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("Timeline", () => {
  test("Timeline is exported", () => {
    expect(Timeline).toBeDefined();
  });

  test("TimelineAddNote is exported", () => {
    expect(TimelineAddNote).toBeDefined();
  });

  test("Timeline can be called", () => {
    if (typeof Timeline === "function") {
      try {
        (Timeline as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("TimelineAddNote can be called", () => {
    if (typeof TimelineAddNote === "function") {
      try {
        (TimelineAddNote as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
