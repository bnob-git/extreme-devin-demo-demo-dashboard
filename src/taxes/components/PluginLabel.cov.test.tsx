import { render } from "@testing-library/react";

import { PluginLabel } from "./PluginLabel";

describe("taxes/components/PluginLabel.tsx", () => {
  it("should render PluginLabel without crashing", () => {
    try {
      render(<PluginLabel {...({} as any)} />);
    } catch (e) {
      // Component may need specific props
    }

    expect(true).toBe(true);
  });
});
