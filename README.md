# MR Excel

![Test](https://github.com/mohammadrezaeicode/github-action/actions/workflows/test.yml/badge.svg) [![Release & Publish](https://github.com/mohammadrezaeicode/mr-excel-repo/actions/workflows/release.yml/badge.svg)](https://github.com/mohammadrezaeicode/mr-excel-repo/actions/workflows/release.yml)

`MR-Excel` is a powerful JavaScript library designed for reading and writing Excel files. It enables users to extract data seamlessly from Excel documents while providing an array of advanced writing features. These include commenting, styling, applying formulas, merging cells, inserting images into cells, adding background images, grouping rows, and implementing conditional formatting. Additionally, the library supports multi-style values and offers functions for cell merging and styling, as well as commenting features.

For front-end-specific tasks, the library includes functions such as `excelToNode` and `convertTableToExcel`, which facilitate reading and inserting nodes into the DOM.This library also supports the generation of CSV and text file formats, enhancing its versatility for various data handling needs.

important functions of library that are defined with specific use cases as follows:

<a id="generate-excel"></a>

- **`generateExcel`**: This is the primary function and serves as the main entry point for most other functions. Its responsibility is to generate an Excel file based on the received input data. We will provide examples of the various options that can be utilized.

<a id="convert-table-to-excel"></a>

- **`convertTableToExcel`**: This function is designed exclusively for **client-side** use. It requires passing a DOM element (a table element) as a parameter. The output of this function is an Excel file generated from the provided table.

<a id="side-by-side-line-by-line"></a>

- **`sideBySideLineByLine`**: This function offers the capability to generate a single-sheet Excel file containing multiple tables side by side and line by line.

<a id="theme-base-generate"></a>

- **`themeBaseGenerate`**: After version `6.0.0`, the themeBaseGenerate function requires a theme color instead of index-based themes. Previous themes and the corresponding code for necessary changes can be found at [this link](https://mohammadrezaeicode.github.io/mr-excel-theme-page/)

<a id="extract-excel-data"></a>

- **`extractExcelData`**:  This function accepts the URL of an Excel file, retrieves its data, and returns an object containing the sheets. Additionally, it includes a `fetchFunc` parameter that allows users to override the default request call (fetch) for backend use.

<a id="generate-csv-txt"></a>

- **`generateCSV && generateText`**: The `generateCSV` function produces a .csv file based on the excelTable input, while the `generateText` function generates a .txt file. This function includes a boolean property; if set to true, the generated files will be compressed into a zip file. It is important to note that .csv and .txt files do not support styles, formulas, and other similar features.

<a id="excel-to-node"></a>

- **` excelToNode`**: This function reads an uploaded Excel file and generates a representation of the tables from its sheets. It can either return the table directly or insert it into a specified container node provided as input.

<a id="excel-to-json"></a>

- **` excelToJson`**: This function reads an Excel file and returns a JSON object that represents the data contained in the file.

<a id="replace-in-excel"></a>

- **`🆕replaceInExcel`**: This function is used to replace data based on a defined flag, such as {{FLAG}}, in Excel.

The example has been moved to a separate repository for easier updates. You can find it in the ["**_`mr-excel-example-gallery`_**"](https://github.com/mohammadrezaeicode/mr-excel-example-gallery)([**_link_**](https://github.com/mohammadrezaeicode/mr-excel-example-gallery))

## Related Projects

The following list includes new repositories related to this project. Documentation and improvements for these projects can be found in the repositories below.

- **`MR Excel Java`**:A similar project using Java is in development. The release version is coming soon; currently, it is available as a snapshot version.["`repository`"](https://github.com/mohammadrezaeicode/mr-excel-java)

- **`MR Excel Editor`**: An editor that utilizes the library is currently under development. At present, it only generates simple results.["`repository`"](https:///github.com/mohammadrezaeicode/mr-excel-editor)["`Demo`"](https://mohammadrezaeicode.github.io/mr-excel-editor/)

## Table of Contents

<a id="table-of-contents"></a>

> [!NOTE]
> You can return to the table of contents by clicking on ⬆️

- [**`Installation`**](#installation)
- [**`Install via Github `**](#install-github)
- [**`Import`**](#import-package)
- [**`Getting Started`**](#getting-started)
- [**`generateExcel`**](#generate-excel)
  - [**`How to use generateExcel`**](#generate-excel-usage)
  - [**`General`**](#general-option)
  - [**`fetch`**](#fetch)
  - [**`Header`**](#header)
  - [**`Formula`**](#formula)
    - [**`Time, Math, Custom Formula & etc`**](#new-formula)
  - [**`Styles & Format`**](#styles-format)
  - [**`Conditional Styling`**](#conditional-styling)
  - [**`Conditional Formatting`**](#conditinal-formating)
    - [**`On Column(Header)`**](#conditinal-formating-header)
    - [**`General use`**](#conditinal-formating-general-use)
  - [**`Multi Style value`**](#multi-style-value)
  - [**`Merging Cells`**](#merging-cells)
  - [**`Comment`**](#comment)
  - [**`Group Rows`**](#group-rows)
  - [**`Shift & Title`**](#shift-title)
  - [**`Image Option`**](#image-option)
  - [**`Checkbox`**](#checkbox)
  - [**`Global Setting`**](#global-setting)
  - [**`Page Option`**](#page-option)
  - [**`RTL Option`**](#rtl-option)
  - [**`View Option`**](#view-option)
  - [**`Page Break`**](#page-break-option)
  - [**`As Table`**](#as-table-option)
- [**`convertTableToExcel`**](#convert-table-to-excel)
  - [**`How to use convertTableToExcel`**](#convert-table-to-excel-usage)
- [**`sideBySideLineByLine`**](#side-by-side-line-by-line)
  - [**`How to use sideBySideLineByLine`**](#side-by-side-line-by-line-usage)
- [**`themeBaseGenerate`**](#theme-base-generate)
  - [**`How to use themeBaseGenerate`**](#theme-base-generate-usage)
- [**`extractExcelData`**](#extract-excel-data)
  - [**`How to use extractExcelData`**](#extract-excel-data-usage)
- [**`generateCSV && generateText`**](#generate-csv-txt)
  - [**`How to use generateCSV && generateText`**](#generate-csv-txt-usage)
- [**` excelToNode`**](#excel-to-node)
  - [**` How to use excelToNode`**](#excel-to-node-usage)
- [**` excelToJson`**](#excel-to-json)
  - [**` How to use excelToJson`**](#excel-to-json-usage)
- [**`🆕 replaceInExcel`**](#replace-in-excel)
  - [**`🆕 How to use replaceInExcel`**](#replace-in-excel-usage)
- [**`interface`**](#interface)
- [**`Migrate Version`**](#migrate)
  - [**`Migrating from 6 to 7`**](#migrating-6)
  - [**`Migrating from 5 to 6`**](#migrating-5)
  - [**`Migrating from 4 to 5`**](#migrating-4)
  - [**`Migrating from 3 to 4`**](#migrating-3)
  - [**`Migrating from 2 to 3`**](#migrating-2)
- [**`Release note`**](#release-note)


<a id="installation"></a>

## Installation [⬆️](#table-of-contents)

**Via CDN**

You can utilize our library, which comes bundled with **Vite**, by including the following link:

```html
<script src="https://unpkg.com/mr-excel@latest/dist/excel-table.umd.cjs"></script>
```

**Using a Package Manager**
To seamlessly integrate our library, you can install it using your preferred package manager:

**Via npm**:

```terminal/bash
npm install mr-excel
```

Using **yarn**:

```terminal/bash
yarn add mr-excel
```

Alternatively, you have the option to use **pnpm**:

```terminal/bash
pnpm install mr-excel
```

Choose the package manager that suits your workflow, and effortlessly bring the power of our library into your project, enabling smooth generation of Excel tables with ease and efficiency.

<a id="install-github"></a>

## Install via Github  [⬆️](#table-of-contents)

You can install the library from a repository by following the example below. This approach allows you to fork, customize, and set up your own repository. In this instance, we will install from the `mr-excel` repository using the `main` branch.

```terminal/bash
npm install https://github.com/mohammadrezaeicode/mr-excel-repo.git#main
```

<a id="import-package"></a>

## Import [⬆️](#table-of-contents)

Depending on the installation method, use the appropriate approach:

### CDN:

If you opt for a `CDN`, after adding the script, you only need the `ExcelTable` keyword for access to functions.

### Javascript(type: module) OR TypeScript:

For JavaScript or TypeScript files that use the module type (indicated by adding `type: module` to the `package.json` file), employ the following code:

```javascript
import { generateExcel } from "mr-excel";
// or
import * as ExcelTable from "mr-excel";
ExcelTable.generateExcel();
```

### Dynamic Import/Lazy Loading:

We recommend using this approach on the client side for import:

```javascript
import("mr-excel").then((m) =>m.generateExcel());
```

Ensure you choose the appropriate method based on your installation preferences and project requirements.["**_`mr-excel-example-gallery`_**"](https://github.com/mohammadrezaeicode/mr-excel-example-gallery)([**_link_**](https://github.com/mohammadrezaeicode/mr-excel-example-gallery))

<a id="getting-started"></a>

## Getting Started [⬆️](#table-of-contents)

After integrating the library into your project, generating XLSX files is a straightforward process. Simply create a data object, as demonstrated in the code snippet below:

<a id="theme-base-generate-usage"></a>

### How to use themeBaseGenerate

After version 6.0.0, the `themeBaseGenerate` function no longer supports index-based themes, so you'll need to provide a theme color instead. You can find the previous themes at [this link](https://mohammadrezaeicode.github.io/mr-excel-theme-page/), which also generates the necessary code to represent the changes that need to be applied.

The second input parameter of `themeBaseGenerate` is a configuration object that includes the following options:

```
config => {
  negativeColor?: boolean;
  headerColor?: string;
  rowColor?: string;
  headerBackgroundColor?: string;
  rowBackgroundColor?: string;
  fileName?: string;
  filterKeys?: string[];
}
```

By using these options, you can customize the generated Excel file to suit your needs.

<details>
<summary>Display Code</summary>

```javascript
let data = {
  sheet: [
    {
      headers: [
        {
          label: "ID",
          text: "ID",
        },
        {
          label: "FirstName",
          text: "First Name",
        },
        {
          label: "LastName",
          text: "Last Name",
        },
        {
          label: "Age",
          text: "Age",
        },
        {
          label: "Email",
          text: "Email",
        },
        {
          label: "PhoneNumber",
          text: "PhoneNumber",
        },
        {
          label: "Address",
          text: "Address",
        },
        {
          label: "Occupation",
          text: "Occupation",
        },
      ],
      data: [
        {
          ID: 1,
          FirstName: "John",
          LastName: "Smith",
          Age: 32,
          Email: "john@example.com",
          PhoneNumber: "555-123-4567",
          Address: "123 Main St, City",
          Occupation: "Engineer",
        },
        {
          ID: 2,
          FirstName: "Jane",
          LastName: "Doe",
          Age: 28,
          Email: "jane@example.com",
          PhoneNumber: "555-987-6543",
          Address: "456 Elm St, Town",
          Occupation: "Teacher",
        },
        {
          ID: 3,
          FirstName: "David",
          LastName: "Johnson",
          Age: 45,
          Email: "david@example.com",
          PhoneNumber: "555-555-5555",
          Address: "789 Oak St, City",
          Occupation: "Doctor",
        },
        {
          ID: 4,
          FirstName: "Sarah",
          LastName: "Brown",
          Age: 22,
          Email: "sarah@example.com",
          PhoneNumber: "555-321-6549",
          Address: "101 Pine St, Town",
          Occupation: "Student",
        },
        {
          ID: 5,
          FirstName: "Michael",
          LastName: "Wilson",
          Age: 38,
          Email: "michael@example.com",
          PhoneNumber: "555-777-8888",
          Address: "246 Maple St, City",
          Occupation: "Lawyer",
        },
        {
          ID: 6,
          FirstName: "Emily",
          LastName: "Davis",
          Age: 29,
          Email: "emily@example.com",
          PhoneNumber: "555-444-3333",
          Address: "555 Birch St, Town",
          Occupation: "Nurse",
        },
        {
          ID: 7,
          FirstName: "Daniel",
          LastName: "Lee",
          Age: 31,
          Email: "daniel@example.com",
          PhoneNumber: "555-666-9999",
          Address: "777 Cedar St, City",
          Occupation: "Software Dev",
        },
        {
          ID: 8,
          FirstName: "Olivia",
          LastName: "White",
          Age: 27,
          Email: "olivia@example.com",
          PhoneNumber: "555-222-1111",
          Address: "888 Redwood St, Town",
          Occupation: "Artist",
        },
        {
          ID: 9,
          FirstName: "James",
          LastName: "Anderson",
          Age: 40,
          Email: "james@example.com",
          PhoneNumber: "555-888-3333",
          Address: "333 Oak St, City",
          Occupation: "Accountant",
        },
        {
          ID: 10,
          FirstName: "Sophia",
          LastName: "Martinez",
          Age: 24,
          Email: "sophia@example.com",
          PhoneNumber: "555-999-7777",
          Address: "666 Pine St, Town",
          Occupation: "Engineer",
        },
      ],
    },
  ],
};
ExcelTable.themeBaseGenerate(data);
```

Or:

```javascript
let data = [
  {
    ID: 1,
    FirstName: "John",
    LastName: "Smith",
    Age: 32,
    Email: "john@example.com",
    PhoneNumber: "555-123-4567",
    Address: "123 Main St, City",
    Occupation: "Engineer",
  },
  {
    ID: 2,
    FirstName: "Jane",
    LastName: "Doe",
    Age: 28,
    Email: "jane@example.com",
    PhoneNumber: "555-987-6543",
    Address: "456 Elm St, Town",
    Occupation: "Teacher",
  },
  {
    ID: 3,
    FirstName: "David",
    LastName: "Johnson",
    Age: 45,
    Email: "david@example.com",
    PhoneNumber: "555-555-5555",
    Address: "789 Oak St, City",
    Occupation: "Doctor",
  },
  {
    ID: 4,
    FirstName: "Sarah",
    LastName: "Brown",
    Age: 22,
    Email: "sarah@example.com",
    PhoneNumber: "555-321-6549",
    Address: "101 Pine St, Town",
    Occupation: "Student",
  },
  {
    ID: 5,
    FirstName: "Michael",
    LastName: "Wilson",
    Age: 38,
    Email: "michael@example.com",
    PhoneNumber: "555-777-8888",
    Address: "246 Maple St, City",
    Occupation: "Lawyer",
  },
  {
    ID: 6,
    FirstName: "Emily",
    LastName: "Davis",
    Age: 29,
    Email: "emily@example.com",
    PhoneNumber: "555-444-3333",
    Address: "555 Birch St, Town",
    Occupation: "Nurse",
  },
  {
    ID: 7,
    FirstName: "Daniel",
    LastName: "Lee",
    Age: 31,
    Email: "daniel@example.com",
    PhoneNumber: "555-666-9999",
    Address: "777 Cedar St, City",
    Occupation: "Software Dev",
  },
  {
    ID: 8,
    FirstName: "Olivia",
    LastName: "White",
    Age: 27,
    Email: "olivia@example.com",
    PhoneNumber: "555-222-1111",
    Address: "888 Redwood St, Town",
    Occupation: "Artist",
  },
  {
    ID: 9,
    FirstName: "James",
    LastName: "Anderson",
    Age: 40,
    Email: "james@example.com",
    PhoneNumber: "555-888-3333",
    Address: "333 Oak St, City",
    Occupation: "Accountant",
  },
  {
    ID: 10,
    FirstName: "Sophia",
    LastName: "Martinez",
    Age: 24,
    Email: "sophia@example.com",
    PhoneNumber: "555-999-7777",
    Address: "666 Pine St, Town",
    Occupation: "Engineer",
  },
];
ExcelTable.themeBaseGenerate(data, { negativeColor: true });
```

</details>

[More Example](https://github.com/mohammadrezaeicode/mr-excel-example-gallery/blob/main/CDN/themeBaseGenerate)

<a id="convert-table-to-excel-usage"></a>

### How to use convertTableToExcel

```javascript
ExcelTable.convertTableToExcel("#table");
-------------------------------------------------------------------
let element = document.querySelector("#table");
ExcelTable.convertTableToExcel(null, element, {keepStyle:true});
-------------------------------------------------------------------
const rowF = (value, index, from) => {
    return 50
}
const colF = (value, index) => {
    return value * 0.19
}
ExcelTable.convertTableToExcel("#table", null, {
    keepStyle: true,
    rowHeightScaleFunction: rowF,
    colWidthScaleFunction: colF
})
```

<details>

<summary>result of Example in  https://github.com/mohammadrezaeicode/mr-excel-example-gallery/blob/main/conv1.html</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-example-gallery/blob/main/ex13.PNG)

</details>

<a id="extract-excel-data-usage"></a>

### How to use extractExcelData

```javascript
ExcelTable.extractExcelData(your excel url);
```

<a id="generate-csv-txt-usage"></a>

### How to use generateCSV && generateText

<details>

<summary>Display Code</summary>

```javascript
const data = {
  sheet: [
    {
      headers: [
        {
          label: "test",
          text: "Test",
        },
        {
          label: "_id",
          text: "ID",
          formula: {
            type: "MAX",
            styleId: "formulaStyle",
          },
        },
      ],
      data: [
        {
          _id: 0.3,
          test: "test1",
        },
        {
          _id: 2,
          test: "test2",
        },
        {
          _id: 3,
          test: "test3",
        },
        {
          _id: 4,
          test: "test4",
        },
        {
          _id: 5,
          test: "test5",
        },
        {
          _id: 6,
          test: "test6",
        },
        {
          _id: 7,
          test: "test7",
        },
        {
          _id: 8,
          test: "test8",
        },
        {
          _id: 9,
          test: "test9",
        },
        {
          _id: 10,
          test: "test10",
        },
        {
          _id: 11,
          test: "test11",
        },
      ],
    },
    {
      headers: [
        {
          label: "test",
          text: "Test",
        },
        {
          label: "_id",
          text: "ID",
        },
      ],
      data: [
        {
          _id: 1,
          test: "test1",
        },
        {
          _id: 2,
          test: "test2",
        },
        {
          _id: 3,
          test: "test3",
        },
        {
          _id: 4,
          test: "test4",
        },
        {
          _id: 5,
          test: "test5",
        },
        {
          _id: 6,
          test: "test6",
        },
        {
          _id: 7,
          test: "test7",
        },
        {
          _id: 8,
          test: "test8",
        },
        {
          _id: 9,
          test: "test9",
        },
        {
          _id: 10,
          test: "test10",
        },
        {
          _id: 11,
          test: "test11",
        },
      ],
    },
  ],
};
ExcelTable.generateCSV(data, true);
ExcelTable.generateText(data, true);
```

</details>

<a id="excel-to-node-usage"></a>

### 🆕 How to use excelToNode

<details>

<summary>Display Code</summary>

```javascript
ExcelTable.excelToNode(link, "your query")
-----
ExcelTable.excelToNode(uri, queryForTable, containerElement, config)
```

</details>

<a id="replace-in-excel-usage"></a>

### 🆕 How to use replaceInExcel

To use this function, you should provide {{FLAG}} in Excel. Change the relevant cells to represent the flag ({{name}}, e.g.) and pass them to the function. Additionally, you should supply the data that will replace the flag. Here’s an example for clarification:
[Excel that used for example](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/replacer.xlsx?raw=true)

<details>

<summary>Display Code</summary>

```javascript
ExcelTable.excelToNode(Link, Replace Map,Replacer Map)
-----
ExcelTable.replaceInExcel("./replacer.xlsx", {
  V: "test Data",
  v1: "This is value one",
  v2: "This is value two",
});
```

</details>

![result imag](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/replacer.png?raw=true)

<a id="excel-to-json-usage"></a>

### How to use excelToJson

<details>

<summary>Display Code</summary>

```javascript
ExcelTable.excelToJson(link)
-----
ExcelTable.excelToJson(uri,fetchFunction,withHeader,defaultPropertyPrefix)
```

</details>

<a id="side-by-side-line-by-line-usage"></a>

### How to use sideBySideLineByLine

<details>

<summary>Display Code</summary>

```javascript
const sideData = [
  [
    {
      sheetName: "sheetName",
      spaceX: 1,
      spaceY: 1,
      headers: [
        {
          label: "id",
          text: "id",
        },
      ],
      data: [
        { id: 11 },
        { id: 10 },
        { id: 9 },
        { id: 8 },
        { id: 7 },
        { id: 6 },
        { id: 5 },
        { id: 4 },
        { id: 3 },
        { id: 2 },
        { id: 1 },
      ],
    },
    {
      sheetName: "sheetName",
      spaceX: 1,
      spaceY: 1,
      headers: [
        {
          label: "el",
          text: "el",
        },
      ],
      data: [
        { el: 11 },
        { el: 10 },
        { el: 9 },
        { el: 8 },
        { el: 7 },
        { el: 4 },
        { el: 3 },
        { el: 2 },
        { el: 1 },
      ],
    },
  ],

  [
    {
      sheetName: "sheetName",
      spaceX: 1,
      spaceY: 1,
      headers: [
        {
          label: "id",
          text: "id",
        },
        { label: "test", text: "test" },
      ],
      data: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
      ],
    },
    {
      sheetName: "sheetName1",
      spaceX: 1,
      spaceY: 1,
      headers: [
        {
          label: "id",
          text: "id",
        },
        { label: "test", text: "test" },
      ],
      data: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
      ],
    },
    {
      sheetName: "sheetName",
      spaceX: 1,
      spaceY: 1,
      headers: [
        {
          label: "id",
          text: "id",
        },
        { label: "test", text: "test" },
      ],
      data: [
        { test: "test14", id: "u1i1r23" },
        { test: "test13", id: "u2i2r24" },
        { test: "test12", id: "u3i3r25" },
        { test: "test11", id: "u4i4r26" },
        { test: "test10", id: "u5i5r27" },
        { test: "test9", id: "u6i6r28" },
        { test: "test8", id: "u7i7r29" },
        { test: "test7", id: "u8i8r30" },
        { test: "test6", id: "u9i9r31" },
        { test: "test5", id: "ui1010r32" },
        { test: "test4", id: "ui1111r33" },
        { test: "test3" },
        { test: "test2" },
        { test: "test1" },
      ],
    },
  ],
];
ExcelTable.sideBySideLineByLine(sideData);
```

</details>

[More Example](https://github.com/mohammadrezaeicode/mr-excel-example-gallery/tree/main/CDN/sideBySideLineByLine)

<a id="generate-excel-usage"></a>

### How to use generateExcel

<details>

<summary>Display Code</summary>

```javascript
//<https://colorhunt.co/palette/f9ed69f08a5db83b5e6a2c70>
const data = {
  creator: "mr",
  created: "2023-08-06T07:22:40Z",
  modified: "2023-08-06T07:22:40Z",
  styles: {
    formulaStyle: {
      backgroundColor: "B83B5E",
      border: {
        full: {
          style: "medium",
          color: "F9ED69",
        },
      },
    },
  },
  sheet: [
    {
      name: "Test",
      formula: {
        B16: {
          type: "SUM",
          start: "B2",
          end: "B8",
          styleId: "formulaStyle",
        },
      },
      tabColor: "B83B5E",
      headers: [
        {
          label: "test",
          text: "Test",
        },
        {
          label: "_id",
          text: "ID",
          formula: {
            type: "MAX",
            styleId: "formulaStyle",
          },
        },
      ],
      data: [
        {
          _id: 0.3,
          test: "test1",
        },
        {
          _id: 2,
          test: "test2",
        },
        {
          _id: 3,
          test: "test3",
        },
        {
          _id: 4,
          test: "test4",
        },
        {
          _id: 5,
          test: "test5",
        },
        {
          _id: 6,
          test: "test6",
        },
        {
          _id: 7,
          test: "test7",
        },
        {
          _id: 8,
          test: "test8",
        },
        {
          _id: 9,
          test: "test9",
        },
        {
          _id: 10,
          test: "test10",
        },
        {
          _id: 11,
          test: "test11",
        },
      ],
    },
    {
      headers: [
        {
          label: "test",
          text: "Test",
        },
        {
          label: "_id",
          text: "ID",
        },
      ],
      data: [
        {
          _id: 1,
          test: "test1",
        },
        {
          _id: 2,
          test: "test2",
        },
        {
          _id: 3,
          test: "test3",
        },
        {
          _id: 4,
          test: "test4",
        },
        {
          _id: 5,
          test: "test5",
        },
        {
          _id: 6,
          test: "test6",
        },
        {
          _id: 7,
          test: "test7",
        },
        {
          _id: 8,
          test: "test8",
        },
        {
          _id: 9,
          test: "test9",
        },
        {
          _id: 10,
          test: "test10",
        },
        {
          _id: 11,
          test: "test11",
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

[More Example](https://github.com/mohammadrezaeicode/mr-excel-example-gallery/blob/main/CDN/generateExcel)

<a id="general-option"></a>

## General option [⬆️](#table-of-contents)

Each sheet offers several customization options. You can rename the sheet using the `name` property, adjust the tab color with tabColor, control its visibility with the `state` property, add protection via `protectionOption`, and implement sorting and filtering using `sortAndFilter`. In the example below, we will demonstrate how to utilize these features effectively. Additionally, for Excel file information, we provide options such as `creator`, `created`, `notSave`, and `modified`.

<details>

<summary>Display Code</summary>

```javascript
const data = {
  notSave: true,
  creator: "mr",
  created: "2023-08-12T02:08:04.469Z",
  modified: "2023-08-12T02:08:04.469Z",
  sheet: [
    {
      name: "family record",
      tabColor: "#a1b4c6",
      sortAndFilter: {
        mode: "all",
      },
      protectionOption: {
        sheet: 1,
        formatCells: 0,
        formatColumns: 0,
        formatRows: 0,
        insertColumns: 0,
        insertRows: 0,
        insertHyperlinks: 0,
        deleteColumns: 0,
        deleteRows: 0,
        sort: 0,
        autoFilter: 0,
        pivotTables: 0,
      },
      headers: [
        {
          label: "id",
          text: "ID",
        },
        {
          label: "name",
          text: "Name",
        },
        {
          label: "surname",
          text: "Surname",
        },
        {
          label: "parentId",
          text: "Parent Id",
        },
        {
          label: "work",
          text: "Work",
        },
        {
          label: "birthDate",
          text: "Birth Date",
        },
      ],
      data: [
        {
          id: 7209449538085,
          name: "Tabitha",
          surname: "Terry",
          parentId: 6998520522169,
          work: "Computer repair technician",
          birthDate: "1853-04-10T01:23:16.181Z",
        },
        ...
      ],
    },
    {
      state: "hidden",
      headers: [
        {
          label: "id",
          text: "ID",
        },
        {
          label: "name",
          text: "Name",
        },
        {
          label: "surname",
          text: "Surname",
        },
        {
          label: "parentId",
          text: "Parent Id",
        },
        {
          label: "work",
          text: "Work",
        },
        {
          label: "birthDate",
          text: "Birth Date",
        },
      ],
      data: [
        {
          id: 7209449538085,
          name: "Tabitha",
          surname: "Terry",
          parentId: 6998520522169,
          work: "Computer repair technician",
          birthDate: "1853-04-10T01:23:16.181Z",
        },
        ...
      ],
    },
  ],
};
ExcelTable.generateExcel(data).then((res) => {
  var url = window.URL.createObjectURL(res);
  window.location.assign(url);
  return res;
});
```

</details>

<details>
<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex2.PNG?raw=true)

</details>

<a id="fetch"></a>

## fetch Option [⬆️](#table-of-contents)

mr-Excel utilizes the `fetch` API when the images option is enabled. However, if you are using Node.js version lower than `18.0.0`, you may encounter issues. To resolve this, you can add the fetch option. Here’s an example of how the function should be structured:

```javascript
import fetch from "cross-fetch";
export async function callApi(url) {
  return await fetch(url).then((res) => {
    return res.arrayBuffer();
  });
}
const data = {
  fetch: callApi,
  ...
  sheet: [
    {
      images: [
        {
          url: "https://mohammadrezaeicode.github.io/mr-excel-page/img/ezgif.com-gif-maker.gif",
          from: "H1",
          type: "one",
        },
      ],
      ...
    },
  ],
};
```

<a id="header"></a>

## Header Option [⬆️](#table-of-contents)

We provide specific options for customizing Excel headers. Since the header is a mandatory component, the `withoutHeader` option cannot be used to omit it. The `headerHeight` option allows you to set the height of the header row. Additionally, the `headerStyleKey` property specifies the default style for each cell, with its value corresponding to the style ID; detailed functionality is outlined in the Styles section.

Each header cell comes with additional properties beyond just the label and text. The `size` property defines the width of the column, while the `formula` property applies a formula to all rows (excluding the header) within that column, ultimately affecting the last cell in the column.

<details>
<summary>Display Code</summary>

```javascript
const color = { c1: "08D9D6", c2: "252A34", c3: "FF2E63", c4: "EAEAEA" };
const data = {
  creator: "mr",
  styles: {
    headerStyle: {
      backgroundColor: color.c2,
      fontFamily: "Times New Roman",
      color: color.c4,
      size: 20,
    },
    formulaStyle: {
      backgroundColor: color.c1,
      fontFamily: "Times New Roman",
      color: color.c3,
      size: 15,
    },
  },
  sheet: [
    {
      headerStyleKey: "headerStyle",
      headerHeight: 30,
      headers: [
        {
          label: "id",
          text: "ID",
          size: 20,
          formula: { type: "COUNT", styleId: "formulaStyle" },
        },
        { label: "name", text: "Name", size: 20 },
        { label: "surname", text: "Surname", size: 20 },
        { label: "parentId", text: "Parent Id", size: 20 },
        { label: "work", text: "Work", size: 20 },
        { label: "birthDate", text: "Birth Date", size: 30 },
      ],
      data: [
        {
          id: 7209449538085,
          name: "Tabitha",
          surname: "Terry",
          parentId: 6998520522169,
          work: "Computer repair technician",
          birthDate: "1853-04-10T01:23:16.181Z",
        },
        {
          id: 4132538644996,
          name: "Grace",
          surname: "MacTavish",
          parentId: 6840142476821,
          work: "Retired",
          birthDate: "1854-04-03T08:51:19.825Z",
        },
        {
          id: 778493423064,
          name: "Bailey",
          surname: "Byram",
          parentId: 7137102781494,
          work: "Occupational Therapist- Neonatal/ Pediatric",
          birthDate: "1852-08-13T18:07:57.408Z",
        },
        {
          id: 510141747289,
          name: "Sherman",
          surname: "Joseph",
          parentId: 602149579197,
          work: "work from home",
          birthDate: "1854-12-12T05:48:31.806Z",
        },
        {
          id: 5513277402976,
          name: "Ryder",
          surname: "Watrous",
          parentId: 7435302183884,
          work: "Welder",
          birthDate: "1854-08-18T04:11:04.736Z",
        },
        {
          id: 1032906540606,
          name: "Phoenix",
          surname: "Netter",
          parentId: 3204642808212,
          work: "Unemployed",
          birthDate: "1854-07-19T07:53:58.843Z",
        },
        {
          id: 343574032284,
          name: "Tonya",
          surname: "Carpenter",
          parentId: 3709985684199,
          work: "Pulmonologist",
          birthDate: "1852-04-20T12:44:08.362Z",
        },
        {
          id: 9497014533965,
          name: "Coral",
          surname: "Hoskins",
          parentId: 3497153671269,
          work: "Unemployed",
          birthDate: "1854-12-01T22:08:59.891Z",
        },
        {
          id: 4998374693826,
          name: "Billie",
          surname: "Guthrie",
          parentId: 1555796128163,
          work: "Skomorokh",
          birthDate: "1853-11-10T14:06:54.037Z",
        },
        {
          id: 95132218987,
          name: "Gertrude",
          surname: "Clark",
          parentId: 2324519652998,
          work: "Unemployed",
          birthDate: "1852-12-22T20:12:13.237Z",
        },
      ],
    },
    {
      withoutHeader: true,
      headerStyleKey: "headerStyle",
      headers: [
        {
          label: "id",
          text: "ID",
          size: 70,
          formula: { type: "COUNT", styleId: "formulaStyle" },
        },
        { label: "name", text: "Name", size: 12 },
        { label: "surname", text: "Surname", size: 70 },
        { label: "parentId", text: "Parent Id", size: 100 },
        { label: "work", text: "Work", size: 100 },
        { label: "birthDate", text: "Birth Date", size: 100 },
      ],
      data: [
        {
          id: 7209449538085,
          name: "Tabitha",
          surname: "Terry",
          parentId: 6998520522169,
          work: "Computer repair technician",
          birthDate: "1853-04-10T01:23:16.181Z",
        },
        {
          id: 4132538644996,
          name: "Grace",
          surname: "MacTavish",
          parentId: 6840142476821,
          work: "Retired",
          birthDate: "1854-04-03T08:51:19.825Z",
        },
        {
          id: 778493423064,
          name: "Bailey",
          surname: "Byram",
          parentId: 7137102781494,
          work: "Occupational Therapist- Neonatal/ Pediatric",
          birthDate: "1852-08-13T18:07:57.408Z",
        },
        {
          id: 510141747289,
          name: "Sherman",
          surname: "Joseph",
          parentId: 602149579197,
          work: "work from home",
          birthDate: "1854-12-12T05:48:31.806Z",
        },
        {
          id: 5513277402976,
          name: "Ryder",
          surname: "Watrous",
          parentId: 7435302183884,
          work: "Welder",
          birthDate: "1854-08-18T04:11:04.736Z",
        },
        {
          id: 1032906540606,
          name: "Phoenix",
          surname: "Netter",
          parentId: 3204642808212,
          work: "Unemployed",
          birthDate: "1854-07-19T07:53:58.843Z",
        },
        {
          id: 343574032284,
          name: "Tonya",
          surname: "Carpenter",
          parentId: 3709985684199,
          work: "Pulmonologist",
          birthDate: "1852-04-20T12:44:08.362Z",
        },
        {
          id: 9497014533965,
          name: "Coral",
          surname: "Hoskins",
          parentId: 3497153671269,
          work: "Unemployed",
          birthDate: "1854-12-01T22:08:59.891Z",
        },
        {
          id: 4998374693826,
          name: "Billie",
          surname: "Guthrie",
          parentId: 1555796128163,
          work: "Skomorokh",
          birthDate: "1853-11-10T14:06:54.037Z",
        },
        {
          id: 95132218987,
          name: "Gertrude",
          surname: "Clark",
          parentId: 2324519652998,
          work: "Unemployed",
          birthDate: "1852-12-22T20:12:13.237Z",
        },
      ],
    },
  ],
};

ExcelTable.generateExcel(data);
```

</details>

</details>

<details>
<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex3.PNG?raw=true)

</details>

<a id="formula"></a>

## Formula Option [⬆️](#table-of-contents)

We offer two distinct methods for defining formulas: customization and column type. With the customization approach, if you use a cell containing data referenced in the formula, the formula will display the corresponding result. When utilizing this method, it's essential to specify the formula type, which can be one of the following: AVERAGE, SUM, COUNT, MAX, or MIN.

<details>
<summary>Display Code</summary>

```javascript
const colorPalette = {
  c1: "2B2E4A",
  c2: "E84545",
  c3: "903749",
  c4: "53354A",
};
const data = {
  creator: "mr",
  styles: {
    headerStyle: {
      backgroundColor: "2B2E4A",
      fontFamily: "Times New Roman",
      color: "E84545",
    },
    customFormulaStyle: {
      backgroundColor: "E84545",
      fontFamily: "Times New Roman",
      color: "2B2E4A",
      size: 15,
      border: {
        full: {
          color: "53354A",
          style: "dashDot",
        },
      },
    },
    formulaStyle: {
      backgroundColor: "2B2E4A",
      fontFamily: "Times New Roman",
      color: "E84545",
      size: 15,
      border: {
        full: {
          color: "903749",
          style: "medium",
        },
      },
    },
  },
  sheet: [
    {
      formula: {
        A8: {
          type: "SUM",
          start: "B2",
          end: "D3",
          styleId: "customFormulaStyle",
        },
        B8: {
          type: "AVERAGE",
          start: "A2",
          end: "F6",
          styleId: "customFormulaStyle",
        },
        C8: {
          type: "SUM",
          start: "A2",
          end: "F6",
          styleId: "customFormulaStyle",
        },
        D8: {
          type: "MAX",
          start: "A2",
          end: "F6",
          styleId: "customFormulaStyle",
        },
        E8: {
          type: "MIN",
          start: "A2",
          end: "F6",
          styleId: "customFormulaStyle",
        },
        F8: {
          type: "COUNT",
          start: "A2",
          end: "F6",
          styleId: "customFormulaStyle",
        },
      },
      headerStyleKey: "headerStyle",
      headers: [
        {
          label: "Date",
          text: "Date",
          formula: {
            styleId: "formulaStyle",
            type: "COUNT",
          },
        },
        {
          label: "Column 1",
          text: "Column 1",
          formula: {
            styleId: "formulaStyle",
            type: "AVERAGE",
          },
        },
        {
          label: "Column 2",
          text: "Column 2",
          formula: {
            styleId: "formulaStyle",
            type: "SUM",
          },
        },
        {
          label: "Column 3",
          text: "Column 3",
          formula: {
            styleId: "formulaStyle",
            type: "MAX",
          },
        },
        {
          label: "Column 4",
          text: "Column 4",
          formula: {
            styleId: "formulaStyle",
            type: "MIN",
          },
        },
        {
          label: "Column 5",
          text: "Column 5",
          formula: {
            styleId: "formulaStyle",
            type: "COUNT",
          },
        },
      ],
      data: [
        {
          Date: "2023-08-01",
          "Column 1": 5,
          "Column 2": 10,
          "Column 3": 15,
          "Column 4": 20,
          "Column 5": 25,
        },
        {
          Date: "2023-08-02",
          "Column 1": 7,
          "Column 2": 14,
          "Column 3": 21,
          "Column 4": 28,
          "Column 5": 35,
        },
        {
          Date: "2023-08-03",
          "Column 1": 3,
          "Column 2": 6,
          "Column 3": 9,
          "Column 4": 12,
          "Column 5": 15,
        },
        {
          Date: "2023-08-04",
          "Column 1": 12,
          "Column 2": 24,
          "Column 3": 36,
          "Column 4": 48,
          "Column 5": 60,
        },
        {
          Date: "2023-08-05",
          "Column 1": 8,
          "Column 2": 16,
          "Column 3": 24,
          "Column 4": 32,
          "Column 5": 40,
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>
<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex4.PNG?raw=true)

</details>

<a id="new-formula"></a>

### Time, Math, Custom Formula & etc [⬆️](#table-of-contents)

We offer a variety of new formulas for mathematics, time, and more. Additionally, you can create complex formulas using the Custom Formula feature. A key aspect of this feature is the ability to generate array result formulas. To do this, you need to specify a range of cells where the results will be inserted and define the formula in the formula property. Furthermore, this feature also allows you to define a single result formula.

<details>
<summary>Display Code</summary>

```javascript
const colorPalette = {
  c1: "2B2E4A",
  c2: "E84545",
  c3: "903749",
  c4: "53354A",
};
const t = { c1: "2C3639", c2: "3F4E4F", c3: "A27B5C", c4: "DCD7C9" },
  n = { backgroundColor: t.c2, fontFamily: "Times New Roman", color: t.c4 },
  a = { backgroundColor: t.c4, fontFamily: "Times New Roman", color: t.c2 };
const data = {
  creator: "mr",
  styles: {
    headerStyle: {
      backgroundColor: "2B2E4A",
      fontFamily: "Times New Roman",
      color: "E84545",
    },
    Date: { ...n, format: "short_date" },
    customFormulaStyle: {
      backgroundColor: "E84545",
      fontFamily: "Times New Roman",
      color: "2B2E4A",
      size: 15,
      border: {
        full: {
          color: "53354A",
          style: "dashDot",
        },
      },
    },
    formulaStyle: {
      backgroundColor: "2B2E4A",
      fontFamily: "Times New Roman",
      color: "E84545",
      size: 15,
      border: {
        full: {
          color: "903749",
          style: "medium",
        },
      },
    },
  },
  sheet: [
    {
      formula: {
        J7: {
          formula: 'REPLACE(D3,1,1,"replced")',
          styleId: "customFormulaStyle",
        },
        H8: {
          formula: 'CONCATENATE(D2, " ", D5)',
          styleId: "customFormulaStyle",
        },
        "J2:J6": {
          formula: "YEAR(NOW()-A2:A6)",
          referenceCells: "J2:J6",
        },
        "K2:K6": {
          formula: "LOWER(D2:D6)",
        },
        I2: {
          formula: "COUNT(A1:B8)",
          styleId: "customFormulaStyle",
        },
        H6: {
          noArgType: "NOW_HOUR",
          styleId: "customFormulaStyle",
        },
        H5: {
          noArgType: "NOW",
          styleId: "customFormulaStyle",
        },
        H4: {
          type: "TRIM",
          referenceCell: "D3",
          styleId: "customFormulaStyle",
        },
        H7: {
          type: "SUMIF",
          referenceCell: "B1:B5",
          value: '">=5"',
          styleId: "customFormulaStyle",
        },
        H3: {
          type: "COUNTIF",
          referenceCell: "B1:B5",
          value: '">=5"',
          styleId: "customFormulaStyle",
        },
        H2: {
          type: "ABS",
          referenceCell: "B5",
          styleId: "customFormulaStyle",
        },
        I1: {
          type: "PROPER",
          referenceCell: "D1",
          styleId: "customFormulaStyle",
        },
        G11: {
          type: "UPPER",
          referenceCell: "D1",
          styleId: "customFormulaStyle",
        },
        G10: {
          type: "TAN",
          referenceCell: "B5",
          styleId: "customFormulaStyle",
        },
        G8: {
          type: "COS",
          referenceCell: "B5",
          styleId: "customFormulaStyle",
        },
        G7: {
          type: "FLOOR",
          referenceCell: "B5",
          value: 5,
          styleId: "customFormulaStyle",
        },
        G2: {
          type: "POWER",
          referenceCell: "B2",
          value: 2,
          styleId: "customFormulaStyle",
        },
        G3: {
          type: "MOD",
          referenceCell: "B3",
          value: 2,
          styleId: "customFormulaStyle",
        },
        G4: {
          type: "SQRT",
          referenceCell: "B4",
          styleId: "customFormulaStyle",
        },
        G5: {
          type: "CEILING",
          referenceCell: "B5",
          value: 5,
          styleId: "customFormulaStyle",
        },
        G6: {
          type: "ROUND",
          referenceCell: "B5",
          value: 5,
          styleId: "customFormulaStyle",
        },
        G1: {
          type: "LEN",
          referenceCell: "A1",
          styleId: "customFormulaStyle",
        },
        A8: {
          type: "SUM",
          start: "B2",
          end: "D3",
          styleId: "customFormulaStyle",
        },
        B8: {
          type: "AVERAGE",
          start: "A2",
          end: "F6",
          styleId: "customFormulaStyle",
        },
        C8: {
          type: "SUM",
          start: "A2",
          end: "F6",
          styleId: "customFormulaStyle",
        },
        D8: {
          type: "MAX",
          start: "A2",
          end: "F6",
          styleId: "customFormulaStyle",
        },
        E8: {
          type: "MIN",
          start: "A2",
          end: "F6",
          styleId: "customFormulaStyle",
        },
        F8: {
          type: "COUNT",
          start: "A2",
          end: "F6",
          styleId: "customFormulaStyle",
        },
      },
      headerStyleKey: "headerStyle",
      headers: [
        {
          label: "Date",
          text: "Date",
          formula: {
            styleId: "formulaStyle",
            type: "COUNT",
          },
        },
        {
          label: "Column 1",
          text: "Column 1",
          formula: {
            styleId: "formulaStyle",
            type: "AVERAGE",
          },
        },
        {
          label: "Column 2",
          text: "Column 2",
          formula: {
            styleId: "formulaStyle",
            type: "SUM",
          },
        },
        {
          label: "Column 3",
          text: "Column 3",
          formula: {
            styleId: "formulaStyle",
            type: "MAX",
          },
        },
        {
          label: "Column 4",
          text: "Column 4",
          formula: {
            styleId: "formulaStyle",
            type: "MIN",
          },
        },
        {
          label: "Column 5",
          text: "Column 5",
          formula: {
            styleId: "formulaStyle",
            type: "COUNT",
          },
        },
      ],
      data: [
        {
          Date: "2023-08-01",
          "Column 1": 5,
          "Column 2": 10,
          "Column 3": "D15",
          "Column 4": 20,
          "Column 5": 25,
        },
        {
          Date: "2023-08-02",
          "Column 1": 7,
          "Column 2": 14,
          "Column 3": " D21 ",
          "Column 4": 28,
          "Column 5": 35,
        },
        {
          Date: "2023-08-03",
          "Column 1": 3,
          "Column 2": 6,
          "Column 3": " D9 ",
          "Column 4": 12,
          "Column 5": 15,
        },
        {
          Date: "2023-08-04",
          "Column 1": 12,
          "Column 2": 24,
          "Column 3": " D36 ",
          "Column 4": 48,
          "Column 5": 60,
        },
        {
          Date: "2023-08-05",
          "Column 1": 8,
          "Column 2": 16,
          "Column 3": "D24",
          "Column 4": 32,
          "Column 5": 40,
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>
<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex22.PNG?raw=true)

</details>

<a id="styles-format"></a>

## Styles & Format Options [⬆️](#table-of-contents)

In the library, styles are defined with an ID that represents the desired style. This ID is then used to apply the corresponding style to cells. Each cell is associated with only one style. These styles encompass various attributes such as borders, alignment, text color, font family, font size, background, and bold, among others.

The format property is a distinct style attribute. Unlike other styles, the format is predefined and cannot be customized.

<details>
<summary>Display Code</summary>

```javascript
const colorPalette = {
  c1: "2C3639",
  c2: "3F4E4F",
  c3: "A27B5C",
  c4: "DCD7C9",
};
const rowStyle = {
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: colorPalette.c4,
};
const headerStyle = {
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: colorPalette.c2,
};
const data = {
  creator: "mr",
  styles: {
    Date: {
      ...rowStyle,
      format: "short_date",
    },
    Time: {
      ...rowStyle,
      format: "time",
    },
    Percentage: {
      ...rowStyle,
      format: "percentage",
    },
    Float: {
      ...rowStyle,
      format: "float_2",
      alignment: {
        horizontal: "left",
      },
    },
    Fraction: {
      ...rowStyle,
      format: "fraction",
    },
    "Long Number Column 1": {
      ...rowStyle,
      format: "dollar_2",
      alignment: {
        indent: 3,
        rtl: true,
        horizontal: "left",
      },
    },
    "Long Number Column 2": {
      ...rowStyle,
      format: "num_sep",
      alignment: {
        ltr: true,
        horizontal: "left",
      },
    },
    headerStyle: {
      ...headerStyle,
    },
  },
  sheet: [
    {
      styleCellCondition(data, fullData, rowIndex, colIndex, fromHeader) {
        if (fromHeader) {
          return "headerStyle";
        } else {
          if (colIndex == 0) {
            return "Date";
          } else if (colIndex == 1) {
            return "Time";
          } else if (colIndex == 2) {
            return "Percentage";
          } else if (colIndex == 3) {
            return "Float";
          } else if (colIndex == 4) {
            return "Fraction";
          } else if (colIndex == 5) {
            return "Long Number Column 1";
          } else {
            return "Long Number Column 2";
          }
        }
      },
      headers: [
        { label: "Date", text: "Date" },
        { label: "Time", text: "Time" },
        { label: "Percentage", text: "Percentage" },
        { label: "Float", text: "Float" },
        { label: "Fraction", text: "Fraction" },
        {
          label: "Long Number Column 1",
          text: "Long Number Column 1",
          size: 50,
        },
        {
          label: "Long Number Column 2",
          text: "Long Number Column 2",
          size: 50,
        },
      ],
      data: [
        {
          Date: "2023-08-01",
          Time: "09:00 AM",
          Percentage: 0.7525,
          Float: 0.7525,
          Fraction: "1/4",
          "Long Number Column 1": 123456789012345,
          "Long Number Column 2": 987654321098765,
        },
        {
          Date: "2023-08-02",
          Time: "02:30 PM",
          Percentage: 0.4275,
          Float: 0.4275,
          Fraction: "3/8",
          "Long Number Column 1": 456789012345678,
          "Long Number Column 2": 876543210987654,
        },
        {
          Date: "2023-08-03",
          Time: "10:45 AM",
          Percentage: 0.955,
          Float: 0.955,
          Fraction: "5/6",
          "Long Number Column 1": 789012345678901,
          "Long Number Column 2": 765432109876543,
        },
        {
          Date: "2023-08-04",
          Time: "04:15 PM",
          Percentage: 0.2875,
          Float: 0.2875,
          Fraction: "2/7",
          "Long Number Column 1": 123450987654321,
          "Long Number Column 2": 654321098765432,
        },
        {
          Date: "2023-08-05",
          Time: "08:20 AM",
          Percentage: 0.6,
          Float: 0.6,
          Fraction: "4/5",
          "Long Number Column 1": 543210987654321,
          "Long Number Column 2": 543210987654321,
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>
<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex5.PNG?raw=true)

</details>

<a id="merging-cells"></a>

## Merging Cells Options [⬆️](#table-of-contents)

We offer options for merging rows of cells together. Additionally, we provide a function-based approach to facilitate cell merging.

<details>
<summary>Display Code</summary>

```javascript
const colorPalette = {
  c1: "DBE2EF",
  c2: "112D4E",
  c4: "F9F7F7",
};
const rowStyle = {
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: colorPalette.c4,
  border: {
    full: {
      style: "medium",
      color: colorPalette.c1,
    },
  },
  alignment: {
    horizontal: "left",
    vertical: "top",
  },
};
const headerStyle = {
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: colorPalette.c2,
};
const merge = [];
let mergeStart = false;
const data = {
  creator: "mr",
  styles: {
    Date: {
      ...rowStyle,
      format: "short_date",
    },
    Time: {
      ...rowStyle,
      format: "time",
    },
    Percentage: {
      ...rowStyle,
      format: "percentage",
    },
    Float: {
      ...rowStyle,
      format: "float_2",
    },
    Fraction: {
      ...rowStyle,
      format: "fraction",
    },
    "Long Number Column 1": {
      ...rowStyle,
      format: "dollar_2",
    },
    "Long Number Column 2": {
      ...rowStyle,
      format: "num_sep",
    },
    headerStyle: {
      ...headerStyle,
    },
  },
  sheet: [
    {
      mergeRowDataCondition(data, key, index, fromHeader) {
        if (fromHeader) {
          return false;
        } else {
          if (mergeStart) {
            if (merge[key] == data) {
              return true;
            } else {
              merge[key] = data;
              return false;
            }
          } else {
            mergeStart = true;
            merge[key] = data;
            return true;
          }
        }
      },
      styleCellCondition(data, fullData, rowIndex, colIndex, fromHeader) {
        if (fromHeader) {
          return "headerStyle";
        } else {
          if (colIndex == 0) {
            return "Date";
          } else if (colIndex == 1) {
            return "Time";
          } else if (colIndex == 2) {
            return "Percentage";
          } else if (colIndex == 3) {
            return "Float";
          } else if (colIndex == 4) {
            return "Fraction";
          } else if (colIndex == 5) {
            return "Long Number Column 1";
          } else {
            return "Long Number Column 2";
          }
        }
      },
      headers: [
        { label: "Date", text: "Date" },
        { label: "Time", text: "Time" },
        { label: "Percentage", text: "Percentage" },
        { label: "Float", text: "Float" },
        { label: "Fraction", text: "Fraction" },
        {
          label: "Long Number Column 1",
          text: "Long Number Column 1",
          size: 50,
        },
        {
          label: "Long Number Column 2",
          text: "Long Number Column 2",
          size: 50,
        },
      ],
      data: [
        {
          Date: "2023-08-01",
          Time: "09:00 AM",
          Percentage: 0.7525,
          Float: 0.7525,
          Fraction: "1/4",
          "Long Number Column 1": 123456789012345,
          "Long Number Column 2": 987654321098765,
        },
        {
          Date: "2023-08-01",
          Time: "02:30 PM",
          Percentage: 0.4275,
          Float: 0.4275,
          Fraction: "3/8",
          "Long Number Column 1": 123456789012345,
          "Long Number Column 2": 876543210987654,
        },
        {
          Date: "2023-08-03",
          Time: "10:45 AM",
          Percentage: 0.955,
          Float: 0.955,
          Fraction: "5/6",
          "Long Number Column 1": 789012345678901,
          "Long Number Column 2": 765432109876543,
        },
        {
          Date: "2023-08-04",
          Time: "04:15 PM",
          Percentage: 0.2875,
          Float: 0.2875,
          Fraction: "2/7",
          "Long Number Column 1": 123450987654321,
          "Long Number Column 2": 654321098765432,
        },
        {
          Date: "2023-08-05",
          Time: "08:20 AM",
          Percentage: 0.6,
          Float: 0.6,
          Fraction: "4/5",
          "Long Number Column 1": 543210987654321,
          "Long Number Column 2": 543210987654321,
        },
        {
          Date: "2023-08-05",
          Time: "08:20 AM",
          Percentage: 0.6,
          Float: 0.6,
          Fraction: "4/5",
          "Long Number Column 1": 543210987654321,
          "Long Number Column 2": 543210987654321,
        },
        {
          Date: "2023-08-05",
          Time: "08:20 AM",
          Percentage: 0.6,
          Float: 0.61,
          Fraction: "4/5",
          "Long Number Column 1": 543210987654321,
          "Long Number Column 2": 543210987654321,
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>
<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex6.PNG?raw=true)

</details>

<a id="group-rows"></a>

## Group Rows Options [⬆️](#table-of-contents)

With this library, you can group rows together using two properties added to the data: outlineLevel and hidden. The outlineLevel represents the grouping level, while hidden represents whether the default state is collapsed or not. The key of this property is changeable, so in case of a conflict with your data, you have the flexibility to modify it. We will discuss how to change the key in the next section.

<details>
<summary>Display Code</summary>

```javascript
const colorPalette = {
  c4: "FCD1D1",
  c2: "AEE1E1",
};
const rowStyle = {
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: "112D4E",
  alignment: {
    horizontal: "left",
    vertical: "top",
  },
};
const headerStyle = {
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: "112D4E",
};
const data = {
  creator: "mr",
  styles: {
    rowStyle: {
      ...rowStyle,
    },
    headerStyle: {
      ...headerStyle,
    },
  },
  sheet: [
    {
      styleCellCondition(data, fullData, rowIndex, colIndex, fromHeader) {
        if (fromHeader) {
          return "headerStyle";
        } else {
          return "rowStyle";
        }
      },
      headers: [
        { label: "ID", text: "ID" },
        { label: "Name", text: "Name" },
        { label: "Column 1", text: "Column 1" },
        { label: "Column 2", text: "Column 2" },
        { label: "Column 3", text: "Column 3" },
        { label: "Column 4", text: "Column 4" },
        { label: "Column 5", text: "Column 5" },
      ],
      data: [
        {
          ID: 1,
          Name: "Category A",
          "Column 1": 10,
          "Column 2": 20,
          "Column 3": 30,
          "Column 4": 40,
          "Column 5": 50,
          outlineLevel: 1,
        },
        {
          ID: 2,
          Name: "Item 1",
          "Column 1": 5,
          "Column 2": 10,
          "Column 3": 15,
          "Column 4": 20,
          "Column 5": 25,
          outlineLevel: 2,
        },
        {
          ID: 3,
          Name: "Item 2",
          "Column 1": 3,
          "Column 2": 6,
          "Column 3": 9,
          "Column 4": 12,
          "Column 5": 15,
          outlineLevel: 2,
        },
        {
          ID: 4,
          Name: "Item 3",
          "Column 1": 2,
          "Column 2": 4,
          "Column 3": 6,
          "Column 4": 8,
          "Column 5": 10,
          outlineLevel: 2,
        },
        {
          ID: 5,
          Name: "Category B",
          "Column 1": 20,
          "Column 2": 40,
          "Column 3": 60,
          "Column 4": 80,
          "Column 5": 100,
          outlineLevel: 1,
        },
        {
          ID: 6,
          Name: "Item 1",
          "Column 1": 10,
          "Column 2": 20,
          "Column 3": 30,
          "Column 4": 40,
          "Column 5": 50,
          hidden: 1,
          outlineLevel: 2,
        },
        {
          ID: 7,
          Name: "Item 2",
          "Column 1": 6,
          "Column 2": 12,
          "Column 3": 18,
          "Column 4": 24,
          "Column 5": 30,
          hidden: 1,
          outlineLevel: 2,
        },
        {
          ID: 8,
          Name: "Item 3",
          "Column 1": 4,
          "Column 2": 8,
          "Column 3": 12,
          "Column 4": 16,
          "Column 5": 20,
          hidden: 1,
          outlineLevel: 2,
        },
        {
          ID: 9,
          Name: "Category C",
          "Column 1": 30,
          "Column 2": 60,
          "Column 3": 90,
          "Column 4": 120,
          "Column 5": 150,
          outlineLevel: 1,
        },
        {
          ID: 10,
          Name: "Item 1",
          "Column 1": 15,
          "Column 2": 30,
          "Column 3": 45,
          "Column 4": 60,
          "Column 5": 75,
          outlineLevel: 2,
        },
        {
          ID: 11,
          Name: "Item 2",
          "Column 1": 9,
          "Column 2": 18,
          "Column 3": 27,
          "Column 4": 36,
          "Column 5": 45,
          outlineLevel: 2,
        },
        {
          ID: 12,
          Name: "Item 3",
          "Column 1": 6,
          "Column 2": 12,
          "Column 3": 18,
          "Column 4": 24,
          "Column 5": 30,
          outlineLevel: 2,
        },
        {
          ID: 13,
          Name: "Summary",
          "Column 1": 60,
          "Column 2": 120,
          "Column 3": 180,
          "Column 4": 240,
          "Column 5": 300,
          outlineLevel: 3,
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>
<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex7.PNG?raw=true)

</details>

## Complex Options [⬆️](#table-of-contents)

In the examples below, we aim to define some fun scenarios that could be useful for more complex use cases.

Adjusting Key Properties and Row Height
You have the ability to change the key of reserved properties such as height, hidden, and more. Additionally, you can adjust the height of rows as needed.

<details>
<summary>Display Code</summary>

```javascript
const colorPalette = {
  c4: "F08A5D",
  c2: "F9ED69",
};
const rowStyle = {
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: "6A2C70",
  alignment: {
    horizontal: "left",
    vertical: "center",
  },
};
const headerStyle = {
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: "6A2C70",
};
const data = {
  creator: "mr",
  styles: {
    rowStyle: {
      ...rowStyle,
    },
    headerStyle: {
      ...headerStyle,
    },
  },
  sheet: [
    {
      mapSheetDataOption: {
        hidden: "notShow",
        height: "h",
        outlineLevel: "group",
      },
      styleCellCondition(data, fullData, rowIndex, colIndex, fromHeader) {
        if (fromHeader) {
          return "headerStyle";
        } else {
          return "rowStyle";
        }
      },
      headers: [
        { label: "ID", text: "ID" },
        { label: "Name", text: "Name" },
        { label: "Column 1", text: "Column 1" },
        { label: "Column 2", text: "Column 2" },
        { label: "Column 3", text: "Column 3" },
        { label: "Column 4", text: "Column 4" },
        { label: "Column 5", text: "Column 5" },
      ],
      data: [
        {
          ID: 1,
          Name: "Category A",
          "Column 1": 10,
          "Column 2": 20,
          "Column 3": 30,
          "Column 4": 40,
          "Column 5": 50,
          h: 30,
          group: 1,
        },
        {
          ID: 2,
          Name: "Item 1",
          "Column 1": 5,
          "Column 2": 10,
          "Column 3": 15,
          "Column 4": 20,
          "Column 5": 25,
          h: 30,
          group: 2,
        },
        {
          ID: 3,
          Name: "Item 2",
          "Column 1": 3,
          "Column 2": 6,
          "Column 3": 9,
          "Column 4": 12,
          "Column 5": 15,
          h: 30,
          group: 2,
        },
        {
          ID: 4,
          Name: "Item 3",
          "Column 1": 2,
          "Column 2": 4,
          "Column 3": 6,
          "Column 4": 8,
          "Column 5": 10,
          h: 30,
          group: 2,
        },
        {
          ID: 5,
          Name: "Category B",
          "Column 1": 20,
          "Column 2": 40,
          "Column 3": 60,
          "Column 4": 80,
          "Column 5": 100,
          h: 30,
          group: 1,
        },
        {
          ID: 6,
          Name: "Item 1",
          "Column 1": 10,
          "Column 2": 20,
          "Column 3": 30,
          "Column 4": 40,
          "Column 5": 50,
          notShow: 1,
          h: 30,
          group: 2,
        },
        {
          ID: 7,
          Name: "Item 2",
          "Column 1": 6,
          "Column 2": 12,
          "Column 3": 18,
          "Column 4": 24,
          "Column 5": 30,
          notShow: 1,
          h: 30,
          group: 2,
        },
        {
          ID: 8,
          Name: "Item 3",
          "Column 1": 4,
          "Column 2": 8,
          "Column 3": 12,
          "Column 4": 16,
          "Column 5": 20,
          notShow: 1,
          h: 30,
          group: 2,
        },
        {
          ID: 9,
          Name: "Category C",
          "Column 1": 30,
          "Column 2": 60,
          "Column 3": 90,
          "Column 4": 120,
          "Column 5": 150,
          h: 30,
          group: 1,
        },
        {
          ID: 10,
          Name: "Item 1",
          "Column 1": 15,
          "Column 2": 30,
          "Column 3": 45,
          "Column 4": 60,
          "Column 5": 75,
          h: 30,
          group: 2,
        },
        {
          ID: 11,
          Name: "Item 2",
          "Column 1": 9,
          "Column 2": 18,
          "Column 3": 27,
          "Column 4": 36,
          "Column 5": 45,
          h: 30,
          group: 2,
        },
        {
          ID: 12,
          Name: "Item 3",
          "Column 1": 6,
          "Column 2": 12,
          "Column 3": 18,
          "Column 4": 24,
          "Column 5": 30,
          h: 30,
          group: 2,
        },
        {
          ID: 13,
          Name: "Summary",
          "Column 1": 60,
          "Column 2": 120,
          "Column 3": 180,
          "Column 4": 240,
          "Column 5": 300,
          h: 30,
          group: 3,
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>
<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex8.PNG?raw=true)

</details>

<a id="shift-title"></a>

## Shift & Title Option [⬆️](#table-of-contents)

The shift feature allows you to adjust the starting point of generating an Excel file. The title option, on the other hand, is used when you want to include a title at the top of the generated file.

<details>
<summary>Display Code</summary>

```javascript
const colorPalette = {
  c4: "FFC7C7",
  c2: "8785A2",
};
const rowAlignment = {
  alignment: {
    horizontal: "left",
    vertical: "center",
  },
};
const rowStyle = {
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: "6A2C70",
  ...rowAlignment,
};
const headerStyle = {
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: "#FFFFFF",
};
const data = {
  creator: "mr",
  styles: {
    "c0<0.3": {
      backgroundColor: "DCD6F7",
      color: "424874s",
      ...rowAlignment,
    },
    male: {
      backgroundColor: "95E1D3",
      color: "252A34",
      ...rowAlignment,
    },
    female: {
      backgroundColor: "F38181",
      color: "252A34",
      ...rowAlignment,
    },
    rowStyle: {
      ...rowStyle,
    },
    headerStyle: {
      ...headerStyle,
    },
  },
  sheet: [
    {
      shiftTop: 5,
      shiftLeft: 5,
      styleCellCondition(data, fullData, rowIndex, colIndex, fromHeader) {
        if (fromHeader) {
          return "headerStyle";
        } else {
          if (colIndex == 0 && data < 0.3) {
            return "c0<0.3";
          } else if (colIndex == 3) {
            if (data) {
              return "male";
            } else {
              return "female";
            }
          } else {
            return "rowStyle";
          }
        }
      },
      headers: [
        { label: "c1", text: "**" },
        { label: "c2", text: "++" },
        { label: "c3", text: "Name" },
        { label: "c5", text: "Gender" },
      ],
      data: [
        { c1: 0.756, c2: 150, c3: "John", c5: 1 },
        { c1: 0.238, c2: 120, c3: "Jane", c5: 0 },
        { c1: 0.865, c2: 180, c3: "Michael", c5: 1 },
        { c1: 0.412, c2: 130, c3: "Emily", c5: 0 },
        { c1: 0.587, c2: 160, c3: "William", c5: 1 },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<a id="comment"></a>

## Comment Option [⬆️](#table-of-contents)

<details>
<summary>Display Code</summary>

```javascript
const colorPalette = {
  c4: "61677A",
  c2: "FFF6E0",
};
const rowAlignment = {
  alignment: {
    horizontal: "left",
    vertical: "center",
  },
};
const rowStyle = {
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: "6A2C70",
  ...rowAlignment,
};
const headerStyle = {
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: "#FFFFFF",
};
const data = {
  addDefaultTitleStyle: true,
  creator: "mr",
  styles: {
    "c0<0.3": {
      backgroundColor: "DCD6F7",
      color: "424874s",
      ...rowAlignment,
    },
    male: {
      backgroundColor: "95E1D3",
      color: "252A34",
      ...rowAlignment,
    },
    female: {
      backgroundColor: "F38181",
      color: "252A34",
      ...rowAlignment,
    },
    rowStyle: {
      ...rowStyle,
    },
    headerStyle: {
      ...headerStyle,
    },
  },
  sheet: [
    {
      shiftTop: 1,
      shiftLeft: 1,
      title: {
        comment: "This is comment on table",
        shiftTop: 1,
        shiftLeft: -1,
        consommeRow: 4,
        consommeCol: 6,
        text: "Title",
      },
      commentCondition: function (
        data,
        object,
        headerKey,
        rowIndex,
        colIndex,
        fromHeader
      ) {
        if (fromHeader) {
          let textDataC0 = data.text.charAt(0);
          if (textDataC0.toUpperCase() != textDataC0) {
            return {
              comment: `
Header should start with ${textDataC0.toUpperCase()}`,
              author: "System",
            };
          }
        }
        return false;
      },
      styleCellCondition(data, fullData, rowIndex, colIndex, fromHeader) {
        if (fromHeader) {
          return "headerStyle";
        } else {
          if (colIndex == 0 && data < 0.3) {
            return "c0<0.3";
          } else if (colIndex == 3) {
            if (data) {
              return "male";
            } else {
              return "female";
            }
          } else {
            return "rowStyle";
          }
        }
      },
      headers: [
        {
          label: "c1",
          text: "**",
          comment: {
            author: "mr",
            comment: "misspell in header",
          },
        },
        { label: "c2", text: "++" },
        { label: "c3", text: "Name" },
        { label: "c5", text: "gender" },
      ],
      data: [
        { c1: 0.756, c2: 150, c3: "John", c5: 1 },
        {
          c1: 0.238,
          c2: 120,
          c3: "Jane",
          c5: 0,
          comment: {
            c3: "Comment on Jane",
          },
        },
        { c1: 0.865, c2: 180, c3: "Michael", c5: 1 },
        { c1: 0.412, c2: 130, c3: "Emily", c5: 0 },
        { c1: 0.587, c2: 160, c3: "William", c5: 1 },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>
<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex14.PNG?raw=true)

</details>

<a id="multi-style-value"></a>

## Multi Style value Option [⬆️](#table-of-contents)

<details>
<summary>Display Code</summary>

```javascript
const colorPalette = {
  c4: "F7E987",
  c2: "5B9A8B",
};
const rowAlignment = {
  alignment: {
    horizontal: "left",
    vertical: "center",
  },
};
const rowStyle = {
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: "6A2C70",
  ...rowAlignment,
};
const headerStyle = {
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: "#000000",
};
const data = {
  addDefaultTitleStyle: true,
  creator: "mr",
  styles: {
    title: {
      size: 48,
      backgroundColor: "E5BA73",
      alignment: {
        horizontal: "center",
        vertical: "center",
      },
    },
    t2: {
      size: 40,
      color: "FFFFFF",
    },
    t1: {
      color: "555555",
    },
    "c0<0.3": {
      backgroundColor: "DCD6F7",
      color: "424874s",
      ...rowAlignment,
    },
    male: {
      backgroundColor: "95E1D3",
      color: "252A34",
      ...rowAlignment,
    },
    female: {
      backgroundColor: "F38181",
      color: "252A34",
      ...rowAlignment,
    },
    rowStyle: {
      ...rowStyle,
    },
    headerStyle: {
      ...headerStyle,
    },
  },
  sheet: [
    {
      shiftTop: 1,
      shiftLeft: 1,
      title: {
        comment: "This is comment on table",
        shiftTop: 1,
        shiftLeft: -1,
        consommeRow: 4,
        consommeCol: 6,
        multiStyleValue: {
          reg: [
            {
              reg: /t/gi,
              styleId: "t2",
            },
          ],
        },
        // height: 100,
        styleId: "title",
        text: "Title",
      },
      commentCondition: function (
        data,
        object,
        headerKey,
        rowIndex,
        colIndex,
        fromHeader
      ) {
        if (fromHeader) {
          let textDataC0 = data.text.charAt(0);
          if (textDataC0.toUpperCase() != textDataC0) {
            return {
              comment: `
Header should start with ${textDataC0.toUpperCase()}`,
              author: "System",
            };
          }
        }
        return false;
      },
      styleCellCondition(data, fullData, rowIndex, colIndex, fromHeader) {
        if (fromHeader) {
          return "headerStyle";
        } else {
          if (colIndex == 0 && data < 0.3) {
            return "c0<0.3";
          } else if (colIndex == 3) {
            if (data) {
              return "male";
            } else {
              return "female";
            }
          } else {
            return "rowStyle";
          }
        }
      },
      headers: [
        {
          label: "c1",
          text: "**",
          comment: {
            author: "mr",
            comment: "misspell in header",
          },
        },
        {
          label: "c2",
          text: "++",
        },
        {
          label: "c3",
          text: "Name",
          multiStyleValue: {
            N: "t1",
            a: "t2",
          },
        },
        { label: "c5", text: "gender" },
      ],
      data: [
        { c1: 0.756, c2: 150, c3: "John", c5: 1 },
        {
          c1: 0.238,
          c2: 120,
          c3: "Jane",
          c5: 0,
          comment: {
            c3: "Comment on Jane",
          },
        },
        { c1: 0.865, c2: 180, c3: "Michael", c5: 1 },
        { c1: 0.412, c2: 130, c3: "Emily", c5: 0 },
        { c1: 0.587, c2: 160, c3: "William", c5: 1 },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

```javascript
const color = { c4: "00ADB5", c2: "393E46" };
const alignLeft = { alignment: { horizontal: "left", vertical: "center" } };
const rowStyle = {
  backgroundColor: color.c2,
  fontFamily: "Times New Roman",
  color: "6A2C70",
  ...alignLeft,
};
const headerStyle = {
  backgroundColor: color.c4,
  fontFamily: "Times New Roman",
  color: "#000000",
};
const data = {
  addDefaultTitleStyle: true,
  creator: "mr",
  styles: {
    col2: {
      color: "#F9ED69",
    },
    col1: {
      color: "#FF2E63",
    },
    title: {
      size: 48,
      backgroundColor: "F9ED69",
      color: "6A2C70",
      alignment: { horizontal: "center", vertical: "center" },
    },
    t2: { color: "F08A5D" },
    t1: { color: "555555" },
    "c0<0.3": { backgroundColor: "DCD6F7", color: "424874s", ...alignLeft },
    male: { backgroundColor: "95E1D3", color: "252A34", ...alignLeft },
    female: { backgroundColor: "F38181", color: "252A34", ...alignLeft },
    rowStyle: { ...rowStyle },
    headerStyle: { ...headerStyle },
  },
  sheet: [
    {
      useSplitBaseOnMatch: true,
      shiftTop: 1,
      shiftLeft: 1,
      title: {
        comment: "This is comment on table",
        shiftTop: 1,
        shiftLeft: -1,
        consommeRow: 4,
        consommeCol: 6,
        multiStyleValue: {
          "+": "t1",
          ".": "t1",
          "|": "t1",
          "\\": "t1",
          reg: [{ reg: /t/gi, styleId: "t2" }],
        },
        styleId: "title",
        text: "Title 1",
      },
      multiStyleCondition: function (
        data,
        object,
        headerKey,
        rowIndex,
        colIndex,
        fromHeader
      ) {
        if (fromHeader) {
          let charList = data.text.match(/./g);
          let result = charList.reduce(
            (res, curr, index) => {
              try {
                new RegExp(curr);
              } catch (error) {
                curr = "\\" + curr;
              }
              if (index % 2 == 0) {
                res.result.reg.push({
                  reg: new RegExp("[" + curr + "]"),
                  styleId: "col1",
                });
                return res;
              } else {
                res.result.reg.push({
                  reg: new RegExp("[" + curr + "]"),
                  styleId: "col2",
                });
                return res;
              }
            },
            { curr: "", result: { reg: [] } }
          );
          return result.result;
        } else {
          let charList = data.match(/./g);
          let result = charList.reduce(
            (res, curr, index) => {
              try {
                new RegExp(curr);
              } catch (error) {
                curr = "\\" + curr;
              }
              if (index % 2 == 0) {
                res.result.reg.push({
                  reg: new RegExp("[" + curr + "]"),
                  styleId: "col1",
                });
                return res;
              } else {
                res.result.reg.push({
                  reg: new RegExp("[" + curr + "]"),
                  styleId: "col2",
                });
                return res;
              }
            },
            { curr: "", result: { reg: [] } }
          );

          return result.result;
        }
      },
      commentCondition: function (o, r, i, s, u, c) {
        if (c) {
          let d = o.text.charAt(0);
          if (d.toUpperCase() != d)
            return {
              comment: `
Header should start with ${d.toUpperCase()}`,
              author: "System",
            };
        }
        return !1;
      },
      styleCellCondition(o, r, s, i, u) {
        return u
          ? "headerStyle"
          : i == 0 && o < 0.3
          ? "c0<0.3"
          : i == 3
          ? o
            ? "male"
            : "female"
          : "rowStyle";
      },
      headers: [
        {
          label: "c1",
          text: "**",
          comment: { author: "mr", comment: "misspell in header" },
        },
        { label: "c2", text: "++" },
        {
          label: "c3",
          text: "Name",
          multiStyleValue: { N: "t1", a: "t2" },
        },
        { label: "c5", text: "gender" },
      ],
      data: [
        { c1: "0.756", c2: "150", c3: "John", c5: "1" },
        {
          c1: "0.238",
          c2: "120",
          c3: "Jane",
          c5: "0",
          comment: { c3: "Comment on Jane" },
        },
        { c1: "0.865", c2: "180", c3: "Michael", c5: "1" },
        { c1: "0.412", c2: "130", c3: "Emily", c5: "0" },
        { c1: "0.587", c2: "160", c3: "William", c5: "1" },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>
<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex16.PNG?raw=true)

</details>

<a id="conditional-styling"></a>

## Conditional Styling [⬆️](#table-of-contents)

Using the 'styleCellCondition' option, you can apply styles to each cell based on specific conditions as needed.

<details>
<summary>Display Code</summary>

```javascript
const colorPalette = {
  c4: "2B2E4A",
  c2: "E84545",
};
const rowAlignment = {
  alignment: {
    horizontal: "left",
    vertical: "center",
  },
};
const rowStyle = {
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: "6A2C70",
  ...rowAlignment,
};
const headerStyle = {
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: "#FFFFFF",
};
const data = {
  creator: "mr",
  styles: {
    "c0<0.3": {
      backgroundColor: "DCD6F7",
      color: "424874s",
      ...rowAlignment,
    },
    male: {
      backgroundColor: "95E1D3",
      color: "252A34",
      ...rowAlignment,
    },
    female: {
      backgroundColor: "F38181",
      color: "252A34",
      ...rowAlignment,
    },
    rowStyle: {
      ...rowStyle,
    },
    headerStyle: {
      ...headerStyle,
    },
  },
  sheet: [
    {
      styleCellCondition(data, fullData, rowIndex, colIndex, fromHeader) {
        if (fromHeader) {
          return "headerStyle";
        } else {
          if (colIndex == 0 && data < 0.3) {
            return "c0<0.3";
          } else if (colIndex == 3) {
            if (data) {
              return "male";
            } else {
              return "female";
            }
          } else {
            return "rowStyle";
          }
        }
      },
      headers: [
        { label: "c1", text: "**" },
        { label: "c2", text: "++" },
        { label: "c3", text: "Name" },
        { label: "c5", text: "Gender" },
      ],
      data: [
        { c1: 0.756, c2: 150, c3: "John", c5: 1 },
        { c1: 0.238, c2: 120, c3: "Jane", c5: 0 },
        { c1: 0.865, c2: 180, c3: "Michael", c5: 1 },
        { c1: 0.412, c2: 130, c3: "Emily", c5: 0 },
        { c1: 0.587, c2: 160, c3: "William", c5: 1 },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<a id="conditinal-formating"></a>

## Conditinal Formating [⬆️](#table-of-contents)

You can apply Excel conditional formatting in two ways. One method is through the Header object, which affects a whole column. The other method is using the Sheet object, where you need to specify the start and end properties.

<details>
<summary>Display Code</summary>

```javascript
const data = {
  activateConditionalFormatting: true,
  styles: {
    ct: {
      type: "conditionalFormatting",
      backgroundColor: "222831",
      color: "EEEEEE",
    },
  },
  sheet: [
    {
      conditionalFormatting: [
        {
          type: "dataBar",
          start: "A2",
          end: "B6",
        },
        {
          type: "colorScale",
          start: "C2",
          end: "C6",
        },
        {
          type: "top",
          start: "D2",
          end: "D6",
          value: 2,
        },
        {
          type: "top",
          start: "E2",
          end: "E6",
          styleId: "ct",
          value: 2,
          bottom: true,
        },
        {
          type: "top",
          operator: "aboveAverage",
          start: "F2",
          end: "F6",
          value: 1,
        },
        {
          type: "top",
          operator: "belowAverage",
          start: "G2",
          styleId: "ct",
          end: "G6",
          value: 1,
        },
      ],
      headers: [
        {
          label: "Column1",
          text: "Text1",
        },
        {
          label: "Column2",
          text: "Text2",
        },
        {
          label: "Column3",
          text: "Text3",
        },
        { label: "Column4", text: "Text4" },

        { label: "Column5", text: "Text5" },
        { label: "Column6", text: "Text6" },
        { label: "Column7", text: "Text7" },
      ],
      data: [
        {
          Column1: 123,
          Column2: 456,
          Column3: 789,
          Column4: 101,
          Column5: 101,
          Column6: 101,
          Column7: 101,
        },
        {
          Column1: 234,
          Column2: 567,
          Column3: 890,
          Column4: 202,
          Column5: 202,
          Column6: 202,
          Column7: 202,
        },
        {
          Column1: 345,
          Column2: 678,
          Column3: 901,
          Column4: 303,
          Column5: 303,
          Column6: 303,
          Column7: 303,
        },
        {
          Column1: 456,
          Column2: 789,
          Column3: 123,
          Column4: 404,
          Column5: 404,
          Column6: 404,
          Column7: 404,
        },
      ],
    },
  ],
};

ExcelTable.generateExcel(data);
```

</details>

<details>

<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex19.PNG?raw=true)

</details>

<a id="conditinal-formating-header"></a>

### On Column(Header) [⬆️](#table-of-contents)

Here's an example of how to use conditional formatting on a header.

<details>
<summary>Display Code</summary>

```javascript
const data = {
  activateConditionalFormatting: true,
  styles: {
    ct: {
      type: "conditionalFormatting",
      backgroundColor: "222831",
      color: "EEEEEE",
    },
  },
  sheet: [
    {
      headers: [
        {
          label: "Column1",
          text: "Text1",
          conditionalFormatting: { type: "dataBar" },
        },
        {
          label: "Column2",
          text: "Text2",
          conditionalFormatting: { type: "dataBar" },
        },
        {
          label: "Column3",
          text: "Text3",
          conditionalFormatting: { type: "colorScale" },
        },
        {
          label: "Column4",
          text: "Text4",
          conditionalFormatting: { type: "top", value: 2 },
        },

        {
          label: "Column5",
          text: "Text5",
          conditionalFormatting: {
            type: "top",
            styleId: "ct",
            value: 2,
            bottom: true,
          },
        },
        {
          label: "Column6",
          text: "Text6",
          conditionalFormatting: {
            type: "top",
            operator: "aboveAverage",
            value: 1,
          },
        },
        {
          label: "Column7",
          text: "Text7",
          conditionalFormatting: {
            type: "top",
            operator: "belowAverage",
            styleId: "ct",
            value: 1,
          },
        },
      ],
      data: [
        {
          Column1: 123,
          Column2: 456,
          Column3: 789,
          Column4: 101,
          Column5: 101,
          Column6: 101,
          Column7: 101,
        },
        {
          Column1: 234,
          Column2: 567,
          Column3: 890,
          Column4: 202,
          Column5: 202,
          Column6: 202,
          Column7: 202,
        },
        {
          Column1: 345,
          Column2: 678,
          Column3: 901,
          Column4: 303,
          Column5: 303,
          Column6: 303,
          Column7: 303,
        },
        {
          Column1: 456,
          Column2: 789,
          Column3: 123,
          Column4: 404,
          Column5: 404,
          Column6: 404,
          Column7: 404,
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>

<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex20.PNG?raw=true)

</details>

<details>
<summary>Display Code</summary>

```javascript
const data = {
  activateConditionalFormatting: true,
  styles: {
    ct: {
      type: "conditionalFormatting",
      backgroundColor: "222831",
      color: "EEEEEE",
    },
  },
  sheet: [
    {
      headers: [
        {
          label: "Column1",
          text: "Text1",
          conditionalFormatting: {
            type: "iconSet",
            operator: "3Arrows", // 4Arrows, 5Arrows, 5ArrowsGray, 4ArrowsGray, 3ArrowsGray
          },
        },
        {
          label: "Column2",
          text: "Text2",
          conditionalFormatting: {
            type: "cells",
            operator: "ct",
            value: "a",
          },
        },
        {
          label: "Column3",
          text: "Text3",
          conditionalFormatting: {
            type: "cells",
            operator: "gt", // lt, eq
            value: 10,
            styleId: "ct",
          },
        },
        { label: "Column4", text: "Text4" },
      ],
      data: [
        {
          Column1: 42,
          Column2: "John",
          Column3: 7,
          Column4: "Doe",
        },
        {
          Column1: 25,
          Column2: "Alice",
          Column3: 13,
          Column4: "Smith",
        },
        {
          Column1: 33,
          Column2: "Bob",
          Column3: 18,
          Column4: "Johnson",
        },
        {
          Column1: 56,
          Column2: "Eve",
          Column3: 22,
          Column4: "Brown",
        },
      ],
    },
  ],
};

ExcelTable.generateExcel(data);
```

</details>
<details>

<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex18.PNG?raw=true)

</details>

<a id="conditinal-formating-general-use"></a>

### General use [⬆️](#table-of-contents)

General use and sheet objects offer the same functionality but are more flexible, allowing you to apply them to multiple columns and various other use cases

<details>
<summary>Display Code</summary>

```javascript
const data = {
  activateConditionalFormatting: true,
  styles: {
    ct: {
      type: "conditionalFormatting",
      backgroundColor: "222831",
      color: "EEEEEE",
    },
  },
  sheet: [
    {
      conditionalFormatting: [
        {
          type: "dataBar",
          start: "A2",
          end: "B6",
        },
        {
          type: "colorScale",
          start: "C2",
          end: "C6",
        },
        {
          type: "top",
          start: "D2",
          end: "D6",
          value: 2,
        },
        {
          type: "top",
          start: "E2",
          end: "E6",
          styleId: "ct",
          value: 2,
          bottom: true,
        },
        {
          type: "top",
          operator: "aboveAverage",
          start: "F2",
          end: "F6",
          value: 1,
        },
        {
          type: "top",
          operator: "belowAverage",
          start: "G2",
          styleId: "ct",
          end: "G6",
          value: 1,
        },
      ],
      headers: [
        {
          label: "Column1",
          text: "Text1",
        },
        {
          label: "Column2",
          text: "Text2",
        },
        {
          label: "Column3",
          text: "Text3",
        },
        { label: "Column4", text: "Text4" },

        { label: "Column5", text: "Text5" },
        { label: "Column6", text: "Text6" },
        { label: "Column7", text: "Text7" },
      ],
      data: [
        {
          Column1: 123,
          Column2: 456,
          Column3: 789,
          Column4: 101,
          Column5: 101,
          Column6: 101,
          Column7: 101,
        },
        {
          Column1: 234,
          Column2: 567,
          Column3: 890,
          Column4: 202,
          Column5: 202,
          Column6: 202,
          Column7: 202,
        },
        {
          Column1: 345,
          Column2: 678,
          Column3: 901,
          Column4: 303,
          Column5: 303,
          Column6: 303,
          Column7: 303,
        },
        {
          Column1: 456,
          Column2: 789,
          Column3: 123,
          Column4: 404,
          Column5: 404,
          Column6: 404,
          Column7: 404,
        },
      ],
    },
  ],
};

ExcelTable.generateExcel(data);
```

</details>

<details>
<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex19.PNG?raw=true)

</details>

<a id="image-option"></a>

## Image Option [⬆️](#table-of-contents)

<details>

<summary>Display Code</summary>

```javascript
const data = {
  creator: "mr",
  sheet: [
    {
      images: [
        {
          url: "https://mohammadrezaeicode.github.io/mr-excel-page/img/ezgif.com-gif-maker.gif",
          from: "H1",
          type: "one",
        },
        {
          url: "https://mohammadrezaeicode.github.io/mr-excel-page/img/uniqe.jpg",
          from: "H2",
          type: "one",
        },

        {
          url: "https://mohammadrezaeicode.github.io/mr-excel-page/img/ex.PNG",
          from: "H3",
          type: "onde",
        },
        {
          url: "https://mohammadrezaeicode.github.io/mr-excel-page/img/ex.PNG",
          from: "H4",
          type: "two",
        },
        {
          url: "https://mohammadrezaeicode.github.io/mr-excel-page/img/ezgif.com-gif-maker.gif",
          from: "E1",
          to: "F10",
          type: "two",
        },
        {
          url: "https://mohammadrezaeicode.github.io/mr-excel-page/img/uniqe.jpg",
          from: "H6",
          type: "two",
        },
      ],

      headers: [
        {
          label: "Name",
          text: "Name",
        },
        { label: "Color", text: "Color" },
        { label: "Size", text: "Size" },
        { label: "Price", text: "Price" },
      ],
      data: [
        {
          Name: "Rose",
          Color: "Red",
          Size: "Medium",
          Price: 5.99,
        },
        {
          Name: "Tulip",
          Color: "Yellow",
          Size: "Small",
          Price: 2.49,
        },
        {
          Name: "Daisy",
          Color: "White",
          Size: "Small",
          Price: 1.99,
        },
        {
          Name: "Sunflower",
          Color: "Yellow",
          Size: "Large",
          Price: 4.99,
        },
        {
          Name: "Lily",
          Color: "Pink",
          Size: "Medium",
          Price: 3.99,
        },
        {
          Name: "Daffodil",
          Color: "Yellow",
          Size: "Small",
          Price: 2.49,
        },
        {
          Name: "Orchid",
          Color: "Purple",
          Size: "Medium",
          Price: 6.99,
        },
        {
          Name: "Carnation",
          Color: "Red",
          Size: "Small",
          Price: 1.99,
        },
        {
          Name: "Hyacinth",
          Color: "Blue",
          Size: "Medium",
          Price: 4.49,
        },
        {
          Name: "Pansy",
          Color: "Purple",
          Size: "Small",
          Price: 2.99,
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>
<details>
<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex17.PNG?raw=true)

</details>

<a id="checkbox"></a>

## Checkbox [⬆️](#table-of-contents)

<details>

<summary>Display Code</summary>

```javascript
const data = {
  styles: {},
  sheet: [
    {
      checkbox: [
        {
          col: 3,
          row: 1,
          text: "Checkbox 2",
          link: "G3",
        },
        {
          col: 1,
          row: 2,
          text: "Check",
          threeD: true,
        },
        {
          col: 5,
          row: 1,
          text: "Checkbox 2",
          checked: true,
        },
        {
          col: 1,
          row: 12,
          text: "Check",
          mixed: true,
        },
      ],
      headers: [{ label: "head1", text: "", comment: "" }],
      data: [{ head1: "" }],
    },
    {
      checkbox: [
        {
          col: 0,
          row: 1,
          text: "Checkbox 2",
          mixed: true,
        },
        {
          col: 1,
          row: 2,
          text: "Check",
          link: "B3",
        },
        {
          col: 5,
          row: 1,
          text: "Checkbox 2",
          threeD: true,
        },
        {
          col: 3,
          row: 3,
          text: "Check",
          checked: true,
        },
      ],
      headers: [{ label: "head1", text: "", comment: "" }],
      data: [{ head1: "" }],
    },
  ],
};

ExcelTable.generateExcel(data);
```

</details>

<details>

<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex21.PNG?raw=true)

</details>

<a id="global-setting"></a>

## Global Setting [⬆️](#table-of-contents)

With the global property, you can define Excel table options globally. When you pass a key to generateExcel data, it will merge with the Excel table option if the key exists in the global Excel table settings.

<details>

<summary>Display Code</summary>

```javascript
const colorPalette = {
  c1: "2C3639",
  c2: "3F4E4F",
  c3: "A27B5C",
  c4: "DCD7C9",
};
const rowStyle = {
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: colorPalette.c4,
};
const headerStyle = {
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: colorPalette.c2,
};
const headers = [
  { label: "Date", text: "Date" },
  { label: "Time", text: "Time" },
  { label: "Percentage", text: "Percentage" },
  { label: "Float", text: "Float" },
  { label: "Fraction", text: "Fraction" },
  { label: "Long Number Column 1", text: "Long Number Column 1", size: 50 },
  { label: "Long Number Column 2", text: "Long Number Column 2", size: 50 },
];
const items = [
  {
    Date: "2023-08-01",
    Time: "09:00 AM",
    Percentage: 0.7525,
    Float: 0.7525,
    Fraction: "1/4",
    "Long Number Column 1": 123456789012345,
    "Long Number Column 2": 987654321098765,
  },
  {
    Date: "2023-08-02",
    Time: "02:30 PM",
    Percentage: 0.4275,
    Float: 0.4275,
    Fraction: "3/8",
    "Long Number Column 1": 456789012345678,
    "Long Number Column 2": 876543210987654,
  },
  {
    Date: "2023-08-03",
    Time: "10:45 AM",
    Percentage: 0.955,
    Float: 0.955,
    Fraction: "5/6",
    "Long Number Column 1": 789012345678901,
    "Long Number Column 2": 765432109876543,
  },
  {
    Date: "2023-08-04",
    Time: "04:15 PM",
    Percentage: 0.2875,
    Float: 0.2875,
    Fraction: "2/7",
    "Long Number Column 1": 123450987654321,
    "Long Number Column 2": 654321098765432,
  },
  {
    Date: "2023-08-05",
    Time: "08:20 AM",
    Percentage: 0.6,
    Float: 0.6,
    Fraction: "4/5",
    "Long Number Column 1": 543210987654321,
    "Long Number Column 2": 543210987654321,
  },
];
const data = {
  creator: "mr",
  styles: {
    Date: {
      ...rowStyle,
      format: "short_date",
    },
    Time: {
      ...rowStyle,
      format: "time",
    },
    Percentage: {
      ...rowStyle,
      format: "percentage",
    },
    Float: {
      ...rowStyle,
      format: "float_2",
      alignment: {
        horizontal: "left",
      },
    },
    Fraction: {
      ...rowStyle,
      format: "fraction",
    },
    "Long Number Column 1": {
      ...rowStyle,
      format: "dollar_2",
      alignment: {
        indent: 3,
        rtl: true,
        horizontal: "left",
      },
    },
    "Long Number Column 2": {
      ...rowStyle,
      format: "num_sep",
      alignment: {
        ltr: true,
        horizontal: "left",
      },
    },
    headerStyle: {
      ...headerStyle,
    },
  },
  sheet: [
    {
      styleCellCondition(data, fullData, rowIndex, colIndex, fromHeader) {
        if (fromHeader) {
          return "headerStyle";
        } else {
          if (colIndex == 0) {
            return "Date";
          } else if (colIndex == 1) {
            return "Time";
          } else if (colIndex == 2) {
            return "Percentage";
          } else if (colIndex == 3) {
            return "Float";
          } else if (colIndex == 4) {
            return "Fraction";
          } else if (colIndex == 5) {
            return "Long Number Column 1";
          } else {
            return "Long Number Column 2";
          }
        }
      },
      headers: [],
      data: [],
    },
  ],
};
ExcelTable.addGlobalOptionFromExcelTable("global-1", data);

ExcelTable.generateExcel(
  {
    sheet: [
      {
        headers,
        data: items,
      },
    ],
  },
  "global-1"
);
ExcelTable.addGlobalOptions(
  "global-1",
  "styles.headerStyle.backgroundColor",
  colorPalette.c2
);
ExcelTable.addGlobalOptions(
  "global-1",
  "styles.headerStyle.color",
  colorPalette.c4
);
ExcelTable.generateExcel(
  {
    sheet: [
      {
        headers,
        data: items,
      },
    ],
  },
  "global-1"
);
ExcelTable.addGlobalOptions(
  "global-1",
  "styles.headerStyle.backgroundColor",
  colorPalette.c4
);
ExcelTable.addGlobalOptions(
  "global-1",
  "styles.headerStyle.color",
  colorPalette.c2
);
ExcelTable.generateExcel(
  {
    sheet: [
      {
        headers,
        data: items,
      },
    ],
  },
  "global-1"
);
```

</details>

<a id="page-option"></a>

## Page Option [⬆️](#table-of-contents)

With PageOption, you can utilize Excel headers and footers, specify first, odd, and even pages separately, apply styles to them, and more.

<details>

<summary>Display Code</summary>

```javascript
const colorPalette = {
  c1: "561C24",
  c2: "6D2932",
  c3: "C7B7A3",
  c4: "E8D8C4",
};
const first = {
  type: "HF",
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: colorPalette.c1,
};
const second = {
  type: "HF",
  backgroundColor: colorPalette.c1,
  fontFamily: "Times New Roman",
  color: colorPalette.c2,
};
const data = {
  creator: "mr",
  styles: {
    first,
    second,
  },
  sheet: [
    {
      pageOption: {
        margin: {
          top: 0.85,
          right: 0.85,
          left: 0.85,
          bottom: 0.85,
        },
        header: {
          first: {
            c: {
              text: "First Header center",
              styleId: "first",
            },
            l: {
              text: "First Header Left",
            },
          },
          odd: {
            r: {
              text: "Odd Headers right",
            },
          },
        },
        footer: {
          even: {
            c: {
              text: "Even Footers center",
              styleId: "second",
            },
          },
        },
      },
      headers: [
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
      ],
      data: [
        {
          id: 1525528872576,
          name: "Declan",
          surname: "Bright",
          parentId: 9193814686664,
          work: "National Park Service ranger",
          birthDate: "1854-02-28T22:39:49.028Z",
        },
        {
          id: 1933819177102,
          name: "Phoebe",
          surname: "Austin",
          parentId: 7377315170005,
          work: "Director of audience services",
          birthDate: "1852-04-18T10:17:54.557Z",
        },
        {
          id: 9541178576629,
          name: "Waite",
          surname: "Aveyard",
          parentId: 8770728211947,
          work: "Retired",
          birthDate: "1854-12-11T17:36:40.765Z",
        },
        {
          id: 2473638123843,
          name: "Kaitlin",
          surname: "Courtney",
          parentId: 3076331620534,
          work: "Maintenance engineering",
          birthDate: "1854-03-04T01:50:50.209Z",
        },
        {
          id: 7140741364134,
          name: "Tristan",
          surname: "King",
          parentId: 4674378612151,
          work: "Japanese idol",
          birthDate: "1853-12-08T21:09:19.672Z",
        },
        {
          id: 8756865627934,
          name: "Egerton",
          surname: "Mendenhall",
          parentId: 4218847452166,
          work: "Japanese idol",
          birthDate: "1854-10-24T12:41:51.902Z",
        },
        {
          id: 5098636603452,
          name: "Adele",
          surname: "Monroe",
          parentId: 9762225632557,
          work: "Unemployed",
          birthDate: "1852-10-11T09:48:24.128Z",
        },
        {
          id: 6700176094055,
          name: "Katey",
          surname: "Lewis",
          parentId: 7938892587472,
          work: "work from home",
          birthDate: "1852-05-19T09:36:47.969Z",
        },
        {
          id: 6869885121153,
          name: "Rodney",
          surname: "Saxby",
          parentId: 576630955195,
          work: "Cardiovascular Technologist",
          birthDate: "1852-11-07T03:33:46.973Z",
        },
        {
          id: 1389127579072,
          name: "Dare",
          surname: "Kenny",
          parentId: 4017546822023,
          work: "Engineering technologist",
          birthDate: "1852-10-25T23:36:29.109Z",
        },
        {
          id: 6801196917678,
          name: "Potter",
          surname: "Bradbury",
          parentId: 3750611241942,
          work: "Petroleum geologist",
          birthDate: "1852-10-12T06:59:33.426Z",
        },
        {
          id: 1981219057492,
          name: "Charlene",
          surname: "Stuttaford",
          parentId: 5645329253708,
          work: "Harlequin",
          birthDate: "1853-11-22T01:25:50.328Z",
        },
        {
          id: 8447379393015,
          name: "Molly",
          surname: "Lawrenson",
          parentId: 7440555772320,
          work: "Healthcare science",
          birthDate: "1853-01-20T19:18:17.595Z",
        },
        {
          id: 1421335493979,
          name: "Tyson",
          surname: "Grennan",
          parentId: 1518948755485,
          work: "Pilot",
          birthDate: "1852-09-04T12:05:31.252Z",
        },
        {
          id: 5260799325935,
          name: "Sophia",
          surname: "Buckley",
          parentId: 8474979566542,
          work: "Stunt performer",
          birthDate: "1853-01-05T04:12:27.037Z",
        },
        {
          id: 2231363435720,
          name: "Melody",
          surname: "Humpherys",
          parentId: 2317759882951,
          work: "work from home",
          birthDate: "1853-01-12T00:39:05.356Z",
        },
        {
          id: 9555420460973,
          name: "Kristi",
          surname: "Adkins",
          parentId: 9735997282913,
          work: "Upholsterer",
          birthDate: "1853-10-19T15:26:25.022Z",
        },
        {
          id: 1613978413981,
          name: "Paul",
          surname: "Cook",
          parentId: 202934661757,
          work: "Pipefitter",
          birthDate: "1853-02-21T08:46:25.185Z",
        },
        {
          id: 6752497709181,
          name: "Kayden",
          surname: "Woodcock",
          parentId: 2850592397073,
          work: "Arborist",
          birthDate: "1854-03-05T02:17:31.620Z",
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>

<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex25.PNG?raw=true)

</details>

<a id="rtl-option"></a>

## RTL Option [⬆️](#table-of-contents)

The sheet direction can be changed using the rtl property. If set to true, the direction changes from left to right to right to left.

<details>

<summary>Display Code</summary>

```javascript
const colorPalette = {
  c1: "561C24",
  c2: "6D2932",
  c3: "C7B7A3",
  c4: "E8D8C4",
};
const first = {
  type: "HF",
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: colorPalette.c4,
};
const second = {
  type: "HF",
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: colorPalette.c2,
};
const data = {
  creator: "mr",
  styles: {
    first,
    second,
  },
  sheet: [
    {
      rtl: true,
      headers: [
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
      ],
      data: [
        {
          id: 1525528872576,
          name: "Declan",
          surname: "Bright",
          parentId: 9193814686664,
          work: "National Park Service ranger",
          birthDate: "1854-02-28T22:39:49.028Z",
        },
        {
          id: 1933819177102,
          name: "Phoebe",
          surname: "Austin",
          parentId: 7377315170005,
          work: "Director of audience services",
          birthDate: "1852-04-18T10:17:54.557Z",
        },
        {
          id: 9541178576629,
          name: "Waite",
          surname: "Aveyard",
          parentId: 8770728211947,
          work: "Retired",
          birthDate: "1854-12-11T17:36:40.765Z",
        },
        {
          id: 2473638123843,
          name: "Kaitlin",
          surname: "Courtney",
          parentId: 3076331620534,
          work: "Maintenance engineering",
          birthDate: "1854-03-04T01:50:50.209Z",
        },
        {
          id: 7140741364134,
          name: "Tristan",
          surname: "King",
          parentId: 4674378612151,
          work: "Japanese idol",
          birthDate: "1853-12-08T21:09:19.672Z",
        },
        {
          id: 8756865627934,
          name: "Egerton",
          surname: "Mendenhall",
          parentId: 4218847452166,
          work: "Japanese idol",
          birthDate: "1854-10-24T12:41:51.902Z",
        },
        {
          id: 5098636603452,
          name: "Adele",
          surname: "Monroe",
          parentId: 9762225632557,
          work: "Unemployed",
          birthDate: "1852-10-11T09:48:24.128Z",
        },
        {
          id: 6700176094055,
          name: "Katey",
          surname: "Lewis",
          parentId: 7938892587472,
          work: "work from home",
          birthDate: "1852-05-19T09:36:47.969Z",
        },
        {
          id: 6869885121153,
          name: "Rodney",
          surname: "Saxby",
          parentId: 576630955195,
          work: "Cardiovascular Technologist",
          birthDate: "1852-11-07T03:33:46.973Z",
        },
        {
          id: 1389127579072,
          name: "Dare",
          surname: "Kenny",
          parentId: 4017546822023,
          work: "Engineering technologist",
          birthDate: "1852-10-25T23:36:29.109Z",
        },
        {
          id: 6801196917678,
          name: "Potter",
          surname: "Bradbury",
          parentId: 3750611241942,
          work: "Petroleum geologist",
          birthDate: "1852-10-12T06:59:33.426Z",
        },
        {
          id: 1981219057492,
          name: "Charlene",
          surname: "Stuttaford",
          parentId: 5645329253708,
          work: "Harlequin",
          birthDate: "1853-11-22T01:25:50.328Z",
        },
        {
          id: 8447379393015,
          name: "Molly",
          surname: "Lawrenson",
          parentId: 7440555772320,
          work: "Healthcare science",
          birthDate: "1853-01-20T19:18:17.595Z",
        },
        {
          id: 1421335493979,
          name: "Tyson",
          surname: "Grennan",
          parentId: 1518948755485,
          work: "Pilot",
          birthDate: "1852-09-04T12:05:31.252Z",
        },
        {
          id: 5260799325935,
          name: "Sophia",
          surname: "Buckley",
          parentId: 8474979566542,
          work: "Stunt performer",
          birthDate: "1853-01-05T04:12:27.037Z",
        },
        {
          id: 2231363435720,
          name: "Melody",
          surname: "Humpherys",
          parentId: 2317759882951,
          work: "work from home",
          birthDate: "1853-01-12T00:39:05.356Z",
        },
        {
          id: 9555420460973,
          name: "Kristi",
          surname: "Adkins",
          parentId: 9735997282913,
          work: "Upholsterer",
          birthDate: "1853-10-19T15:26:25.022Z",
        },
        {
          id: 1613978413981,
          name: "Paul",
          surname: "Cook",
          parentId: 202934661757,
          work: "Pipefitter",
          birthDate: "1853-02-21T08:46:25.185Z",
        },
        {
          id: 6752497709181,
          name: "Kayden",
          surname: "Woodcock",
          parentId: 2850592397073,
          work: "Arborist",
          birthDate: "1854-03-05T02:17:31.620Z",
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>

<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex34.PNG?raw=true)

</details>

<a id="view-option"></a>

## View Option [⬆️](#table-of-contents)

PageView is used to define the type of view, including options to hide the grid, ruler, and headlines, as well as enabling frozen and split views.

> [!NOTE]
> The frozenOption and splitOption cannot be used together. In splitOption, the split property cannot be set too low or too high, as it specifies the location where the split occurs.

<details>

<summary>Display Code - 1</summary>

```javascript
const colorPalette = {
  c1: "561C24",
  c2: "6D2932",
  c3: "C7B7A3",
  c4: "E8D8C4",
};
const first = {
  type: "HF",
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: colorPalette.c4,
};
const second = {
  type: "HF",
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: colorPalette.c2,
};
const data = {
  creator: "mr",
  styles: {
    first,
    second,
  },
  sheet: [
    {
      viewOption: {
        type: "pageBreakPreview",
        hideHeadlines: true,
        hideGrid: true,
      },
      headers: [
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
      ],
      data: [
        {
          id: 1525528872576,
          name: "Declan",
          surname: "Bright",
          parentId: 9193814686664,
          work: "National Park Service ranger",
          birthDate: "1854-02-28T22:39:49.028Z",
        },
        {
          id: 1933819177102,
          name: "Phoebe",
          surname: "Austin",
          parentId: 7377315170005,
          work: "Director of audience services",
          birthDate: "1852-04-18T10:17:54.557Z",
        },
        {
          id: 9541178576629,
          name: "Waite",
          surname: "Aveyard",
          parentId: 8770728211947,
          work: "Retired",
          birthDate: "1854-12-11T17:36:40.765Z",
        },
        {
          id: 2473638123843,
          name: "Kaitlin",
          surname: "Courtney",
          parentId: 3076331620534,
          work: "Maintenance engineering",
          birthDate: "1854-03-04T01:50:50.209Z",
        },
        {
          id: 7140741364134,
          name: "Tristan",
          surname: "King",
          parentId: 4674378612151,
          work: "Japanese idol",
          birthDate: "1853-12-08T21:09:19.672Z",
        },
        {
          id: 8756865627934,
          name: "Egerton",
          surname: "Mendenhall",
          parentId: 4218847452166,
          work: "Japanese idol",
          birthDate: "1854-10-24T12:41:51.902Z",
        },
        {
          id: 5098636603452,
          name: "Adele",
          surname: "Monroe",
          parentId: 9762225632557,
          work: "Unemployed",
          birthDate: "1852-10-11T09:48:24.128Z",
        },
        {
          id: 6700176094055,
          name: "Katey",
          surname: "Lewis",
          parentId: 7938892587472,
          work: "work from home",
          birthDate: "1852-05-19T09:36:47.969Z",
        },
        {
          id: 6869885121153,
          name: "Rodney",
          surname: "Saxby",
          parentId: 576630955195,
          work: "Cardiovascular Technologist",
          birthDate: "1852-11-07T03:33:46.973Z",
        },
        {
          id: 1389127579072,
          name: "Dare",
          surname: "Kenny",
          parentId: 4017546822023,
          work: "Engineering technologist",
          birthDate: "1852-10-25T23:36:29.109Z",
        },
        {
          id: 6801196917678,
          name: "Potter",
          surname: "Bradbury",
          parentId: 3750611241942,
          work: "Petroleum geologist",
          birthDate: "1852-10-12T06:59:33.426Z",
        },
        {
          id: 1981219057492,
          name: "Charlene",
          surname: "Stuttaford",
          parentId: 5645329253708,
          work: "Harlequin",
          birthDate: "1853-11-22T01:25:50.328Z",
        },
        {
          id: 8447379393015,
          name: "Molly",
          surname: "Lawrenson",
          parentId: 7440555772320,
          work: "Healthcare science",
          birthDate: "1853-01-20T19:18:17.595Z",
        },
        {
          id: 1421335493979,
          name: "Tyson",
          surname: "Grennan",
          parentId: 1518948755485,
          work: "Pilot",
          birthDate: "1852-09-04T12:05:31.252Z",
        },
        {
          id: 5260799325935,
          name: "Sophia",
          surname: "Buckley",
          parentId: 8474979566542,
          work: "Stunt performer",
          birthDate: "1853-01-05T04:12:27.037Z",
        },
        {
          id: 2231363435720,
          name: "Melody",
          surname: "Humpherys",
          parentId: 2317759882951,
          work: "work from home",
          birthDate: "1853-01-12T00:39:05.356Z",
        },
        {
          id: 9555420460973,
          name: "Kristi",
          surname: "Adkins",
          parentId: 9735997282913,
          work: "Upholsterer",
          birthDate: "1853-10-19T15:26:25.022Z",
        },
        {
          id: 1613978413981,
          name: "Paul",
          surname: "Cook",
          parentId: 202934661757,
          work: "Pipefitter",
          birthDate: "1853-02-21T08:46:25.185Z",
        },
        {
          id: 6752497709181,
          name: "Kayden",
          surname: "Woodcock",
          parentId: 2850592397073,
          work: "Arborist",
          birthDate: "1854-03-05T02:17:31.620Z",
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>

<summary>Result Image - 1</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex26.PNG?raw=true)

</details>

<details>

<summary>Display Code - 2</summary>

```javascript
const colorPalette = {
  c1: "561C24",
  c2: "6D2932",
  c3: "C7B7A3",
  c4: "E8D8C4",
};
const first = {
  type: "HF",
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: colorPalette.c4,
};
const second = {
  type: "HF",
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: colorPalette.c2,
};
const data = {
  creator: "mr",
  styles: {
    first,
    second,
  },
  sheet: [
    {
      viewOption: {
        type: "pageLayout",
        hideRuler: true,
      },
      headers: [
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
      ],
      data: [
        {
          id: 1525528872576,
          name: "Declan",
          surname: "Bright",
          parentId: 9193814686664,
          work: "National Park Service ranger",
          birthDate: "1854-02-28T22:39:49.028Z",
        },
        {
          id: 1933819177102,
          name: "Phoebe",
          surname: "Austin",
          parentId: 7377315170005,
          work: "Director of audience services",
          birthDate: "1852-04-18T10:17:54.557Z",
        },
        {
          id: 9541178576629,
          name: "Waite",
          surname: "Aveyard",
          parentId: 8770728211947,
          work: "Retired",
          birthDate: "1854-12-11T17:36:40.765Z",
        },
        {
          id: 2473638123843,
          name: "Kaitlin",
          surname: "Courtney",
          parentId: 3076331620534,
          work: "Maintenance engineering",
          birthDate: "1854-03-04T01:50:50.209Z",
        },
        {
          id: 7140741364134,
          name: "Tristan",
          surname: "King",
          parentId: 4674378612151,
          work: "Japanese idol",
          birthDate: "1853-12-08T21:09:19.672Z",
        },
        {
          id: 8756865627934,
          name: "Egerton",
          surname: "Mendenhall",
          parentId: 4218847452166,
          work: "Japanese idol",
          birthDate: "1854-10-24T12:41:51.902Z",
        },
        {
          id: 5098636603452,
          name: "Adele",
          surname: "Monroe",
          parentId: 9762225632557,
          work: "Unemployed",
          birthDate: "1852-10-11T09:48:24.128Z",
        },
        {
          id: 6700176094055,
          name: "Katey",
          surname: "Lewis",
          parentId: 7938892587472,
          work: "work from home",
          birthDate: "1852-05-19T09:36:47.969Z",
        },
        {
          id: 6869885121153,
          name: "Rodney",
          surname: "Saxby",
          parentId: 576630955195,
          work: "Cardiovascular Technologist",
          birthDate: "1852-11-07T03:33:46.973Z",
        },
        {
          id: 1389127579072,
          name: "Dare",
          surname: "Kenny",
          parentId: 4017546822023,
          work: "Engineering technologist",
          birthDate: "1852-10-25T23:36:29.109Z",
        },
        {
          id: 6801196917678,
          name: "Potter",
          surname: "Bradbury",
          parentId: 3750611241942,
          work: "Petroleum geologist",
          birthDate: "1852-10-12T06:59:33.426Z",
        },
        {
          id: 1981219057492,
          name: "Charlene",
          surname: "Stuttaford",
          parentId: 5645329253708,
          work: "Harlequin",
          birthDate: "1853-11-22T01:25:50.328Z",
        },
        {
          id: 8447379393015,
          name: "Molly",
          surname: "Lawrenson",
          parentId: 7440555772320,
          work: "Healthcare science",
          birthDate: "1853-01-20T19:18:17.595Z",
        },
        {
          id: 1421335493979,
          name: "Tyson",
          surname: "Grennan",
          parentId: 1518948755485,
          work: "Pilot",
          birthDate: "1852-09-04T12:05:31.252Z",
        },
        {
          id: 5260799325935,
          name: "Sophia",
          surname: "Buckley",
          parentId: 8474979566542,
          work: "Stunt performer",
          birthDate: "1853-01-05T04:12:27.037Z",
        },
        {
          id: 2231363435720,
          name: "Melody",
          surname: "Humpherys",
          parentId: 2317759882951,
          work: "work from home",
          birthDate: "1853-01-12T00:39:05.356Z",
        },
        {
          id: 9555420460973,
          name: "Kristi",
          surname: "Adkins",
          parentId: 9735997282913,
          work: "Upholsterer",
          birthDate: "1853-10-19T15:26:25.022Z",
        },
        {
          id: 1613978413981,
          name: "Paul",
          surname: "Cook",
          parentId: 202934661757,
          work: "Pipefitter",
          birthDate: "1853-02-21T08:46:25.185Z",
        },
        {
          id: 6752497709181,
          name: "Kayden",
          surname: "Woodcock",
          parentId: 2850592397073,
          work: "Arborist",
          birthDate: "1854-03-05T02:17:31.620Z",
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>

<summary>Result Image - 2</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex27.PNG?raw=true)

</details>

<details>

<summary>Display Result - 3</summary>

```javascript
const colorPalette = {
  c1: "561C24",
  c2: "6D2932",
  c3: "C7B7A3",
  c4: "E8D8C4",
};
const first = {
  type: "HF",
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: colorPalette.c4,
};
const second = {
  type: "HF",
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: colorPalette.c2,
};
const data = {
  creator: "mr",
  styles: {
    first,
    second,
  },
  sheet: [
    {
      viewOption: {
        frozenOption: {
          type: "R", //or "ROW"
          index: 1,
        },
      },
      headers: [
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
      ],
      data: [
        {
          id: 1525528872576,
          name: "Declan",
          surname: "Bright",
          parentId: 9193814686664,
          work: "National Park Service ranger",
          birthDate: "1854-02-28T22:39:49.028Z",
        },
        {
          id: 1933819177102,
          name: "Phoebe",
          surname: "Austin",
          parentId: 7377315170005,
          work: "Director of audience services",
          birthDate: "1852-04-18T10:17:54.557Z",
        },
        {
          id: 9541178576629,
          name: "Waite",
          surname: "Aveyard",
          parentId: 8770728211947,
          work: "Retired",
          birthDate: "1854-12-11T17:36:40.765Z",
        },
        {
          id: 2473638123843,
          name: "Kaitlin",
          surname: "Courtney",
          parentId: 3076331620534,
          work: "Maintenance engineering",
          birthDate: "1854-03-04T01:50:50.209Z",
        },
        {
          id: 7140741364134,
          name: "Tristan",
          surname: "King",
          parentId: 4674378612151,
          work: "Japanese idol",
          birthDate: "1853-12-08T21:09:19.672Z",
        },
        {
          id: 8756865627934,
          name: "Egerton",
          surname: "Mendenhall",
          parentId: 4218847452166,
          work: "Japanese idol",
          birthDate: "1854-10-24T12:41:51.902Z",
        },
        {
          id: 5098636603452,
          name: "Adele",
          surname: "Monroe",
          parentId: 9762225632557,
          work: "Unemployed",
          birthDate: "1852-10-11T09:48:24.128Z",
        },
        {
          id: 6700176094055,
          name: "Katey",
          surname: "Lewis",
          parentId: 7938892587472,
          work: "work from home",
          birthDate: "1852-05-19T09:36:47.969Z",
        },
        {
          id: 6869885121153,
          name: "Rodney",
          surname: "Saxby",
          parentId: 576630955195,
          work: "Cardiovascular Technologist",
          birthDate: "1852-11-07T03:33:46.973Z",
        },
        {
          id: 1389127579072,
          name: "Dare",
          surname: "Kenny",
          parentId: 4017546822023,
          work: "Engineering technologist",
          birthDate: "1852-10-25T23:36:29.109Z",
        },
        {
          id: 6801196917678,
          name: "Potter",
          surname: "Bradbury",
          parentId: 3750611241942,
          work: "Petroleum geologist",
          birthDate: "1852-10-12T06:59:33.426Z",
        },
        {
          id: 1981219057492,
          name: "Charlene",
          surname: "Stuttaford",
          parentId: 5645329253708,
          work: "Harlequin",
          birthDate: "1853-11-22T01:25:50.328Z",
        },
        {
          id: 8447379393015,
          name: "Molly",
          surname: "Lawrenson",
          parentId: 7440555772320,
          work: "Healthcare science",
          birthDate: "1853-01-20T19:18:17.595Z",
        },
        {
          id: 1421335493979,
          name: "Tyson",
          surname: "Grennan",
          parentId: 1518948755485,
          work: "Pilot",
          birthDate: "1852-09-04T12:05:31.252Z",
        },
        {
          id: 5260799325935,
          name: "Sophia",
          surname: "Buckley",
          parentId: 8474979566542,
          work: "Stunt performer",
          birthDate: "1853-01-05T04:12:27.037Z",
        },
        {
          id: 2231363435720,
          name: "Melody",
          surname: "Humpherys",
          parentId: 2317759882951,
          work: "work from home",
          birthDate: "1853-01-12T00:39:05.356Z",
        },
        {
          id: 9555420460973,
          name: "Kristi",
          surname: "Adkins",
          parentId: 9735997282913,
          work: "Upholsterer",
          birthDate: "1853-10-19T15:26:25.022Z",
        },
        {
          id: 1613978413981,
          name: "Paul",
          surname: "Cook",
          parentId: 202934661757,
          work: "Pipefitter",
          birthDate: "1853-02-21T08:46:25.185Z",
        },
        {
          id: 6752497709181,
          name: "Kayden",
          surname: "Woodcock",
          parentId: 2850592397073,
          work: "Arborist",
          birthDate: "1854-03-05T02:17:31.620Z",
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>

<summary>Result Image - 3</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex28.PNG?raw=true)

</details>

<details>

<summary>Display Code - 4</summary>

```javascript
const colorPalette = {
  c1: "561C24",
  c2: "6D2932",
  c3: "C7B7A3",
  c4: "E8D8C4",
};
const first = {
  type: "HF",
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: colorPalette.c4,
};
const second = {
  type: "HF",
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: colorPalette.c2,
};
const data = {
  creator: "mr",
  styles: {
    first,
    second,
  },
  sheet: [
    {
      viewOption: {
        frozenOption: {
          type: "C", //or "COLUMN"
          index: 1,
        },
      },
      headers: [
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
      ],
      data: [
        {
          id: 1525528872576,
          name: "Declan",
          surname: "Bright",
          parentId: 9193814686664,
          work: "National Park Service ranger",
          birthDate: "1854-02-28T22:39:49.028Z",
        },
        {
          id: 1933819177102,
          name: "Phoebe",
          surname: "Austin",
          parentId: 7377315170005,
          work: "Director of audience services",
          birthDate: "1852-04-18T10:17:54.557Z",
        },
        {
          id: 9541178576629,
          name: "Waite",
          surname: "Aveyard",
          parentId: 8770728211947,
          work: "Retired",
          birthDate: "1854-12-11T17:36:40.765Z",
        },
        {
          id: 2473638123843,
          name: "Kaitlin",
          surname: "Courtney",
          parentId: 3076331620534,
          work: "Maintenance engineering",
          birthDate: "1854-03-04T01:50:50.209Z",
        },
        {
          id: 7140741364134,
          name: "Tristan",
          surname: "King",
          parentId: 4674378612151,
          work: "Japanese idol",
          birthDate: "1853-12-08T21:09:19.672Z",
        },
        {
          id: 8756865627934,
          name: "Egerton",
          surname: "Mendenhall",
          parentId: 4218847452166,
          work: "Japanese idol",
          birthDate: "1854-10-24T12:41:51.902Z",
        },
        {
          id: 5098636603452,
          name: "Adele",
          surname: "Monroe",
          parentId: 9762225632557,
          work: "Unemployed",
          birthDate: "1852-10-11T09:48:24.128Z",
        },
        {
          id: 6700176094055,
          name: "Katey",
          surname: "Lewis",
          parentId: 7938892587472,
          work: "work from home",
          birthDate: "1852-05-19T09:36:47.969Z",
        },
        {
          id: 6869885121153,
          name: "Rodney",
          surname: "Saxby",
          parentId: 576630955195,
          work: "Cardiovascular Technologist",
          birthDate: "1852-11-07T03:33:46.973Z",
        },
        {
          id: 1389127579072,
          name: "Dare",
          surname: "Kenny",
          parentId: 4017546822023,
          work: "Engineering technologist",
          birthDate: "1852-10-25T23:36:29.109Z",
        },
        {
          id: 6801196917678,
          name: "Potter",
          surname: "Bradbury",
          parentId: 3750611241942,
          work: "Petroleum geologist",
          birthDate: "1852-10-12T06:59:33.426Z",
        },
        {
          id: 1981219057492,
          name: "Charlene",
          surname: "Stuttaford",
          parentId: 5645329253708,
          work: "Harlequin",
          birthDate: "1853-11-22T01:25:50.328Z",
        },
        {
          id: 8447379393015,
          name: "Molly",
          surname: "Lawrenson",
          parentId: 7440555772320,
          work: "Healthcare science",
          birthDate: "1853-01-20T19:18:17.595Z",
        },
        {
          id: 1421335493979,
          name: "Tyson",
          surname: "Grennan",
          parentId: 1518948755485,
          work: "Pilot",
          birthDate: "1852-09-04T12:05:31.252Z",
        },
        {
          id: 5260799325935,
          name: "Sophia",
          surname: "Buckley",
          parentId: 8474979566542,
          work: "Stunt performer",
          birthDate: "1853-01-05T04:12:27.037Z",
        },
        {
          id: 2231363435720,
          name: "Melody",
          surname: "Humpherys",
          parentId: 2317759882951,
          work: "work from home",
          birthDate: "1853-01-12T00:39:05.356Z",
        },
        {
          id: 9555420460973,
          name: "Kristi",
          surname: "Adkins",
          parentId: 9735997282913,
          work: "Upholsterer",
          birthDate: "1853-10-19T15:26:25.022Z",
        },
        {
          id: 1613978413981,
          name: "Paul",
          surname: "Cook",
          parentId: 202934661757,
          work: "Pipefitter",
          birthDate: "1853-02-21T08:46:25.185Z",
        },
        {
          id: 6752497709181,
          name: "Kayden",
          surname: "Woodcock",
          parentId: 2850592397073,
          work: "Arborist",
          birthDate: "1854-03-05T02:17:31.620Z",
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>

<summary>Result Image - 4</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex29.PNG?raw=true)

</details>

<details>

<summary>Display Code - 5</summary>

```javascript
const colorPalette = {
  c1: "561C24",
  c2: "6D2932",
  c3: "C7B7A3",
  c4: "E8D8C4",
};
const first = {
  type: "HF",
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: colorPalette.c4,
};
const second = {
  type: "HF",
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: colorPalette.c2,
};
const data = {
  creator: "mr",
  styles: {
    first,
    second,
  },
  sheet: [
    {
      viewOption: {
        frozenOption: {
          type: "B", //or "BOTH"
          index: {
            r: 2,
            c: 3,
          },
        },
      },
      headers: [
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
      ],
      data: [
        {
          id: 1525528872576,
          name: "Declan",
          surname: "Bright",
          parentId: 9193814686664,
          work: "National Park Service ranger",
          birthDate: "1854-02-28T22:39:49.028Z",
        },
        {
          id: 1933819177102,
          name: "Phoebe",
          surname: "Austin",
          parentId: 7377315170005,
          work: "Director of audience services",
          birthDate: "1852-04-18T10:17:54.557Z",
        },
        {
          id: 9541178576629,
          name: "Waite",
          surname: "Aveyard",
          parentId: 8770728211947,
          work: "Retired",
          birthDate: "1854-12-11T17:36:40.765Z",
        },
        {
          id: 2473638123843,
          name: "Kaitlin",
          surname: "Courtney",
          parentId: 3076331620534,
          work: "Maintenance engineering",
          birthDate: "1854-03-04T01:50:50.209Z",
        },
        {
          id: 7140741364134,
          name: "Tristan",
          surname: "King",
          parentId: 4674378612151,
          work: "Japanese idol",
          birthDate: "1853-12-08T21:09:19.672Z",
        },
        {
          id: 8756865627934,
          name: "Egerton",
          surname: "Mendenhall",
          parentId: 4218847452166,
          work: "Japanese idol",
          birthDate: "1854-10-24T12:41:51.902Z",
        },
        {
          id: 5098636603452,
          name: "Adele",
          surname: "Monroe",
          parentId: 9762225632557,
          work: "Unemployed",
          birthDate: "1852-10-11T09:48:24.128Z",
        },
        {
          id: 6700176094055,
          name: "Katey",
          surname: "Lewis",
          parentId: 7938892587472,
          work: "work from home",
          birthDate: "1852-05-19T09:36:47.969Z",
        },
        {
          id: 6869885121153,
          name: "Rodney",
          surname: "Saxby",
          parentId: 576630955195,
          work: "Cardiovascular Technologist",
          birthDate: "1852-11-07T03:33:46.973Z",
        },
        {
          id: 1389127579072,
          name: "Dare",
          surname: "Kenny",
          parentId: 4017546822023,
          work: "Engineering technologist",
          birthDate: "1852-10-25T23:36:29.109Z",
        },
        {
          id: 6801196917678,
          name: "Potter",
          surname: "Bradbury",
          parentId: 3750611241942,
          work: "Petroleum geologist",
          birthDate: "1852-10-12T06:59:33.426Z",
        },
        {
          id: 1981219057492,
          name: "Charlene",
          surname: "Stuttaford",
          parentId: 5645329253708,
          work: "Harlequin",
          birthDate: "1853-11-22T01:25:50.328Z",
        },
        {
          id: 8447379393015,
          name: "Molly",
          surname: "Lawrenson",
          parentId: 7440555772320,
          work: "Healthcare science",
          birthDate: "1853-01-20T19:18:17.595Z",
        },
        {
          id: 1421335493979,
          name: "Tyson",
          surname: "Grennan",
          parentId: 1518948755485,
          work: "Pilot",
          birthDate: "1852-09-04T12:05:31.252Z",
        },
        {
          id: 5260799325935,
          name: "Sophia",
          surname: "Buckley",
          parentId: 8474979566542,
          work: "Stunt performer",
          birthDate: "1853-01-05T04:12:27.037Z",
        },
        {
          id: 2231363435720,
          name: "Melody",
          surname: "Humpherys",
          parentId: 2317759882951,
          work: "work from home",
          birthDate: "1853-01-12T00:39:05.356Z",
        },
        {
          id: 9555420460973,
          name: "Kristi",
          surname: "Adkins",
          parentId: 9735997282913,
          work: "Upholsterer",
          birthDate: "1853-10-19T15:26:25.022Z",
        },
        {
          id: 1613978413981,
          name: "Paul",
          surname: "Cook",
          parentId: 202934661757,
          work: "Pipefitter",
          birthDate: "1853-02-21T08:46:25.185Z",
        },
        {
          id: 6752497709181,
          name: "Kayden",
          surname: "Woodcock",
          parentId: 2850592397073,
          work: "Arborist",
          birthDate: "1854-03-05T02:17:31.620Z",
        },
      ],
    },
  ],
};
```

</details>

<details>

<summary>Result Image - 5</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex30.PNG?raw=true)

</details>

<details>

<summary>Display Code - 6</summary>

```javascript
const colorPalette = {
  c1: "561C24",
  c2: "6D2932",
  c3: "C7B7A3",
  c4: "E8D8C4",
};
const first = {
  type: "HF",
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: colorPalette.c4,
};
const second = {
  type: "HF",
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: colorPalette.c2,
};
const data = {
  creator: "mr",
  styles: {
    first,
    second,
  },
  sheet: [
    {
      viewOption: {
        splitOption: {
          type: "V", //or "VERTICAL"
          split: 10000,
          startAt: {
            l: "C1",
            r: "E1",
          },
        },
      },
      headers: [
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
      ],
      data: [
        {
          id: 1525528872576,
          name: "Declan",
          surname: "Bright",
          parentId: 9193814686664,
          work: "National Park Service ranger",
          birthDate: "1854-02-28T22:39:49.028Z",
        },
        {
          id: 1933819177102,
          name: "Phoebe",
          surname: "Austin",
          parentId: 7377315170005,
          work: "Director of audience services",
          birthDate: "1852-04-18T10:17:54.557Z",
        },
        {
          id: 9541178576629,
          name: "Waite",
          surname: "Aveyard",
          parentId: 8770728211947,
          work: "Retired",
          birthDate: "1854-12-11T17:36:40.765Z",
        },
        {
          id: 2473638123843,
          name: "Kaitlin",
          surname: "Courtney",
          parentId: 3076331620534,
          work: "Maintenance engineering",
          birthDate: "1854-03-04T01:50:50.209Z",
        },
        {
          id: 7140741364134,
          name: "Tristan",
          surname: "King",
          parentId: 4674378612151,
          work: "Japanese idol",
          birthDate: "1853-12-08T21:09:19.672Z",
        },
        {
          id: 8756865627934,
          name: "Egerton",
          surname: "Mendenhall",
          parentId: 4218847452166,
          work: "Japanese idol",
          birthDate: "1854-10-24T12:41:51.902Z",
        },
        {
          id: 5098636603452,
          name: "Adele",
          surname: "Monroe",
          parentId: 9762225632557,
          work: "Unemployed",
          birthDate: "1852-10-11T09:48:24.128Z",
        },
        {
          id: 6700176094055,
          name: "Katey",
          surname: "Lewis",
          parentId: 7938892587472,
          work: "work from home",
          birthDate: "1852-05-19T09:36:47.969Z",
        },
        {
          id: 6869885121153,
          name: "Rodney",
          surname: "Saxby",
          parentId: 576630955195,
          work: "Cardiovascular Technologist",
          birthDate: "1852-11-07T03:33:46.973Z",
        },
        {
          id: 1389127579072,
          name: "Dare",
          surname: "Kenny",
          parentId: 4017546822023,
          work: "Engineering technologist",
          birthDate: "1852-10-25T23:36:29.109Z",
        },
        {
          id: 6801196917678,
          name: "Potter",
          surname: "Bradbury",
          parentId: 3750611241942,
          work: "Petroleum geologist",
          birthDate: "1852-10-12T06:59:33.426Z",
        },
        {
          id: 1981219057492,
          name: "Charlene",
          surname: "Stuttaford",
          parentId: 5645329253708,
          work: "Harlequin",
          birthDate: "1853-11-22T01:25:50.328Z",
        },
        {
          id: 8447379393015,
          name: "Molly",
          surname: "Lawrenson",
          parentId: 7440555772320,
          work: "Healthcare science",
          birthDate: "1853-01-20T19:18:17.595Z",
        },
        {
          id: 1421335493979,
          name: "Tyson",
          surname: "Grennan",
          parentId: 1518948755485,
          work: "Pilot",
          birthDate: "1852-09-04T12:05:31.252Z",
        },
        {
          id: 5260799325935,
          name: "Sophia",
          surname: "Buckley",
          parentId: 8474979566542,
          work: "Stunt performer",
          birthDate: "1853-01-05T04:12:27.037Z",
        },
        {
          id: 2231363435720,
          name: "Melody",
          surname: "Humpherys",
          parentId: 2317759882951,
          work: "work from home",
          birthDate: "1853-01-12T00:39:05.356Z",
        },
        {
          id: 9555420460973,
          name: "Kristi",
          surname: "Adkins",
          parentId: 9735997282913,
          work: "Upholsterer",
          birthDate: "1853-10-19T15:26:25.022Z",
        },
        {
          id: 1613978413981,
          name: "Paul",
          surname: "Cook",
          parentId: 202934661757,
          work: "Pipefitter",
          birthDate: "1853-02-21T08:46:25.185Z",
        },
        {
          id: 6752497709181,
          name: "Kayden",
          surname: "Woodcock",
          parentId: 2850592397073,
          work: "Arborist",
          birthDate: "1854-03-05T02:17:31.620Z",
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>

<summary>Result Image - 6</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex31.PNG?raw=true)

</details>

<details>

<summary>Display Code - 7</summary>

```javascript
const colorPalette = {
  c1: "561C24",
  c2: "6D2932",
  c3: "C7B7A3",
  c4: "E8D8C4",
};
const first = {
  type: "HF",
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: colorPalette.c4,
};
const second = {
  type: "HF",
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: colorPalette.c2,
};
const data = {
  creator: "mr",
  styles: {
    first,
    second,
  },
  sheet: [
    {
      viewOption: {
        splitOption: {
          type: "H", //or "HORIZONTAL"
          split: 5000,
          startAt: {
            t: "A15",
            b: "A7",
          },
        },
      },
      headers: [
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
      ],
      data: [
        {
          id: 1525528872576,
          name: "Declan",
          surname: "Bright",
          parentId: 9193814686664,
          work: "National Park Service ranger",
          birthDate: "1854-02-28T22:39:49.028Z",
        },
        {
          id: 1933819177102,
          name: "Phoebe",
          surname: "Austin",
          parentId: 7377315170005,
          work: "Director of audience services",
          birthDate: "1852-04-18T10:17:54.557Z",
        },
        {
          id: 9541178576629,
          name: "Waite",
          surname: "Aveyard",
          parentId: 8770728211947,
          work: "Retired",
          birthDate: "1854-12-11T17:36:40.765Z",
        },
        {
          id: 2473638123843,
          name: "Kaitlin",
          surname: "Courtney",
          parentId: 3076331620534,
          work: "Maintenance engineering",
          birthDate: "1854-03-04T01:50:50.209Z",
        },
        {
          id: 7140741364134,
          name: "Tristan",
          surname: "King",
          parentId: 4674378612151,
          work: "Japanese idol",
          birthDate: "1853-12-08T21:09:19.672Z",
        },
        {
          id: 8756865627934,
          name: "Egerton",
          surname: "Mendenhall",
          parentId: 4218847452166,
          work: "Japanese idol",
          birthDate: "1854-10-24T12:41:51.902Z",
        },
        {
          id: 5098636603452,
          name: "Adele",
          surname: "Monroe",
          parentId: 9762225632557,
          work: "Unemployed",
          birthDate: "1852-10-11T09:48:24.128Z",
        },
        {
          id: 6700176094055,
          name: "Katey",
          surname: "Lewis",
          parentId: 7938892587472,
          work: "work from home",
          birthDate: "1852-05-19T09:36:47.969Z",
        },
        {
          id: 6869885121153,
          name: "Rodney",
          surname: "Saxby",
          parentId: 576630955195,
          work: "Cardiovascular Technologist",
          birthDate: "1852-11-07T03:33:46.973Z",
        },
        {
          id: 1389127579072,
          name: "Dare",
          surname: "Kenny",
          parentId: 4017546822023,
          work: "Engineering technologist",
          birthDate: "1852-10-25T23:36:29.109Z",
        },
        {
          id: 6801196917678,
          name: "Potter",
          surname: "Bradbury",
          parentId: 3750611241942,
          work: "Petroleum geologist",
          birthDate: "1852-10-12T06:59:33.426Z",
        },
        {
          id: 1981219057492,
          name: "Charlene",
          surname: "Stuttaford",
          parentId: 5645329253708,
          work: "Harlequin",
          birthDate: "1853-11-22T01:25:50.328Z",
        },
        {
          id: 8447379393015,
          name: "Molly",
          surname: "Lawrenson",
          parentId: 7440555772320,
          work: "Healthcare science",
          birthDate: "1853-01-20T19:18:17.595Z",
        },
        {
          id: 1421335493979,
          name: "Tyson",
          surname: "Grennan",
          parentId: 1518948755485,
          work: "Pilot",
          birthDate: "1852-09-04T12:05:31.252Z",
        },
        {
          id: 5260799325935,
          name: "Sophia",
          surname: "Buckley",
          parentId: 8474979566542,
          work: "Stunt performer",
          birthDate: "1853-01-05T04:12:27.037Z",
        },
        {
          id: 2231363435720,
          name: "Melody",
          surname: "Humpherys",
          parentId: 2317759882951,
          work: "work from home",
          birthDate: "1853-01-12T00:39:05.356Z",
        },
        {
          id: 9555420460973,
          name: "Kristi",
          surname: "Adkins",
          parentId: 9735997282913,
          work: "Upholsterer",
          birthDate: "1853-10-19T15:26:25.022Z",
        },
        {
          id: 1613978413981,
          name: "Paul",
          surname: "Cook",
          parentId: 202934661757,
          work: "Pipefitter",
          birthDate: "1853-02-21T08:46:25.185Z",
        },
        {
          id: 6752497709181,
          name: "Kayden",
          surname: "Woodcock",
          parentId: 2850592397073,
          work: "Arborist",
          birthDate: "1854-03-05T02:17:31.620Z",
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>

<summary>Result Image - 7</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex32.PNG?raw=true)

</details>

<details>

<summary>Display Code - 8</summary>

```javascript
const colorPalette = {
  c1: "561C24",
  c2: "6D2932",
  c3: "C7B7A3",
  c4: "E8D8C4",
};
const first = {
  type: "HF",
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: colorPalette.c4,
};
const second = {
  type: "HF",
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: colorPalette.c2,
};
const data = {
  creator: "mr",
  styles: {
    first,
    second,
  },
  sheet: [
    {
      viewOption: {
        splitOption: {
          type: "B", //or "BOTH"
          split: {
            x: 10000,
            y: 5000,
          },
          startAt: {
            one: "A15",
            two: "A7",
          },
        },
      },
      headers: [
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
      ],
      data: [
        {
          id: 1525528872576,
          name: "Declan",
          surname: "Bright",
          parentId: 9193814686664,
          work: "National Park Service ranger",
          birthDate: "1854-02-28T22:39:49.028Z",
        },
        {
          id: 1933819177102,
          name: "Phoebe",
          surname: "Austin",
          parentId: 7377315170005,
          work: "Director of audience services",
          birthDate: "1852-04-18T10:17:54.557Z",
        },
        {
          id: 9541178576629,
          name: "Waite",
          surname: "Aveyard",
          parentId: 8770728211947,
          work: "Retired",
          birthDate: "1854-12-11T17:36:40.765Z",
        },
        {
          id: 2473638123843,
          name: "Kaitlin",
          surname: "Courtney",
          parentId: 3076331620534,
          work: "Maintenance engineering",
          birthDate: "1854-03-04T01:50:50.209Z",
        },
        {
          id: 7140741364134,
          name: "Tristan",
          surname: "King",
          parentId: 4674378612151,
          work: "Japanese idol",
          birthDate: "1853-12-08T21:09:19.672Z",
        },
        {
          id: 8756865627934,
          name: "Egerton",
          surname: "Mendenhall",
          parentId: 4218847452166,
          work: "Japanese idol",
          birthDate: "1854-10-24T12:41:51.902Z",
        },
        {
          id: 5098636603452,
          name: "Adele",
          surname: "Monroe",
          parentId: 9762225632557,
          work: "Unemployed",
          birthDate: "1852-10-11T09:48:24.128Z",
        },
        {
          id: 6700176094055,
          name: "Katey",
          surname: "Lewis",
          parentId: 7938892587472,
          work: "work from home",
          birthDate: "1852-05-19T09:36:47.969Z",
        },
        {
          id: 6869885121153,
          name: "Rodney",
          surname: "Saxby",
          parentId: 576630955195,
          work: "Cardiovascular Technologist",
          birthDate: "1852-11-07T03:33:46.973Z",
        },
        {
          id: 1389127579072,
          name: "Dare",
          surname: "Kenny",
          parentId: 4017546822023,
          work: "Engineering technologist",
          birthDate: "1852-10-25T23:36:29.109Z",
        },
        {
          id: 6801196917678,
          name: "Potter",
          surname: "Bradbury",
          parentId: 3750611241942,
          work: "Petroleum geologist",
          birthDate: "1852-10-12T06:59:33.426Z",
        },
        {
          id: 1981219057492,
          name: "Charlene",
          surname: "Stuttaford",
          parentId: 5645329253708,
          work: "Harlequin",
          birthDate: "1853-11-22T01:25:50.328Z",
        },
        {
          id: 8447379393015,
          name: "Molly",
          surname: "Lawrenson",
          parentId: 7440555772320,
          work: "Healthcare science",
          birthDate: "1853-01-20T19:18:17.595Z",
        },
        {
          id: 1421335493979,
          name: "Tyson",
          surname: "Grennan",
          parentId: 1518948755485,
          work: "Pilot",
          birthDate: "1852-09-04T12:05:31.252Z",
        },
        {
          id: 5260799325935,
          name: "Sophia",
          surname: "Buckley",
          parentId: 8474979566542,
          work: "Stunt performer",
          birthDate: "1853-01-05T04:12:27.037Z",
        },
        {
          id: 2231363435720,
          name: "Melody",
          surname: "Humpherys",
          parentId: 2317759882951,
          work: "work from home",
          birthDate: "1853-01-12T00:39:05.356Z",
        },
        {
          id: 9555420460973,
          name: "Kristi",
          surname: "Adkins",
          parentId: 9735997282913,
          work: "Upholsterer",
          birthDate: "1853-10-19T15:26:25.022Z",
        },
        {
          id: 1613978413981,
          name: "Paul",
          surname: "Cook",
          parentId: 202934661757,
          work: "Pipefitter",
          birthDate: "1853-02-21T08:46:25.185Z",
        },
        {
          id: 6752497709181,
          name: "Kayden",
          surname: "Woodcock",
          parentId: 2850592397073,
          work: "Arborist",
          birthDate: "1854-03-05T02:17:31.620Z",
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>

<summary>Result Image - 8</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex33.PNG?raw=true)

</details>

<a id="page-break-option"></a>

## Page Break [⬆️](#table-of-contents)

You can use the Excel page break with the pageBreak property.

<details>

<summary>Display Code</summary>

```javascript
const colorPalette = {
  c1: "561C24",
  c2: "6D2932",
  c3: "C7B7A3",
  c4: "E8D8C4",
};
const first = {
  type: "HF",
  backgroundColor: colorPalette.c2,
  fontFamily: "Times New Roman",
  color: colorPalette.c4,
};
const second = {
  type: "HF",
  backgroundColor: colorPalette.c4,
  fontFamily: "Times New Roman",
  color: colorPalette.c2,
};
const data = {
  creator: "mr",
  styles: {
    first,
    second,
  },
  sheet: [
    {
      pageBreak: {
        row: [1, 2, 3, 10],
        column: [4, 6, 15, 17],
      },
      headers: [
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
      ],
      data: [
        {
          id: 1525528872576,
          name: "Declan",
          surname: "Bright",
          parentId: 9193814686664,
          work: "National Park Service ranger",
          birthDate: "1854-02-28T22:39:49.028Z",
        },
        {
          id: 1933819177102,
          name: "Phoebe",
          surname: "Austin",
          parentId: 7377315170005,
          work: "Director of audience services",
          birthDate: "1852-04-18T10:17:54.557Z",
        },
        {
          id: 9541178576629,
          name: "Waite",
          surname: "Aveyard",
          parentId: 8770728211947,
          work: "Retired",
          birthDate: "1854-12-11T17:36:40.765Z",
        },
        {
          id: 2473638123843,
          name: "Kaitlin",
          surname: "Courtney",
          parentId: 3076331620534,
          work: "Maintenance engineering",
          birthDate: "1854-03-04T01:50:50.209Z",
        },
        {
          id: 7140741364134,
          name: "Tristan",
          surname: "King",
          parentId: 4674378612151,
          work: "Japanese idol",
          birthDate: "1853-12-08T21:09:19.672Z",
        },
        {
          id: 8756865627934,
          name: "Egerton",
          surname: "Mendenhall",
          parentId: 4218847452166,
          work: "Japanese idol",
          birthDate: "1854-10-24T12:41:51.902Z",
        },
        {
          id: 5098636603452,
          name: "Adele",
          surname: "Monroe",
          parentId: 9762225632557,
          work: "Unemployed",
          birthDate: "1852-10-11T09:48:24.128Z",
        },
        {
          id: 6700176094055,
          name: "Katey",
          surname: "Lewis",
          parentId: 7938892587472,
          work: "work from home",
          birthDate: "1852-05-19T09:36:47.969Z",
        },
        {
          id: 6869885121153,
          name: "Rodney",
          surname: "Saxby",
          parentId: 576630955195,
          work: "Cardiovascular Technologist",
          birthDate: "1852-11-07T03:33:46.973Z",
        },
        {
          id: 1389127579072,
          name: "Dare",
          surname: "Kenny",
          parentId: 4017546822023,
          work: "Engineering technologist",
          birthDate: "1852-10-25T23:36:29.109Z",
        },
        {
          id: 6801196917678,
          name: "Potter",
          surname: "Bradbury",
          parentId: 3750611241942,
          work: "Petroleum geologist",
          birthDate: "1852-10-12T06:59:33.426Z",
        },
        {
          id: 1981219057492,
          name: "Charlene",
          surname: "Stuttaford",
          parentId: 5645329253708,
          work: "Harlequin",
          birthDate: "1853-11-22T01:25:50.328Z",
        },
        {
          id: 8447379393015,
          name: "Molly",
          surname: "Lawrenson",
          parentId: 7440555772320,
          work: "Healthcare science",
          birthDate: "1853-01-20T19:18:17.595Z",
        },
        {
          id: 1421335493979,
          name: "Tyson",
          surname: "Grennan",
          parentId: 1518948755485,
          work: "Pilot",
          birthDate: "1852-09-04T12:05:31.252Z",
        },
        {
          id: 5260799325935,
          name: "Sophia",
          surname: "Buckley",
          parentId: 8474979566542,
          work: "Stunt performer",
          birthDate: "1853-01-05T04:12:27.037Z",
        },
        {
          id: 2231363435720,
          name: "Melody",
          surname: "Humpherys",
          parentId: 2317759882951,
          work: "work from home",
          birthDate: "1853-01-12T00:39:05.356Z",
        },
        {
          id: 9555420460973,
          name: "Kristi",
          surname: "Adkins",
          parentId: 9735997282913,
          work: "Upholsterer",
          birthDate: "1853-10-19T15:26:25.022Z",
        },
        {
          id: 1613978413981,
          name: "Paul",
          surname: "Cook",
          parentId: 202934661757,
          work: "Pipefitter",
          birthDate: "1853-02-21T08:46:25.185Z",
        },
        {
          id: 6752497709181,
          name: "Kayden",
          surname: "Woodcock",
          parentId: 2850592397073,
          work: "Arborist",
          birthDate: "1854-03-05T02:17:31.620Z",
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<details>

<summary>Result Image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex35.PNG?raw=true)

</details>

<a id="as-table-option"></a>

## As Table [⬆️](#table-of-contents)

The asTable property converts the result into an Excel table.

<details>

<summary>Display Code</summary>

```javascript
const data = {
  creator: "mr",
  sheet: [
    {
      asTable: {},
      headers: [
        { label: "id", text: "ID" },
        { label: "name", text: "Name" },
        { label: "surname", text: "Surname" },
        { label: "parentId", text: "Parent Id" },
        { label: "work", text: "Work" },
        { label: "birthDate", text: "Birth Date", size: 40 },
      ],
      data: [
        {
          id: 1525528872576,
          name: "Declan",
          surname: "Bright",
          parentId: 9193814686664,
          work: "National Park Service ranger",
          birthDate: "1854-02-28T22:39:49.028Z",
        },
        {
          id: 1933819177102,
          name: "Phoebe",
          surname: "Austin",
          parentId: 7377315170005,
          work: "Director of audience services",
          birthDate: "1852-04-18T10:17:54.557Z",
        },
        {
          id: 9541178576629,
          name: "Waite",
          surname: "Aveyard",
          parentId: 8770728211947,
          work: "Retired",
          birthDate: "1854-12-11T17:36:40.765Z",
        },
        {
          id: 2473638123843,
          name: "Kaitlin",
          surname: "Courtney",
          parentId: 3076331620534,
          work: "Maintenance engineering",
          birthDate: "1854-03-04T01:50:50.209Z",
        },
        {
          id: 7140741364134,
          name: "Tristan",
          surname: "King",
          parentId: 4674378612151,
          work: "Japanese idol",
          birthDate: "1853-12-08T21:09:19.672Z",
        },
        {
          id: 8756865627934,
          name: "Egerton",
          surname: "Mendenhall",
          parentId: 4218847452166,
          work: "Japanese idol",
          birthDate: "1854-10-24T12:41:51.902Z",
        },
        {
          id: 5098636603452,
          name: "Adele",
          surname: "Monroe",
          parentId: 9762225632557,
          work: "Unemployed",
          birthDate: "1852-10-11T09:48:24.128Z",
        },
        {
          id: 6700176094055,
          name: "Katey",
          surname: "Lewis",
          parentId: 7938892587472,
          work: "work from home",
          birthDate: "1852-05-19T09:36:47.969Z",
        },
        {
          id: 6869885121153,
          name: "Rodney",
          surname: "Saxby",
          parentId: 576630955195,
          work: "Cardiovascular Technologist",
          birthDate: "1852-11-07T03:33:46.973Z",
        },
        {
          id: 1389127579072,
          name: "Dare",
          surname: "Kenny",
          parentId: 4017546822023,
          work: "Engineering technologist",
          birthDate: "1852-10-25T23:36:29.109Z",
        },
        {
          id: 6801196917678,
          name: "Potter",
          surname: "Bradbury",
          parentId: 3750611241942,
          work: "Petroleum geologist",
          birthDate: "1852-10-12T06:59:33.426Z",
        },
        {
          id: 1981219057492,
          name: "Charlene",
          surname: "Stuttaford",
          parentId: 5645329253708,
          work: "Harlequin",
          birthDate: "1853-11-22T01:25:50.328Z",
        },
        {
          id: 8447379393015,
          name: "Molly",
          surname: "Lawrenson",
          parentId: 7440555772320,
          work: "Healthcare science",
          birthDate: "1853-01-20T19:18:17.595Z",
        },
        {
          id: 1421335493979,
          name: "Tyson",
          surname: "Grennan",
          parentId: 1518948755485,
          work: "Pilot",
          birthDate: "1852-09-04T12:05:31.252Z",
        },
        {
          id: 5260799325935,
          name: "Sophia",
          surname: "Buckley",
          parentId: 8474979566542,
          work: "Stunt performer",
          birthDate: "1853-01-05T04:12:27.037Z",
        },
        {
          id: 2231363435720,
          name: "Melody",
          surname: "Humpherys",
          parentId: 2317759882951,
          work: "work from home",
          birthDate: "1853-01-12T00:39:05.356Z",
        },
        {
          id: 9555420460973,
          name: "Kristi",
          surname: "Adkins",
          parentId: 9735997282913,
          work: "Upholsterer",
          birthDate: "1853-10-19T15:26:25.022Z",
        },
        {
          id: 1613978413981,
          name: "Paul",
          surname: "Cook",
          parentId: 202934661757,
          work: "Pipefitter",
          birthDate: "1853-02-21T08:46:25.185Z",
        },
        {
          id: 6752497709181,
          name: "Kayden",
          surname: "Woodcock",
          parentId: 2850592397073,
          work: "Arborist",
          birthDate: "1854-03-05T02:17:31.620Z",
        },
      ],
    },
  ],
};
ExcelTable.generateExcel(data);
```

</details>

<a id="interface"></a>

## interface [⬆️](#table-of-contents)

The primary interface of the library is located in the excel-table.d.ts file. [Click here](./dist/excel-table.d.ts)/[here](./src/data-model/excel-table.ts) for direct access.

<a id="migrate"></a>

## Migrate Version [⬆️](#table-of-contents)

In this section, we define the significant changes that require migration for the upcoming version.

<a id="migrating-6"></a>

## Migrating from 6 to 7 [⬆️](#table-of-contents)

To successfully migrate from version 6 to version 7, you should update the following options:

- change in the interface of `MultiStyleValue`:

```
export interface MapMultiStyleValue {
  [key: string]: MultiStyleValue[];
}
export interface MultiStyleValue {
  value: string | number;
  styleId?: string;
}
```

<a id="migrating-5"></a>

## Migrating from 5 to 6 [⬆️](#table-of-contents)

To successfully migrate from version 5 to version 6, please implement the following changes:

- **Main Function Updates**
  - The input parameters for `convertTableToExcel` have been modified to:

```
queryForTable?: string,
table?: HTMLTableElement,
config: {
  keepStyle?: boolean;
  rowHeightScaleFunction?: RowHeightScaleFunction;
  colWidthScaleFunction?: ColWidthScaleFunction;
}
```

- The previously defined theme has been removed in favor of using `themeBaseGenerate`, which now requires a color input.[More details here](#theme-base-generate-usage)
- The return type for the `extractExcelData` function has been defined. Please ensure that the TypeScript output is updated accordingly.
- **Import Changes**
  - Some TypeScript file imports may have changed. If you are importing TypeScript files directlly into your project, please verify these imports. For example, the main functionality has shifted from `utils` to `functions`.

<a id="migrating-4"></a>

## Migrating from 4 to 5 [⬆️](#table-of-contents)

For migrating from version 4 to version 5, the following changes need to be applied:

- **Interface & Type Change**:
  - The `mapSheetDataOption` has been relocated to the sheet (ExcelTable @> Sheet).
  - The type of `mapSheetDataOption` & `headerRowOption` has been modified. (ExcelTable->Sheet)
  - The type of `type` in the value of `style`(`StyleBody`) has been modified. (ExcelTable->Style)
  - The values of `wrapText` and `shrinkToFit` in `AlignmentOption` have been changed.(ExcelTable->Style)
  - Changed the interface of `ThemeOption` from `{hIndex?:number;rIndex?:number;nColor?:boolean;hColor?:string;rColor?:string;fieName?:string;}` to `{headerIndex?:number;rowIndex?:number;negativeColor?:boolean;headerColor?:string;rowColor?:string;headerBackgroundColor?:string;rowBackgroundColor?:string;fileName?:string;}`.
  - `themeBaseGenerate` will return a promise
- **Import Change**:
  - type definition moved to `DataModel`(`import { DataModel } from "mr-excel"`)

<a id="migrating-3"></a>

## Migrating from 3 to 4 [⬆️](#table-of-contents)

To migrate from Version 3 to Version 4, follow the steps outlined below:

- **Interface & Type Change**:
  - `activateConditinalFormating` to `activateConditionalFormatting` (ExcelTable)
  - `conditinalFormating` to `conditionalFormatting` (ExcelTable->Sheet)
  - `multiStyleConditin` to `multiStyleCondition` (ExcelTable->Sheet)
  - `commentCodition` to `commentCondition` (ExcelTable->Sheet)
  - `sortAndfilter` to `sortAndFilter` (ExcelTable->Sheet)
  - `conditinalFormating` to `conditionalFormatting` (ExcelTable->Header)
  - `referenceCells` to `referenceCells` (in CustomFormulaSetting,SingleRefFormulaSetting)
- **Import Change**:
  - `ConditinalFormating` to `ConditionalFormatting`
  - `MultiStyleConditinFunction` to `MultiStyleConditionFunction`
- **Input Order Change**:
  - in `StyleCellConditionFunction` order of `rowIndex` and `colIndex` changed

<a id="migrating-2"></a>

## Migrating from 2 to 3 [⬆️](#table-of-contents)

To migrate from Version 2 to Version 3, you need to follow the steps below:

- If you have style changes, make the following adjustments:
  - Change "backgroundColor" to "backgroundColor."
  - Replace "color" with "color."

<a id="release-note"></a>

## Release Notes [⬆️](#table-of-contents)

### Version 7.0.0 (2025-02-16)

#### New Features

- A drop-down option (multi-select option) provides the ability to create a cell that contains multiple selectable values.`sheet`->`[n]`->`dropDowns`
- The `replaceInExcel` functionality in Excel allows you to replace data in an existing file using flags provided within the spreadsheet.

#### Bug Fixes

- `generateExcel` supports empty objects and will generate an empty Excel file.

> [!NOTE]  
> The related interface has not changed, so the sheet needs to be provided in TypeScript.

#### Improvements

- Begin adding JSDoc comments to the main functions and interfaces.

### Version 6.0.1 (2024-08-11)

#### New Features

- Introduced formatMap to support new data formats.
- Added the excelToJson and excelToNode functions.

#### Improvements

- Increased code coverage to 90%.
- Enhanced capability to use image, checkbox, and comment together.
- Incorporated GitHub Community Standards for better collaboration.
- more

#### Bug Fixes

- Resolved issues related to backgroundImage.

### Version 5.3.0 (2024-06-21)

#### New Feature

- feat: add new dollar format (by [Sergio Fernández](https://github.com/xergiodf))

### Version 5.2.0 (2024-02-08)

#### New Features

- `generateCSV` & `generateText` functions create files in different formats, namely `.csv` and `.txt`

### Version 5.1.0 (2024-01-31)

#### New Features

- The `fetch` option allows you to use your method to retrieve images and .xlsx files

### Version 5.0.0 (2024-01-28)

#### New Features

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

#### Improvements

- Reduced the size of the main bundle from 431KB to 181KB.
- Reduced the overall package size.

### Version 4.0.0 (2024-01-06)

#### New Features

- Added tests
- Release Github package

#### Improvements

- Reduced the size of the generated file.
- more

#### Bug Fixes

- Corrected misspellings in interfaces.
- Fixed extractExcelData where the value will now return, and you need to specify if you want to use it in the backend.
- Resolved the issue of shifting the top in the sheet, fixing problems in units.
- more

### Version 3.2.0 (2023-12-29)

#### New Features

- Improvement in the formula section.

### Version 3.0.3 (2023-12-02)

#### Bug Fixes

- sheet option `selected` tab

### Version 3.0.0 (2023-09-24)

#### New Features

- ability to read Excel files

### Version 2.12.0 (2023-09-21)

#### New Features

- We have added conditional formatting capabilities to the general base as well as to headers

### Version 2.11.0 (2023-09-13)

#### Bug Fixes

- bug related to string with special character(&<,...)

#### Improvement

- improvement in generate file

### Version 2.10.0 (2023-09-12)

#### improvement

- Data Can Be Undefined

### Version 2.9.0 (2023-09-10)

#### New Features

- Generate excel base on Theme

### Version 2.8.0 (2023-09-08)

#### New Features

- ability for add image to excel

### Version 2.7.0 (2023-09-02)

#### New Features

- sideBySideLineByLine, multi-table in single sheet

### Version 2.6.0 (2023-08-27)

#### Improvement

- add mode("useSplitBaseOnMatch") that helps multi-style better performance in unexpected results.
- condition function for multi style feature

### Version 2.5.0 (2023-08-26)

#### Improvement

- keep cell style for not match in multi style cell

### Version 2.4.2 (2023-08-24)

#### Bug Fixes

- Error in Merge cell after try multi time

### Version 2.4.1 (2023-08-20)

#### Bug Fixes

- black background in convertTableToExcel

#### Improvement

- Added 2.4.0 Feature example

### Version 2.4.0 (2023-08-20)

#### Improvement

- Added the ability to add comments to cells
- Conditional ability to comment on cells
- Ability to change the style of each character of cells. (only text value)

### Version 2.3.0 (2023-08-16)

#### Improvement

- capability to use var and rgb for backgroundColor, border color and font color

### Version 2.2.2 (2023-08-15)

#### Improvement

- convertTableToExcel: related to hight & width
- convertTableToExcel get optinal function rowHeightScaleFunction & colWidthScaleFunction

### Version 2.1.2 (2023-08-14)

#### Bug Fixes

- Fixed issue with incorrect CDN address.

### Version 2.1.0 (2023-08-14)

#### New Features

- Introducing the ability to convert tables into Excel format.

### Version 2.0.0 (2023-08-13)

#### Bug Fixes

- Fixed issue with incorrect CDN address.

#### New Features

- Added the ability to set the generated file name via the `fileName` property.

### Changes

- Updated the default value of the `generateType` property.

## Changelog [⬆️](#table-of-contents)

For a detailed list of all changes, please refer to the [changelog](CHANGELOG.md).

## Thank You [⬆️](#table-of-contents)

Thank you for choosing our library! We greatly value your feedback and suggestions as we continue to improve and enhance our product.

## Theme images

showcase of output Theme-based Excel can be seen in this [link](Theme.md)

## Example result

showcase of output example can be seen in this [link](Example.md)
