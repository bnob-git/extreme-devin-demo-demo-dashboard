jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import CustomerListPage from "./CustomerListPage";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("CustomerListPage", () => {
  test("default export is defined", () => {
    expect(CustomerListPage).toBeDefined();
  });
});
