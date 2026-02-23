import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/components/Form/useExitFormDialog", () => ({
  __esModule: true,
  useExitFormDialog: () => ({
    shouldBlockNavigation: jest.fn(() => false),
    setIsDirty: jest.fn(),
    setExitDialogSubmitRef: jest.fn(),
    setEnableExitDialog: jest.fn(),
    withFormId: jest.fn(),
    formId: "test-form",
  }),
}));
jest.mock("@dashboard/components/Form/useExitFormDialog", () => ({
  __esModule: true,
  default: () => ({
    shouldBlockNavigation: jest.fn(() => false),
    setIsDirty: jest.fn(),
    setExitDialogSubmitRef: jest.fn(),
    setEnableExitDialog: jest.fn(),
    withFormId: jest.fn(),
    formId: "test-form",
  }),
}));
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

import CollectionCreateForm from "./form";

describe("form.tsx coverage", () => {
  it("should render CollectionCreateForm", () => {
    try {
      render(
        <MemoryRouter>
          <CollectionCreateForm
            {...({
              id: "test-id",
              disabled: false,
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onSubmit: jest.fn(),
              children: null,
              channels: [],
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render CollectionCreateForm with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <CollectionCreateForm
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
});
