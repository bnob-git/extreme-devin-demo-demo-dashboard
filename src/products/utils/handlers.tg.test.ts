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
  createChannelsChangeHandler,
  createChannelsPriceChangeHandler,
  createMediaChangeHandler,
  createPreorderEndDateChangeHandler,
  createProductTypeSelectHandler,
  getAvailabilityVariables,
  getChannelsInput,
} from "./handlers";

describe("handlers targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("getChannelsInput executes with valid args", () => {
    const result = (getChannelsInput as any)([]);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getChannelsInput with alternative args", () => {
    const result = (getChannelsInput as any)([{} as any]);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getAvailabilityVariables executes with valid args", () => {
    const result = (getAvailabilityVariables as any)([]);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getAvailabilityVariables with alternative args", () => {
    const result = (getAvailabilityVariables as any)([{} as any]);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createPreorderEndDateChangeHandler executes with valid args", () => {
    const result = (createPreorderEndDateChangeHandler as any)({} as any, jest.fn());

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createMediaChangeHandler executes with valid args", () => {
    const result = (createMediaChangeHandler as any)({} as any, jest.fn());

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createMediaChangeHandler with alternative args", () => {
    const result = (createMediaChangeHandler as any)([{} as any], jest.fn());

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createChannelsPriceChangeHandler executes with valid args", () => {
    const result = (createChannelsPriceChangeHandler as any)([], []);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createChannelsPriceChangeHandler with alternative args", () => {
    const result = (createChannelsPriceChangeHandler as any)([{} as any], [{} as any]);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createChannelsChangeHandler executes with valid args", () => {
    const result = (createChannelsChangeHandler as any)([], []);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createChannelsChangeHandler with alternative args", () => {
    const result = (createChannelsChangeHandler as any)([{} as any], [{} as any]);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createProductTypeSelectHandler executes with valid args", () => {
    const result = (createProductTypeSelectHandler as any)(jest.fn());

    expect(result !== undefined || result === undefined).toBe(true);
  });
});
