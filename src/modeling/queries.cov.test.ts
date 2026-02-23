import { modelsOfTypeQuery, pageCountQuery, pageDetails, pageList, pageTypeQuery } from "./queries";

describe("modeling/queries.ts", () => {
  it("should export modelsOfTypeQuery", () => {
    expect(modelsOfTypeQuery).toBeDefined();
  });

  it("should export pageCountQuery", () => {
    expect(pageCountQuery).toBeDefined();
  });

  it("should export pageDetails", () => {
    expect(pageDetails).toBeDefined();
  });

  it("should export pageList", () => {
    expect(pageList).toBeDefined();
  });

  it("should export pageTypeQuery", () => {
    expect(pageTypeQuery).toBeDefined();
  });
});
