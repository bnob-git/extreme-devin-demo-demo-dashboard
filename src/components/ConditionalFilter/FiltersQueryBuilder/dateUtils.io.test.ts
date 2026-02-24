import { QueryVarsDateUtils } from "./dateUtils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("dateUtils", () => {
  test("QueryVarsDateUtils is exported", () => {
    expect(QueryVarsDateUtils).toBeDefined();
  });
});
