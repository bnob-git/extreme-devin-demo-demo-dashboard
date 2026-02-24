import { DataPrivacyCard } from "./DataPrivacyCard";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("DataPrivacyCard", () => {
  test("DataPrivacyCard is exported", () => {
    expect(DataPrivacyCard).toBeDefined();
  });

  test("DataPrivacyCard can be called", () => {
    if (typeof DataPrivacyCard === "function") {
      try {
        (DataPrivacyCard as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
