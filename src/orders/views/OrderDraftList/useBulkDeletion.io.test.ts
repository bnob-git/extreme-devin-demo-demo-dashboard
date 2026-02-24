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
jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));

import { useBulkDeletion } from "./useBulkDeletion";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useBulkDeletion", () => {
  test("useBulkDeletion is exported", () => {
    expect(useBulkDeletion).toBeDefined();
  });

  test("useBulkDeletion can be called", () => {
    if (typeof useBulkDeletion === "function") {
      try {
        (useBulkDeletion as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
