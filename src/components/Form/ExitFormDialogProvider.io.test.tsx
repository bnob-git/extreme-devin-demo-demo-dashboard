import ExitFormDialogProvider, { ExitFormDialogContext } from "./ExitFormDialogProvider";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ExitFormDialogProvider", () => {
  test("default export is defined", () => {
    expect(ExitFormDialogProvider).toBeDefined();
  });

  test("ExitFormDialogContext is exported", () => {
    expect(ExitFormDialogContext).toBeDefined();
  });
});
