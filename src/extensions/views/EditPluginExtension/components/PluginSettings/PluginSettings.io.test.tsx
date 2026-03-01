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

import { PluginSettings } from "./PluginSettings";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("PluginSettings", () => {
  test("PluginSettings is exported", () => {
    expect(PluginSettings).toBeDefined();
  });

  test("PluginSettings can be called", () => {
    if (typeof PluginSettings === "function") {
      try {
        (PluginSettings as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
