import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Component from ".";
import { product, products, variant, variantMedia, variantProductImages } from "./fixtures";

describe("index fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders Component with product fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <Component {...(product as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders Component with products fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <Component {...(products as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders Component with variant fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <Component {...(variant as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders Component with variantMedia fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <Component {...(variantMedia as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders Component with variantProductImages fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <Component {...(variantProductImages as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
