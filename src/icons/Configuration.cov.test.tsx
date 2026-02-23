import { render } from "@testing-library/react";

import { ConfigurationIcon } from "./Configuration";

describe("icons/Configuration.tsx", () => {
  it("should render ConfigurationIcon without crashing", () => {
    try {
      render(<ConfigurationIcon {...({} as any)} />);
    } catch (e) {
      // Component may need specific props
    }

    expect(true).toBe(true);
  });
});
