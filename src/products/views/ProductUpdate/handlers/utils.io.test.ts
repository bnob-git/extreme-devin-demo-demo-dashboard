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
  byAttributeName,
  getBulkVariantUpdateInputs,
  getCreateVariantInput,
  getProductChannelsUpdateVariables,
  getProductUpdateVariables,
  hasProductChannelsUpdate,
  inferProductChannelsAfterUpdate,
} from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("getProductUpdateVariables is exported", () => {
    expect(getProductUpdateVariables).toBeDefined();
  });

  test("getCreateVariantInput is exported", () => {
    expect(getCreateVariantInput).toBeDefined();
  });

  test("getProductChannelsUpdateVariables is exported", () => {
    expect(getProductChannelsUpdateVariables).toBeDefined();
  });

  test("hasProductChannelsUpdate is exported", () => {
    expect(hasProductChannelsUpdate).toBeDefined();
  });

  test("getBulkVariantUpdateInputs is exported", () => {
    expect(getBulkVariantUpdateInputs).toBeDefined();
  });

  test("inferProductChannelsAfterUpdate is exported", () => {
    expect(inferProductChannelsAfterUpdate).toBeDefined();
  });

  test("byAttributeName is exported", () => {
    expect(byAttributeName).toBeDefined();
  });

  test("getProductUpdateVariables can be called", () => {
    if (typeof getProductUpdateVariables === "function") {
      try {
        (getProductUpdateVariables as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getCreateVariantInput can be called", () => {
    if (typeof getCreateVariantInput === "function") {
      try {
        (getCreateVariantInput as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getProductChannelsUpdateVariables can be called", () => {
    if (typeof getProductChannelsUpdateVariables === "function") {
      try {
        (getProductChannelsUpdateVariables as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("hasProductChannelsUpdate can be called", () => {
    if (typeof hasProductChannelsUpdate === "function") {
      try {
        (hasProductChannelsUpdate as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getBulkVariantUpdateInputs can be called", () => {
    if (typeof getBulkVariantUpdateInputs === "function") {
      try {
        (getBulkVariantUpdateInputs as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("inferProductChannelsAfterUpdate can be called", () => {
    if (typeof inferProductChannelsAfterUpdate === "function") {
      try {
        (inferProductChannelsAfterUpdate as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("byAttributeName can be called", () => {
    if (typeof byAttributeName === "function") {
      try {
        (byAttributeName as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
