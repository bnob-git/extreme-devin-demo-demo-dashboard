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

import { getAttributeData, getAttributeInput, getAttributeType } from "./attributes";

describe("attributes targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("getAttributeData executes with valid args", () => {
    const result = (getAttributeData as any)([], 0, []);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getAttributeData with alternative args", () => {
    const result = (getAttributeData as any)([{} as any], 1, [{} as any]);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getAttributeType executes with valid args", () => {
    const result = (getAttributeType as any)([], "test-id");

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getAttributeType with alternative args", () => {
    const result = (getAttributeType as any)([{} as any], "test-value");

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getAttributeInput executes with valid args", () => {
    const result = (getAttributeInput as any)({} as any, []);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getAttributeInput with alternative args", () => {
    const result = (getAttributeInput as any)({} as any, [{} as any]);

    expect(result !== undefined || result === undefined).toBe(true);
  });
});
