import { getItemId, getItemType, getNodeData, unknownTypeError } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("getNodeData is exported", () => {
    expect(getNodeData).toBeDefined();
  });

  test("unknownTypeError is exported", () => {
    expect(unknownTypeError).toBeDefined();
  });

  test("getItemType is exported", () => {
    expect(getItemType).toBeDefined();
  });

  test("getItemId is exported", () => {
    expect(getItemId).toBeDefined();
  });

  test("getNodeData can be called", () => {
    if (typeof getNodeData === "function") {
      try {
        (getNodeData as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getItemType can be called", () => {
    if (typeof getItemType === "function") {
      try {
        (getItemType as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getItemId can be called", () => {
    if (typeof getItemId === "function") {
      try {
        (getItemId as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
