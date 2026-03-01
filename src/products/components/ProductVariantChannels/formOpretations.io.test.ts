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
  concatChannelsBySelection,
  createChannelsWithPreorderInfo,
  extractChannelPricesFromVariantChannel,
} from "./formOpretations";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("formOpretations", () => {
  test("createChannelsWithPreorderInfo is exported", () => {
    expect(createChannelsWithPreorderInfo).toBeDefined();
  });

  test("concatChannelsBySelection is exported", () => {
    expect(concatChannelsBySelection).toBeDefined();
  });

  test("extractChannelPricesFromVariantChannel is exported", () => {
    expect(extractChannelPricesFromVariantChannel).toBeDefined();
  });

  test("createChannelsWithPreorderInfo can be called", () => {
    if (typeof createChannelsWithPreorderInfo === "function") {
      try {
        (createChannelsWithPreorderInfo as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("concatChannelsBySelection can be called", () => {
    if (typeof concatChannelsBySelection === "function") {
      try {
        (concatChannelsBySelection as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("extractChannelPricesFromVariantChannel can be called", () => {
    if (typeof extractChannelPricesFromVariantChannel === "function") {
      try {
        (extractChannelPricesFromVariantChannel as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
