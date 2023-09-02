# Changelog

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
