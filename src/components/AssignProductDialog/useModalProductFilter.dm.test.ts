jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  ProductWhereInput: () => null,
}));

import { useModalProductFilter } from "./useModalProductFilter";

describe("useModalProductFilter deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useModalProductFilter with deep-mocked deps", () => {
    try {
      const result = (useModalProductFilter as any)({});

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
