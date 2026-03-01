// Auto-generated utility test

import {
  extensionsAppSection,
  extensionsCustomSection,
  ExtensionsPaths,
  extensionsPluginSection,
  extensionsSection,
  ExtensionsUrls,
  LegacyAppPaths,
  LegacyAppSections,
  MANIFEST_ATTR,
} from "./urls";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {
    /* expected */
  });
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("LegacyAppSections", () => {
  test("is defined", () => {
    expect(LegacyAppSections).toBeDefined();
  });
});

describe("LegacyAppPaths", () => {
  test("is defined", () => {
    expect(LegacyAppPaths).toBeDefined();
  });
});

describe("extensionsSection", () => {
  test("is defined", () => {
    expect(extensionsSection).toBeDefined();
  });
});

describe("extensionsCustomSection", () => {
  test("is defined", () => {
    expect(extensionsCustomSection).toBeDefined();
  });
});

describe("extensionsAppSection", () => {
  test("is defined", () => {
    expect(extensionsAppSection).toBeDefined();
  });
});

describe("extensionsPluginSection", () => {
  test("is defined", () => {
    expect(extensionsPluginSection).toBeDefined();
  });
});

describe("ExtensionsPaths", () => {
  test("is defined", () => {
    expect(ExtensionsPaths).toBeDefined();
  });
});

describe("MANIFEST_ATTR", () => {
  test("is defined", () => {
    expect(MANIFEST_ATTR).toBeDefined();
  });
});

describe("ExtensionsUrls", () => {
  test("is defined", () => {
    expect(ExtensionsUrls).toBeDefined();
  });
});
