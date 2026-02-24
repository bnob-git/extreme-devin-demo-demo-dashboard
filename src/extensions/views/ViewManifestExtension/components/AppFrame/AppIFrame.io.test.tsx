import { AppIFrame } from "./AppIFrame";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AppIFrame", () => {
  test("AppIFrame is exported", () => {
    expect(AppIFrame).toBeDefined();
  });
});
