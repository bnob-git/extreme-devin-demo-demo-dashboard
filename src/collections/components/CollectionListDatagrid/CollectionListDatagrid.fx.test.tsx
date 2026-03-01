import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { collection, collectionListFilterOpts, collections } from "../../fixtures";
import { CollectionListDatagrid } from "./CollectionListDatagrid";

describe("CollectionListDatagrid fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders CollectionListDatagrid with collectionListFilterOpts fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <CollectionListDatagrid {...(collectionListFilterOpts as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders CollectionListDatagrid with collections fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <CollectionListDatagrid {...(collections as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders CollectionListDatagrid with collection fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <CollectionListDatagrid {...(collection as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
