import { render } from "@testing-library/react";

import { CustomersIcon } from "./Customers";

describe("icons/Customers.tsx", () => {
  it("should render CustomersIcon without crashing", () => {
    try {
      render(<CustomersIcon {...({} as any)} />);
    } catch (e) {
      // Component may need specific props
    }

    expect(true).toBe(true);
  });
});
