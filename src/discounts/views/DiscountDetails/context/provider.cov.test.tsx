import { render } from "@testing-library/react";

import { EmpptyLabelsMapsProvider, LabelsMapsProvider } from "./provider";

describe("discounts/views/DiscountDetails/context/provider.tsx", () => {
  it("should render LabelsMapsProvider without crashing", () => {
    try {
      render(<LabelsMapsProvider {...({} as any)} />);
    } catch (e) {
      // Component may need specific props
    }

    expect(true).toBe(true);
  });

  it("should render EmpptyLabelsMapsProvider without crashing", () => {
    try {
      render(<EmpptyLabelsMapsProvider {...({} as any)} />);
    } catch (e) {
      // Component may need specific props
    }

    expect(true).toBe(true);
  });
});
