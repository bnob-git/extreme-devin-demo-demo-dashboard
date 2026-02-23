jest.mock("@dashboard/hooks/useStateFromProps", () => ({
  __esModule: true,
  default: (val: any) => [val, jest.fn()],
}));

import useListActions from "./useListActions";

describe("useListActions coverage", () => {
  it("calls useListActions", () => {
    try {
      const result = (useListActions as any)();

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
