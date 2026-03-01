import { extractPermissions, getPermissions } from "./utils";

describe("PermissionAlert/utils manual tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("extractPermissions", () => {
    it("extracts permissions from description with 'one of'", () => {
      const description = "Requires one of the following permissions: MANAGE_ORDERS, MANAGE_USERS.";
      const result = extractPermissions(description);

      expect(result.isOneOfRequired).toBe(true);
      expect(result.permissions).toEqual(["MANAGE_ORDERS", "MANAGE_USERS"]);
    });

    it("extracts permissions without 'one of'", () => {
      const description = "Requires the following permissions: MANAGE_ORDERS.";
      const result = extractPermissions(description);

      expect(result.isOneOfRequired).toBe(false);
      expect(result.permissions).toEqual(["MANAGE_ORDERS"]);
    });

    it("returns empty permissions for no match", () => {
      const result = extractPermissions("No permissions here");

      expect(result.permissions).toEqual([]);
      expect(result.isOneOfRequired).toBe(false);
    });

    it("handles undefined description", () => {
      const result = extractPermissions(undefined);

      expect(result.permissions).toEqual([]);
    });

    it("handles empty string", () => {
      const result = extractPermissions("");

      expect(result.permissions).toEqual([]);
    });

    it("trims permission names", () => {
      const description =
        "Requires one of the following permissions: MANAGE_ORDERS , MANAGE_USERS .";
      const result = extractPermissions(description);

      expect(result.permissions[0]).toBe("MANAGE_ORDERS");
      expect(result.permissions[1]).toBe("MANAGE_USERS");
    });
  });

  describe("getPermissions", () => {
    it("returns empty object for invalid query", () => {
      const result = getPermissions("invalid query", {} as any);

      expect(result).toEqual({});
    });

    it("returns empty object for empty introspection", () => {
      const result = getPermissions(
        "subscription { event { ... on OrderCreated { __typename } } }",
        {
          __schema: {
            types: [],
            directives: [],
            queryType: null,
            mutationType: null,
            subscriptionType: null,
          },
        } as any,
      );

      expect(result).toEqual({});
    });
  });
});
