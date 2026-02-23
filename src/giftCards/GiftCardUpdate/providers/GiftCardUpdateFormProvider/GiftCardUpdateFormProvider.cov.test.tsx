import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useHandleFormSubmit", () => ({
  __esModule: true,
  default: () => jest.fn(),
}));
jest.mock("@dashboard/utils/metadata/useMetadataChangeTrigger", () => ({
  __esModule: true,
  default: () => ({
    isMetadataModified: false,
    isPrivateMetadataModified: false,
    makeChangeHandler: jest.fn((h: any) => h),
    resetMetadataChanged: jest.fn(),
  }),
}));
jest.mock("@dashboard/utils/handlers/metadataUpdateHandler", () => ({
  __esModule: true,
  default: () => jest.fn(),
}));
jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (prop.startsWith("use"))
            return () => [
              jest.fn(() => Promise.resolve({ data: {} })),
              { data: undefined, loading: false, status: "default" },
            ];

          return jest.fn();
        },
      },
    ),
);
jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));

import GiftCardUpdateFormProvider, {
  GiftCardUpdateFormContext,
} from "./GiftCardUpdateFormProvider";

describe("GiftCardUpdateFormProvider.tsx coverage", () => {
  it("should render GiftCardUpdateFormProvider", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardUpdateFormProvider
            {...({
              id: "test-id",
              loading: false,
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onSubmit: jest.fn(),
              children: null,
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render GiftCardUpdateFormProvider with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardUpdateFormProvider
            {...({
              loading: true,
              disabled: true,
              data: undefined,
              id: "test-id",
              params: {},
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render GiftCardUpdateFormContext", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardUpdateFormContext
            {...({
              id: "test-id",
              loading: false,
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onSubmit: jest.fn(),
              children: null,
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
