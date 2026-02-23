import { menuDetails, menuList } from "./queries";

describe("structures/queries.ts", () => {
  it("should export menuDetails", () => {
    expect(menuDetails).toBeDefined();
  });

  it("should export menuList", () => {
    expect(menuList).toBeDefined();
  });
});
