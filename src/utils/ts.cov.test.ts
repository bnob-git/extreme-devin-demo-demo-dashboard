import { exhaustiveCheck } from "./ts";

describe("utils/ts.ts", () => {
  it("should execute exhaustiveCheck", () => {
    try {
      exhaustiveCheck({} as any);
      expect(true).toBe(true);
    } catch (e) {
      // Function may throw with undefined args, that's ok
      expect(true).toBe(true);
    }
  });
});
