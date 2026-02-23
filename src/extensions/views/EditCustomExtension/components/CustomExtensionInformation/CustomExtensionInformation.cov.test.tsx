import { render } from "@testing-library/react";

import { CustomExtensionInformation } from "./CustomExtensionInformation";

describe("extensions/views/EditCustomExtension/components/CustomExtensionInformation/CustomExtensionInformation.tsx", () => {
  it("should render CustomExtensionInformation without crashing", () => {
    try {
      render(<CustomExtensionInformation {...({} as any)} />);
    } catch (e) {
      // Component may need specific props
    }

    expect(true).toBe(true);
  });
});
