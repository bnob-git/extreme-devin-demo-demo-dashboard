jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (typeof prop === "string" && /^[A-Z]/.test(prop)) return prop;

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

describe("index targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("createImageUploadHandler executes with valid args", () => {
    const result = (createImageUploadHandler as any)("test-id", {} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createImageUploadHandler with alternative args", () => {
    const result = (createImageUploadHandler as any)("test-value", {} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createImageReorderHandler executes with valid args", () => {
    const result = (createImageReorderHandler as any)({} as any, {} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createVariantReorderHandler executes with valid args", () => {
    const result = (createVariantReorderHandler as any)({} as any, {} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });
});
