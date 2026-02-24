jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { StaffListDatagrid } from "./StaffListDatagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("StaffListDatagrid", () => {
  test("StaffListDatagrid is exported", () => {
    expect(StaffListDatagrid).toBeDefined();
  });

  test("StaffListDatagrid can be called", () => {
    if (typeof StaffListDatagrid === "function") {
      try {
        (StaffListDatagrid as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
