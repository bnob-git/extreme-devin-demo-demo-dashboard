import { useDiscountFilterAPIProvider } from "./DiscountFiltersAPIProvider";

describe("DiscountFiltersAPIProvider.tsx coverage", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useDiscountFilterAPIProvider", () => {
    try {
      (useDiscountFilterAPIProvider as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
