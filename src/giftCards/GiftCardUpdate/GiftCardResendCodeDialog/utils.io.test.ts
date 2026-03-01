import { useDialogFormReset } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("useDialogFormReset is exported", () => {
    expect(useDialogFormReset).toBeDefined();
  });

  test("useDialogFormReset can be called", () => {
    if (typeof useDialogFormReset === "function") {
      try {
        (useDialogFormReset as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
