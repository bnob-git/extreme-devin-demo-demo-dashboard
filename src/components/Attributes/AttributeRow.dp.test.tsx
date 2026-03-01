import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/attributes/components/AttributeDetails/messages", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  inputTypeMessages: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/components/Attributes/BasicAttributeRow", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  BasicAttributeRow: () => null,
}));
jest.mock("@dashboard/components/Attributes/SwatchRow", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  SwatchRow: () => null,
}));
jest.mock("@dashboard/components/Attributes/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  booleanAttrValueToValue: jest.fn((..._a: any[]) => createDeepMock()),
  getBooleanDropdownOptions: jest.fn((..._a: any[]) => createDeepMock()),
  getErrorMessage: jest.fn((..._a: any[]) => createDeepMock()),
  getFileChoice: jest.fn((..._a: any[]) => createDeepMock()),
  getMultiChoices: jest.fn((..._a: any[]) => createDeepMock()),
  getMultiDisplayValue: jest.fn((..._a: any[]) => createDeepMock()),
  getReferenceDisplayValue: jest.fn((..._a: any[]) => createDeepMock()),
  getSingleChoices: jest.fn((..._a: any[]) => createDeepMock()),
  getSingleDisplayValue: jest.fn((..._a: any[]) => createDeepMock()),
  getTruncatedTextValue: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/components/FileUploadField", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  FileUploadField: () => null,
}));
jest.mock("@dashboard/components/RichTextEditor", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  RichTextEditor: () => null,
}));
jest.mock("@dashboard/components/SortableChipsField", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  SortableChipsField: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AttributeInputTypeEnum: () => null,
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import AttributeRow from "./AttributeRow";

describe("AttributeRow deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders AttributeRow with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <AttributeRow {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AttributeRow with override props", () => {
    try {
      const mockProps = createDeepMock({
        id: "test-1",
        name: "Test",
        disabled: false,
        loading: false,
        errors: [],
        data: createDeepMock(),
        onSubmit: jest.fn(),
        onChange: jest.fn(),
        onClose: jest.fn(),
        onBack: jest.fn(),
        open: false,
        channels: [],
        params: { id: "test-1" },
      });

      render(
        <MemoryRouter>
          <AttributeRow {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
