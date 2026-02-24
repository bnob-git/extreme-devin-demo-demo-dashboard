import { FilterEventEmitter } from "./EventEmitter";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("EventEmitter", () => {
  test("FilterEventEmitter is exported", () => {
    expect(FilterEventEmitter).toBeDefined();
  });
});
