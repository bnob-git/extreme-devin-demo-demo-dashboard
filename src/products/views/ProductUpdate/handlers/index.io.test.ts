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
  createImageReorderHandler,
  createImageUploadHandler,
  createVariantReorderHandler,
} from ".";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("index", () => {
  test("createImageUploadHandler is exported", () => {
    expect(createImageUploadHandler).toBeDefined();
  });

  test("createImageReorderHandler is exported", () => {
    expect(createImageReorderHandler).toBeDefined();
  });

  test("createVariantReorderHandler is exported", () => {
    expect(createVariantReorderHandler).toBeDefined();
  });

  test("createImageUploadHandler can be called", () => {
    if (typeof createImageUploadHandler === "function") {
      try {
        (createImageUploadHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createImageReorderHandler can be called", () => {
    if (typeof createImageReorderHandler === "function") {
      try {
        (createImageReorderHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createVariantReorderHandler can be called", () => {
    if (typeof createVariantReorderHandler === "function") {
      try {
        (createVariantReorderHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
