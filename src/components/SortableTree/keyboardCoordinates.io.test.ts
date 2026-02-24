import { sortableTreeKeyboardCoordinates } from "./keyboardCoordinates";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("keyboardCoordinates", () => {
  test("sortableTreeKeyboardCoordinates is exported", () => {
    expect(sortableTreeKeyboardCoordinates).toBeDefined();
  });
});
