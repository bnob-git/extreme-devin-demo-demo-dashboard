import AssignmentListFooter from "./AssignmentListFooter";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AssignmentListFooter", () => {
  test("default export is defined", () => {
    expect(AssignmentListFooter).toBeDefined();
  });
});
