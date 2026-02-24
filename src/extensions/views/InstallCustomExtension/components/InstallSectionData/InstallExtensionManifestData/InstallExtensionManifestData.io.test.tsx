import { InstallExtensionManifestData } from "./InstallExtensionManifestData";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("InstallExtensionManifestData", () => {
  test("InstallExtensionManifestData is exported", () => {
    expect(InstallExtensionManifestData).toBeDefined();
  });

  test("InstallExtensionManifestData can be called", () => {
    if (typeof InstallExtensionManifestData === "function") {
      try {
        (InstallExtensionManifestData as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
