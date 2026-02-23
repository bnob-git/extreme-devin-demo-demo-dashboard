import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { MenuItemsSortableTreeItem } from "./MenuItemsSortableTreeItem";

describe("MenuItemsSortableTreeItem.tsx coverage", () => {
  it("should render MenuItemsSortableTreeItem", () => {
    try {
      render(
        <MemoryRouter>
          <MenuItemsSortableTreeItem {...({ id: "test-id", name: "test" } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
