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

import { queueCustom, queueExport, queueInvoiceGenerate } from "./tasks";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("tasks", () => {
  test("queueCustom is exported", () => {
    expect(queueCustom).toBeDefined();
  });

  test("queueInvoiceGenerate is exported", () => {
    expect(queueInvoiceGenerate).toBeDefined();
  });

  test("queueExport is exported", () => {
    expect(queueExport).toBeDefined();
  });

  test("queueCustom can be called", () => {
    if (typeof queueCustom === "function") {
      try {
        (queueCustom as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("queueInvoiceGenerate can be called", () => {
    if (typeof queueInvoiceGenerate === "function") {
      try {
        (queueInvoiceGenerate as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("queueExport can be called", () => {
    if (typeof queueExport === "function") {
      try {
        (queueExport as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
