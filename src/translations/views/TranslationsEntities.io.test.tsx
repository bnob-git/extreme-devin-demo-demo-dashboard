jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useShop", () => ({ __esModule: true, default: () => ({}) }));

import TranslationsEntities from "./TranslationsEntities";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("TranslationsEntities", () => {
  test("default export is defined", () => {
    expect(TranslationsEntities).toBeDefined();
  });
});
