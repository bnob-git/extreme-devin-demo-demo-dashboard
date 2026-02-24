jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import CollectionListPage from "./CollectionListPage";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("CollectionListPage", () => {
  test("default export is defined", () => {
    expect(CollectionListPage).toBeDefined();
  });
});
