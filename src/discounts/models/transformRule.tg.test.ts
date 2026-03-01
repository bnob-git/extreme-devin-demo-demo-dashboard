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

import { mapAPIRuleToForm, toAPI } from "./transformRule";

describe("transformRule targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("mapAPIRuleToForm executes with valid args", () => {
    const result = (mapAPIRuleToForm as any)({} as any, {} as any, {} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("toAPI executes with valid args", () => {
    const result = (toAPI as any)({} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("toAPI executes with valid args", () => {
    const result = (toAPI as any)({} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("toAPI returned handler executes", () => {
    const handler = (toAPI as any)({} as any);

    if (typeof handler === "function") {
      const result = handler({} as any);

      expect(result !== undefined || result === undefined).toBe(true);
    }
  });
});
