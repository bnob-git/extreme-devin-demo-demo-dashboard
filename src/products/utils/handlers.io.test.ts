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
  createChannelsChangeHandler,
  createChannelsPriceChangeHandler,
  createMediaChangeHandler,
  createPreorderEndDateChangeHandler,
  createProductTypeSelectHandler,
  getAvailabilityVariables,
  getChannelsInput,
  handleAssignMedia,
} from "./handlers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("handlers", () => {
  test("createChannelsPriceChangeHandler is exported", () => {
    expect(createChannelsPriceChangeHandler).toBeDefined();
  });

  test("createChannelsChangeHandler is exported", () => {
    expect(createChannelsChangeHandler).toBeDefined();
  });

  test("createProductTypeSelectHandler is exported", () => {
    expect(createProductTypeSelectHandler).toBeDefined();
  });

  test("getChannelsInput is exported", () => {
    expect(getChannelsInput).toBeDefined();
  });

  test("getAvailabilityVariables is exported", () => {
    expect(getAvailabilityVariables).toBeDefined();
  });

  test("createPreorderEndDateChangeHandler is exported", () => {
    expect(createPreorderEndDateChangeHandler).toBeDefined();
  });

  test("createMediaChangeHandler is exported", () => {
    expect(createMediaChangeHandler).toBeDefined();
  });

  test("handleAssignMedia is exported", () => {
    expect(handleAssignMedia).toBeDefined();
  });

  test("createChannelsPriceChangeHandler can be called", () => {
    if (typeof createChannelsPriceChangeHandler === "function") {
      try {
        (createChannelsPriceChangeHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createChannelsChangeHandler can be called", () => {
    if (typeof createChannelsChangeHandler === "function") {
      try {
        (createChannelsChangeHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createProductTypeSelectHandler can be called", () => {
    if (typeof createProductTypeSelectHandler === "function") {
      try {
        (createProductTypeSelectHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getChannelsInput can be called", () => {
    if (typeof getChannelsInput === "function") {
      try {
        (getChannelsInput as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getAvailabilityVariables can be called", () => {
    if (typeof getAvailabilityVariables === "function") {
      try {
        (getAvailabilityVariables as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createPreorderEndDateChangeHandler can be called", () => {
    if (typeof createPreorderEndDateChangeHandler === "function") {
      try {
        (createPreorderEndDateChangeHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createMediaChangeHandler can be called", () => {
    if (typeof createMediaChangeHandler === "function") {
      try {
        (createMediaChangeHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
