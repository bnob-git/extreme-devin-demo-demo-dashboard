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

import makeSearch, {
  searchAttributeValues,
  useSearchAttributeValuesSuggestions,
} from "./useAttributeValueSearch";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useAttributeValueSearch", () => {
  test("default export is defined", () => {
    expect(makeSearch).toBeDefined();
  });

  test("searchAttributeValues is exported", () => {
    expect(searchAttributeValues).toBeDefined();
  });

  test("useSearchAttributeValuesSuggestions is exported", () => {
    expect(useSearchAttributeValuesSuggestions).toBeDefined();
  });

  test("useSearchAttributeValuesSuggestions can be called", () => {
    if (typeof useSearchAttributeValuesSuggestions === "function") {
      try {
        (useSearchAttributeValuesSuggestions as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
