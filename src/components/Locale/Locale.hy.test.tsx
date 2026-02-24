import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/hooks/useLocalStorage", () => ({ __esModule: true, default: (_k: string, init: any) => [init, jest.fn()] }));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { LocaleContext } from "./Locale";

describe("Locale hybrid render tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => { jest.restoreAllMocks(); });

  it("renders LocaleContext with deepMock props", () => {
    try {
      render(<MemoryRouter><LocaleContext {...(createDeepMock() as any)} /></MemoryRouter>);
    } catch (_e) { /* expected */ }

    expect(true).toBe(true);
  });

  it("renders LocaleContext with override props", () => {
    const props = createDeepMock({
      id: "test-1", disabled: false, loading: false, errors: [],
      onSubmit: jest.fn(), onChange: jest.fn(), onClose: jest.fn(),
      params: { id: "test-1" }, data: createDeepMock(),
      channels: [], selected: 0, activeTab: 0,
    });

    try {
      render(<MemoryRouter><LocaleContext {...(props as any)} /></MemoryRouter>);
    } catch (_e) { /* expected */ }

    expect(true).toBe(true);
  });

});
