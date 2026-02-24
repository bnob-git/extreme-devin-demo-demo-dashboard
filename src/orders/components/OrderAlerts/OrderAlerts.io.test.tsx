import OrderAlerts from "./OrderAlerts";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("OrderAlerts", () => {
  test("default export is defined", () => {
    expect(OrderAlerts).toBeDefined();
  });
});
