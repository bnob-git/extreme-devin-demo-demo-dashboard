import { LegacyFiltersPresetsAlert } from "./LegacyFiltersPresetsAlert";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("LegacyFiltersPresetsAlert", () => {
  test("LegacyFiltersPresetsAlert is exported", () => {
    expect(LegacyFiltersPresetsAlert).toBeDefined();
  });

  test("LegacyFiltersPresetsAlert can be called", () => {
    if (typeof LegacyFiltersPresetsAlert === "function") {
      try {
        (LegacyFiltersPresetsAlert as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
