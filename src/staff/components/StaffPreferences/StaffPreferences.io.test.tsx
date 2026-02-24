import StaffPreferences from "./StaffPreferences";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("StaffPreferences", () => {
  test("default export is defined", () => {
    expect(StaffPreferences).toBeDefined();
  });
});
