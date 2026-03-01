// Auto-generated utility test
const { createDeepMock } = jest.requireActual("@test/deepMock");

jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: () => createDeepMock(),
  useNavigator: () => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useNotifier", () => ({
  __esModule: true,
  default: () => createDeepMock(),
  useNotifier: () => createDeepMock(),
}));

import { AppActionsHandler } from "./appActionsHandler";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {
    /* expected */
  });
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AppActionsHandler", () => {
  test("is defined", () => {
    expect(AppActionsHandler).toBeDefined();
  });
});
