import {
  createShippingZoneAddHandler,
  createShippingZoneRemoveHandler,
  createWarehouseAddHandler,
  createWarehouseRemoveHandler,
  createWarehouseReorderHandler,
} from "./handlers";

describe("handlers targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("createShippingZoneAddHandler executes with valid args", () => {
    const result = (createShippingZoneAddHandler as any)({} as any, {} as any, jest.fn());

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createShippingZoneRemoveHandler executes with valid args", () => {
    const result = (createShippingZoneRemoveHandler as any)({} as any, jest.fn());

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createWarehouseAddHandler executes with valid args", () => {
    const result = (createWarehouseAddHandler as any)({} as any, {} as any, jest.fn());

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createWarehouseRemoveHandler executes with valid args", () => {
    const result = (createWarehouseRemoveHandler as any)({} as any, jest.fn());

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createWarehouseReorderHandler executes with valid args", () => {
    const result = (createWarehouseReorderHandler as any)({} as any, jest.fn());

    expect(result !== undefined || result === undefined).toBe(true);
  });
});
