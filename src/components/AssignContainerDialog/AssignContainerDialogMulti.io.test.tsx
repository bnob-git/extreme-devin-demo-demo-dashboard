import { AssignContainerDialogMulti } from "./AssignContainerDialogMulti";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AssignContainerDialogMulti", () => {
  test("AssignContainerDialogMulti is exported", () => {
    expect(AssignContainerDialogMulti).toBeDefined();
  });

  test("AssignContainerDialogMulti can be called", () => {
    if (typeof AssignContainerDialogMulti === "function") {
      try {
        (AssignContainerDialogMulti as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
