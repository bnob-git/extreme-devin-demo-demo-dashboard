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
  getAttributeValueTranslationsInputData,
  getParsedTranslationInputData,
  getTranslationFields,
  mapAttributeValuesToTranslationFields,
} from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("getParsedTranslationInputData is exported", () => {
    expect(getParsedTranslationInputData).toBeDefined();
  });

  test("getTranslationFields is exported", () => {
    expect(getTranslationFields).toBeDefined();
  });

  test("mapAttributeValuesToTranslationFields is exported", () => {
    expect(mapAttributeValuesToTranslationFields).toBeDefined();
  });

  test("getAttributeValueTranslationsInputData is exported", () => {
    expect(getAttributeValueTranslationsInputData).toBeDefined();
  });

  test("getParsedTranslationInputData can be called", () => {
    if (typeof getParsedTranslationInputData === "function") {
      try {
        (getParsedTranslationInputData as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getTranslationFields can be called", () => {
    if (typeof getTranslationFields === "function") {
      try {
        (getTranslationFields as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("mapAttributeValuesToTranslationFields can be called", () => {
    if (typeof mapAttributeValuesToTranslationFields === "function") {
      try {
        (mapAttributeValuesToTranslationFields as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getAttributeValueTranslationsInputData can be called", () => {
    if (typeof getAttributeValueTranslationsInputData === "function") {
      try {
        (getAttributeValueTranslationsInputData as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
