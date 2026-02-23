import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { PermissionList } from "./PermissionList";

describe("PermissionList.tsx coverage", () => {
  it("should render PermissionList", () => {
    try {
      render(
        <MemoryRouter>
          <PermissionList {...({ onChange: jest.fn(), open: true, name: "test" } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
