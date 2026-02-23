import { availableExternalAuthentications, userDetailsQuery } from "./queries";

describe("auth/queries.ts", () => {
  it("should export availableExternalAuthentications", () => {
    expect(availableExternalAuthentications).toBeDefined();
  });

  it("should export userDetailsQuery", () => {
    expect(userDetailsQuery).toBeDefined();
  });
});
