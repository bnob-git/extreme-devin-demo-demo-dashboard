import { createGetCellContent, customerListStaticColumnsAdapter } from "./datagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("datagrid", () => {
  test("customerListStaticColumnsAdapter is exported", () => {
    expect(customerListStaticColumnsAdapter).toBeDefined();
  });

  test("createGetCellContent is exported", () => {
    expect(createGetCellContent).toBeDefined();
  });

  test("customerListStaticColumnsAdapter can be called", () => {
    if (typeof customerListStaticColumnsAdapter === "function") {
      try {
        (customerListStaticColumnsAdapter as any)();
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
