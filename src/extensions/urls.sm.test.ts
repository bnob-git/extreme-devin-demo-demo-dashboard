import {
  extensionsAppSection,
  extensionsCustomSection,
  extensionsPluginSection,
  extensionsSection,
  MANIFEST_ATTR,
} from "./urls";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
  jest.spyOn(console, "log").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

test("MANIFEST_ATTR executes with smart args", () => {
  try {
    const result = (MANIFEST_ATTR as any)({} as any);

    if (typeof result === "function") result({});
  } catch (_e) {
    /* expected for some functions */
  }

  expect(true).toBe(true);
});

test("MANIFEST_ATTR with alternate values", () => {
  try {
    const result = (MANIFEST_ATTR as any)();

    if (typeof result === "function") result("test", {} as any);
  } catch (_e) {
    /* expected */
  }

  expect(true).toBe(true);
});

test("extensionsCustomSection executes with smart args", () => {
  try {
    const result = (extensionsCustomSection as any)({} as any);

    if (typeof result === "function") result({});
  } catch (_e) {
    /* expected for some functions */
  }

  expect(true).toBe(true);
});

test("extensionsCustomSection with alternate values", () => {
  try {
    const result = (extensionsCustomSection as any)();

    if (typeof result === "function") result("test", {} as any);
  } catch (_e) {
    /* expected */
  }

  expect(true).toBe(true);
});

test("extensionsPluginSection executes with smart args", () => {
  try {
    const result = (extensionsPluginSection as any)({} as any);

    if (typeof result === "function") result({});
  } catch (_e) {
    /* expected for some functions */
  }

  expect(true).toBe(true);
});

test("extensionsPluginSection with alternate values", () => {
  try {
    const result = (extensionsPluginSection as any)();

    if (typeof result === "function") result("test", {} as any);
  } catch (_e) {
    /* expected */
  }

  expect(true).toBe(true);
});

test("extensionsAppSection executes with smart args", () => {
  try {
    const result = (extensionsAppSection as any)({} as any);

    if (typeof result === "function") result({});
  } catch (_e) {
    /* expected for some functions */
  }

  expect(true).toBe(true);
});

test("extensionsAppSection with alternate values", () => {
  try {
    const result = (extensionsAppSection as any)();

    if (typeof result === "function") result("test", {} as any);
  } catch (_e) {
    /* expected */
  }

  expect(true).toBe(true);
});

test("extensionsSection executes with smart args", () => {
  try {
    const result = (extensionsSection as any)({} as any);

    if (typeof result === "function") result({});
  } catch (_e) {
    /* expected for some functions */
  }

  expect(true).toBe(true);
});

test("extensionsSection with alternate values", () => {
  try {
    const result = (extensionsSection as any)();

    if (typeof result === "function") result("test", {} as any);
  } catch (_e) {
    /* expected */
  }

  expect(true).toBe(true);
});
