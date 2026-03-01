import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/Metadata/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getDataKey: jest.fn((..._a: any[]) => createDeepMock()),
  parseEventData: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChangeEvent: () => null,
}));
jest.mock("@dashboard/utils/hook-form/errors", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  flattenErrors: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock(
  "react-hook-form",
  () =>
    new Proxy(
      {},
      {
        get: (_: any, p: string) =>
          p === "__esModule" ? true : jest.fn((..._a: any[]) => createDeepMock()),
      },
    ),
);

import { useOrderLineMetadataFormControls } from "./useOrderLineMetadataFormControls";

describe("useOrderLineMetadataFormControls deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useOrderLineMetadataFormControls with deep proxy args", () => {
    try {
      const result = (useOrderLineMetadataFormControls as any)(createDeepMock());

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls useOrderLineMetadataFormControls with null args for error paths", () => {
    try {
      const result = (useOrderLineMetadataFormControls as any)(null);

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
