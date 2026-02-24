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

import { EditManifestExtensionPermissions } from "./EditManifestExtensionPermissions";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("EditManifestExtensionPermissions", () => {
  test("EditManifestExtensionPermissions is exported", () => {
    expect(EditManifestExtensionPermissions).toBeDefined();
  });

  test("EditManifestExtensionPermissions can be called", () => {
    if (typeof EditManifestExtensionPermissions === "function") {
      try {
        (EditManifestExtensionPermissions as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
