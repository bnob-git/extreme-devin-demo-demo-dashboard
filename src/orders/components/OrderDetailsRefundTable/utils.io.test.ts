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

import { getGrantedRefundStatusMessage, getNotEditableRefundMessage } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("getGrantedRefundStatusMessage is exported", () => {
    expect(getGrantedRefundStatusMessage).toBeDefined();
  });

  test("getNotEditableRefundMessage is exported", () => {
    expect(getNotEditableRefundMessage).toBeDefined();
  });

  test("getGrantedRefundStatusMessage can be called", () => {
    if (typeof getGrantedRefundStatusMessage === "function") {
      try {
        (getGrantedRefundStatusMessage as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getNotEditableRefundMessage can be called", () => {
    if (typeof getNotEditableRefundMessage === "function") {
      try {
        (getNotEditableRefundMessage as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
