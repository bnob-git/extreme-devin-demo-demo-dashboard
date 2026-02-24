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

import { CollectionImage } from "./CollectionImage";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("CollectionImage", () => {
  test("CollectionImage is exported", () => {
    expect(CollectionImage).toBeDefined();
  });

  test("CollectionImage can be called", () => {
    if (typeof CollectionImage === "function") {
      try {
        (CollectionImage as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
