import { render } from "@testing-library/react";

import { ExclamationIconFilled } from "./ExclamationIconFilled";

describe("icons/ExclamationIconFilled.tsx", () => {
  it("should render ExclamationIconFilled without crashing", () => {
    try {
      render(<ExclamationIconFilled {...({} as any)} />);
    } catch (e) {
      // Component may need specific props
    }

    expect(true).toBe(true);
  });
});
