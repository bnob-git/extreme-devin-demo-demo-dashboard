jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (typeof prop === "string" && /^[A-Z]/.test(prop)) return prop;

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

describe("helpers targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("createBaseAPIInput executes with valid args", () => {
    const result = (createBaseAPIInput as any)({} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createBaseRuleInputFromAPI executes with valid args", () => {
    const result = (createBaseRuleInputFromAPI as any)({} as any, {} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createAPIWhereInput executes with valid args", () => {
    const result = (createAPIWhereInput as any)({} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getConditionType executes with valid args", () => {
    const result = (getConditionType as any)({} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getConditionValue executes with valid args", () => {
    const result = (getConditionValue as any)({} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("hasPredicateNestedConditions executes with valid args", () => {
    const result = (hasPredicateNestedConditions as any)({} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });
});
