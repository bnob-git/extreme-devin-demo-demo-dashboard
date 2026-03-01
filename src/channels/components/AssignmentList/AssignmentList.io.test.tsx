import AssignmentList from "./AssignmentList";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AssignmentList", () => {
  test("default export is defined", () => {
    expect(AssignmentList).toBeDefined();
  });
});
