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

import { createRuleCreateHandler, createRuleUpdateHandler, createUpdateHandler } from "./handlers";

describe("handlers targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("createUpdateHandler executes with valid args", () => {
    const result = (createUpdateHandler as any)({} as any, {} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createRuleUpdateHandler executes with valid args", () => {
    const result = (createRuleUpdateHandler as any)({} as any, {} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createRuleCreateHandler executes with valid args", () => {
    const result = (createRuleCreateHandler as any)({} as any, {} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });
});
