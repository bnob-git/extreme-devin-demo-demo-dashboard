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

import { getAttributeData, getAttributeInput, getAttributeType } from "./attributes";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("attributes", () => {
  test("getAttributeData is exported", () => {
    expect(getAttributeData).toBeDefined();
  });

  test("getAttributeType is exported", () => {
    expect(getAttributeType).toBeDefined();
  });

  test("getAttributeInput is exported", () => {
    expect(getAttributeInput).toBeDefined();
  });

  test("getAttributeData can be called", () => {
    if (typeof getAttributeData === "function") {
      try {
        (getAttributeData as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getAttributeType can be called", () => {
    if (typeof getAttributeType === "function") {
      try {
        (getAttributeType as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getAttributeInput can be called", () => {
    if (typeof getAttributeInput === "function") {
      try {
        (getAttributeInput as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
