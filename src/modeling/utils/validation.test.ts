import { PageData } from "../components/PageDetailsPage/form";
import { validatePageCreateData } from "./validation";

describe("validatePageCreateData", () => {
  it("returns errors when there is no pageType or title", () => {
    // Arrange
    const data = { pageType: null, title: "" } as unknown as PageData;
    // Act
    const errors = validatePageCreateData(data);

    // Assert
    expect(errors).toEqual([
      {
        __typename: "PageError",
        attributes: [],
        code: "REQUIRED",
        field: "pageType",
        message: null,
      },
      {
        __typename: "PageError",
        attributes: [],
        code: "REQUIRED",
        field: "title",
        message: null,
      },
    ]);
  });

  it("returns title error when title is whitespace only (spaces)", () => {
    // Arrange
    const data = { pageType: { id: "page-type-1" }, title: "   " } as unknown as PageData;
    // Act
    const errors = validatePageCreateData(data);

    // Assert
    expect(errors).toEqual([
      {
        __typename: "PageError",
        attributes: [],
        code: "REQUIRED",
        field: "title",
        message: null,
      },
    ]);
  });

  it("returns title error when title is whitespace only (tabs and newlines)", () => {
    // Arrange
    const data = { pageType: { id: "page-type-1" }, title: "\t  \n" } as unknown as PageData;
    // Act
    const errors = validatePageCreateData(data);

    // Assert
    expect(errors).toEqual([
      {
        __typename: "PageError",
        attributes: [],
        code: "REQUIRED",
        field: "title",
        message: null,
      },
    ]);
  });

  it("returns title error when title is empty string", () => {
    // Arrange
    const data = { pageType: { id: "page-type-1" }, title: "" } as unknown as PageData;
    // Act
    const errors = validatePageCreateData(data);

    // Assert
    expect(errors).toEqual([
      {
        __typename: "PageError",
        attributes: [],
        code: "REQUIRED",
        field: "title",
        message: null,
      },
    ]);
  });

  it("returns no errors when title is valid", () => {
    // Arrange
    const data = { pageType: { id: "page-type-1" }, title: "Valid Title" } as unknown as PageData;
    // Act
    const errors = validatePageCreateData(data);

    // Assert
    expect(errors).toEqual([]);
  });

  it("returns no errors when title has leading/trailing whitespace but contains text", () => {
    // Arrange
    const data = {
      pageType: { id: "page-type-1" },
      title: "  Title with spaces  ",
    } as unknown as PageData;
    // Act
    const errors = validatePageCreateData(data);

    // Assert
    expect(errors).toEqual([]);
  });

  it("returns pageType error when pageType is missing", () => {
    // Arrange
    const data = { pageType: null, title: "Valid Title" } as unknown as PageData;
    // Act
    const errors = validatePageCreateData(data);

    // Assert
    expect(errors).toEqual([
      {
        __typename: "PageError",
        attributes: [],
        code: "REQUIRED",
        field: "pageType",
        message: null,
      },
    ]);
  });
});
