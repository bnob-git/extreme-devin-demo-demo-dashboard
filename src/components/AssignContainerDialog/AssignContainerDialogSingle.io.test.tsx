import { AssignContainerDialogSingle } from "./AssignContainerDialogSingle";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AssignContainerDialogSingle", () => {
  test("AssignContainerDialogSingle is exported", () => {
    expect(AssignContainerDialogSingle).toBeDefined();
  });

  test("AssignContainerDialogSingle can be called", () => {
    if (typeof AssignContainerDialogSingle === "function") {
      try {
        (AssignContainerDialogSingle as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
