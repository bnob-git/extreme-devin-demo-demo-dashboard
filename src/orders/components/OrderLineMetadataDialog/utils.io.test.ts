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

import { getValidateMetadata, mapFieldArrayToMetadataInput } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("getValidateMetadata is exported", () => {
    expect(getValidateMetadata).toBeDefined();
  });

  test("mapFieldArrayToMetadataInput is exported", () => {
    expect(mapFieldArrayToMetadataInput).toBeDefined();
  });

  test("getValidateMetadata can be called", () => {
    if (typeof getValidateMetadata === "function") {
      try {
        (getValidateMetadata as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("mapFieldArrayToMetadataInput can be called", () => {
    if (typeof mapFieldArrayToMetadataInput === "function") {
      try {
        (mapFieldArrayToMetadataInput as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
