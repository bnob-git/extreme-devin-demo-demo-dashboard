import { requestPasswordReset } from "./mutations";

describe("auth/mutations.ts", () => {
  it("should export requestPasswordReset", () => {
    expect(requestPasswordReset).toBeDefined();
  });
});
