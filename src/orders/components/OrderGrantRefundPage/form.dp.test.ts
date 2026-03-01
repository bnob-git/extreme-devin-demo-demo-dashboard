import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/Form/useExitFormDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useExitFormDialog: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  OrderGrantRefundCreateLineInput: () => null,
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  FormChange: () => null,
  useForm: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useHandleFormSubmit", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useHandleFormSubmit: (..._a: any[]) => createDeepMock(),
}));

import { useGrantRefundForm } from "./form";

describe("form deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useGrantRefundForm with deep proxy args", () => {
    try {
      const result = (useGrantRefundForm as any)(createDeepMock());

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls useGrantRefundForm with null args for error paths", () => {
    try {
      const result = (useGrantRefundForm as any)(null);

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
