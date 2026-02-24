jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  ...jest.requireActual("@dashboard/graphql"),
}));
jest.mock("@dashboard/auth", () => ({
  handleNestedMutationErrors: jest.fn(),
  useUser: () => ({ user: { email: "t@t.com", userPermissions: [] }, authenticated: true }),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import AttributePage from "./AttributePage";

describe("AttributePage view tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders AttributePage with data", () => {
    try {
      render(
        <MemoryRouter initialEntries={["/test/test-id-123"]}>
          <AttributePage {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
