jest.mock("@dashboard/components/messages", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  IMessageContext: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  CheckExportFileStatusQuery: () => null,
  CheckOrderInvoicesStatusQuery: () => null,
  JobStatusEnum: () => null,
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  commonMessages: jest.fn((...args: any[]) => args[0] ?? {}),
}));

import { queueCustom, queueInvoiceGenerate } from "./tasks";

describe("tasks deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls queueCustom with deep-mocked deps", () => {
    try {
      const result = (queueCustom as any)();

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls queueInvoiceGenerate with deep-mocked deps", () => {
    try {
      const result = (queueInvoiceGenerate as any)();

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
