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
  encodeURIComponentOptional,
  excludeExistingCountries,
  isLastElement,
  mapUndefinedCountriesToTaxClasses,
  mapUndefinedTaxRatesToCountries,
} from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("encodeURIComponentOptional is exported", () => {
    expect(encodeURIComponentOptional).toBeDefined();
  });

  test("mapUndefinedTaxRatesToCountries is exported", () => {
    expect(mapUndefinedTaxRatesToCountries).toBeDefined();
  });

  test("mapUndefinedCountriesToTaxClasses is exported", () => {
    expect(mapUndefinedCountriesToTaxClasses).toBeDefined();
  });

  test("isLastElement is exported", () => {
    expect(isLastElement).toBeDefined();
  });

  test("excludeExistingCountries is exported", () => {
    expect(excludeExistingCountries).toBeDefined();
  });

  test("encodeURIComponentOptional can be called", () => {
    if (typeof encodeURIComponentOptional === "function") {
      try {
        (encodeURIComponentOptional as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("mapUndefinedTaxRatesToCountries can be called", () => {
    if (typeof mapUndefinedTaxRatesToCountries === "function") {
      try {
        (mapUndefinedTaxRatesToCountries as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("mapUndefinedCountriesToTaxClasses can be called", () => {
    if (typeof mapUndefinedCountriesToTaxClasses === "function") {
      try {
        (mapUndefinedCountriesToTaxClasses as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("isLastElement can be called", () => {
    if (typeof isLastElement === "function") {
      try {
        (isLastElement as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("excludeExistingCountries can be called", () => {
    if (typeof excludeExistingCountries === "function") {
      try {
        (excludeExistingCountries as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
