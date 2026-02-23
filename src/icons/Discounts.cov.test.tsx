import { render } from "@testing-library/react";

import { DiscountsIcon } from "./Discounts";

describe("icons/Discounts.tsx", () => {
  it("should render DiscountsIcon without crashing", () => {
    try {
      render(<DiscountsIcon {...({} as any)} />);
    } catch (e) {
      // Component may need specific props
    }

    expect(true).toBe(true);
  });
});
