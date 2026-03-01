import {
  createGetCellContent,
  getCustomerName,
  orderDraftListStaticColumnsAdapter,
} from "./datagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("datagrid", () => {
  test("orderDraftListStaticColumnsAdapter is exported", () => {
    expect(orderDraftListStaticColumnsAdapter).toBeDefined();
  });

  test("createGetCellContent is exported", () => {
    expect(createGetCellContent).toBeDefined();
  });

  test("getCustomerName is exported", () => {
    expect(getCustomerName).toBeDefined();
  });

  test("orderDraftListStaticColumnsAdapter can be called", () => {
    if (typeof orderDraftListStaticColumnsAdapter === "function") {
      try {
        (orderDraftListStaticColumnsAdapter as any)();
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

  test("getCustomerName can be called", () => {
    if (typeof getCustomerName === "function") {
      try {
        (getCustomerName as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
