# Changelog

## Version 5.1.1 (2024-01-31)

### Bug Fixes

- Fixed README.md

## Version 5.1.0 (2024-01-31)

### New Features

- The `fetch` option allows you to use your method to retrieve images and .xlsx files

## Version 5.0.0 (2024-01-28)

### New Features

- **`New Function`**
  - `addGlobalOptions`: This function stores options, and by passing a defined key to `generateExcel`, the options will be applied.
  - `Validator Functions`: This function is experimental and not yet complete. It is intended for validating the `ExcelData` object.
- **`New Property`**
  - The `backgroundImage` property allows adding an image to the background.(Sheet propperty)
  - `pageOption`: This property has the following capabilities:
    - Define page margins.
    - Add a header.
    - Add a footer.
    - Change from portrait to landscape orientation.
  - `viewOption`: With this property, it is possible to:
    - Change the workbook view.
    - Hide the grid.
    - Hide headlines.
    - Hide the ruler.
    - Enable frozen ability.
    - Enable split ability.
  - `rtl`: This will change the sheet direction to right-to-left.
  - `pageBreak`: These properties help customize the page break line.
  - `asTable`: The result will be generated as a table.

### Improvements

- Reduced the size of the main bundle from 431KB to 181KB.
- Reduced the overall package size.

## Version 4.0.0 (2024-1-6)

we have added the test and release packages. Additionally, we have addressed various issues, such as misspelling in the interface, problems with the extractExcelData function, shift top sheet problem (unit problem), and more.

### New Features

- Added tests
- Release Github package

### Improvements

- Reduced the size of the generated file.
- more

### Bug Fixes

- Corrected misspellings in interfaces.
- Fixed extractExcelData where the value will now return, and you need to specify if you want to use it in the backend.
- Resolved the issue of shifting the top in the sheet, fixing problems in units.
- more

## Version 3.2.0 (2023-12-29)

### New Features

- Improvement in the formula section.

## Version 3.0.3 (2023-12-12)

### New Features

- checkbox has been added to sheets

## Version 3.0.3 (2023-12-02)

### Bug Fixes

- sheet option `selected` tab

##  Version 2.12.0 (2023-09-21)

### New Features

- We have added conditional formatting capabilities to the general base as well as to headers

## Version 2.11.0 (2023-09-13)

### Bug Fixes

- bug related to string with special character(&,<,...)

### Improvement

- improvement in generate file

## Version 2.10.0 (2023-09-12)

### improvement

- Data Can Be Undefined

## Version 2.9.0 (2023-09-10)

### New Features

- Generate excel base on Theme

## Version 2.8.0 (2023-09-08)

### New Features

- ability for add image to excel

## Version 2.7.0 (2023-09-02)

### New Features

- sideBySideLineByLine, multi-table in single sheet

## Version 2.6.0 (2023-08-27)

### Improvement

- add mode("useSplitBaseOnMatch") that helps multi-style better performance in unexpected results.
- condition function for multi style feature

## Version 2.5.0 (2023-08-26)

### Improvement

- keep cell style for not match in multi style cell

## Version 2.4.2 (2023-08-24)

### Bug Fixes

- Error in Merge cell after try multi time

## Version 2.4.1 (2023-08-20)

### Bug Fixes

- black background in convertTableToExcel

### Improvement

- Added 2.4.0 Feature example

### Version 2.4.0 (2023-08-20)

#### Improvement

- Added the ability to add comments to cells
- Conditional ability to comment on cells
- Ability to change the style of each character of cells. (only text value)

## Version 2.3.0 (2023-08-16)

### Improvement

- capability to use var and rgb for fg, border color and font color

## Version 2.2.2 (2023-08-15)

### Improvement

- convertTableToExcel: related to hight & width
- convertTableToExcel get optinal function rowHeightScaleFunction & colWidthScaleFunction

## Version 2.1.2 (2023-08-14)

### Bug Fixes

- Fixed issue with incorrect CDN address.

## Version 2.1.0 (2023-08-14)

### New Features

- Introducing the ability to convert tables into Excel format.

## Version 2.0.0 (2023-08-13)

### Bug Fixes

- Fixed issue with incorrect CDN address.

### New Features

- Added the ability to set the generated file name via the `fileName` property.

### Changes

- Updated the default value of the `generateType` property.

## Version 1.1.0 (2023-08-13)

### Bug Fixes

- Fixed backend issue causing "blob" error.
- Resolved TypeScript type and interface inconsistencies.

### New Features

- Added text formatting options (bold, italic, underline, double underline).
- Introduced "Shift Top" and "Shift Left" features for adjusting table generation start point.
- Included option to add titles to tables.
