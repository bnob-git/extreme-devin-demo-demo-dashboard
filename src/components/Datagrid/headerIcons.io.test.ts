import { headerIcons } from "./headerIcons";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("headerIcons", () => {
  test("headerIcons is exported", () => {
    expect(headerIcons).toBeDefined();
  });
});
