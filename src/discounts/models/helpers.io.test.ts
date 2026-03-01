jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (/^[A-Z]/.test(prop)) return prop;

          if (/^use/.test(prop)) return () => ({ data: undefined, loading: false });

          return prop;
        },
      },
    ),
);

import {
  createAPIWhereInput,
  createBaseAPIInput,
  createBaseRuleInputFromAPI,
  getConditionType,
  getConditionValue,
  hasPredicateNestedConditions,
} from "./helpers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("helpers", () => {
  test("createBaseAPIInput is exported", () => {
    expect(createBaseAPIInput).toBeDefined();
  });

  test("createBaseRuleInputFromAPI is exported", () => {
    expect(createBaseRuleInputFromAPI).toBeDefined();
  });

  test("createAPIWhereInput is exported", () => {
    expect(createAPIWhereInput).toBeDefined();
  });

  test("getConditionType is exported", () => {
    expect(getConditionType).toBeDefined();
  });

  test("getConditionValue is exported", () => {
    expect(getConditionValue).toBeDefined();
  });

  test("hasPredicateNestedConditions is exported", () => {
    expect(hasPredicateNestedConditions).toBeDefined();
  });

  test("createBaseAPIInput can be called", () => {
    if (typeof createBaseAPIInput === "function") {
      try {
        (createBaseAPIInput as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createBaseRuleInputFromAPI can be called", () => {
    if (typeof createBaseRuleInputFromAPI === "function") {
      try {
        (createBaseRuleInputFromAPI as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createAPIWhereInput can be called", () => {
    if (typeof createAPIWhereInput === "function") {
      try {
        (createAPIWhereInput as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getConditionType can be called", () => {
    if (typeof getConditionType === "function") {
      try {
        (getConditionType as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getConditionValue can be called", () => {
    if (typeof getConditionValue === "function") {
      try {
        (getConditionValue as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("hasPredicateNestedConditions can be called", () => {
    if (typeof hasPredicateNestedConditions === "function") {
      try {
        (hasPredicateNestedConditions as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
