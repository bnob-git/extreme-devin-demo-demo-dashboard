import { exportSettingsInitialFormData, exportSettingsInitialFormDataWithIds } from "./types";

describe("products/components/ProductExportDialog/types.ts", () => {
  it("should export exportSettingsInitialFormData", () => {
    expect(exportSettingsInitialFormData).toBeDefined();
  });

  it("should export exportSettingsInitialFormDataWithIds", () => {
    expect(exportSettingsInitialFormDataWithIds).toBeDefined();
  });
});
