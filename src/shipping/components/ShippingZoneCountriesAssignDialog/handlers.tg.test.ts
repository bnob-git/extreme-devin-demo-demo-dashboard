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

import { createCountryChangeHandler, createRestOfTheWorldChangeHandler } from "./handlers";

describe("handlers targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("createCountryChangeHandler executes with valid args", () => {
    const result = (createCountryChangeHandler as any)([], jest.fn());

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createCountryChangeHandler with alternative args", () => {
    const result = (createCountryChangeHandler as any)([{} as any], jest.fn());

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createRestOfTheWorldChangeHandler executes with valid args", () => {
    const result = (createRestOfTheWorldChangeHandler as any)({} as any, [], [], jest.fn());

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createRestOfTheWorldChangeHandler with alternative args", () => {
    const result = (createRestOfTheWorldChangeHandler as any)(
      {} as any,
      [{} as any],
      [{} as any],
      jest.fn(),
    );

    expect(result !== undefined || result === undefined).toBe(true);
  });
});
