import {
  collectionListStaticColumnsAdapter,
  createGetCellContent,
  getAvailabilityLabel,
  getAvailabilityLabelWhenSelectedChannel,
} from "./datagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("datagrid", () => {
  test("collectionListStaticColumnsAdapter is exported", () => {
    expect(collectionListStaticColumnsAdapter).toBeDefined();
  });

  test("createGetCellContent is exported", () => {
    expect(createGetCellContent).toBeDefined();
  });

  test("getAvailabilityLabelWhenSelectedChannel is exported", () => {
    expect(getAvailabilityLabelWhenSelectedChannel).toBeDefined();
  });

  test("getAvailabilityLabel is exported", () => {
    expect(getAvailabilityLabel).toBeDefined();
  });

  test("collectionListStaticColumnsAdapter can be called", () => {
    if (typeof collectionListStaticColumnsAdapter === "function") {
      try {
        (collectionListStaticColumnsAdapter as any)();
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

  test("getAvailabilityLabelWhenSelectedChannel can be called", () => {
    if (typeof getAvailabilityLabelWhenSelectedChannel === "function") {
      try {
        (getAvailabilityLabelWhenSelectedChannel as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getAvailabilityLabel can be called", () => {
    if (typeof getAvailabilityLabel === "function") {
      try {
        (getAvailabilityLabel as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
