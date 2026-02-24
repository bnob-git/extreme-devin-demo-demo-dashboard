import { apolloClient, saleorClient } from "./client";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("client", () => {
  test("apolloClient is exported", () => {
    expect(apolloClient).toBeDefined();
  });

  test("saleorClient is exported", () => {
    expect(saleorClient).toBeDefined();
  });
});
