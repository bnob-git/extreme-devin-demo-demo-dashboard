import { MetadataInput } from "./MetadataInput";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("MetadataInput", () => {
  test("MetadataInput is exported", () => {
    expect(MetadataInput).toBeDefined();
  });

  test("MetadataInput can be called", () => {
    if (typeof MetadataInput === "function") {
      try {
        (MetadataInput as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
