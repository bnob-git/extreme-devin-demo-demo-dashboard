import CollectionWithDividers from "./CollectionWithDividers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("CollectionWithDividers", () => {
  test("default export is defined", () => {
    expect(CollectionWithDividers).toBeDefined();
  });
});
