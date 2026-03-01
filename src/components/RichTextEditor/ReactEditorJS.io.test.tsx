import { ReactEditorJS } from "./ReactEditorJS";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ReactEditorJS", () => {
  test("ReactEditorJS is exported", () => {
    expect(ReactEditorJS).toBeDefined();
  });
});
