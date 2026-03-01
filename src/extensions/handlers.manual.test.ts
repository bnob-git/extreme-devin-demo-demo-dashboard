import { createAsyncEventsSelectHandler, createSyncEventsSelectHandler } from "./handlers";

// We need to mock some dependencies
jest.mock("@dashboard/extensions/utils", () => ({
  filterSelectedAsyncEvents: (events: string[]) => events,
}));

jest.mock("@dashboard/misc", () => ({
  capitalize: (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase(),
}));

jest.mock("@dashboard/utils/lists", () => ({
  toggle: (value: string, list: string[], comparator: (a: string, b: string) => boolean) => {
    const idx = list.findIndex(item => comparator(item, value));

    if (idx >= 0) {
      return [...list.slice(0, idx), ...list.slice(idx + 1)];
    }

    return [...list, value];
  },
}));

describe("extensions/handlers", () => {
  describe("createSyncEventsSelectHandler", () => {
    it("creates a handler that adds sync events and clears async events", () => {
      const change = jest.fn();
      const setQuery = jest.fn();
      const handler = createSyncEventsSelectHandler({
        change,
        data: {
          syncEvents: [],
          asyncEvents: ["ASYNC_EVENT"],
        } as any,
        query: "",
        setQuery,
        availableEvents: [{ name: "OrderCreated" }] as any,
      });

      handler({
        target: { name: "syncEvents", value: "ORDER_CREATED" },
      } as any);

      // Should clear async events since they weren't empty
      expect(change).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ name: "asyncEvents", value: [] }),
        }),
      );
      // Should set sync events
      expect(change).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ name: "syncEvents" }),
        }),
      );
    });

    it("creates a handler that adds sync events without clearing empty async events", () => {
      const change = jest.fn();
      const setQuery = jest.fn();
      const handler = createSyncEventsSelectHandler({
        change,
        data: {
          syncEvents: [],
          asyncEvents: [],
        } as any,
        query: "",
        setQuery,
        availableEvents: [],
      });

      handler({
        target: { name: "syncEvents", value: "ORDER_CREATED" },
      } as any);

      // Should NOT clear async events since they were already empty
      expect(change).toHaveBeenCalledTimes(1);
      expect(change).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ name: "syncEvents" }),
        }),
      );
    });

    it("handles toggling existing sync event off", () => {
      const change = jest.fn();
      const setQuery = jest.fn();
      const handler = createSyncEventsSelectHandler({
        change,
        data: {
          syncEvents: ["ORDER_CREATED"],
          asyncEvents: [],
        } as any,
        query: "",
        setQuery,
        availableEvents: [],
      });

      handler({
        target: { name: "syncEvents", value: "ORDER_CREATED" },
      } as any);

      expect(change).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ name: "syncEvents" }),
        }),
      );
    });

    it("sets query when events are selected and query is empty", () => {
      const change = jest.fn();
      const setQuery = jest.fn();
      const handler = createSyncEventsSelectHandler({
        change,
        data: {
          syncEvents: [],
          asyncEvents: [],
        } as any,
        query: "",
        setQuery,
        availableEvents: [{ name: "OrderCreated" }] as any,
      });

      handler({
        target: { name: "syncEvents", value: "ORDER_CREATED" },
      } as any);

      // handleQuery should set query since events > 0 and query is empty
      expect(setQuery).toHaveBeenCalled();
    });
  });

  describe("createAsyncEventsSelectHandler", () => {
    it("creates a handler that adds async events and clears sync events", () => {
      const change = jest.fn();
      const setQuery = jest.fn();
      const handler = createAsyncEventsSelectHandler({
        change,
        data: {
          syncEvents: ["SYNC_EVENT"],
          asyncEvents: [],
        } as any,
        query: "",
        setQuery,
        availableEvents: [{ name: "OrderCreated" }] as any,
      });

      handler({
        target: { name: "asyncEvents", value: "ORDER_CREATED" },
      } as any);

      // Should clear sync events since they weren't empty
      expect(change).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ name: "syncEvents", value: [] }),
        }),
      );
      expect(setQuery).toHaveBeenCalledWith("");
    });

    it("handles adding async events without clearing empty sync events", () => {
      const change = jest.fn();
      const setQuery = jest.fn();
      const handler = createAsyncEventsSelectHandler({
        change,
        data: {
          syncEvents: [],
          asyncEvents: [],
        } as any,
        query: "",
        setQuery,
        availableEvents: [],
      });

      handler({
        target: { name: "asyncEvents", value: "ORDER_CREATED" },
      } as any);

      // Should NOT clear sync events
      expect(change).toHaveBeenCalledTimes(1);
      expect(change).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ name: "asyncEvents" }),
        }),
      );
    });

    it("handles toggling existing async event off", () => {
      const change = jest.fn();
      const setQuery = jest.fn();
      const handler = createAsyncEventsSelectHandler({
        change,
        data: {
          syncEvents: [],
          asyncEvents: ["ORDER_CREATED"],
        } as any,
        query: "",
        setQuery,
        availableEvents: [],
      });

      handler({
        target: { name: "asyncEvents", value: "ORDER_CREATED" },
      } as any);

      expect(change).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ name: "asyncEvents" }),
        }),
      );
    });

    it("sets query when events are selected, query is empty, and available events match", () => {
      const change = jest.fn();
      const setQuery = jest.fn();
      const handler = createAsyncEventsSelectHandler({
        change,
        data: {
          syncEvents: [],
          asyncEvents: [],
        } as any,
        query: "",
        setQuery,
        availableEvents: [{ name: "OrderCreated" }] as any,
      });

      handler({
        target: { name: "asyncEvents", value: "ORDER_CREATED" },
      } as any);

      expect(setQuery).toHaveBeenCalled();
    });

    it("modifies query when events are selected and query exists", () => {
      const change = jest.fn();
      const setQuery = jest.fn();
      const handler = createAsyncEventsSelectHandler({
        change,
        data: {
          syncEvents: [],
          asyncEvents: [],
        } as any,
        query: "subscription { event { ... on OrderCreated { __typename } } }",
        setQuery,
        availableEvents: [{ name: "OrderCreated" }, { name: "OrderUpdated" }] as any,
      });

      handler({
        target: { name: "asyncEvents", value: "ORDER_UPDATED" },
      } as any);

      // handleQuery should parse and modify existing query
      expect(setQuery).toHaveBeenCalled();
    });

    it("handles invalid query gracefully", () => {
      const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});
      const change = jest.fn();
      const setQuery = jest.fn();
      const handler = createAsyncEventsSelectHandler({
        change,
        data: {
          syncEvents: [],
          asyncEvents: [],
        } as any,
        query: "invalid graphql query {{{",
        setQuery,
        availableEvents: [{ name: "OrderCreated" }] as any,
      });

      handler({
        target: { name: "asyncEvents", value: "ORDER_CREATED" },
      } as any);

      // Should catch the parse error
      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });

    it("clears query when all events are removed", () => {
      const change = jest.fn();
      const setQuery = jest.fn();
      const handler = createAsyncEventsSelectHandler({
        change,
        data: {
          syncEvents: [],
          asyncEvents: ["ORDER_CREATED"],
        } as any,
        query: "subscription { event { ... on OrderCreated { __typename } } }",
        setQuery,
        availableEvents: [{ name: "OrderCreated" }] as any,
      });

      handler({
        target: { name: "asyncEvents", value: "ORDER_CREATED" },
      } as any);

      // After removing the last event, query should be cleared
      expect(setQuery).toHaveBeenCalled();
    });
  });
});
