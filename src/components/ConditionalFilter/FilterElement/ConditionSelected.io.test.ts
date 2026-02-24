import { ConditionSelected } from "./ConditionSelected";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ConditionSelected", () => {
  test("ConditionSelected is exported", () => {
    expect(ConditionSelected).toBeDefined();
  });
});
