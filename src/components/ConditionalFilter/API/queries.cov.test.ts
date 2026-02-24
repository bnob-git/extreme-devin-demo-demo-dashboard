import {
  dynamicOperandsQueries,
  initialDynamicLeftOperands,
  initialDynamicOperands,
} from "./queries";

describe("components/ConditionalFilter/API/queries.ts", () => {
  it("should export dynamicOperandsQueries", () => {
    expect(dynamicOperandsQueries).toBeDefined();
  });

  it("should export initialDynamicLeftOperands", () => {
    expect(initialDynamicLeftOperands).toBeDefined();
  });

  it("should export initialDynamicOperands", () => {
    expect(initialDynamicOperands).toBeDefined();
  });
});
