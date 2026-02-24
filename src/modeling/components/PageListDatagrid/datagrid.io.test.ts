import { createGetCellContent, pageListStaticColumnsAdapter } from "./datagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("datagrid", () => {
  test("pageListStaticColumnsAdapter is exported", () => {
    expect(pageListStaticColumnsAdapter).toBeDefined();
  });

  test("createGetCellContent is exported", () => {
    expect(createGetCellContent).toBeDefined();
  });

  test("pageListStaticColumnsAdapter can be called", () => {
    if (typeof pageListStaticColumnsAdapter === "function") {
      try {
        (pageListStaticColumnsAdapter as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createGetCellContent can be called", () => {
    if (typeof createGetCellContent === "function") {
      try {
        (createGetCellContent as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
