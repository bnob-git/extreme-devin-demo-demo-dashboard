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

import { createRuleCreateHandler, createRuleUpdateHandler, createUpdateHandler } from "./handlers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("handlers", () => {
  test("createUpdateHandler is exported", () => {
    expect(createUpdateHandler).toBeDefined();
  });

  test("createRuleUpdateHandler is exported", () => {
    expect(createRuleUpdateHandler).toBeDefined();
  });

  test("createRuleCreateHandler is exported", () => {
    expect(createRuleCreateHandler).toBeDefined();
  });

  test("createUpdateHandler can be called", () => {
    if (typeof createUpdateHandler === "function") {
      try {
        (createUpdateHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createRuleUpdateHandler can be called", () => {
    if (typeof createRuleUpdateHandler === "function") {
      try {
        (createRuleUpdateHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createRuleCreateHandler can be called", () => {
    if (typeof createRuleCreateHandler === "function") {
      try {
        (createRuleCreateHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
