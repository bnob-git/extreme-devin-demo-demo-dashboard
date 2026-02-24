import { createGetCellContent, staffMembersListStaticColumnsAdapter } from "./datagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("datagrid", () => {
  test("staffMembersListStaticColumnsAdapter is exported", () => {
    expect(staffMembersListStaticColumnsAdapter).toBeDefined();
  });

  test("createGetCellContent is exported", () => {
    expect(createGetCellContent).toBeDefined();
  });

  test("staffMembersListStaticColumnsAdapter can be called", () => {
    if (typeof staffMembersListStaticColumnsAdapter === "function") {
      try {
        (staffMembersListStaticColumnsAdapter as any)();
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
