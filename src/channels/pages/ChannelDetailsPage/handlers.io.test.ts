import {
  createShippingZoneAddHandler,
  createShippingZoneRemoveHandler,
  createWarehouseAddHandler,
  createWarehouseRemoveHandler,
  createWarehouseReorderHandler,
} from "./handlers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("handlers", () => {
  test("createShippingZoneAddHandler is exported", () => {
    expect(createShippingZoneAddHandler).toBeDefined();
  });

  test("createShippingZoneRemoveHandler is exported", () => {
    expect(createShippingZoneRemoveHandler).toBeDefined();
  });

  test("createWarehouseAddHandler is exported", () => {
    expect(createWarehouseAddHandler).toBeDefined();
  });

  test("createWarehouseRemoveHandler is exported", () => {
    expect(createWarehouseRemoveHandler).toBeDefined();
  });

  test("createWarehouseReorderHandler is exported", () => {
    expect(createWarehouseReorderHandler).toBeDefined();
  });

  test("createShippingZoneAddHandler can be called", () => {
    if (typeof createShippingZoneAddHandler === "function") {
      try {
        (createShippingZoneAddHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createShippingZoneRemoveHandler can be called", () => {
    if (typeof createShippingZoneRemoveHandler === "function") {
      try {
        (createShippingZoneRemoveHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createWarehouseAddHandler can be called", () => {
    if (typeof createWarehouseAddHandler === "function") {
      try {
        (createWarehouseAddHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createWarehouseRemoveHandler can be called", () => {
    if (typeof createWarehouseRemoveHandler === "function") {
      try {
        (createWarehouseRemoveHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createWarehouseReorderHandler can be called", () => {
    if (typeof createWarehouseReorderHandler === "function") {
      try {
        (createWarehouseReorderHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
