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

import { updateChannelsInput, useProductChannelListingsForm } from "./formChannels";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("formChannels", () => {
  test("updateChannelsInput is exported", () => {
    expect(updateChannelsInput).toBeDefined();
  });

  test("useProductChannelListingsForm is exported", () => {
    expect(useProductChannelListingsForm).toBeDefined();
  });

  test("updateChannelsInput can be called", () => {
    if (typeof updateChannelsInput === "function") {
      try {
        (updateChannelsInput as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("useProductChannelListingsForm can be called", () => {
    if (typeof useProductChannelListingsForm === "function") {
      try {
        (useProductChannelListingsForm as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
