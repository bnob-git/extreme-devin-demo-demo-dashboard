import { SlugChannelQueryVarsBuilder } from "./SlugChannelQueryVarsBuilder";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("SlugChannelQueryVarsBuilder", () => {
  test("SlugChannelQueryVarsBuilder is exported", () => {
    expect(SlugChannelQueryVarsBuilder).toBeDefined();
  });
});
