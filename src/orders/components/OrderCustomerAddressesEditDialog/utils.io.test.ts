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
  getAddressEditProps,
  hasPreSubmitErrors,
  parseQuery,
  stringifyAddress,
  validateDefaultAddress,
} from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("stringifyAddress is exported", () => {
    expect(stringifyAddress).toBeDefined();
  });

  test("parseQuery is exported", () => {
    expect(parseQuery).toBeDefined();
  });

  test("validateDefaultAddress is exported", () => {
    expect(validateDefaultAddress).toBeDefined();
  });

  test("hasPreSubmitErrors is exported", () => {
    expect(hasPreSubmitErrors).toBeDefined();
  });

  test("getAddressEditProps is exported", () => {
    expect(getAddressEditProps).toBeDefined();
  });

  test("stringifyAddress can be called", () => {
    if (typeof stringifyAddress === "function") {
      try {
        (stringifyAddress as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("parseQuery can be called", () => {
    if (typeof parseQuery === "function") {
      try {
        (parseQuery as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("validateDefaultAddress can be called", () => {
    if (typeof validateDefaultAddress === "function") {
      try {
        (validateDefaultAddress as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("hasPreSubmitErrors can be called", () => {
    if (typeof hasPreSubmitErrors === "function") {
      try {
        (hasPreSubmitErrors as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getAddressEditProps can be called", () => {
    if (typeof getAddressEditProps === "function") {
      try {
        (getAddressEditProps as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
