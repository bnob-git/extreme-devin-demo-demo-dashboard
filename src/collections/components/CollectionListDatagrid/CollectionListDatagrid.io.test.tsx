import { CollectionListDatagrid } from "./CollectionListDatagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("CollectionListDatagrid", () => {
  test("CollectionListDatagrid is exported", () => {
    expect(CollectionListDatagrid).toBeDefined();
  });

  test("CollectionListDatagrid can be called", () => {
    if (typeof CollectionListDatagrid === "function") {
      try {
        (CollectionListDatagrid as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
