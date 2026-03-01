import { Condition } from "./Condition";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("Condition", () => {
  test("Condition is exported", () => {
    expect(Condition).toBeDefined();
  });
});
