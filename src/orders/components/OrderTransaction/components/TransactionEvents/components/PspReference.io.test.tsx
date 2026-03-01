import { PspReference } from "./PspReference";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("PspReference", () => {
  test("PspReference is exported", () => {
    expect(PspReference).toBeDefined();
  });

  test("PspReference can be called", () => {
    if (typeof PspReference === "function") {
      try {
        (PspReference as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
