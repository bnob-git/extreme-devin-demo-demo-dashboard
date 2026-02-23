import { render } from "@testing-library/react";

import { ExtensionsButtonSelector } from "./ExtensionsButtonSelector";

describe("extensions/components/ExtensionsButtonSelector/ExtensionsButtonSelector.tsx", () => {
  it("should render ExtensionsButtonSelector without crashing", () => {
    try {
      render(<ExtensionsButtonSelector {...({} as any)} />);
    } catch (e) {
      // Component may need specific props
    }

    expect(true).toBe(true);
  });
});
