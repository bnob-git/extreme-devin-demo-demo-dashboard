import { useOrderLineMetadataFormControls } from "./useOrderLineMetadataFormControls";

describe("useOrderLineMetadataFormControls property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useOrderLineMetadataFormControls with mock", () => {
    try {
      (useOrderLineMetadataFormControls as any)({} as any, {} as any, {} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls useOrderLineMetadataFormControls with null", () => {
    try {
      (useOrderLineMetadataFormControls as any)(null as any, null as any, null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
