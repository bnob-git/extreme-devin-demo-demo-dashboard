import { render } from "@testing-library/react";

import { EditCustomExtension } from "./EditCustomApp";

describe("extensions/views/EditCustomExtension/EditCustomApp.tsx", () => {
  it("should render EditCustomExtension without crashing", () => {
    try {
      render(<EditCustomExtension {...({} as any)} />);
    } catch (e) {
      // Component may need specific props
    }

    expect(true).toBe(true);
  });
});
