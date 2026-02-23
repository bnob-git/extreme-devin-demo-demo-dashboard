import { apolloClient, saleorClient } from "./client";

describe("graphql/client.ts", () => {
  it("should export apolloClient", () => {
    expect(apolloClient).toBeDefined();
  });

  it("should export saleorClient", () => {
    expect(saleorClient).toBeDefined();
  });
});
