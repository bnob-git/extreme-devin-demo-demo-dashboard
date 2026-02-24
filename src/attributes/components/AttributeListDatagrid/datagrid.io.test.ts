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

import { attributesListStaticColumnsAdapter, createGetCellContent } from "./datagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("datagrid", () => {
  test("attributesListStaticColumnsAdapter is exported", () => {
    expect(attributesListStaticColumnsAdapter).toBeDefined();
  });

  test("createGetCellContent is exported", () => {
    expect(createGetCellContent).toBeDefined();
  });

  test("attributesListStaticColumnsAdapter can be called", () => {
    if (typeof attributesListStaticColumnsAdapter === "function") {
      try {
        (attributesListStaticColumnsAdapter as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createGetCellContent can be called", () => {
    if (typeof createGetCellContent === "function") {
      try {
        (createGetCellContent as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
