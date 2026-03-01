// Auto-generated coverage test for src/components/Filter/utils.ts
import { getByName } from "./utils";

jest.mock("./types", () => ({}));

describe("utils.ts", () => {
  it("executes getByName", async () => {
    const outer = getByName("test-name");

    if (typeof outer === "function") {
      const innerResult = await outer({} as any);

      void innerResult;
    }
  });
});
