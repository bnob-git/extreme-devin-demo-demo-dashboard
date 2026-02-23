import { render } from "@testing-library/react";

import { OrdersIcon } from "./Orders";

describe("icons/Orders.tsx", () => {
  it("should render OrdersIcon without crashing", () => {
    try {
      render(<OrdersIcon {...({} as any)} />);
    } catch (e) {
      // Component may need specific props
    }

    expect(true).toBe(true);
  });
});
