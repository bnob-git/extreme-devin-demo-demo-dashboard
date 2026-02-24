import { COLLECTION_CREATE_FORM_ID, COLLECTION_DETAILS_FORM_ID } from "./consts";

describe("collections/views/consts.ts", () => {
  it("should export COLLECTION_CREATE_FORM_ID", () => {
    expect(COLLECTION_CREATE_FORM_ID).toBeDefined();
  });

  it("should export COLLECTION_DETAILS_FORM_ID", () => {
    expect(COLLECTION_DETAILS_FORM_ID).toBeDefined();
  });
});
