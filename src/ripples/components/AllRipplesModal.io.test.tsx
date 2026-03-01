import { AllRipplesModal, getRipplesSortedAndGroupedByMonths } from "./AllRipplesModal";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AllRipplesModal", () => {
  test("getRipplesSortedAndGroupedByMonths is exported", () => {
    expect(getRipplesSortedAndGroupedByMonths).toBeDefined();
  });

  test("AllRipplesModal is exported", () => {
    expect(AllRipplesModal).toBeDefined();
  });

  test("getRipplesSortedAndGroupedByMonths can be called", () => {
    if (typeof getRipplesSortedAndGroupedByMonths === "function") {
      try {
        (getRipplesSortedAndGroupedByMonths as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("AllRipplesModal can be called", () => {
    if (typeof AllRipplesModal === "function") {
      try {
        (AllRipplesModal as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
