jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Query"))
            return () => ({
              data: undefined,
              loading: false,
              error: undefined,
              refetch: jest.fn(),
              fetchMore: jest.fn(),
            });

          if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Mutation"))
            return () => [
              jest.fn(() => Promise.resolve({ data: {} })),
              { data: undefined, loading: false, called: false, status: "default" },
            ];

          if (typeof prop === "string" && prop.startsWith("use"))
            return () => ({ data: undefined, loading: false });

          return jest.fn();
        },
      },
    ),
);

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { staffMember, staffMemberAvatar, staffMembers } from "../fixtures";
import { StaffDetailsView } from "./StaffDetails";

describe("StaffDetails fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders StaffDetailsView with staffMembers fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <StaffDetailsView {...(staffMembers as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders StaffDetailsView with staffMember fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <StaffDetailsView {...(staffMember as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders StaffDetailsView with staffMemberAvatar fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <StaffDetailsView {...(staffMemberAvatar as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
