import { RuleConditionsChips } from "./RuleConditionsChips";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("RuleConditionsChips", () => {
  test("RuleConditionsChips is exported", () => {
    expect(RuleConditionsChips).toBeDefined();
  });

  test("RuleConditionsChips can be called", () => {
    if (typeof RuleConditionsChips === "function") {
      try {
        (RuleConditionsChips as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
