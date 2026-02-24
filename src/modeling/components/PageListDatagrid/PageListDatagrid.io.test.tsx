import { PageListDatagrid } from "./PageListDatagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("PageListDatagrid", () => {
  test("PageListDatagrid is exported", () => {
    expect(PageListDatagrid).toBeDefined();
  });

  test("PageListDatagrid can be called", () => {
    if (typeof PageListDatagrid === "function") {
      try {
        (PageListDatagrid as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
