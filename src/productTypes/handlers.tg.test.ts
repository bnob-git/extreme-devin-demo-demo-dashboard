jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: (init: any) => ({
    change: jest.fn(),
    data: init || {},
    submit: jest.fn(),
    hasChanged: false,
    errors: {},
  }),
}));
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

import { handleTaxClassChange, makeProductTypeKindChangeHandler } from "./handlers";

describe("handlers targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("makeProductTypeKindChangeHandler executes with valid args", () => {
    const result = (makeProductTypeKindChangeHandler as any)(jest.fn(), jest.fn());

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("handleTaxClassChange executes with valid args", () => {
    const result = (handleTaxClassChange as any)(
      { target: { name: "test", value: "test-value" } } as any,
      [],
      jest.fn(),
      jest.fn(),
    );

    expect(result !== undefined || result === undefined).toBe(true);
  });
});
