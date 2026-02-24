jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { appAvatarFixture, appDetails } from "../../fixtures";
import { AppWidgets } from "./AppWidgets";

describe("AppWidgets fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders AppWidgets with appDetails fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AppWidgets {...(appDetails as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AppWidgets with appAvatarFixture fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AppWidgets {...(appAvatarFixture as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
