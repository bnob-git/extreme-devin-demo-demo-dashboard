import { getSortQueryVariables } from "./sort";

describe("staff/views/StaffList/sort.ts", () => {
  it("should export getSortQueryVariables", () => {
    expect(getSortQueryVariables).toBeDefined();
  });
});
