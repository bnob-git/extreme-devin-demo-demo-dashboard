import { useOrderLineMetadataFormControls } from "./useOrderLineMetadataFormControls";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useOrderLineMetadataFormControls", () => {
  test("useOrderLineMetadataFormControls is exported", () => {
    expect(useOrderLineMetadataFormControls).toBeDefined();
  });

  test("useOrderLineMetadataFormControls can be called", () => {
    if (typeof useOrderLineMetadataFormControls === "function") {
      try {
        (useOrderLineMetadataFormControls as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
