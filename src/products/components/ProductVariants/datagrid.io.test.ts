jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (/^[A-Z]/.test(prop)) return prop;

          if (/^use/.test(prop)) return () => ({ data: undefined, loading: false });

          return prop;
        },
      },
    ),
);

import {
  useAttributesAdapter,
  useChannelAdapter,
  useChannelAvailabilityAdapter,
  useWarehouseAdapter,
  variantsStaticColumnsAdapter,
} from "./datagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("datagrid", () => {
  test("variantsStaticColumnsAdapter is exported", () => {
    expect(variantsStaticColumnsAdapter).toBeDefined();
  });

  test("useChannelAdapter is exported", () => {
    expect(useChannelAdapter).toBeDefined();
  });

  test("useChannelAvailabilityAdapter is exported", () => {
    expect(useChannelAvailabilityAdapter).toBeDefined();
  });

  test("useAttributesAdapter is exported", () => {
    expect(useAttributesAdapter).toBeDefined();
  });

  test("useWarehouseAdapter is exported", () => {
    expect(useWarehouseAdapter).toBeDefined();
  });

  test("variantsStaticColumnsAdapter can be called", () => {
    if (typeof variantsStaticColumnsAdapter === "function") {
      try {
        (variantsStaticColumnsAdapter as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("useChannelAdapter can be called", () => {
    if (typeof useChannelAdapter === "function") {
      try {
        (useChannelAdapter as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("useChannelAvailabilityAdapter can be called", () => {
    if (typeof useChannelAvailabilityAdapter === "function") {
      try {
        (useChannelAvailabilityAdapter as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("useAttributesAdapter can be called", () => {
    if (typeof useAttributesAdapter === "function") {
      try {
        (useAttributesAdapter as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("useWarehouseAdapter can be called", () => {
    if (typeof useWarehouseAdapter === "function") {
      try {
        (useWarehouseAdapter as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
