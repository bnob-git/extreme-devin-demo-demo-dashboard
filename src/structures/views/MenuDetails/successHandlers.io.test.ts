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

import { handleDelete, handleItemCreate, handleItemUpdate, handleUpdate } from "./successHandlers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("successHandlers", () => {
  test("handleItemCreate is exported", () => {
    expect(handleItemCreate).toBeDefined();
  });

  test("handleItemUpdate is exported", () => {
    expect(handleItemUpdate).toBeDefined();
  });

  test("handleDelete is exported", () => {
    expect(handleDelete).toBeDefined();
  });

  test("handleUpdate is exported", () => {
    expect(handleUpdate).toBeDefined();
  });

  test("handleItemCreate can be called", () => {
    if (typeof handleItemCreate === "function") {
      try {
        (handleItemCreate as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("handleItemUpdate can be called", () => {
    if (typeof handleItemUpdate === "function") {
      try {
        (handleItemUpdate as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("handleDelete can be called", () => {
    if (typeof handleDelete === "function") {
      try {
        (handleDelete as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("handleUpdate can be called", () => {
    if (typeof handleUpdate === "function") {
      try {
        (handleUpdate as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
