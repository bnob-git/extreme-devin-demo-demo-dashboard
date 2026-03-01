// Iterative coverage test for src/discounts/models/transformRule.ts
import { mapAPIRuleToForm, toAPI } from "./transformRule";

jest.mock(
  "@dashboard/graphql",
  () => new Proxy({}, { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn()) }),
);

describe("transformRule", () => {
  it("executes mapAPIRuleToForm", () => {
    const result = mapAPIRuleToForm("PRICE" as any, {} as any, [] as any);

    void result;
  });
  it("executes toAPI", async () => {
    const outer = toAPI(0);

    expect(outer).toBeDefined();

    if (typeof outer === "function") {
      const inner = await outer({} as any);

      void inner;
    }
  });
});
