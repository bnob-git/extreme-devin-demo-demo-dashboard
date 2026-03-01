import { CustomerNumberOfOrdersQueryVarsBuilder } from "./CustomerNumberOfOrdersQueryVarsBuilder";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("CustomerNumberOfOrdersQueryVarsBuilder", () => {
  test("CustomerNumberOfOrdersQueryVarsBuilder is exported", () => {
    expect(CustomerNumberOfOrdersQueryVarsBuilder).toBeDefined();
  });
});
