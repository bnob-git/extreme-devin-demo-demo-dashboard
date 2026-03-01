jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import ErrorPage from "./ErrorPage";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ErrorPage", () => {
  test("default export is defined", () => {
    expect(ErrorPage).toBeDefined();
  });
});
