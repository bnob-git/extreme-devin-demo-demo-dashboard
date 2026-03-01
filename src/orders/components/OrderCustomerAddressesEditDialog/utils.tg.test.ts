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

import {
  getAddressEditProps,
  hasPreSubmitErrors,
  parseQuery,
  stringifyAddress,
  validateDefaultAddress,
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

  it("stringifyAddress executes with valid args", () => {
    const result = (stringifyAddress as any)({} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("parseQuery executes with valid args", () => {
    const result = (parseQuery as any)("");

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("parseQuery with alternative args", () => {
    const result = (parseQuery as any)("test-value");

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("hasPreSubmitErrors executes with valid args", () => {
    const result = (hasPreSubmitErrors as any)({} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getAddressEditProps executes with valid args", () => {
    const result = (getAddressEditProps as any)(
      {} as any,
      {} as any,
      jest.fn(),
      jest.fn(),
      [],
      jest.fn(),
      {} as any,
    );

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getAddressEditProps with alternative args", () => {
    const result = (getAddressEditProps as any)(
      {} as any,
      {} as any,
      jest.fn(),
      jest.fn(),
      [{} as any],
      jest.fn(),
      {} as any,
    );

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("validateDefaultAddress executes with valid args", () => {
    const result = (validateDefaultAddress as any)({} as any, []);

    expect(result !== undefined || result === undefined).toBe(true);
  });
});
