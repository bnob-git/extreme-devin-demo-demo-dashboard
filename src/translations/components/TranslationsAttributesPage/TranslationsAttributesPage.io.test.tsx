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
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import TranslationsAttributesPage, { fieldNames } from "./TranslationsAttributesPage";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("TranslationsAttributesPage", () => {
  test("default export is defined", () => {
    expect(TranslationsAttributesPage).toBeDefined();
  });

  test("fieldNames is exported", () => {
    expect(fieldNames).toBeDefined();
  });
});
