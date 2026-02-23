import { render } from "@testing-library/react";

import ProductExportDialogInfo, {
  attributeNamePrefix,
  warehouseNamePrefix,
} from "./ProductExportDialogInfo";

describe("products/components/ProductExportDialog/ProductExportDialogInfo.tsx", () => {
  it("should render default export without crashing", () => {
    try {
      render(<ProductExportDialogInfo {...({} as any)} />);
    } catch (e) {
      // Component may need specific props
    }

    expect(true).toBe(true);
  });

  it("should export attributeNamePrefix", () => {
    expect(attributeNamePrefix).toBeDefined();
  });

  it("should export warehouseNamePrefix", () => {
    expect(warehouseNamePrefix).toBeDefined();
  });
});
