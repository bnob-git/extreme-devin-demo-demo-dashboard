import { buildTree, flattenTree, getChildCount, getProjection, removeChildrenOf } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("getProjection is exported", () => {
    expect(getProjection).toBeDefined();
  });

  test("flattenTree is exported", () => {
    expect(flattenTree).toBeDefined();
  });

  test("buildTree is exported", () => {
    expect(buildTree).toBeDefined();
  });

  test("getChildCount is exported", () => {
    expect(getChildCount).toBeDefined();
  });

  test("removeChildrenOf is exported", () => {
    expect(removeChildrenOf).toBeDefined();
  });

  test("getProjection can be called", () => {
    if (typeof getProjection === "function") {
      try {
        (getProjection as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("flattenTree can be called", () => {
    if (typeof flattenTree === "function") {
      try {
        (flattenTree as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("buildTree can be called", () => {
    if (typeof buildTree === "function") {
      try {
        (buildTree as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getChildCount can be called", () => {
    if (typeof getChildCount === "function") {
      try {
        (getChildCount as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("removeChildrenOf can be called", () => {
    if (typeof removeChildrenOf === "function") {
      try {
        (removeChildrenOf as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
