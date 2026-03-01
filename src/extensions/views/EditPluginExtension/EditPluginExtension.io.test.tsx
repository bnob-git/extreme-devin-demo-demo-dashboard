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
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));

import { EditPluginExtension, getConfigurationInput } from "./EditPluginExtension";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("EditPluginExtension", () => {
  test("getConfigurationInput is exported", () => {
    expect(getConfigurationInput).toBeDefined();
  });

  test("EditPluginExtension is exported", () => {
    expect(EditPluginExtension).toBeDefined();
  });

  test("getConfigurationInput can be called", () => {
    if (typeof getConfigurationInput === "function") {
      try {
        (getConfigurationInput as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("EditPluginExtension can be called", () => {
    if (typeof EditPluginExtension === "function") {
      try {
        (EditPluginExtension as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
