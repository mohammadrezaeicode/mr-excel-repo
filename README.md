# Introduction

Welcome to our JavaScript library designed to effortlessly generate .xlsx files from input objects. This versatile library offers exceptional flexibility and can seamlessly operate on both the client and backend sides of applications.

Our library offers comprehensive support for a wide range of features, including data formatting, formulas, styles, merged cells, and grouped rows.

## Installation

Via CDN

You can utilize our library, which comes bundled with Vite, by including the following link:

```html
<script src="https://unpkg.com/excel-table@latest/dist2/excel-table.js"></script>
```

Alternatively, you have the option to use the bundle with Webpack by incorporating the link provided below:

```html
<script src="https://unpkg.com/excel-table@latest/dist2/excel-table.js"></script>
```

Easily integrate our library into your project using either of these methods, and unlock efficient generation of Excel tables with exceptional flexibility.

Using a Package Manager
To seamlessly integrate our library, you can install it using your preferred package manager:

Via npm:

```terminal/bash
npm install excel-table
```

Using yarn:

```terminal/bash
npm install excel-table
```

Alternatively, you have the option to use pnpm:

```terminal/bash
npm install excel-table
```

Choose the package manager that suits your workflow, and effortlessly bring the power of our library into your project, enabling smooth generation of Excel tables with ease and efficiency.

## Getting Started

After adding the library to your project, generating XLSX files becomes straightforward. You can achieve this by creating a data object similar to the code snippet below:

```javascript
//<https://colorhunt.co/palette/f9ed69f08a5db83b5e6a2c70>
const colorPalette = {
  c1: "F9ED69",
  c2: "#F08A5D",
  c3: "B83B5E",
  c4: "6A2C70",
};
const data = {
  creator: "mr",
  created: "2023-08-06T07:22:40Z",
  modified: "2023-08-06T07:22:40Z",
  styles: {
    formulaStyle: {
      fg: "B83B5E",
      border: {
        full: {
          style: "medium",
          color: "F9ED69",
        },
      },
    },
    headerStyle: {
      fg: "F9ED69",
      fontColor: "#F08A5D",
      bold: true,
    },
    rowStyle: {
      fg: "#F08A5D",
      fontColor: "F9ED69",
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
          test: "dsssssssssssss",
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
