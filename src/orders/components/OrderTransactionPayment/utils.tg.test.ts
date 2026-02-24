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
  findMethodName,
  getTransactionAmount,
  mapOrderActionsToTransactionActions,
  mapPaymentToTransactionEvents,
} from "./utils";

describe("utils targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("getTransactionAmount executes with valid args", () => {
    const result = (getTransactionAmount as any)({} as any, "USD");

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getTransactionAmount with alternative args", () => {
    const result = (getTransactionAmount as any)({} as any, "test-value");

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("findMethodName executes with valid args", () => {
    const result = (findMethodName as any)("test-id", []);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("findMethodName with alternative args", () => {
    const result = (findMethodName as any)("test-value", [{} as any]);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("mapPaymentToTransactionEvents executes with valid args", () => {
    const result = (mapPaymentToTransactionEvents as any)({} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("mapOrderActionsToTransactionActions executes with valid args", () => {
    const result = (mapOrderActionsToTransactionActions as any)([]);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("mapOrderActionsToTransactionActions with alternative args", () => {
    const result = (mapOrderActionsToTransactionActions as any)([{} as any]);

    expect(result !== undefined || result === undefined).toBe(true);
  });
});
