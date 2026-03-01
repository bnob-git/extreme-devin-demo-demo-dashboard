import { pageBulkPublish, pageBulkRemove, pageCreate, pageRemove, pageUpdate } from "./mutations";

describe("modeling/mutations.ts", () => {
  it("should export pageBulkPublish", () => {
    expect(pageBulkPublish).toBeDefined();
  });

  it("should export pageBulkRemove", () => {
    expect(pageBulkRemove).toBeDefined();
  });

  it("should export pageCreate", () => {
    expect(pageCreate).toBeDefined();
  });

  it("should export pageRemove", () => {
    expect(pageRemove).toBeDefined();
  });

  it("should export pageUpdate", () => {
    expect(pageUpdate).toBeDefined();
  });
});
