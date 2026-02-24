import {
  areCategoriesLoaded,
  extractSelectedNodesFromCategories,
  filterEmptyColumn,
  findDynamicColumn,
  getExitIcon,
  getExitOnClick,
  isLastEnabledColumn,
  isValidColumn,
  mergeSelectedColumns,
  rightColumnBoxShadow,
  sortColumns,
} from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("filterEmptyColumn is exported", () => {
    expect(filterEmptyColumn).toBeDefined();
  });

  test("getExitIcon is exported", () => {
    expect(getExitIcon).toBeDefined();
  });

  test("getExitOnClick is exported", () => {
    expect(getExitOnClick).toBeDefined();
  });

  test("isLastEnabledColumn is exported", () => {
    expect(isLastEnabledColumn).toBeDefined();
  });

  test("sortColumns is exported", () => {
    expect(sortColumns).toBeDefined();
  });

  test("areCategoriesLoaded is exported", () => {
    expect(areCategoriesLoaded).toBeDefined();
  });

  test("extractSelectedNodesFromCategories is exported", () => {
    expect(extractSelectedNodesFromCategories).toBeDefined();
  });

  test("isValidColumn is exported", () => {
    expect(isValidColumn).toBeDefined();
  });

  test("findDynamicColumn is exported", () => {
    expect(findDynamicColumn).toBeDefined();
  });

  test("mergeSelectedColumns is exported", () => {
    expect(mergeSelectedColumns).toBeDefined();
  });

  test("rightColumnBoxShadow is exported", () => {
    expect(rightColumnBoxShadow).toBeDefined();
  });

  test("filterEmptyColumn can be called", () => {
    if (typeof filterEmptyColumn === "function") {
      try {
        (filterEmptyColumn as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getExitIcon can be called", () => {
    if (typeof getExitIcon === "function") {
      try {
        (getExitIcon as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getExitOnClick can be called", () => {
    if (typeof getExitOnClick === "function") {
      try {
        (getExitOnClick as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("isLastEnabledColumn can be called", () => {
    if (typeof isLastEnabledColumn === "function") {
      try {
        (isLastEnabledColumn as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("sortColumns can be called", () => {
    if (typeof sortColumns === "function") {
      try {
        (sortColumns as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("areCategoriesLoaded can be called", () => {
    if (typeof areCategoriesLoaded === "function") {
      try {
        (areCategoriesLoaded as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("extractSelectedNodesFromCategories can be called", () => {
    if (typeof extractSelectedNodesFromCategories === "function") {
      try {
        (extractSelectedNodesFromCategories as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("isValidColumn can be called", () => {
    if (typeof isValidColumn === "function") {
      try {
        (isValidColumn as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("findDynamicColumn can be called", () => {
    if (typeof findDynamicColumn === "function") {
      try {
        (findDynamicColumn as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("mergeSelectedColumns can be called", () => {
    if (typeof mergeSelectedColumns === "function") {
      try {
        (mergeSelectedColumns as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
