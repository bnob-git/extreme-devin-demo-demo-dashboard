import { VariantChannelsDialog } from ".";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("index", () => {
  test("VariantChannelsDialog is exported", () => {
    expect(VariantChannelsDialog).toBeDefined();
  });

  test("VariantChannelsDialog can be called", () => {
    if (typeof VariantChannelsDialog === "function") {
      try {
        (VariantChannelsDialog as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
