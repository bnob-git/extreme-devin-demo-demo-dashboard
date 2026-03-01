import { OccurrenceLimiter } from "./OccurrenceLimiter";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("OccurrenceLimiter", () => {
  test("OccurrenceLimiter is exported", () => {
    expect(OccurrenceLimiter).toBeDefined();
  });
});
