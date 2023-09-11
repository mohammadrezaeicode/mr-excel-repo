# MR Excel

<details>

<summary>images</summary>

![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2001.png?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex16.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex14.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex4.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex9.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex5.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex8.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex1.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex2.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex3.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex6.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex7.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex10.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex11.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex12.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex13.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex15.PNG?raw=true)

</details>

## Introduction

Welcome to our JavaScript library designed to effortlessly generate .xlsx files from input objects. This versatile library offers exceptional flexibility and can seamlessly operate on both the client and backend sides of applications.

Our library offers comprehensive support for a wide range of features, including data formatting, formulas, styles, merged cells, and grouped rows.[more info](https://mohammadrezaeicode.github.io/mr-excel-page/), [Express/backend example](https://github.com/mohammadrezaeicode/mr-excel-repo/tree/main/example/express), [TypeScript example](https://github.com/mohammadrezaeicode/mr-excel-repo/tree/main/example/typescript)

In version 2.1.0, we introduced a new feature called "convertTableToExcel," which enables the generation of an Excel file from a specified table or DOM element (table). The provided query is expected to be a valid input for the querySelector method. This enhancement allows for greater flexibility and convenience when creating Excel files directly from HTML tables.

We have four functions that are defined with specific use cases as follows:

- **`generateExcel`**: This is the primary and most important function that serves as the entry point for all other functions. Its responsibility is to generate an Excel file based on the received input data. We will provide examples of the various options that can be utilized.

- **`convertTableToExcel`**: This function is designed exclusively for **client-side** use. It requires passing a DOM element (a table element) as a parameter. The output of this function is an Excel file generated from the provided table.

- **`sideBySideLineByLine`**: This function offers the capability to generate a single-sheet Excel file containing multiple tables side by side and line by line.

- **`themeBaseGenerate`**: Within this function, we utilize color palettes from **https://colorhunt.co/**. It accepts data and a theme index as inputs, then generates an Excel file with the selected theme applied.[Thems](https://mohammadrezaeicode.github.io/mr-excel-them-page/)

## Installation

**Via CDN**

You can utilize our library, which comes bundled with **Vite**, by including the following link:

```html
<script src="https://unpkg.com/mr-excel@latest/dist/excel-table.umd.js"></script>
```

Alternatively, you have the option to use the bundle with **Webpack** by incorporating the link provided below:

```html
<script src="https://unpkg.com/mr-excel@latest/dist2/excel-table.js"></script>
```

Easily integrate our library into your project using either of these methods, and unlock efficient generation of Excel tables with exceptional flexibility.

Using a Package Manager
To seamlessly integrate our library, you can install it using your preferred package manager:

**Via npm**:

```terminal/bash
npm install mr-excel
```

Using **yarn**:

```terminal/bash
npm install mr-excel
```

Alternatively, you have the option to use **pnpm**:

```terminal/bash
npm install mr-excel
```

Choose the package manager that suits your workflow, and effortlessly bring the power of our library into your project, enabling smooth generation of Excel tables with ease and efficiency.

## Getting Started

After adding the library to your project, generating XLSX files becomes straightforward. You can achieve this by creating a data object similar to the code snippet below:

### themeBaseGenerate

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
ExcelTable.themeBaseGenerate(data, 0);
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
ExcelTable.themeBaseGenerate(data, 12);
```

### convertTableToExcel

```javascript
ExcelTable.convertTableToExcel("#table");
-------------------------------------------------------------------
let element = document.querySelector("#table");
ExcelTable.convertTableToExcel(null, element, true);
-------------------------------------------------------------------
const rowF = (value, index, from) => {
    return 50
}
const colF = (value, index) => {
    return value * 0.19
}
ExcelTable.convertTableToExcel("#table", null, true, rowF, colF)
```

<details>

<summary>result of Example in https://github.com/mohammadrezaeicode/mr-excel-repo/blob/main/example/conv1.html</summary>

![ex](./example/ex13.PNG)

</details>

### sideBySideLineByLine

`sideBySideLineByLine` is a new feature that enables the generation of multiple tables within a single Excel sheet.

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

### generateExcel

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

## General option

Each sheet has options for customization. You can change the sheet name using name, adjust the tab name color with tabColor, control visibility with state, add protection to a sheet via protectionOption, and implement sorting and filtering using sortAndfilter. In the example below, we will demonstrate how to utilize these properties. Additionally, for Excel file information, we offer options such as creator, created, notSave, and modified.

<p style="color:red">*Note: Please use the protectionOption only when necessary, as it may potentially lead to broken generated files. We recommend avoiding the use of other sheet options as well.</p>

<p style="color:red">*Important Note: Excel file information such as 'name', 'created', and 'modified' is extremely sensitive. If incorrect values are used, it can result in Excel file generation issues. Please exercise extra caution and ensure accurate values for these attributes to avoid any potential disruptions.</p>

<details>
<summary>Display code</summary>

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
      sortAndfilter: {
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
        {
          id: 4353606351491,
          name: "Corinna",
          surname: "Powell",
          parentId: 6303270085856,
          work: "Business analyst",
          birthDate: "1853-05-13T14:00:27.525Z",
        },
        {
          id: 9821977853501,
          name: "Alexander",
          surname: "Rowlands",
          parentId: 5281151854805,
          work: "work from home",
          birthDate: "1852-07-29T02:34:26.818Z",
        },
        {
          id: 1789259068865,
          name: "Khloe",
          surname: "Allsebrook",
          parentId: 9085712911231,
          work: "Internet celebrity",
          birthDate: "1853-10-10T01:28:17.141Z",
        },
        {
          id: 1547071460137,
          name: "Sky",
          surname: "Hyde",
          parentId: 3932330547777,
          work: "Retired",
          birthDate: "1854-11-03T05:06:37.477Z",
        },
        {
          id: 8054019194308,
          name: "Niles",
          surname: "Dudley",
          parentId: 9487606369042,
          work: "Porter",
          birthDate: "1852-09-01T05:46:03.040Z",
        },
        {
          id: 6759490924297,
          name: "Valda",
          surname: "Bye",
          parentId: 5146431233541,
          work: "Management",
          birthDate: "1853-09-29T00:33:43.968Z",
        },
        {
          id: 6625148457816,
          name: "Keaton",
          surname: "Boothe",
          parentId: 4935663844945,
          work: "Mental Health Counselor",
          birthDate: "1854-10-25T16:56:16.488Z",
        },
        {
          id: 5968154253225,
          name: "Gill",
          surname: "Voyles",
          parentId: 1358001926693,
          work: "Ophthalmologist",
          birthDate: "1853-09-13T06:48:43.632Z",
        },
        {
          id: 7963337332727,
          name: "Josiah",
          surname: "Engleman",
          parentId: 4661422144081,
          work: "Unemployed",
          birthDate: "1854-05-31T14:12:01.180Z",
        },
        {
          id: 7276643575609,
          name: "Luca",
          surname: "Alderman",
          parentId: 1257836499862,
          work: "Unemployed",
          birthDate: "1852-07-04T12:18:59.130Z",
        },
        {
          id: 4670743239553,
          name: "Kathleen",
          surname: "Walle",
          parentId: 4441682230999,
          work: "Computer scientist",
          birthDate: "1854-08-22T11:02:53.945Z",
        },
        {
          id: 7400518637533,
          name: "Deacon",
          surname: "Humpherys",
          parentId: 1446747090804,
          work: "Conservation officer",
          birthDate: "1854-06-07T15:31:11.006Z",
        },
        {
          id: 6500156651299,
          name: "Carina",
          parentId: 5968154253225,
          surname: "Voyles",
          work: "Chiropodist",
          birthDate: "1867-02-15T16:59:13.152Z",
        },
        {
          id: 1706294044283,
          name: "Tucker",
          parentId: 7963337332727,
          surname: "Engleman",
          work: "Podiatrist",
          birthDate: "1866-12-09T07:32:17.900Z",
        },
        {
          id: 3173442171339,
          name: "Clarissa",
          surname: "Harvie",
          parentId: 8355293899833,
          work: "Botanist",
          birthDate: "1853-03-29T17:49:36.408Z",
        },
        {
          id: 5788750055334,
          name: "Melina",
          parentId: 6500156651299,
          surname: "Voyles",
          work: "Welder",
          birthDate: "1882-08-16T00:50:47.934Z",
        },
        {
          id: 8843316769405,
          name: "Keith",
          surname: "Ludington",
          parentId: 6356556019596,
          work: "Usher",
          birthDate: "1852-06-15T06:27:32.233Z",
        },
        {
          id: 4207038883417,
          name: "Aaliyah",
          surname: "Woodville",
          parentId: 5819329552655,
          work: "Scop",
          birthDate: "1854-10-08T02:36:29.656Z",
        },
        {
          id: 8313555968957,
          name: "Harper",
          surname: "Allcock",
          parentId: 7731940327551,
          work: "Songwriter",
          birthDate: "1853-05-09T23:05:40.195Z",
        },
        {
          id: 8321384691545,
          name: "Johnny",
          parentId: 778493423064,
          surname: "Byram",
          work: "Copy editor",
          birthDate: "1873-12-17T06:16:58.798Z",
        },
        {
          id: 8774024011461,
          name: "Jody",
          parentId: 4132538644996,
          surname: "MacTavish",
          work: "Graphic designer",
          birthDate: "1872-08-31T01:04:39.456Z",
        },
        {
          id: 3306066401344,
          name: "Mercedes",
          surname: "Roberts",
          parentId: 6748854838600,
          work: "Feller",
          birthDate: "1852-05-10T11:58:05.415Z",
        },
        {
          id: 6496588012690,
          name: "Renee",
          parentId: 8054019194308,
          surname: "Dudley",
          work: "Plumber",
          birthDate: "1873-12-17T21:54:18.411Z",
        },
        {
          id: 2454674611066,
          name: "Jill",
          parentId: 6759490924297,
          surname: "Bye",
          work: "Dermatology Physician Assistant",
          birthDate: "1865-03-20T17:31:14.827Z",
        },
        {
          id: 8810365866300,
          name: "Townsend",
          parentId: 6496588012690,
          surname: "Dudley",
          work: "Psychiatric Nurse Practitioner",
          birthDate: "1885-09-06T14:23:00.439Z",
        },
        {
          id: 1971028749432,
          name: "George",
          surname: "Georgeson",
          parentId: 3375820364841,
          work: "Director",
          birthDate: "1854-10-26T04:21:32.595Z",
        },
        {
          id: 1113599419684,
          name: "Jess",
          surname: "Summers",
          parentId: 8197445224794,
          work: "Showrunner",
          birthDate: "1853-06-20T11:49:42.822Z",
        },
        {
          id: 260692577513,
          name: "Salma",
          surname: "Bagshaw",
          parentId: 8646582409037,
          work: "Technical director",
          birthDate: "1854-08-02T11:08:13.512Z",
        },
        {
          id: 4717646566698,
          name: "Jakob",
          parentId: 7400518637533,
          surname: "Humpherys",
          work: "Draper",
          birthDate: "1875-09-29T02:59:25.272Z",
        },
        {
          id: 2812851588162,
          name: "Ezekiel",
          surname: "Glanton",
          parentId: 8694260373371,
          work: "Retired",
          birthDate: "1853-07-25T22:30:11.069Z",
        },
        {
          id: 546554428930,
          name: "Darrin",
          parentId: 7963337332727,
          surname: "Engleman",
          work: "Healthcare science",
          birthDate: "1867-11-05T12:21:08.349Z",
        },
        {
          id: 5568159710759,
          name: "Kirsten",
          parentId: 6496588012690,
          surname: "Dudley",
          work: "work from home",
          birthDate: "1890-06-13T12:43:09.597Z",
        },
        {
          id: 3385269771452,
          name: "Emerald",
          parentId: 6496588012690,
          surname: "Dudley",
          work: "Retired",
          birthDate: "1892-05-01T07:40:24.011Z",
        },
        {
          id: 8533172021814,
          name: "Andre",
          parentId: 8321384691545,
          surname: "Byram",
          work: "Retired",
          birthDate: "1892-02-25T01:12:38.146Z",
        },
        {
          id: 4710524419131,
          name: "Patty",
          surname: "Dick",
          parentId: 1760988033690,
          work: "Technical writer",
          birthDate: "1853-01-11T14:35:24.298Z",
        },
        {
          id: 1805461552938,
          name: "Elisha",
          surname: "Bradford",
          parentId: 8622160581630,
          work: "Theatre practitioner",
          birthDate: "1853-06-30T19:11:12.105Z",
        },
        {
          id: 6542853113042,
          name: "Zoe",
          parentId: 3173442171339,
          surname: "Harvie",
          work: "Showgirl",
          birthDate: "1870-12-08T18:18:09.844Z",
        },
        {
          id: 1718991242108,
          name: "Drew",
          surname: "Ashby",
          parentId: 3010550761310,
          work: "Retired",
          birthDate: "1854-10-23T05:29:23.476Z",
        },
        {
          id: 1334633156399,
          name: "Marie",
          surname: "Tibbets",
          parentId: 2575362966990,
          work: "Geotechnical Engineer",
          birthDate: "1854-09-01T14:29:47.329Z",
        },
        {
          id: 5668998711075,
          name: "Dulcie",
          surname: "Derwin",
          parentId: 7518120488089,
          work: "Emcee",
          birthDate: "1854-03-09T04:56:18.697Z",
        },
        {
          id: 248786146102,
          name: "Shania",
          surname: "Fleetwood",
          parentId: 7804160535710,
          work: "Station",
          birthDate: "1854-10-06T02:01:08.206Z",
        },
        {
          id: 9525762609317,
          name: "Ana",
          parentId: 7209449538085,
          surname: "Terry",
          work: "Manager (Guard)",
          birthDate: "1867-07-30T11:59:23.739Z",
        },
        {
          id: 934688923249,
          name: "Alicia",
          parentId: 6542853113042,
          surname: "Harvie",
          work: "Blogger",
          birthDate: "1890-10-06T17:26:42.673Z",
        },
        {
          id: 7306715236916,
          name: "Petula",
          surname: "Newey",
          parentId: 1042642003017,
          work: "Geoff",
          birthDate: "1852-10-04T08:37:28.785Z",
        },
        {
          id: 8234536999381,
          name: "Mary",
          surname: "Rose",
          parentId: 5386302345101,
          work: "Signal maintainer",
          birthDate: "1854-02-15T23:14:32.174Z",
        },
        {
          id: 7494359933717,
          name: "Brittany",
          parentId: 1805461552938,
          surname: "Bradford",
          work: "Unemployed",
          birthDate: "1875-01-06T09:30:49.999Z",
        },
        {
          id: 7049262735491,
          name: "Juniper",
          surname: "Marks",
          parentId: 9127368958939,
          work: "work from home",
          birthDate: "1854-11-26T11:05:44.683Z",
        },
        {
          id: 7781822521224,
          name: "Edris",
          surname: "Godwin",
          parentId: 6016143008277,
          work: "work from home",
          birthDate: "1854-09-13T08:22:46.191Z",
        },
        {
          id: 9078112227633,
          name: "Kaitlin",
          surname: "Minogue",
          parentId: 95176825076,
          work: "Clinical pharmaceutical scientist",
          birthDate: "1852-05-08T21:59:27.773Z",
        },
        {
          id: 3055221397713,
          name: "Lauretta",
          parentId: 6759490924297,
          surname: "Bye",
          work: "Track inspector",
          birthDate: "1867-05-21T06:07:21.273Z",
        },
        {
          id: 3794107972026,
          name: "Dorothy",
          surname: "Bostick",
          parentId: 6850128149597,
          work: "Go-go dancer",
          birthDate: "1853-03-06T19:01:31.143Z",
        },
        {
          id: 1698494645377,
          name: "Cameron",
          surname: "Torney",
          parentId: 770004791023,
          work: "Advertising designer",
          birthDate: "1854-07-17T07:16:12.429Z",
        },
        {
          id: 841895938898,
          name: "Shepherd",
          parentId: 4717646566698,
          surname: "Humpherys",
          work: "Quilter",
          birthDate: "1897-02-23T22:01:59.520Z",
        },
        {
          id: 7914083691988,
          name: "Alisha",
          surname: "Wind",
          parentId: 1656884957449,
          work: "Veterinarian",
          birthDate: "1853-04-04T07:49:55.453Z",
        },
        {
          id: 5015337941343,
          name: "Agnes",
          parentId: 9821977853501,
          surname: "Rowlands",
          work: "Rhapsode",
          birthDate: "1865-09-14T16:07:21.238Z",
        },
        {
          id: 6498601438355,
          name: "Harvard",
          parentId: 1971028749432,
          surname: "Georgeson",
          work: "Retired",
          birthDate: "1874-02-03T05:44:32.483Z",
        },
        {
          id: 6162073883494,
          name: "Lizzie",
          surname: "Allitt",
          parentId: 7443156411879,
          work: "work from home",
          birthDate: "1854-02-09T14:41:55.210Z",
        },
        {
          id: 4027876312592,
          name: "Samuel",
          parentId: 8843316769405,
          surname: "Ludington",
          work: "Neuroradiographer",
          birthDate: "1864-11-13T01:39:02.494Z",
        },
        {
          id: 6910084039563,
          name: "Layla",
          parentId: 95132218987,
          surname: "Clark",
          work: "CT Radiographer",
          birthDate: "1868-09-02T07:10:46.829Z",
        },
        {
          id: 2583927007530,
          name: "Darby",
          surname: "Yeakel",
          parentId: 1323435182904,
          work: "Data designer",
          birthDate: "1853-05-12T16:14:07.161Z",
        },
        {
          id: 7448530790803,
          name: "Winnifred",
          surname: "Rykener",
          parentId: 9181202451521,
          work: "Unemployed",
          birthDate: "1852-03-20T06:48:07.162Z",
        },
        {
          id: 4842667119782,
          name: "Lacey",
          parentId: 7400518637533,
          surname: "Humpherys",
          work: "Unemployed",
          birthDate: "1875-03-04T17:56:15.949Z",
        },
        {
          id: 3926090190617,
          name: "Beverley",
          surname: "McHatton",
          parentId: 8769830982857,
          work: "Field warden",
          birthDate: "1853-06-02T04:00:57.288Z",
        },
        {
          id: 5107646185720,
          name: "Cassidy",
          parentId: 7276643575609,
          surname: "Alderman",
          work: "Retired",
          birthDate: "1863-12-22T05:38:41.764Z",
        },
        {
          id: 6617379016460,
          name: "Jeannie",
          surname: "Artley",
          parentId: 5730519222203,
          work: "Psychologist",
          birthDate: "1854-11-06T11:20:41.234Z",
        },
        {
          id: 5415904134291,
          name: "Shannon",
          parentId: 5513277402976,
          surname: "Watrous",
          work: "Artistic director",
          birthDate: "1872-02-22T13:25:42.485Z",
        },
        {
          id: 8625554360699,
          name: "Margot",
          surname: "Glidewell",
          parentId: 5710615384493,
          work: "Rhapsode",
          birthDate: "1854-10-31T13:03:27.754Z",
        },
        {
          id: 2167634099186,
          name: "Annie",
          parentId: 9497014533965,
          surname: "Hoskins",
          work: "Spotlight Operator",
          birthDate: "1866-11-19T12:52:54.706Z",
        },
        {
          id: 2969518168386,
          name: "Velma",
          parentId: 7209449538085,
          surname: "Terry",
          work: "Web developer",
          birthDate: "1871-10-28T11:08:07.215Z",
        },
        {
          id: 9376340620106,
          name: "Cheryl",
          parentId: 1706294044283,
          surname: "Engleman",
          work: "Stunt performer",
          birthDate: "1877-10-11T10:56:39.191Z",
        },
        {
          id: 4611179134961,
          name: "Mayola",
          surname: "Whyte",
          parentId: 2106785096820,
          work: "Painters",
          birthDate: "1854-12-18T21:34:21.340Z",
        },
        {
          id: 3330893717600,
          name: "Imogen",
          surname: "Brinkley",
          parentId: 4855829489899,
          work: "Nephrology Physician Assistant",
          birthDate: "1853-02-02T11:36:44.244Z",
        },
        {
          id: 2322780495725,
          name: "Gillian",
          parentId: 8313555968957,
          surname: "Allcock",
          work: "Rhapsode",
          birthDate: "1871-08-02T14:41:44.723Z",
        },
        {
          id: 9096773496327,
          name: "Crossley",
          surname: "Oatway",
          parentId: 4983996020215,
          work: "Flagman",
          birthDate: "1854-09-04T11:14:16.967Z",
        },
        {
          id: 7912768369102,
          name: "Jack",
          surname: "Cortright",
          parentId: 1954893391139,
          work: "Racing driver",
          birthDate: "1852-08-02T03:15:25.294Z",
        },
        {
          id: 4936706920188,
          name: "Marilyn",
          parentId: 1805461552938,
          surname: "Bradford",
          work: "Park ranger",
          birthDate: "1868-03-15T10:44:36.661Z",
        },
        {
          id: 4507151706136,
          name: "Malcolm",
          surname: "Fish",
          parentId: 10892055752,
          work: "Otorhinolaryngology Physician assistant",
          birthDate: "1852-09-21T09:57:38.875Z",
        },
        {
          id: 1002471008138,
          name: "Sapphire",
          surname: "Plumb",
          parentId: 7581067886471,
          work: "Physical Therapist",
          birthDate: "1853-10-01T07:37:10.197Z",
        },
        {
          id: 935177490762,
          name: "Cracroft",
          parentId: 4710524419131,
          surname: "Dick",
          work: "Emergency medical technician",
          birthDate: "1874-06-28T07:03:04.205Z",
        },
        {
          id: 3214614421553,
          name: "Sparrow",
          surname: "Ashbridge",
          parentId: 957660638347,
          work: "Deputy Station Master",
          birthDate: "1852-04-10T04:05:16.806Z",
        },
        {
          id: 7486640594543,
          name: "Krista",
          surname: "Pancake",
          parentId: 7378652821449,
          work: "Plumber",
          birthDate: "1854-08-23T21:50:03.378Z",
        },
        {
          id: 4208092032684,
          name: "Jolie",
          surname: "Williamson",
          parentId: 542240779474,
          work: "Stage crew",
          birthDate: "1853-10-29T00:38:32.373Z",
        },
        {
          id: 265753551687,
          name: "Holbrook",
          parentId: 4936706920188,
          surname: "Bradford",
          work: "Hack writer",
          birthDate: "1884-05-07T02:08:54.196Z",
        },
        {
          id: 8299001953232,
          name: "Robert",
          parentId: 3173442171339,
          surname: "Harvie",
          work: "Ticketing agent",
          birthDate: "1873-06-05T02:00:54.119Z",
        },
        {
          id: 4569395503128,
          name: "Heather",
          surname: "Exton",
          parentId: 9258857749445,
          work: "Millwright",
          birthDate: "1854-07-30T13:43:50.734Z",
        },
        {
          id: 3805806644419,
          name: "Avis",
          surname: "Waddington",
          parentId: 7607565215691,
          work: "Soloist",
          birthDate: "1853-05-16T10:13:10.174Z",
        },
        {
          id: 215914970248,
          name: "Lanna",
          parentId: 3926090190617,
          surname: "McHatton",
          work: "Poet",
          birthDate: "1871-10-23T19:08:06.184Z",
        },
        {
          id: 405274833240,
          name: "Demetria",
          parentId: 4670743239553,
          surname: "Walle",
          work: "Signalman",
          birthDate: "1874-07-17T12:36:59.100Z",
        },
        {
          id: 2703780723460,
          name: "Grayson",
          parentId: 7914083691988,
          surname: "Wind",
          work: "Bylaw enforcement officer",
          birthDate: "1866-08-17T16:34:36.854Z",
        },
        {
          id: 2649091306594,
          name: "Kathryn",
          parentId: 8313555968957,
          surname: "Allcock",
          work: "Station",
          birthDate: "1874-09-20T04:49:58.207Z",
        },
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
<summary>result image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex2.PNG?raw=true)

</details>

## Header Option

We offer specific header options for Excel headers. The header is a mandatory component, so the withoutHeader option cannot be used to omit it. The headerHeight option is employed to determine the height of the header row. Additionally, we provide the headerStyleKey property, which specifies the most commonly used style for each cell (its value corresponds to the style ID; detailed functionality is explained in the Styles section).

Each header cell is endowed with properties beyond the label and text. The size property defines the width of the column, while the formula property applies a formula to all rows (excluding the header) within the column, ultimately affecting the final cell in that column.

<details>
<summary>Display code</summary>

```javascript
function e() {
  const t = { c1: "08D9D6", c2: "252A34", c3: "FF2E63", c4: "EAEAEA" };
  return {
    imageFullName: "ex3.PNG",
    url: "https://colorhunt.co/palette/08d9d6252a34ff2e63eaeaea",
    colorPalette: t,
    data: {
      creator: "mr",
      styles: {
        headerStyle: {
          fg: t.c2,
          fontFamily: "Times New Roman",
          fontColor: t.c4,
          size: 20,
        },
        formulaStyle: {
          fg: t.c1,
          fontFamily: "Times New Roman",
          fontColor: t.c3,
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
          data: Fr.slice(0, 10),
        },
        {
          withoutHeader: !0,
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
          data: Fr.slice(0, 10),
        },
      ],
    },
  };
}
const { data } = e();
ExcelTable.generateExcel(data);
```

</details>

</details>

<details>
<summary>result image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex3.PNG?raw=true)

</details>

## Formula Option

We provide two distinct methods for defining formulas: customization and column type. In the customization approach, if you employ a cell containing data that is used within the formula, the formula will display an instance of the formula. When using the customization type, it's important to specify the formula type, which can be any of the following: AVERAGE, SUM, COUNT, MAX, or MIN.

<details>
<summary>Display code</summary>

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
      fg: "2B2E4A",
      fontFamily: "Times New Roman",
      fontColor: "E84545",
    },
    customFormulaStyle: {
      fg: "E84545",
      fontFamily: "Times New Roman",
      fontColor: "2B2E4A",
      size: 15,
      border: {
        full: {
          color: "53354A",
          style: "dashDot",
        },
      },
    },
    formulaStyle: {
      fg: "2B2E4A",
      fontFamily: "Times New Roman",
      fontColor: "E84545",
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
<summary>result image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex4.PNG?raw=true)

</details>

## Styles & Format Options

In the library, styles are defined with an ID that represents the desired style. This ID is then used to apply the corresponding style to cells. Each cell is associated with only one style. These styles encompass various attributes such as borders, alignment, text color, font family, font size, background, and bold, among others.

The format property is a distinct style attribute. Unlike other styles, the format is predefined and cannot be customized.

<details>
<summary>Display code</summary>

```javascript
function e() {
  const t = { c1: "2C3639", c2: "3F4E4F", c3: "A27B5C", c4: "DCD7C9" },
    n = { fg: t.c2, fontFamily: "Times New Roman", fontColor: t.c4 },
    a = { fg: t.c4, fontFamily: "Times New Roman", fontColor: t.c2 };
  return {
    url: "https://colorhunt.co/palette/ffcfdffefdcae0f9b5a5dee5",
    imageFullName: "ex5.PNG",
    colorPalette: t,
    data: {
      creator: "mr",
      styles: {
        Date: { ...n, format: "short_date" },
        Time: { ...n, format: "time" },
        Percentage: { ...n, format: "percentage" },
        Float: { ...n, format: "float_2", alignment: { horizontal: "left" } },
        Fraction: { ...n, format: "fraction" },
        "Long Number Column 1": {
          ...n,
          format: "dollar_2",
          alignment: { indent: 3, rtl: !0, horizontal: "left" },
        },
        "Long Number Column 2": {
          ...n,
          format: "num_sep",
          alignment: { ltr: !0, horizontal: "left" },
        },
        headerStyle: { ...a },
      },
      sheet: [
        {
          styleCellCondition(l, r, o, i, s, u) {
            return s
              ? "headerStyle"
              : o == 0
              ? "Date"
              : o == 1
              ? "Time"
              : o == 2
              ? "Percentage"
              : o == 3
              ? "Float"
              : o == 4
              ? "Fraction"
              : o == 5
              ? "Long Number Column 1"
              : "Long Number Column 2";
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
              "Long Number Column 1": 0x7048860ddf79,
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
              "Long Number Column 1": 0x70472c442cb1,
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
    },
  };
}
const { data } = e();
ExcelTable.generateExcel(data);
```

</details>

<details>
<summary>result image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex5.PNG?raw=true)

</details>

## Merging Cells Options

We offer options for merging rows of cells together. Additionally, we provide a function-based approach to facilitate cell merging.

<details>
<summary>Display code</summary>

```javascript
function e() {
  const t = { c1: "DBE2EF", c2: "112D4E", c4: "F9F7F7" },
    n = {
      fg: t.c2,
      fontFamily: "Times New Roman",
      fontColor: t.c4,
      border: { full: { style: "medium", color: t.c1 } },
      alignment: { horizontal: "left", vertical: "top" },
    },
    a = { fg: t.c4, fontFamily: "Times New Roman", fontColor: t.c2 },
    l = [];
  let r = !1;
  return {
    url: "https://colorhunt.co/palette/f9f7f7dbe2ef3f72af112d4e",
    imageFullName: "ex6.PNG",
    colorPalette: t,
    data: {
      creator: "mr",
      styles: {
        Date: { ...n, format: "short_date" },
        Time: { ...n, format: "time" },
        Percentage: { ...n, format: "percentage" },
        Float: { ...n, format: "float_2" },
        Fraction: { ...n, format: "fraction" },
        "Long Number Column 1": { ...n, format: "dollar_2" },
        "Long Number Column 2": { ...n, format: "num_sep" },
        headerStyle: { ...a },
      },
      sheet: [
        {
          mergeRowDataCondition(o, i, s, u) {
            return u
              ? !1
              : r
              ? l[i] == o
                ? !0
                : ((l[i] = o), !1)
              : ((r = !0), (l[i] = o), !0);
          },
          styleCellCondition(o, i, s, u, c, m) {
            return c
              ? "headerStyle"
              : s == 0
              ? "Date"
              : s == 1
              ? "Time"
              : s == 2
              ? "Percentage"
              : s == 3
              ? "Float"
              : s == 4
              ? "Fraction"
              : s == 5
              ? "Long Number Column 1"
              : "Long Number Column 2";
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
              "Long Number Column 1": 0x7048860ddf79,
              "Long Number Column 2": 987654321098765,
            },
            {
              Date: "2023-08-01",
              Time: "02:30 PM",
              Percentage: 0.4275,
              Float: 0.4275,
              Fraction: "3/8",
              "Long Number Column 1": 0x7048860ddf79,
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
              "Long Number Column 1": 0x70472c442cb1,
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
    },
  };
}
const { data } = e();
ExcelTable.generateExcel(data);
```

</details>

<details>
<summary>result image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex6.PNG?raw=true)

</details>

## Group Rows Options

With this library, you can group rows together using two properties added to the data: outlineLevel and hidden. The outlineLevel represents the grouping level, while hidden represents whether the default state is collapsed or not. The key of this property is changeable, so in case of a conflict with your data, you have the flexibility to modify it. We will discuss how to change the key in the next section.

<details>
<summary>Display code</summary>

```javascript
function e() {
  const t = { c4: "FCD1D1", c2: "AEE1E1" },
    n = {
      fg: t.c2,
      fontFamily: "Times New Roman",
      fontColor: "112D4E",
      alignment: { horizontal: "left", vertical: "top" },
    },
    a = { fg: t.c4, fontFamily: "Times New Roman", fontColor: "112D4E" };
  return {
    imageFullName: "ex7.PNG",
    colorPalette: t,
    url: "https://colorhunt.co/palette/fcd1d1ece2e1d3e0dcaee1e1",
    data: {
      creator: "mr",
      styles: { rowStyle: { ...n }, headerStyle: { ...a } },
      sheet: [
        {
          styleCellCondition(l, r, o, i, s, u) {
            return s ? "headerStyle" : "rowStyle";
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
    },
  };
}
const { data } = e();
ExcelTable.generateExcel(data);
```

</details>

<details>
<summary>result image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex7.PNG?raw=true)

</details>

## Complex Options

In the examples below, we aim to define some fun scenarios that could be useful for more complex use cases.

Adjusting Key Properties and Row Height
You have the ability to change the key of reserved properties such as height, hidden, and more. Additionally, you can adjust the height of rows as needed.

<details>
<summary>Display code</summary>

```javascript
function e() {
  const t = { c4: "F08A5D", c2: "F9ED69" },
    n = {
      fg: t.c2,
      fontFamily: "Times New Roman",
      fontColor: "6A2C70",
      alignment: { horizontal: "left", vertical: "center" },
    },
    a = { fg: t.c4, fontFamily: "Times New Roman", fontColor: "6A2C70" };
  return {
    imageFullName: "ex8.PNG",
    colorPalette: t,
    url: "https://colorhunt.co/palette/f9ed69f08a5db83b5e6a2c70",
    data: {
      creator: "mr",
      mapSheetDataOption: {
        hidden: "notShow",
        height: "h",
        outlineLevel: "group",
      },
      styles: { rowStyle: { ...n }, headerStyle: { ...a } },
      sheet: [
        {
          styleCellCondition(l, r, o, i, s, u) {
            return s ? "headerStyle" : "rowStyle";
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
    },
  };
}
const { data } = e();
ExcelTable.generateExcel(data);
```

</details>

<details>
<summary>result image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex8.PNG?raw=true)

</details>

## Shift & Title Option

The shift feature allows you to adjust the starting point of generating an Excel file. The title option, on the other hand, is used when you want to include a title at the top of the generated file.

```javascript
function generateData() {
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
    fg: colorPalette.c2,
    fontFamily: "Times New Roman",
    fontColor: "6A2C70",
    ...rowAlignment,
  };
  const headerStyle = {
    fg: colorPalette.c4,
    fontFamily: "Times New Roman",
    fontColor: "#FFFFFF",
  };
  return {
    imageFullName: "ex10.PNG",
    colorPalette,
    url: "https://colorhunt.co/palette/ffc7c7ffe2e2f6f6f68785a2",
    data: {
      creator: "mr",
      styles: {
        "c0<0.3": {
          fg: "DCD6F7",
          fontColor: "424874s",
          ...rowAlignment,
        },
        male: {
          fg: "95E1D3",
          fontColor: "252A34",
          ...rowAlignment,
        },
        female: {
          fg: "F38181",
          fontColor: "252A34",
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
          styleCellCondition(data, fullData, colIndex, rowIndex, fromHeader) {
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
    },
  };
}
const { data } = generateData();
ExcelTable.generateExcel(data);
```

## Comment Option

After version 2.4.0 you can add comment on cells.

```javascript
function generateData() {
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
    fg: colorPalette.c2,
    fontFamily: "Times New Roman",
    fontColor: "6A2C70",
    ...rowAlignment,
  };
  const headerStyle = {
    fg: colorPalette.c4,
    fontFamily: "Times New Roman",
    fontColor: "#FFFFFF",
  };
  return {
    imageFullName: "ex14.PNG",
    colorPalette,
    url: "https://colorhunt.co/",
    data: {
      addDefaultTitleStyle: true,
      creator: "mr",
      styles: {
        "c0<0.3": {
          fg: "DCD6F7",
          fontColor: "424874s",
          ...rowAlignment,
        },
        male: {
          fg: "95E1D3",
          fontColor: "252A34",
          ...rowAlignment,
        },
        female: {
          fg: "F38181",
          fontColor: "252A34",
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
            // height: 100,
            // styleId: '',
            text: "Title",
          },
          commentCodition: function (
            data,
            object,
            headerKey,
            rowIndex,
            colIndex,
            fromHeader
          ) {
            console.log("called");
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
          styleCellCondition(data, fullData, colIndex, rowIndex, fromHeader) {
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
    },
  };
}
const { data } = generateData();
ExcelTable.generateExcel(data);
```

## Multi Style value Option

After version 2.4.0, We added Ability to change the style of each character of cells. (only text value)

<details>
<summary>Display code</summary>

```javascript
function generateData() {
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
    fg: colorPalette.c2,
    fontFamily: "Times New Roman",
    fontColor: "6A2C70",
    ...rowAlignment,
  };
  const headerStyle = {
    fg: colorPalette.c4,
    fontFamily: "Times New Roman",
    fontColor: "#000000",
  };
  return {
    imageFullName: "ex15.PNG",
    colorPalette,
    url: "https://colorhunt.co/palette/f8ede3dfd3c3d0b8a885586f",
    data: {
      addDefaultTitleStyle: true,
      creator: "mr",
      styles: {
        title: {
          size: 48,
          fg: "E5BA73",
          alignment: {
            horizontal: "left",
            vertical: "top",
          },
        },
        t2: {
          fontColor: "FFFFFF",
        },
        t1: {
          fontColor: "555555",
        },
        "c0<0.3": {
          fg: "DCD6F7",
          fontColor: "424874s",
          ...rowAlignment,
        },
        male: {
          fg: "95E1D3",
          fontColor: "252A34",
          ...rowAlignment,
        },
        female: {
          fg: "F38181",
          fontColor: "252A34",
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
          commentCodition: function (
            data,
            object,
            headerKey,
            rowIndex,
            colIndex,
            fromHeader
          ) {
            console.log("called");
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
          styleCellCondition(data, fullData, colIndex, rowIndex, fromHeader) {
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
    },
  };
}
const { data } = generateData();
ExcelTable.generateExcel(data);
```

```javascript
function e() {
  const t = { c4: "00ADB5", c2: "393E46" },
    n = { alignment: { horizontal: "left", vertical: "center" } },
    a = { fg: t.c2, fontFamily: "Times New Roman", fontColor: "6A2C70", ...n },
    l = { fg: t.c4, fontFamily: "Times New Roman", fontColor: "#000000" };
  return {
    imageFullName: "ex16.PNG",
    colorPalette: t,
    url: "https://colorhunt.co/palette/f9ed69f08a5db83b5e6a2c70",
    data: {
      addDefaultTitleStyle: !0,
      creator: "mr",
      styles: {
        col2: {
          fontColor: "#F9ED69",
        },
        col1: {
          fontColor: "#FF2E63",
        },
        title: {
          size: 48,
          fg: "F9ED69",
          fontColor: "6A2C70",
          alignment: { horizontal: "center", vertical: "center" },
        },
        t2: { fontColor: "F08A5D" },
        t1: { fontColor: "555555" },
        "c0<0.3": { fg: "DCD6F7", fontColor: "424874s", ...n },
        male: { fg: "95E1D3", fontColor: "252A34", ...n },
        female: { fg: "F38181", fontColor: "252A34", ...n },
        rowStyle: { ...a },
        headerStyle: { ...l },
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
          multiStyleConditin: function (
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
          commentCodition: function (o, r, i, s, u, c) {
            if ((console.log("called"), c)) {
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
          styleCellCondition(o, r, i, s, u) {
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
    },
  };
}
const { data } = e();
ExcelTable.generateExcel(data);
```

</details>

<details>
<summary>result image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex16.PNG?raw=true)

</details>

## Conditional Styling

Using the 'styleCellCondition' option, you can apply styles to each cell based on specific conditions as needed.

<details>
<summary>Display code</summary>

```javascript
function e() {
  const t = { c4: "2B2E4A", c2: "E84545" },
    n = { alignment: { horizontal: "left", vertical: "center" } },
    a = { fg: t.c2, fontFamily: "Times New Roman", fontColor: "6A2C70", ...n },
    l = { fg: t.c4, fontFamily: "Times New Roman", fontColor: "#FFFFFF" };
  return {
    imageFullName: "ex9.PNG",
    colorPalette: t,
    url: "https://colorhunt.co/palette/2b2e4ae8454590374953354a",
    data: {
      creator: "mr",
      styles: {
        "c0<0.3": { fg: "DCD6F7", fontColor: "424874s", ...n },
        male: { fg: "95E1D3", fontColor: "252A34", ...n },
        female: { fg: "F38181", fontColor: "252A34", ...n },
        rowStyle: { ...a },
        headerStyle: { ...l },
      },
      sheet: [
        {
          styleCellCondition(r, o, i, s, u, c) {
            return u
              ? "headerStyle"
              : i == 0 && r < 0.3
              ? "c0<0.3"
              : i == 3
              ? r
                ? "male"
                : "female"
              : "rowStyle";
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
    },
  };
}
const { data } = e();
ExcelTable.generateExcel(data);
```

</details>

<details>
<summary>result image</summary>

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex9.PNG?raw=true)

</details>

## API

In the API section, you will discover various options and configurations that you can utilize within the library.

<details>
<summary>Typescript interface and type</summary>

```typescript
export type ProtectionOption = {
  [key in ProtectionOptionKey]: "0" | "1" | 0 | 1;
};
export type ProtectionOptionKey =
  | "sheet"
  | "formatCells"
  | "formatColumns"
  | "formatRows"
  | "insertColumns"
  | "insertRows"
  | "insertHyperlinks"
  | "deleteColumns"
  | "deleteRows"
  | "sort"
  | "autoFilter"
  | "pivotTables";

export type AlignmentOptionKey =
  | "horizontal"
  | "vertical"
  | "wrapText"
  | "shrinkToFit"
  | "readingOrder"
  | "textRotation"
  | "indent";
export interface AlignmentOption {
  horizontal?: "center" | "left" | "right";
  vertical?: "center" | "top" | "bottom";
  wrapText?: "0" | "1" | 2 | 1;
  shrinkToFit?: "0" | "1" | 2 | 1;
  readingOrder?: "1" | "2" | 2 | 1;
  textRotation?: number;
  indent?: number;
  rtl?: boolean;
  ltr?: boolean;
}
export type BorderDirection = "full" | "top" | "left" | "right" | "bottom";
export type BorderOption = {
  [key in BorderDirection]?: {
    color: string;
    style:
      | "slantDashDot"
      | "dotted"
      | "thick"
      | "hair"
      | "dashDot"
      | "dashDotDot"
      | "dashed"
      | "thin"
      | "mediumDashDot"
      | "medium"
      | "double"
      | "mediumDashed";
  };
};
export interface Header {
  label: string;
  text: string;
  size?: number;
  multiStyleValue?: MultiStyleValue;
  comment?: Comment | string;
  formula?: {
    type: FormulaType;
    styleId?: string;
  };
}

export interface Data extends DataOptions {
  [key: string]: string | number | any | undefined;
}
export interface MultiStyleRexValue {
  reg: RegExp | string;
  styleId: string;
}
export interface Comment {
  comment?: string;
  styleId?: string;
  author?: string;
}
export interface MultiStyleValue {
  [key: string]: string | undefined | MultiStyleRexValue[];
  reg?: MultiStyleRexValue[];
}
export interface MapMultiStyleValue {
  [key: string]: MultiStyleValue;
}
export interface MapComment {
  [key: string]: Comment | string;
}
export interface DataOptions {
  [key: string]:
    | "0"
    | "1"
    | number
    | string
    | undefined
    | MapComment
    | MapMultiStyleValue;
  outlineLevel?: number;
  hidden?: "0" | "1" | number;
  rowStyle?: string;
  height?: number;
  multiStyleValue?: MapMultiStyleValue;
  comment?: MapComment;
}
export interface MergeRowConditionMap {
  [columnKey: string]: {
    inProgress: boolean;
    start: number;
  };
}
export type CommentConditionFunction = (
  data: Header | string | number | undefined,
  object: null | Data,
  headerKey: string,
  rowIndex: number,
  colIndex: number,
  fromHeader: boolean
) => Comment | string | false | undefined | null;
export type StyleCellConditionFunction = (
  data: Header | string | number | undefined,
  object: Header | Data,
  colIndex: number,
  rowIndex: number,
  fromHeader: boolean,
  stylekeys: string[]
) => string | null;
export type MergeRowDataConditionFunction = (
  data: Header | string | number | undefined,
  key: string | null,
  index: number,
  fromHeader: boolean
) => boolean;
export interface SortAndFilter {
  mode: "all" | "ref";
  ref?: string;
}
export interface Title {
  shiftTop?: number;
  shiftLeft?: number;
  consommeRow?: number;
  consommeCol?: number;
  height?: number;
  styleId?: string;
  text?: string;
  multiStyleValue?: MultiStyleValue;
  comment?: Comment | string;
}
export interface Sheet {
  withoutHeader?: boolean;
  formula?: Formula;
  name?: string;
  title?: Title;
  shiftTop?: number;
  shiftLeft?: number;
  selected?: boolean;
  tabColor?: string;
  merges?: string[];
  headerStyleKey?: string;
  mergeRowDataCondition?: MergeRowDataConditionFunction;
  styleCellCondition?: StyleCellConditionFunction;
  commentCodition?: CommentConditionFunction;
  sortAndfilter?: SortAndFilter;
  state?: "hidden" | "visible";
  headerRowOption?: any;
  protectionOption?: ProtectionOption;
  headerHeight?: number;
  headers: Header[];
  data: Data[];
}
export interface HeaderRowOption {
  outlineLevel: "string";
}
export interface StyleMapper {
  commentSintax: {
    value: {
      [key: string]: string;
    };
  };
  format: {
    count: number;
    value: string;
  };
  border: {
    count: number;
    value: string;
  };
  fill: {
    count: number;
    value: string;
  };
  font: {
    count: number;
    value: string;
  };
  cell: {
    count: number;
    value: string;
  };
}
export type FormulaType = "AVERAGE" | "SUM" | "COUNT" | "MAX" | "MIN";
export interface StyleBody {
  fg?: string;
  fontColor?: string;
  fontFamily?: string;
  size?: number;
  index?: number;
  alignment?: AlignmentOption;
  border?: BorderOption;
  format?: string;
  bold?: boolean;
  underline?: boolean;
  italic?: boolean;
  doubleUnderline?: boolean;
}
export interface Styles {
  [key: string]: StyleBody;
}
export interface FormatMap {
  [format: string]: {
    key: number;
    value?: string;
  };
}
export interface FormulaSetting {
  type: FormulaType;
  start: string;
  end: string;
  styleId?: string;
}
export interface Formula {
  [insertCell: string]: FormulaSetting;
}

export interface ExcelTable {
  notSave?: boolean;
  creator?: string;
  backend?: boolean;
  fileName?: string;
  generateType?: "nodebuffer" | "array" | "binarystring" | "base64";
  addDefaultTitleStyle?: boolean;
  created?: string;
  modified?: string;
  numberOfColumn?: number;
  createType?: string;
  mapSheetDataOption?: any;
  styles?: Styles;
  sheet: Sheet[];
}
```

</details>

### ExcelTable Object

In the ExcelTable object, you'll find various properties that allow you to customize the behavior and appearance of the generated Excel file through the `generateExcel` function.

| Name                  | Type    | Description                                                                                            |
| --------------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| notSave?              | boolean | Controls whether the generated Excel file should be saved.                                             |
| backend?              | boolean | For backend use cases, set to true.                                                                    |
| addDefaultTitleStyle? | boolean | If set to true, generates default style for the title option.                                          |
| fileName?             | string  | Name of the file that will be generated.                                                               |
| generateType?         | string  | For backend use, specifies the type of generated file ("nodebuffer" triggers only if backend is true). |
| creator?              | string  | Specifies the creator of the Excel file.                                                               |
| created?              | string  | Sets the creation date of the Excel file.                                                              |
| modified?             | string  | Sets the modification date of the Excel file.                                                          |
| numberOfColumn?       | number  | Specifies the number of columns in the Excel file.                                                     |
| createType?           | string  | Specifies the type of creation for the Excel file.                                                     |
| mapSheetDataOption?   | any     | An option to define the type if needed for mapping sheet data.                                         |
| styles?               | Styles  | Defines the styles to be applied to the Excel cells.                                                   |
| sheet                 | Sheet[] | An array of sheets containing data and configuration settings.                                         |

These properties provide you with the flexibility to customize various aspects of the Excel file generated by the `generateExcel` function.

### Styles Object

To define the styling for your Excel file, you should utilize this option. The Styles object allows you to specify various formatting properties that will be applied to cells in the generated Excel file. Each property in the object corresponds to a specific style element, such as foreground color, font color, font family, size, alignment, border, and format. You can customize these properties according to your preferences to achieve the desired visual appearance for your Excel document.

```typescript
[key: string]: {
  fg?: string;
  fontColor?: string;
  fontFamily?: string;
  size?: number;
  index?: number;
  alignment?: AlignmentOption;
  border?: BorderOption;
  format?: string;
  bold?: boolean;
  underline?: boolean;
  italic?: boolean;
  doubleUnderline?: boolean;
}
```

## Styles Object

To define the styling for your Excel file, you should utilize this option. The Styles object allows you to specify various formatting properties that will be applied to cells in the generated Excel file. Each property in the object corresponds to a specific style element, such as foreground color, font color, font family, size, alignment, border, and format. You can customize these properties according to your preferences to achieve the desired visual appearance for your Excel document.

| Name             | Type            | Description                                                                   |
| ---------------- | --------------- | ----------------------------------------------------------------------------- |
| fg?              | string          | Specifies the foreground color of the cell text.                              |
| fontColor?       | string          | Defines the font color of the cell text.                                      |
| fontFamily?      | string          | Sets the font family for the cell text.                                       |
| size?            | number          | Specifies the font size of the cell text.                                     |
| index?           | number          | Specifies the index of the style.                                             |
| alignment?       | AlignmentOption | Defines the cell alignment properties (horizontal and vertical).              |
| border?          | BorderOption    | Specifies the border style for the cell.                                      |
| bold?            | boolean         | Defines whether the cell text should be bold.                                 |
| underline?       | boolean         | Defines whether the cell text should be underlined.                           |
| italic?          | boolean         | Defines whether the cell text should be italic.                               |
| doubleUnderline? | boolean         | Defines whether the cell text should have double underline.                   |
| format           | string          | Determines the format of the cell content, such as date, time, currency, etc. |

These properties allow you to customize the appearance of cells in your Excel document by applying various formatting styles.

### Sheet Object

The Sheet object is used to define various options related to a specific sheet within the Excel file. It holds a significant role and can be considered one of the most crucial options.

| Name                   | Type                          | Description                                                                                                     |
| ---------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------- |
| withoutHeader?         | boolean                       | Specifies whether the sheet should be generated without a header row.                                           |
| formula?               | Formula                       | Defines formulas to be applied to the sheet.                                                                    |
| name?                  | string                        | Sets the name of the sheet.                                                                                     |
| shiftTop?              | number                        | Shifts the start point from the top.                                                                            |
| shiftLeft?             | number                        | Shifts the start point from the left.                                                                           |
| title?                 | Title                         | Sets a title for the generated table (default; title consumes 2 rows and columns equal to header array length). |
| selected?              | boolean                       | Determines if the sheet is selected when the Excel file is opened.                                              |
| tabColor?              | string                        | Specifies the tab color of the sheet.                                                                           |
| merges?                | string[]                      | Defines merged cell ranges within the sheet.                                                                    |
| headerStyleKey?        | string                        | Sets the style for the header cells using a style ID.                                                           |
| mergeRowDataCondition? | MergeRowDataConditionFunction | Defines a condition for merging rows.                                                                           |
| styleCellCondition?    | StyleCellConditionFunction    | Sets styling conditions for individual cells.                                                                   |
| sortAndfilter?         | SortAndFilter                 | Defines sorting and filtering options for the sheet.                                                            |
| state?                 | "hidden" \| "visible"         | Determines the visibility of the sheet.                                                                         |
| headerRowOption?       | any                           | Allows the definition of header row options (type to be defined if needed).                                     |
| protectionOption?      | ProtectionOption              | Specifies protection options for the sheet.                                                                     |
| headerHeight?          | number                        | Sets the height of the header row.                                                                              |
| headers                | Header[]                      | Defines the headers for the sheet columns.                                                                      |
| data                   | Data[]                        | Provides the data entries for the sheet.                                                                        |

These properties allow you to customize the behavior and appearance of individual sheets within the Excel file generated using the library. You can set headers, apply formulas, define styles, manage merging cells, specify visibility, and much more to create Excel sheets that match your specific requirements.

### Title

The title option allows you to add a title at the starting point of the generated table.

| Property     | Type   | Description                                            |
| ------------ | ------ | ------------------------------------------------------ |
| shiftTop?    | number | Shifts the title vertically from the top.              |
| shiftLeft?   | number | Shifts the title horizontally from the left.           |
| consommeRow? | number | Specifies the number of rows consumed by the title.    |
| consommeCol? | number | Specifies the number of columns consumed by the title. |
| height?      | number | Sets the height of the title row.                      |
| styleId?     | string | Applies a style to the title using a style ID.         |
| text?        | string | Specifies the text content of the title.               |

By using the `Title` interface and its properties, you can customize the appearance and positioning of titles within your generated Excel tables.

### Border Object

The `BorderOption` object enables you to add borders to your Excel cells conveniently. It provides a way to define border properties for various border directions.

| Property | Type   | Description                                                                                                           |
| -------- | ------ | --------------------------------------------------------------------------------------------------------------------- |
| key      | string | A `BorderDirection` value indicating the border direction. Possible values: "full", "top", "left", "right", "bottom". |
| color    | string | The color of the border. Use a valid color code or name.                                                              |
| style    | string | The style of the border. Choose from predefined styles such as "slantDashDot", "dotted", "thick", and more.           |

By utilizing the `BorderOption` object, you can specify border color and style for different directions, enhancing the visual appearance of your Excel tables with well-defined cell borders.

### Formula Object

The `Formula` object provides a way to define formulas for Excel cells. It comprises the following properties:

| Property   | Type                                            | Description                                                                                            |
| ---------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| insertCell | string                                          | The cell where the formula will be inserted.                                                           |
| type       | "AVERAGE" \| "SUM" \| "COUNT" \| "MAX" \| "MIN" | The type of formula to apply. Choose from options such as "AVERAGE", "SUM", "COUNT", "MAX", and "MIN". |
| start      | string                                          | The starting cell for the formula range.                                                               |
| end        | string                                          | The ending cell for the formula range.                                                                 |
| styleId    | string (Optional)                               | The style ID to apply to cells with the formula. Use if you want to style formula cells.               |

In the provided example, we've demonstrated how to define formulas for various cells using the `Formula` object. You can specify the formula type, range, and even apply specific styles to formula cells if desired.

### Alignment Object

The library offers multiple options for aligning cells, giving you control over how content is displayed within cells. These alignment options can be configured using the following properties:

| Property     | Type                          | Description                                                                                         |
| ------------ | ----------------------------- | --------------------------------------------------------------------------------------------------- |
| horizontal   | "center" \| "left" \| "right" | The horizontal alignment of cell content. Choose from "center", "left", or "right".                 |
| vertical     | "bottom" \| "top" \| "bottom" | The vertical alignment of cell content. Choose from "bottom", "top", or "bottom".                   |
| wrapText     | "0" \| "1"                    | Whether to wrap text within cells. Use "0" for false or "1" for true.                               |
| shrinkToFit  | "0" \| "1"                    | Whether to shrink cell content to fit within the cell. Use "0" for false or "1" for true.           |
| readingOrder | "1" \| "2" \| 2 \| 1          | The reading order of cell content. Choose from "1" (left to right) or "2" (right to left).          |
| textRotation | number                        | The degree of text rotation within cells. Use a number to represent the rotation angle.             |
| indent       | number                        | The indentation level of cell content. Use a number to specify the indent.                          |
| rtl          | boolean                       | Whether the cell content should be displayed right-to-left. Use "true" for right-to-left alignment. |
| ltr          | boolean                       | Whether the cell content should be displayed left-to-right. Use "true" for left-to-right alignment. |

These alignment options empower you to customize the appearance of cell content in your Excel sheets. By adjusting these properties, you can control the positioning, orientation, and overall style of data within your cells.

## Release Notes

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

- capability to use var and rgb for fg, border color and font color

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

## Changelog

For a detailed list of all changes, please refer to the [changelog](CHANGELOG.md).

## Thank You

Thank you for choosing our library! We greatly value your feedback and suggestions as we continue to improve and enhance our product.

## Theme images

![black-white-text0](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text0.png?raw=true)
![black-white-text1](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text1.png?raw=true)
![black-white-text10](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text10.png?raw=true)
![black-white-text100](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text100.png?raw=true)
![black-white-text101](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text101.png?raw=true)
![black-white-text102](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text102.png?raw=true)
![black-white-text103](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text103.png?raw=true)
![black-white-text104](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text104.png?raw=true)
![black-white-text105](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text105.png?raw=true)
![black-white-text106](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text106.png?raw=true)
![black-white-text107](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text107.png?raw=true)
![black-white-text108](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text108.png?raw=true)
![black-white-text109](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text109.png?raw=true)
![black-white-text11](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text11.png?raw=true)
![black-white-text110](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text110.png?raw=true)
![black-white-text111](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text111.png?raw=true)
![black-white-text112](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text112.png?raw=true)
![black-white-text113](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text113.png?raw=true)
![black-white-text114](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text114.png?raw=true)
![black-white-text115](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text115.png?raw=true)
![black-white-text116](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text116.png?raw=true)
![black-white-text117](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text117.png?raw=true)
![black-white-text118](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text118.png?raw=true)
![black-white-text119](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text119.png?raw=true)
![black-white-text12](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text12.png?raw=true)
![black-white-text120](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text120.png?raw=true)
![black-white-text121](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text121.png?raw=true)
![black-white-text122](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text122.png?raw=true)
![black-white-text123](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text123.png?raw=true)
![black-white-text124](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text124.png?raw=true)
![black-white-text125](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text125.png?raw=true)
![black-white-text126](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text126.png?raw=true)
![black-white-text127](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text127.png?raw=true)
![black-white-text128](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text128.png?raw=true)
![black-white-text129](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text129.png?raw=true)
![black-white-text13](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text13.png?raw=true)
![black-white-text130](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text130.png?raw=true)
![black-white-text131](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text131.png?raw=true)
![black-white-text132](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text132.png?raw=true)
![black-white-text133](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text133.png?raw=true)
![black-white-text134](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text134.png?raw=true)
![black-white-text135](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text135.png?raw=true)
![black-white-text136](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text136.png?raw=true)
![black-white-text137](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text137.png?raw=true)
![black-white-text138](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text138.png?raw=true)
![black-white-text139](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text139.png?raw=true)
![black-white-text14](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text14.png?raw=true)
![black-white-text140](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text140.png?raw=true)
![black-white-text141](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text141.png?raw=true)
![black-white-text142](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text142.png?raw=true)
![black-white-text143](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text143.png?raw=true)
![black-white-text144](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text144.png?raw=true)
![black-white-text145](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text145.png?raw=true)
![black-white-text146](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text146.png?raw=true)
![black-white-text147](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text147.png?raw=true)
![black-white-text148](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text148.png?raw=true)
![black-white-text149](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text149.png?raw=true)
![black-white-text15](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text15.png?raw=true)
![black-white-text150](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text150.png?raw=true)
![black-white-text151](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text151.png?raw=true)
![black-white-text152](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text152.png?raw=true)
![black-white-text153](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text153.png?raw=true)
![black-white-text154](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text154.png?raw=true)
![black-white-text155](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text155.png?raw=true)
![black-white-text156](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text156.png?raw=true)
![black-white-text157](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text157.png?raw=true)
![black-white-text158](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text158.png?raw=true)
![black-white-text159](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text159.png?raw=true)
![black-white-text16](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text16.png?raw=true)
![black-white-text160](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text160.png?raw=true)
![black-white-text161](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text161.png?raw=true)
![black-white-text162](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text162.png?raw=true)
![black-white-text163](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text163.png?raw=true)
![black-white-text164](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text164.png?raw=true)
![black-white-text165](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text165.png?raw=true)
![black-white-text166](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text166.png?raw=true)
![black-white-text167](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text167.png?raw=true)
![black-white-text168](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text168.png?raw=true)
![black-white-text169](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text169.png?raw=true)
![black-white-text17](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text17.png?raw=true)
![black-white-text170](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text170.png?raw=true)
![black-white-text171](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text171.png?raw=true)
![black-white-text172](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text172.png?raw=true)
![black-white-text173](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text173.png?raw=true)
![black-white-text174](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text174.png?raw=true)
![black-white-text175](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text175.png?raw=true)
![black-white-text176](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text176.png?raw=true)
![black-white-text177](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text177.png?raw=true)
![black-white-text178](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text178.png?raw=true)
![black-white-text179](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text179.png?raw=true)
![black-white-text18](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text18.png?raw=true)
![black-white-text180](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text180.png?raw=true)
![black-white-text181](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text181.png?raw=true)
![black-white-text182](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text182.png?raw=true)
![black-white-text183](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text183.png?raw=true)
![black-white-text184](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text184.png?raw=true)
![black-white-text185](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text185.png?raw=true)
![black-white-text186](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text186.png?raw=true)
![black-white-text187](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text187.png?raw=true)
![black-white-text188](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text188.png?raw=true)
![black-white-text189](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text189.png?raw=true)
![black-white-text19](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text19.png?raw=true)
![black-white-text190](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text190.png?raw=true)
![black-white-text191](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text191.png?raw=true)
![black-white-text192](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text192.png?raw=true)
![black-white-text193](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text193.png?raw=true)
![black-white-text194](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text194.png?raw=true)
![black-white-text195](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text195.png?raw=true)
![black-white-text196](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text196.png?raw=true)
![black-white-text197](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text197.png?raw=true)
![black-white-text198](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text198.png?raw=true)
![black-white-text199](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text199.png?raw=true)
![black-white-text2](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text2.png?raw=true)
![black-white-text20](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text20.png?raw=true)
![black-white-text200](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text200.png?raw=true)
![black-white-text201](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text201.png?raw=true)
![black-white-text202](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text202.png?raw=true)
![black-white-text203](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text203.png?raw=true)
![black-white-text204](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text204.png?raw=true)
![black-white-text205](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text205.png?raw=true)
![black-white-text206](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text206.png?raw=true)
![black-white-text207](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text207.png?raw=true)
![black-white-text208](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text208.png?raw=true)
![black-white-text209](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text209.png?raw=true)
![black-white-text21](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text21.png?raw=true)
![black-white-text210](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text210.png?raw=true)
![black-white-text211](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text211.png?raw=true)
![black-white-text212](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text212.png?raw=true)
![black-white-text213](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text213.png?raw=true)
![black-white-text214](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text214.png?raw=true)
![black-white-text215](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text215.png?raw=true)
![black-white-text216](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text216.png?raw=true)
![black-white-text217](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text217.png?raw=true)
![black-white-text218](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text218.png?raw=true)
![black-white-text219](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text219.png?raw=true)
![black-white-text22](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text22.png?raw=true)
![black-white-text220](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text220.png?raw=true)
![black-white-text221](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text221.png?raw=true)
![black-white-text222](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text222.png?raw=true)
![black-white-text223](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text223.png?raw=true)
![black-white-text224](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text224.png?raw=true)
![black-white-text225](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text225.png?raw=true)
![black-white-text226](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text226.png?raw=true)
![black-white-text227](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text227.png?raw=true)
![black-white-text228](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text228.png?raw=true)
![black-white-text229](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text229.png?raw=true)
![black-white-text23](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text23.png?raw=true)
![black-white-text230](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text230.png?raw=true)
![black-white-text231](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text231.png?raw=true)
![black-white-text232](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text232.png?raw=true)
![black-white-text233](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text233.png?raw=true)
![black-white-text234](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text234.png?raw=true)
![black-white-text235](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text235.png?raw=true)
![black-white-text236](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text236.png?raw=true)
![black-white-text237](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text237.png?raw=true)
![black-white-text238](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text238.png?raw=true)
![black-white-text239](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text239.png?raw=true)
![black-white-text24](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text24.png?raw=true)
![black-white-text240](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text240.png?raw=true)
![black-white-text241](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text241.png?raw=true)
![black-white-text242](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text242.png?raw=true)
![black-white-text243](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text243.png?raw=true)
![black-white-text244](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text244.png?raw=true)
![black-white-text245](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text245.png?raw=true)
![black-white-text246](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text246.png?raw=true)
![black-white-text247](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text247.png?raw=true)
![black-white-text248](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text248.png?raw=true)
![black-white-text249](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text249.png?raw=true)
![black-white-text25](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text25.png?raw=true)
![black-white-text250](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text250.png?raw=true)
![black-white-text251](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text251.png?raw=true)
![black-white-text252](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text252.png?raw=true)
![black-white-text253](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text253.png?raw=true)
![black-white-text254](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text254.png?raw=true)
![black-white-text255](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text255.png?raw=true)
![black-white-text256](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text256.png?raw=true)
![black-white-text257](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text257.png?raw=true)
![black-white-text258](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text258.png?raw=true)
![black-white-text259](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text259.png?raw=true)
![black-white-text26](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text26.png?raw=true)
![black-white-text260](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text260.png?raw=true)
![black-white-text261](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text261.png?raw=true)
![black-white-text262](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text262.png?raw=true)
![black-white-text263](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text263.png?raw=true)
![black-white-text264](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text264.png?raw=true)
![black-white-text265](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text265.png?raw=true)
![black-white-text266](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text266.png?raw=true)
![black-white-text267](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text267.png?raw=true)
![black-white-text268](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text268.png?raw=true)
![black-white-text269](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text269.png?raw=true)
![black-white-text27](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text27.png?raw=true)
![black-white-text270](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text270.png?raw=true)
![black-white-text271](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text271.png?raw=true)
![black-white-text272](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text272.png?raw=true)
![black-white-text273](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text273.png?raw=true)
![black-white-text274](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text274.png?raw=true)
![black-white-text275](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text275.png?raw=true)
![black-white-text276](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text276.png?raw=true)
![black-white-text277](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text277.png?raw=true)
![black-white-text278](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text278.png?raw=true)
![black-white-text279](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text279.png?raw=true)
![black-white-text28](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text28.png?raw=true)
![black-white-text280](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text280.png?raw=true)
![black-white-text281](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text281.png?raw=true)
![black-white-text282](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text282.png?raw=true)
![black-white-text283](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text283.png?raw=true)
![black-white-text284](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text284.png?raw=true)
![black-white-text285](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text285.png?raw=true)
![black-white-text286](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text286.png?raw=true)
![black-white-text287](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text287.png?raw=true)
![black-white-text288](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text288.png?raw=true)
![black-white-text289](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text289.png?raw=true)
![black-white-text29](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text29.png?raw=true)
![black-white-text290](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text290.png?raw=true)
![black-white-text291](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text291.png?raw=true)
![black-white-text292](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text292.png?raw=true)
![black-white-text293](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text293.png?raw=true)
![black-white-text294](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text294.png?raw=true)
![black-white-text295](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text295.png?raw=true)
![black-white-text296](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text296.png?raw=true)
![black-white-text297](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text297.png?raw=true)
![black-white-text298](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text298.png?raw=true)
![black-white-text299](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text299.png?raw=true)
![black-white-text3](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text3.png?raw=true)
![black-white-text30](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text30.png?raw=true)
![black-white-text300](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text300.png?raw=true)
![black-white-text301](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text301.png?raw=true)
![black-white-text302](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text302.png?raw=true)
![black-white-text303](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text303.png?raw=true)
![black-white-text304](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text304.png?raw=true)
![black-white-text305](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text305.png?raw=true)
![black-white-text306](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text306.png?raw=true)
![black-white-text307](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text307.png?raw=true)
![black-white-text308](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text308.png?raw=true)
![black-white-text309](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text309.png?raw=true)
![black-white-text31](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text31.png?raw=true)
![black-white-text310](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text310.png?raw=true)
![black-white-text311](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text311.png?raw=true)
![black-white-text312](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text312.png?raw=true)
![black-white-text313](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text313.png?raw=true)
![black-white-text314](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text314.png?raw=true)
![black-white-text315](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text315.png?raw=true)
![black-white-text316](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text316.png?raw=true)
![black-white-text317](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text317.png?raw=true)
![black-white-text318](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text318.png?raw=true)
![black-white-text319](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text319.png?raw=true)
![black-white-text32](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text32.png?raw=true)
![black-white-text320](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text320.png?raw=true)
![black-white-text321](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text321.png?raw=true)
![black-white-text322](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text322.png?raw=true)
![black-white-text323](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text323.png?raw=true)
![black-white-text324](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text324.png?raw=true)
![black-white-text325](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text325.png?raw=true)
![black-white-text326](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text326.png?raw=true)
![black-white-text327](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text327.png?raw=true)
![black-white-text328](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text328.png?raw=true)
![black-white-text329](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text329.png?raw=true)
![black-white-text33](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text33.png?raw=true)
![black-white-text330](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text330.png?raw=true)
![black-white-text331](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text331.png?raw=true)
![black-white-text332](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text332.png?raw=true)
![black-white-text333](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text333.png?raw=true)
![black-white-text334](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text334.png?raw=true)
![black-white-text335](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text335.png?raw=true)
![black-white-text336](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text336.png?raw=true)
![black-white-text337](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text337.png?raw=true)
![black-white-text338](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text338.png?raw=true)
![black-white-text339](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text339.png?raw=true)
![black-white-text34](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text34.png?raw=true)
![black-white-text340](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text340.png?raw=true)
![black-white-text341](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text341.png?raw=true)
![black-white-text342](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text342.png?raw=true)
![black-white-text343](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text343.png?raw=true)
![black-white-text344](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text344.png?raw=true)
![black-white-text345](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text345.png?raw=true)
![black-white-text346](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text346.png?raw=true)
![black-white-text347](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text347.png?raw=true)
![black-white-text348](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text348.png?raw=true)
![black-white-text349](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text349.png?raw=true)
![black-white-text35](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text35.png?raw=true)
![black-white-text350](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text350.png?raw=true)
![black-white-text351](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text351.png?raw=true)
![black-white-text352](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text352.png?raw=true)
![black-white-text353](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text353.png?raw=true)
![black-white-text354](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text354.png?raw=true)
![black-white-text355](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text355.png?raw=true)
![black-white-text356](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text356.png?raw=true)
![black-white-text357](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text357.png?raw=true)
![black-white-text358](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text358.png?raw=true)
![black-white-text359](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text359.png?raw=true)
![black-white-text36](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text36.png?raw=true)
![black-white-text360](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text360.png?raw=true)
![black-white-text361](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text361.png?raw=true)
![black-white-text362](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text362.png?raw=true)
![black-white-text363](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text363.png?raw=true)
![black-white-text364](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text364.png?raw=true)
![black-white-text365](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text365.png?raw=true)
![black-white-text366](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text366.png?raw=true)
![black-white-text367](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text367.png?raw=true)
![black-white-text368](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text368.png?raw=true)
![black-white-text369](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text369.png?raw=true)
![black-white-text37](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text37.png?raw=true)
![black-white-text370](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text370.png?raw=true)
![black-white-text371](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text371.png?raw=true)
![black-white-text372](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text372.png?raw=true)
![black-white-text373](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text373.png?raw=true)
![black-white-text374](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text374.png?raw=true)
![black-white-text375](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text375.png?raw=true)
![black-white-text376](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text376.png?raw=true)
![black-white-text377](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text377.png?raw=true)
![black-white-text378](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text378.png?raw=true)
![black-white-text379](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text379.png?raw=true)
![black-white-text38](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text38.png?raw=true)
![black-white-text380](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text380.png?raw=true)
![black-white-text381](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text381.png?raw=true)
![black-white-text382](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text382.png?raw=true)
![black-white-text383](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text383.png?raw=true)
![black-white-text384](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text384.png?raw=true)
![black-white-text385](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text385.png?raw=true)
![black-white-text386](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text386.png?raw=true)
![black-white-text387](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text387.png?raw=true)
![black-white-text388](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text388.png?raw=true)
![black-white-text389](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text389.png?raw=true)
![black-white-text39](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text39.png?raw=true)
![black-white-text390](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text390.png?raw=true)
![black-white-text391](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text391.png?raw=true)
![black-white-text392](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text392.png?raw=true)
![black-white-text393](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text393.png?raw=true)
![black-white-text394](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text394.png?raw=true)
![black-white-text395](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text395.png?raw=true)
![black-white-text396](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text396.png?raw=true)
![black-white-text397](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text397.png?raw=true)
![black-white-text398](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text398.png?raw=true)
![black-white-text399](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text399.png?raw=true)
![black-white-text4](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text4.png?raw=true)
![black-white-text40](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text40.png?raw=true)
![black-white-text400](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text400.png?raw=true)
![black-white-text41](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text41.png?raw=true)
![black-white-text42](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text42.png?raw=true)
![black-white-text43](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text43.png?raw=true)
![black-white-text44](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text44.png?raw=true)
![black-white-text45](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text45.png?raw=true)
![black-white-text46](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text46.png?raw=true)
![black-white-text47](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text47.png?raw=true)
![black-white-text48](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text48.png?raw=true)
![black-white-text49](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text49.png?raw=true)
![black-white-text5](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text5.png?raw=true)
![black-white-text50](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text50.png?raw=true)
![black-white-text51](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text51.png?raw=true)
![black-white-text52](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text52.png?raw=true)
![black-white-text53](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text53.png?raw=true)
![black-white-text54](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text54.png?raw=true)
![black-white-text55](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text55.png?raw=true)
![black-white-text56](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text56.png?raw=true)
![black-white-text57](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text57.png?raw=true)
![black-white-text58](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text58.png?raw=true)
![black-white-text59](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text59.png?raw=true)
![black-white-text6](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text6.png?raw=true)
![black-white-text60](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text60.png?raw=true)
![black-white-text61](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text61.png?raw=true)
![black-white-text62](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text62.png?raw=true)
![black-white-text63](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text63.png?raw=true)
![black-white-text64](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text64.png?raw=true)
![black-white-text65](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text65.png?raw=true)
![black-white-text66](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text66.png?raw=true)
![black-white-text67](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text67.png?raw=true)
![black-white-text68](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text68.png?raw=true)
![black-white-text69](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text69.png?raw=true)
![black-white-text7](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text7.png?raw=true)
![black-white-text70](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text70.png?raw=true)
![black-white-text71](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text71.png?raw=true)
![black-white-text72](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text72.png?raw=true)
![black-white-text73](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text73.png?raw=true)
![black-white-text74](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text74.png?raw=true)
![black-white-text75](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text75.png?raw=true)
![black-white-text76](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text76.png?raw=true)
![black-white-text77](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text77.png?raw=true)
![black-white-text78](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text78.png?raw=true)
![black-white-text79](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text79.png?raw=true)
![black-white-text8](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text8.png?raw=true)
![black-white-text80](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text80.png?raw=true)
![black-white-text81](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text81.png?raw=true)
![black-white-text82](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text82.png?raw=true)
![black-white-text83](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text83.png?raw=true)
![black-white-text84](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text84.png?raw=true)
![black-white-text85](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text85.png?raw=true)
![black-white-text86](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text86.png?raw=true)
![black-white-text87](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text87.png?raw=true)
![black-white-text88](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text88.png?raw=true)
![black-white-text89](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text89.png?raw=true)
![black-white-text9](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text9.png?raw=true)
![black-white-text90](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text90.png?raw=true)
![black-white-text91](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text91.png?raw=true)
![black-white-text92](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text92.png?raw=true)
![black-white-text93](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text93.png?raw=true)
![black-white-text94](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text94.png?raw=true)
![black-white-text95](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text95.png?raw=true)
![black-white-text96](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text96.png?raw=true)
![black-white-text97](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text97.png?raw=true)
![black-white-text98](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text98.png?raw=true)
![black-white-text99](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw0-400/black-white-text99.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1201.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1202.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1203.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1204.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1205.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1206.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1207.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1208.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1209.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1210.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1211.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1212.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1213.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1214.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1215.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1216.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1217.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1218.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1219.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1220.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1221.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1222.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1223.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1224.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1225.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1226.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1227.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1228.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1229.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1230.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1231.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1232.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1233.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1234.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1235.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1236.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1237.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1238.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1239.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1240.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1241.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1242.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1243.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1244.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1245.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1246.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1247.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1248.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1249.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1250.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1251.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1252.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1253.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1254.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1255.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1256.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1257.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1258.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1259.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1260.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1261.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1262.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1263.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1264.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1265.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1266.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1267.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1268.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1269.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1270.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1271.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1272.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1273.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1274.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1275.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1276.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1277.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1278.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1279.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1280.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1281.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1282.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1283.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1284.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1285.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1286.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1287.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1288.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1289.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1290.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1291.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1292.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1293.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1294.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1295.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1296.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1297.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1298.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1299.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1300.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1301.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1302.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1303.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1304.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1305.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1306.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1307.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1308.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1309.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1310.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1311.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1312.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1313.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1314.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1315.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1316.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1317.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1318.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1319.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1320.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1321.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1322.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1323.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1324.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1325.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1326.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1327.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1328.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1329.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1330.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1331.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1332.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1333.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1334.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1335.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1336.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1337.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1338.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1339.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1340.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1341.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1342.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1343.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1344.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1345.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1346.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1347.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1348.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1349.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1350.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1351.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1352.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1353.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1354.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1355.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1356.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1357.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1358.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1359.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1360.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1361.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1362.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1363.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1364.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1365.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1366.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1367.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1368.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1369.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1370.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1371.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1372.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1373.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1374.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1375.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1376.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1377.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1378.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1379.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1380.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1381.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1382.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1383.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1384.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1385.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1386.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1387.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1388.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1389.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1390.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1391.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1392.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1393.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1394.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1395.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1396.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1397.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1398.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1399.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1400.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1401.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1402.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1403.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1404.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1405.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1406.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1407.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1408.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1409.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1410.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1411.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1412.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1413.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1414.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1415.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1416.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1417.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1418.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1419.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1420.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1421.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1422.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1423.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1424.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1425.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1426.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1427.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1428.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1429.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1430.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1431.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1432.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1433.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1434.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1435.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1436.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1437.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1438.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1439.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1440.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1441.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1442.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1443.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1444.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1445.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1446.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1447.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1448.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1449.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1450.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1451.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1452.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1453.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1454.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1455.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1456.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1457.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1458.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1459.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1460.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1461.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1462.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1463.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1464.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1465.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1466.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1467.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1468.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1469.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1470.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1471.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1472.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1473.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1474.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1475.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1476.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1477.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1478.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1479.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1480.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1481.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1482.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1483.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1484.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1485.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1486.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1487.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1488.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1489.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1490.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1491.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1492.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1493.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1494.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1495.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1496.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1497.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1498.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1499.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1500.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1501.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1502.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1503.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1504.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1505.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1506.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1507.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1508.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1509.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1510.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1511.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1512.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1513.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1514.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1515.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1516.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1517.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1518.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1519.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1520.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1521.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1522.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1523.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1524.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1525.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1526.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1527.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1528.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1529.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1530.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1531.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1532.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1533.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1534.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1535.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1536.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1537.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1538.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1539.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1540.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1541.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1542.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1543.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1544.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1545.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1546.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1547.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1548.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1549.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1550.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1551.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1552.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1553.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1554.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1555.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1556.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1557.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1558.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1559.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1560.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1561.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1562.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1563.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1564.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1565.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1566.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1567.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1568.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1569.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1570.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1571.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1572.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1573.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1574.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1575.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1576.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1577.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1578.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1579.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1580.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1581.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1582.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1583.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1584.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1585.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1586.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1587.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1588.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1589.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1590.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1591.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1592.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1593.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1594.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1595.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1596.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1597.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1598.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1599.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1201-1600/black-white-text1600.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1601.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1602.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1603.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1604.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1605.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1606.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1607.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1608.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1609.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1610.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1611.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1612.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1613.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1614.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1615.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1616.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1617.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1618.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1619.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1620.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1621.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1622.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1623.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1624.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1625.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1626.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1627.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1628.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1629.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1630.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1631.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1632.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1633.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1634.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1635.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1636.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1637.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1638.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1639.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1640.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1641.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1642.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1643.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1644.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1645.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1646.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1647.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1648.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1649.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1650.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1651.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1652.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1653.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1654.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1655.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1656.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1657.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1658.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1659.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1660.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1661.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1662.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1663.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1664.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1665.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1666.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1667.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1668.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1669.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1670.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1671.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1672.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1673.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1674.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1675.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1676.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1677.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1678.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1679.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1680.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1681.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1682.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1683.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1684.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1685.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1686.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1687.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1688.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1689.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1690.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1691.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1692.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1693.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1694.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1695.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1696.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1697.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1698.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1699.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1700.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1701.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1702.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1703.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1704.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1705.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1706.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1707.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1708.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1709.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1710.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1711.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1712.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1713.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1714.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1715.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1716.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1717.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1718.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1719.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1720.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1721.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1722.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1723.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1724.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1725.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1726.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1727.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1728.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1729.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1730.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1731.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1732.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1733.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1734.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1735.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1736.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1737.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1738.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1739.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1740.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1741.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1742.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1743.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1744.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1745.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1746.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1747.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1748.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1749.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1750.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1751.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1752.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1753.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1754.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1755.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1756.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1757.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1758.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1759.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1760.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1761.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1762.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1763.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1764.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1765.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1766.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1767.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1768.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1769.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1770.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1771.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1772.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1773.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1774.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1775.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1776.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1777.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1778.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1779.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1780.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1781.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1782.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1783.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1784.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1785.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1786.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1787.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1788.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1789.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1790.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1791.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1792.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1793.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1794.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1795.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1796.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1797.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1798.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1799.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1800.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1801.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1802.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1803.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1804.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1805.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1806.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1807.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1808.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1809.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1810.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1811.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1812.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1813.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1814.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1815.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1816.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1817.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1818.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1819.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1820.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1821.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1822.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1823.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1824.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1825.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1826.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1827.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1828.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1829.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1830.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1831.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1832.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1833.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1834.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1835.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1836.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1837.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1838.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1839.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1840.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1841.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1842.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1843.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1844.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1845.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1846.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1847.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1848.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1849.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1850.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1851.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1852.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1853.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1854.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1855.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1856.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1857.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1858.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1859.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1860.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1861.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1862.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1863.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1864.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1865.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1866.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1867.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1868.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1869.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1870.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1871.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1872.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1873.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1874.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1875.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1876.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1877.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1878.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1879.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1880.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1881.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1882.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1883.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1884.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1885.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1886.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1887.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1888.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1889.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1890.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1891.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1892.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1893.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1894.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1895.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1896.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1897.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1898.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1899.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1900.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1901.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1902.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1903.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1904.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1905.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1906.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1907.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1908.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1909.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1910.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1911.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1912.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1913.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1914.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1915.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1916.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1917.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1918.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1919.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1920.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1921.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1922.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1923.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1924.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1925.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1926.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1927.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1928.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1929.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1930.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1931.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1932.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1933.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1934.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1935.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1936.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1937.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1938.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1939.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1940.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1941.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1942.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1943.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1944.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1945.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1946.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1947.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1948.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1949.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1950.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1951.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1952.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1953.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1954.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1955.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1956.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1957.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1958.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1959.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1960.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1961.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1962.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1963.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1964.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1965.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1966.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1967.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1968.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1969.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1970.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1971.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1972.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1973.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1974.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1975.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1976.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1977.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1978.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1979.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1980.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1981.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1982.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1983.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1984.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1985.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1986.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1987.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1988.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1989.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1990.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1991.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1992.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1993.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1994.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1995.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1996.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1997.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1998.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text1999.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw1601-2000/black-white-text2000.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2001.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2002.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2003.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2004.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2005.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2006.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2007.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2008.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2009.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2010.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2011.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2012.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2013.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2014.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2015.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2016.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2017.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2018.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2019.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2020.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2021.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2022.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2023.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2024.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2025.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2026.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2027.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2028.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2029.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2030.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2031.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2032.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2033.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2034.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2035.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2036.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2037.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2038.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2039.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2040.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2041.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2042.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2043.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2044.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2045.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2046.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2047.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2048.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2049.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2050.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2051.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2052.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2053.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2054.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2055.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2056.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2057.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2058.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2059.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2060.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2061.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2062.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2063.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2064.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2065.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2066.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2067.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2068.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw2001-2069/black-white-text2069.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text401.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text402.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text403.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text404.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text405.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text406.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text407.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text408.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text409.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text410.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text411.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text412.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text413.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text414.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text415.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text416.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text417.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text418.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text419.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text420.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text421.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text422.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text423.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text424.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text425.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text426.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text427.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text428.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text429.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text430.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text431.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text432.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text433.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text434.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text435.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text436.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text437.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text438.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text439.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text440.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text441.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text442.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text443.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text444.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text445.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text446.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text447.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text448.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text449.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text450.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text451.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text452.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text453.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text454.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text455.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text456.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text457.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text458.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text459.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text460.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text461.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text462.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text463.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text464.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text465.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text466.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text467.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text468.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text469.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text470.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text471.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text472.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text473.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text474.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text475.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text476.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text477.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text478.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text479.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text480.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text481.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text482.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text483.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text484.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text485.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text486.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text487.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text488.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text489.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text490.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text491.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text492.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text493.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text494.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text495.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text496.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text497.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text498.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text499.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text500.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text501.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text502.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text503.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text504.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text505.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text506.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text507.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text508.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text509.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text510.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text511.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text512.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text513.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text514.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text515.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text516.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text517.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text518.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text519.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text520.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text521.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text522.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text523.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text524.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text525.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text526.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text527.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text528.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text529.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text530.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text531.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text532.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text533.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text534.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text535.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text536.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text537.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text538.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text539.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text540.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text541.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text542.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text543.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text544.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text545.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text546.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text547.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text548.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text549.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text550.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text551.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text552.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text553.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text554.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text555.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text556.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text557.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text558.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text559.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text560.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text561.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text562.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text563.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text564.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text565.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text566.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text567.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text568.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text569.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text570.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text571.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text572.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text573.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text574.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text575.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text576.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text577.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text578.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text579.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text580.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text581.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text582.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text583.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text584.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text585.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text586.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text587.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text588.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text589.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text590.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text591.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text592.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text593.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text594.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text595.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text596.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text597.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text598.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text599.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text600.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text601.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text602.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text603.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text604.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text605.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text606.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text607.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text608.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text609.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text610.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text611.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text612.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text613.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text614.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text615.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text616.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text617.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text618.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text619.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text620.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text621.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text622.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text623.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text624.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text625.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text626.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text627.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text628.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text629.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text630.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text631.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text632.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text633.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text634.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text635.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text636.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text637.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text638.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text639.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text640.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text641.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text642.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text643.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text644.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text645.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text646.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text647.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text648.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text649.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text650.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text651.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text652.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text653.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text654.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text655.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text656.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text657.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text658.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text659.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text660.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text661.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text662.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text663.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text664.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text665.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text666.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text667.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text668.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text669.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text670.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text671.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text672.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text673.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text674.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text675.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text676.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text677.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text678.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text679.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text680.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text681.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text682.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text683.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text684.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text685.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text686.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text687.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text688.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text689.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text690.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text691.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text692.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text693.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text694.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text695.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text696.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text697.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text698.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text699.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text700.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text701.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text702.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text703.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text704.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text705.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text706.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text707.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text708.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text709.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text710.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text711.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text712.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text713.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text714.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text715.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text716.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text717.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text718.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text719.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text720.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text721.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text722.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text723.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text724.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text725.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text726.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text727.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text728.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text729.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text730.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text731.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text732.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text733.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text734.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text735.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text736.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text737.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text738.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text739.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text740.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text741.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text742.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text743.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text744.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text745.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text746.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text747.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text748.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text749.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text750.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text751.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text752.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text753.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text754.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text755.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text756.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text757.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text758.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text759.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text760.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text761.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text762.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text763.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text764.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text765.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text766.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text767.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text768.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text769.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text770.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text771.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text772.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text773.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text774.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text775.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text776.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text777.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text778.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text779.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text780.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text781.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text782.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text783.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text784.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text785.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text786.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text787.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text788.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text789.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text790.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text791.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text792.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text793.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text794.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text795.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text796.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text797.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text798.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text799.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw401-800/black-white-text800.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1000.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1001.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1002.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1003.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1004.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1005.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1006.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1007.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1008.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1009.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1010.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1011.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1012.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1013.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1014.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1015.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1016.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1017.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1018.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1019.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1020.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1021.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1022.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1023.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1024.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1025.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1026.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1027.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1028.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1029.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1030.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1031.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1032.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1033.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1034.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1035.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1036.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1037.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1038.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1039.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1040.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1041.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1042.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1043.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1044.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1045.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1046.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1047.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1048.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1049.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1050.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1051.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1052.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1053.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1054.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1055.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1056.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1057.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1058.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1059.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1060.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1061.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1062.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1063.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1064.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1065.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1066.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1067.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1068.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1069.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1070.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1071.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1072.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1073.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1074.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1075.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1076.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1077.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1078.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1079.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1080.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1081.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1082.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1083.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1084.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1085.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1086.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1087.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1088.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1089.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1090.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1091.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1092.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1093.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1094.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1095.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1096.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1097.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1098.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1099.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1100.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1101.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1102.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1103.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1104.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1105.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1106.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1107.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1108.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1109.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1110.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1111.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1112.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1113.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1114.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1115.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1116.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1117.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1118.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1119.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1120.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1121.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1122.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1123.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1124.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1125.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1126.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1127.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1128.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1129.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1130.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1131.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1132.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1133.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1134.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1135.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1136.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1137.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1138.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1139.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1140.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1141.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1142.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1143.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1144.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1145.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1146.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1147.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1148.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1149.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1150.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1151.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1152.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1153.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1154.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1155.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1156.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1157.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1158.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1159.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1160.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1161.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1162.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1163.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1164.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1165.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1166.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1167.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1168.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1169.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1170.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1171.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1172.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1173.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1174.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1175.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1176.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1177.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1178.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1179.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1180.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1181.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1182.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1183.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1184.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1185.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1186.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1187.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1188.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1189.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1190.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1191.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1192.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1193.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1194.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1195.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1196.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1197.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1198.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1199.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text1200.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text801.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text802.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text803.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text804.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text805.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text806.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text807.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text808.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text809.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text810.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text811.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text812.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text813.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text814.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text815.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text816.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text817.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text818.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text819.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text820.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text821.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text822.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text823.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text824.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text825.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text826.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text827.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text828.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text829.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text830.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text831.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text832.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text833.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text834.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text835.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text836.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text837.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text838.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text839.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text840.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text841.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text842.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text843.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text844.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text845.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text846.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text847.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text848.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text849.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text850.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text851.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text852.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text853.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text854.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text855.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text856.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text857.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text858.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text859.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text860.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text861.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text862.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text863.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text864.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text865.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text866.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text867.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text868.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text869.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text870.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text871.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text872.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text873.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text874.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text875.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text876.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text877.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text878.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text879.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text880.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text881.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text882.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text883.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text884.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text885.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text886.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text887.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text888.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text889.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text890.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text891.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text892.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text893.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text894.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text895.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text896.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text897.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text898.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text899.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text900.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text901.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text902.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text903.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text904.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text905.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text906.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text907.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text908.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text909.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text910.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text911.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text912.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text913.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text914.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text915.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text916.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text917.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text918.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text919.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text920.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text921.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text922.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text923.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text924.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text925.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text926.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text927.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text928.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text929.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text930.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text931.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text932.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text933.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text934.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text935.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text936.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text937.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text938.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text939.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text940.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text941.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text942.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text943.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text944.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text945.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text946.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text947.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text948.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text949.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text950.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text951.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text952.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text953.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text954.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text955.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text956.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text957.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text958.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text959.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text960.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text961.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text962.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text963.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text964.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text965.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text966.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text967.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text968.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text969.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text970.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text971.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text972.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text973.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text974.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text975.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text976.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text977.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text978.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text979.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text980.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text981.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text982.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text983.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text984.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text985.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text986.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text987.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text988.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text989.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text990.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text991.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text992.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text993.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text994.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text995.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text996.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text997.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text998.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/bw801-1200/black-white-text999.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text0.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text1.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text10.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text100.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text101.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text102.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text103.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text104.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text105.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text106.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text107.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text108.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text109.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text11.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text110.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text111.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text112.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text113.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text114.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text115.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text116.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text117.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text118.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text119.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text12.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text120.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text121.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text122.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text123.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text124.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text125.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text126.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text127.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text128.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text129.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text13.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text130.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text131.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text132.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text133.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text134.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text135.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text136.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text137.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text138.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text139.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text14.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text140.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text141.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text142.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text143.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text144.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text145.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text146.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text147.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text148.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text149.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text15.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text150.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text151.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text152.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text153.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text154.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text155.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text156.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text157.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text158.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text159.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text16.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text160.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text161.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text162.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text163.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text164.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text165.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text166.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text167.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text168.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text169.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text17.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text170.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text171.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text172.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text173.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text174.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text175.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text176.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text177.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text178.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text179.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text18.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text180.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text181.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text182.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text183.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text184.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text185.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text186.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text187.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text188.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text189.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text19.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text190.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text191.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text192.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text193.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text194.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text195.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text196.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text197.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text198.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text199.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text2.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text20.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text200.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text21.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text22.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text23.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text24.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text25.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text26.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text27.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text28.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text29.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text3.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text30.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text31.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text32.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text33.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text34.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text35.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text36.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text37.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text38.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text39.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text4.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text40.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text41.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text42.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text43.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text44.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text45.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text46.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text47.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text48.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text49.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text5.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text50.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text51.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text52.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text53.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text54.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text55.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text56.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text57.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text58.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text59.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text6.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text60.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text61.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text62.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text63.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text64.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text65.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text66.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text67.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text68.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text69.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text7.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text70.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text71.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text72.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text73.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text74.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text75.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text76.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text77.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text78.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text79.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text8.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text80.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text81.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text82.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text83.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text84.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text85.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text86.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text87.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text88.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text89.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text9.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text90.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text91.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text92.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text93.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text94.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text95.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text96.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text97.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text98.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n0-200/negative-text99.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1201.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1202.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1203.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1204.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1205.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1206.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1207.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1208.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1209.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1210.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1211.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1212.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1213.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1214.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1215.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1216.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1217.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1218.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1219.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1220.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1221.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1222.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1223.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1224.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1225.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1226.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1227.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1228.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1229.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1230.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1231.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1232.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1233.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1234.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1235.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1236.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1237.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1238.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1239.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1240.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1241.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1242.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1243.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1244.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1245.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1246.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1247.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1248.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1249.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1250.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1251.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1252.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1253.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1254.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1255.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1256.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1257.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1258.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1259.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1260.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1261.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1262.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1263.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1264.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1265.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1266.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1267.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1268.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1269.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1270.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1271.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1272.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1273.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1274.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1275.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1276.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1277.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1278.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1279.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1280.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1281.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1282.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1283.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1284.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1285.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1286.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1287.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1288.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1289.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1290.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1291.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1292.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1293.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1294.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1295.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1296.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1297.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1298.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1299.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1300.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1301.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1302.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1303.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1304.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1305.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1306.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1307.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1308.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1309.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1310.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1311.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1312.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1313.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1314.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1315.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1316.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1317.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1318.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1319.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1320.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1321.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1322.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1323.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1324.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1325.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1326.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1327.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1328.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1329.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1330.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1331.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1332.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1333.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1334.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1335.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1336.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1337.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1338.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1339.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1340.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1341.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1342.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1343.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1344.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1345.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1346.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1347.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1348.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1349.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1350.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1351.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1352.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1353.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1354.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1355.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1356.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1357.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1358.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1359.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1360.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1361.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1362.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1363.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1364.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1365.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1366.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1367.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1368.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1369.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1370.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1371.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1372.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1373.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1374.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1375.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1376.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1377.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1378.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1379.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1380.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1381.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1382.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1383.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1384.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1385.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1386.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1387.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1388.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1389.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1390.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1391.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1392.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1393.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1394.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1395.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1396.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1397.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1398.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1399.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1400.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1401.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1402.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1403.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1404.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1405.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1406.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1407.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1408.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1409.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1410.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1411.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1412.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1413.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1414.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1415.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1416.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1417.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1418.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1419.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1420.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1421.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1422.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1423.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1424.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1425.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1426.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1427.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1428.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1429.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1430.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1431.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1432.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1433.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1434.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1435.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1436.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1437.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1438.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1439.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1440.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1441.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1442.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1443.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1444.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1445.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1446.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1447.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1448.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1449.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1450.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1451.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1452.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1453.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1454.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1455.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1456.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1457.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1458.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1459.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1460.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1461.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1462.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1463.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1464.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1465.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1466.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1467.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1468.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1469.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1470.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1471.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1472.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1473.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1474.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1475.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1476.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1477.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1478.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1479.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1480.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1481.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1482.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1483.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1484.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1485.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1486.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1487.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1488.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1489.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1490.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1491.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1492.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1493.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1494.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1495.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1496.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1497.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1498.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1499.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1500.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1501.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1502.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1503.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1504.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1505.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1506.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1507.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1508.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1509.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1510.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1511.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1512.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1513.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1514.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1515.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1516.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1517.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1518.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1519.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1520.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1521.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1522.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1523.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1524.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1525.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1526.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1527.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1528.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1529.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1530.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1531.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1532.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1533.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1534.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1535.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1536.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1537.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1538.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1539.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1540.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1541.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1542.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1543.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1544.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1545.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1546.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1547.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1548.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1549.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1550.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1551.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1552.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1553.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1554.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1555.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1556.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1557.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1558.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1559.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1560.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1561.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1562.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1563.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1564.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1565.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1566.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1567.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1568.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1569.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1570.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1571.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1572.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1573.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1574.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1575.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1576.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1577.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1578.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1579.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1580.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1581.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1582.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1583.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1584.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1585.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1586.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1587.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1588.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1589.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1590.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1591.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1592.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1593.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1594.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1595.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1596.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1597.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1598.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1599.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1201-1600/negative-text1600.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1601.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1602.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1603.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1604.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1605.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1606.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1607.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1608.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1609.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1610.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1611.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1612.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1613.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1614.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1615.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1616.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1617.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1618.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1619.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1620.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1621.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1622.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1623.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1624.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1625.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1626.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1627.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1628.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1629.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1630.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1631.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1632.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1633.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1634.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1635.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1636.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1637.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1638.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1639.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1640.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1641.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1642.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1643.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1644.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1645.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1646.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1647.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1648.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1649.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1650.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1651.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1652.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1653.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1654.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1655.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1656.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1657.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1658.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1659.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1660.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1661.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1662.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1663.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1664.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1665.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1666.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1667.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1668.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1669.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1670.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1671.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1672.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1673.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1674.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1675.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1676.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1677.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1678.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1679.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1680.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1681.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1682.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1683.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1684.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1685.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1686.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1687.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1688.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1689.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1690.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1691.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1692.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1693.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1694.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1695.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1696.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1697.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1698.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1699.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1700.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1701.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1702.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1703.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1704.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1705.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1706.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1707.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1708.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1709.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1710.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1711.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1712.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1713.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1714.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1715.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1716.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1717.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1718.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1719.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1720.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1721.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1722.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1723.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1724.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1725.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1726.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1727.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1728.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1729.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1730.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1731.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1732.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1733.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1734.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1735.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1736.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1737.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1738.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1739.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1740.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1741.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1742.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1743.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1744.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1745.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1746.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1747.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1748.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1749.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1750.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1751.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1752.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1753.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1754.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1755.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1756.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1757.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1758.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1759.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1760.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1761.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1762.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1763.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1764.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1765.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1766.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1767.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1768.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1769.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1770.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1771.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1772.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1773.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1774.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1775.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1776.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1777.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1778.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1779.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1780.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1781.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1782.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1783.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1784.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1785.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1786.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1787.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1788.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1789.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1790.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1791.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1792.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1793.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1794.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1795.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1796.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1797.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1798.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1799.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1800.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1801.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1802.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1803.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1804.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1805.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1806.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1807.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1808.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1809.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1810.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1811.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1812.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1813.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1814.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1815.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1816.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1817.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1818.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1819.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1820.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1821.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1822.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1823.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1824.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1825.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1826.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1827.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1828.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1829.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1830.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1831.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1832.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1833.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1834.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1835.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1836.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1837.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1838.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1839.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1840.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1841.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1842.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1843.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1844.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1845.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1846.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1847.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1848.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1849.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1850.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1851.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1852.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1853.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1854.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1855.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1856.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1857.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1858.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1859.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1860.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1861.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1862.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1863.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1864.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1865.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1866.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1867.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1868.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1869.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1870.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1871.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1872.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1873.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1874.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1875.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1876.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1877.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1878.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1879.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1880.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1881.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1882.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1883.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1884.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1885.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1886.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1887.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1888.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1889.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1890.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1891.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1892.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1893.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1894.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1895.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1896.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1897.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1898.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1899.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1900.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1901.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1902.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1903.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1904.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1905.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1906.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1907.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1908.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1909.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1910.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1911.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1912.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1913.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1914.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1915.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1916.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1917.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1918.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1919.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1920.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1921.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1922.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1923.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1924.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1925.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1926.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1927.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1928.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1929.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1930.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1931.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1932.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1933.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1934.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1935.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1936.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1937.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1938.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1939.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1940.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1941.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1942.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1943.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1944.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1945.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1946.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1947.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1948.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1949.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1950.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1951.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1952.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1953.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1954.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1955.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1956.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1957.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1958.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1959.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1960.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1961.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1962.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1963.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1964.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1965.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1966.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1967.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1968.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1969.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1970.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1971.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1972.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1973.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1974.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1975.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1976.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1977.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1978.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1979.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1980.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1981.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1982.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1983.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1984.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1985.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1986.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1987.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1988.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1989.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1990.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1991.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1992.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1993.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1994.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1995.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1996.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1997.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1998.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text1999.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n1601-2000/negative-text2000.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2001.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2002.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2003.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2004.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2005.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2006.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2007.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2008.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2009.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2010.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2011.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2012.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2013.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2014.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2015.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2016.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2017.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2018.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2019.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2020.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2021.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2022.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2023.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2024.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2025.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2026.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2027.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2028.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2029.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2030.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2031.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2032.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2033.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2034.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2035.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2036.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2037.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2038.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2039.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2040.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2041.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2042.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2043.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2044.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2045.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2046.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2047.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2048.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2049.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2050.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2051.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2052.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2053.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2054.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2055.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2056.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2057.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2058.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2059.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2060.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2061.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2062.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2063.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2064.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2065.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2066.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2067.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n2000-2069/negative-text2069.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text201.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text202.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text203.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text204.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text205.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text206.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text207.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text208.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text209.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text210.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text211.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text212.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text213.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text214.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text215.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text216.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text217.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text218.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text219.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text220.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text221.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text222.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text223.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text224.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text225.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text226.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text227.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text228.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text229.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text230.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text231.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text232.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text233.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text234.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text235.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text236.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text237.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text238.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text239.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text240.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text241.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text242.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text243.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text244.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text245.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text246.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text247.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text248.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text249.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text250.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text251.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text252.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text253.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text254.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text255.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text256.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text257.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text258.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text259.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text260.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text261.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text262.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text263.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text264.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text265.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text266.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text267.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text268.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text269.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text270.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text271.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text272.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text273.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text274.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text275.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text276.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text277.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text278.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text279.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text280.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text281.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text282.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text283.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text284.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text285.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text286.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text287.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text288.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text289.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text290.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text291.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text292.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text293.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text294.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text295.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text296.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text297.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text298.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text299.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text300.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text301.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text302.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text303.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text304.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text305.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text306.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text307.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text308.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text309.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text310.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text311.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text312.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text313.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text314.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text315.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text316.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text317.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text318.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text319.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text320.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text321.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text322.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text323.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text324.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text325.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text326.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text327.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text328.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text329.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text330.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text331.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text332.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text333.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text334.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text335.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text336.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text337.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text338.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text339.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text340.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text341.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text342.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text343.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text344.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text345.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text346.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text347.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text348.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text349.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text350.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text351.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text352.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text353.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text354.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text355.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text356.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text357.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text358.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text359.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text360.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text361.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text362.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text363.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text364.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text365.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text366.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text367.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text368.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text369.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text370.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text371.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text372.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text373.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text374.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text375.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text376.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text377.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text378.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text379.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text380.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text381.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text382.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text383.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text384.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text385.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text386.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text387.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text388.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text389.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text390.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text391.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text392.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text393.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text394.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text395.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text396.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text397.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text398.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text399.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n201-400/negative-text400.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text401.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text402.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text403.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text404.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text405.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text406.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text407.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text408.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text409.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text410.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text411.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text412.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text413.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text414.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text415.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text416.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text417.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text418.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text419.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text420.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text421.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text422.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text423.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text424.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text425.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text426.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text427.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text428.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text429.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text430.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text431.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text432.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text433.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text434.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text435.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text436.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text437.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text438.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text439.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text440.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text441.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text442.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text443.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text444.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text445.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text446.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text447.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text448.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text449.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text450.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text451.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text452.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text453.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text454.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text455.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text456.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text457.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text458.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text459.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text460.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text461.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text462.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text463.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text464.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text465.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text466.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text467.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text468.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text469.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text470.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text471.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text472.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text473.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text474.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text475.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text476.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text477.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text478.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text479.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text480.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text481.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text482.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text483.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text484.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text485.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text486.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text487.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text488.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text489.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text490.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text491.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text492.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text493.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text494.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text495.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text496.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text497.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text498.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text499.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text500.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text501.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text502.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text503.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text504.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text505.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text506.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text507.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text508.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text509.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text510.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text511.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text512.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text513.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text514.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text515.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text516.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text517.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text518.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text519.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text520.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text521.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text522.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text523.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text524.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text525.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text526.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text527.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text528.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text529.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text530.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text531.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text532.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text533.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text534.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text535.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text536.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text537.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text538.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text539.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text540.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text541.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text542.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text543.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text544.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text545.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text546.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text547.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text548.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text549.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text550.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text551.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text552.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text553.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text554.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text555.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text556.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text557.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text558.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text559.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text560.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text561.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text562.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text563.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text564.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text565.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text566.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text567.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text568.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text569.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text570.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text571.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text572.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text573.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text574.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text575.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text576.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text577.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text578.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text579.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text580.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text581.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text582.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text583.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text584.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text585.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text586.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text587.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text588.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text589.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text590.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text591.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text592.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text593.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text594.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text595.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text596.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text597.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text598.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text599.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text600.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text601.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text602.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text603.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text604.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text605.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text606.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text607.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text608.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text609.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text610.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text611.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text612.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text613.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text614.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text615.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text616.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text617.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text618.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text619.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text620.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text621.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text622.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text623.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text624.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text625.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text626.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text627.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text628.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text629.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text630.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text631.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text632.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text633.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text634.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text635.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text636.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text637.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text638.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text639.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text640.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text641.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text642.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text643.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text644.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text645.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text646.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text647.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text648.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text649.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text650.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text651.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text652.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text653.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text654.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text655.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text656.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text657.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text658.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text659.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text660.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text661.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text662.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text663.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text664.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text665.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text666.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text667.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text668.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text669.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text670.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text671.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text672.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text673.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text674.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text675.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text676.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text677.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text678.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text679.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text680.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text681.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text682.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text683.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text684.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text685.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text686.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text687.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text688.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text689.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text690.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text691.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text692.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text693.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text694.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text695.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text696.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text697.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text698.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text699.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text700.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text701.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text702.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text703.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text704.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text705.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text706.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text707.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text708.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text709.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text710.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text711.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text712.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text713.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text714.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text715.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text716.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text717.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text718.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text719.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text720.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text721.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text722.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text723.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text724.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text725.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text726.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text727.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text728.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text729.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text730.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text731.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text732.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text733.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text734.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text735.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text736.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text737.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text738.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text739.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text740.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text741.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text742.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text743.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text744.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text745.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text746.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text747.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text748.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text749.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text750.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text751.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text752.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text753.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text754.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text755.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text756.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text757.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text758.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text759.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text760.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text761.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text762.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text763.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text764.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text765.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text766.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text767.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text768.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text769.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text770.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text771.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text772.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text773.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text774.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text775.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text776.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text777.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text778.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text779.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text780.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text781.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text782.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text783.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text784.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text785.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text786.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text787.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text788.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text789.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text790.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text791.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text792.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text793.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text794.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text795.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text796.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text797.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text798.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text799.png?raw=true)
![ex](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n401-800/negative-text800.png?raw=true)
![negative-text1000](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1000.png?raw=true)
![negative-text1001](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1001.png?raw=true)
![negative-text1002](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1002.png?raw=true)
![negative-text1003](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1003.png?raw=true)
![negative-text1004](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1004.png?raw=true)
![negative-text1005](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1005.png?raw=true)
![negative-text1006](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1006.png?raw=true)
![negative-text1007](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1007.png?raw=true)
![negative-text1008](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1008.png?raw=true)
![negative-text1009](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1009.png?raw=true)
![negative-text1010](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1010.png?raw=true)
![negative-text1011](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1011.png?raw=true)
![negative-text1012](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1012.png?raw=true)
![negative-text1013](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1013.png?raw=true)
![negative-text1014](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1014.png?raw=true)
![negative-text1015](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1015.png?raw=true)
![negative-text1016](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1016.png?raw=true)
![negative-text1017](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1017.png?raw=true)
![negative-text1018](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1018.png?raw=true)
![negative-text1019](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1019.png?raw=true)
![negative-text1020](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1020.png?raw=true)
![negative-text1021](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1021.png?raw=true)
![negative-text1022](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1022.png?raw=true)
![negative-text1023](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1023.png?raw=true)
![negative-text1024](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1024.png?raw=true)
![negative-text1025](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1025.png?raw=true)
![negative-text1026](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1026.png?raw=true)
![negative-text1027](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1027.png?raw=true)
![negative-text1028](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1028.png?raw=true)
![negative-text1029](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1029.png?raw=true)
![negative-text1030](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1030.png?raw=true)
![negative-text1031](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1031.png?raw=true)
![negative-text1032](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1032.png?raw=true)
![negative-text1033](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1033.png?raw=true)
![negative-text1034](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1034.png?raw=true)
![negative-text1035](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1035.png?raw=true)
![negative-text1036](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1036.png?raw=true)
![negative-text1037](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1037.png?raw=true)
![negative-text1038](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1038.png?raw=true)
![negative-text1039](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1039.png?raw=true)
![negative-text1040](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1040.png?raw=true)
![negative-text1041](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1041.png?raw=true)
![negative-text1042](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1042.png?raw=true)
![negative-text1043](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1043.png?raw=true)
![negative-text1044](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1044.png?raw=true)
![negative-text1045](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1045.png?raw=true)
![negative-text1046](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1046.png?raw=true)
![negative-text1047](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1047.png?raw=true)
![negative-text1048](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1048.png?raw=true)
![negative-text1049](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1049.png?raw=true)
![negative-text1050](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1050.png?raw=true)
![negative-text1051](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1051.png?raw=true)
![negative-text1052](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1052.png?raw=true)
![negative-text1053](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1053.png?raw=true)
![negative-text1054](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1054.png?raw=true)
![negative-text1055](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1055.png?raw=true)
![negative-text1056](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1056.png?raw=true)
![negative-text1057](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1057.png?raw=true)
![negative-text1058](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1058.png?raw=true)
![negative-text1059](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1059.png?raw=true)
![negative-text1060](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1060.png?raw=true)
![negative-text1061](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1061.png?raw=true)
![negative-text1062](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1062.png?raw=true)
![negative-text1063](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1063.png?raw=true)
![negative-text1064](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1064.png?raw=true)
![negative-text1065](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1065.png?raw=true)
![negative-text1066](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1066.png?raw=true)
![negative-text1067](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1067.png?raw=true)
![negative-text1068](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1068.png?raw=true)
![negative-text1069](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1069.png?raw=true)
![negative-text1070](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1070.png?raw=true)
![negative-text1071](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1071.png?raw=true)
![negative-text1072](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1072.png?raw=true)
![negative-text1073](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1073.png?raw=true)
![negative-text1074](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1074.png?raw=true)
![negative-text1075](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1075.png?raw=true)
![negative-text1076](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1076.png?raw=true)
![negative-text1077](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1077.png?raw=true)
![negative-text1078](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1078.png?raw=true)
![negative-text1079](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1079.png?raw=true)
![negative-text1080](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1080.png?raw=true)
![negative-text1081](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1081.png?raw=true)
![negative-text1082](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1082.png?raw=true)
![negative-text1083](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1083.png?raw=true)
![negative-text1084](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1084.png?raw=true)
![negative-text1085](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1085.png?raw=true)
![negative-text1086](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1086.png?raw=true)
![negative-text1087](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1087.png?raw=true)
![negative-text1088](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1088.png?raw=true)
![negative-text1089](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1089.png?raw=true)
![negative-text1090](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1090.png?raw=true)
![negative-text1091](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1091.png?raw=true)
![negative-text1092](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1092.png?raw=true)
![negative-text1093](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1093.png?raw=true)
![negative-text1094](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1094.png?raw=true)
![negative-text1095](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1095.png?raw=true)
![negative-text1096](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1096.png?raw=true)
![negative-text1097](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1097.png?raw=true)
![negative-text1098](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1098.png?raw=true)
![negative-text1099](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1099.png?raw=true)
![negative-text1100](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1100.png?raw=true)
![negative-text1101](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1101.png?raw=true)
![negative-text1102](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1102.png?raw=true)
![negative-text1103](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1103.png?raw=true)
![negative-text1104](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1104.png?raw=true)
![negative-text1105](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1105.png?raw=true)
![negative-text1106](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1106.png?raw=true)
![negative-text1107](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1107.png?raw=true)
![negative-text1108](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1108.png?raw=true)
![negative-text1109](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1109.png?raw=true)
![negative-text1110](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1110.png?raw=true)
![negative-text1111](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1111.png?raw=true)
![negative-text1112](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1112.png?raw=true)
![negative-text1113](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1113.png?raw=true)
![negative-text1114](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1114.png?raw=true)
![negative-text1115](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1115.png?raw=true)
![negative-text1116](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1116.png?raw=true)
![negative-text1117](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1117.png?raw=true)
![negative-text1118](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1118.png?raw=true)
![negative-text1119](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1119.png?raw=true)
![negative-text1120](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1120.png?raw=true)
![negative-text1121](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1121.png?raw=true)
![negative-text1122](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1122.png?raw=true)
![negative-text1123](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1123.png?raw=true)
![negative-text1124](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1124.png?raw=true)
![negative-text1125](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1125.png?raw=true)
![negative-text1126](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1126.png?raw=true)
![negative-text1127](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1127.png?raw=true)
![negative-text1128](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1128.png?raw=true)
![negative-text1129](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1129.png?raw=true)
![negative-text1130](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1130.png?raw=true)
![negative-text1131](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1131.png?raw=true)
![negative-text1132](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1132.png?raw=true)
![negative-text1133](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1133.png?raw=true)
![negative-text1134](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1134.png?raw=true)
![negative-text1135](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1135.png?raw=true)
![negative-text1136](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1136.png?raw=true)
![negative-text1137](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1137.png?raw=true)
![negative-text1138](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1138.png?raw=true)
![negative-text1139](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1139.png?raw=true)
![negative-text1140](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1140.png?raw=true)
![negative-text1141](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1141.png?raw=true)
![negative-text1142](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1142.png?raw=true)
![negative-text1143](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1143.png?raw=true)
![negative-text1144](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1144.png?raw=true)
![negative-text1145](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1145.png?raw=true)
![negative-text1146](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1146.png?raw=true)
![negative-text1147](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1147.png?raw=true)
![negative-text1148](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1148.png?raw=true)
![negative-text1149](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1149.png?raw=true)
![negative-text1150](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1150.png?raw=true)
![negative-text1151](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1151.png?raw=true)
![negative-text1152](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1152.png?raw=true)
![negative-text1153](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1153.png?raw=true)
![negative-text1154](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1154.png?raw=true)
![negative-text1155](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1155.png?raw=true)
![negative-text1156](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1156.png?raw=true)
![negative-text1157](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1157.png?raw=true)
![negative-text1158](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1158.png?raw=true)
![negative-text1159](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1159.png?raw=true)
![negative-text1160](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1160.png?raw=true)
![negative-text1161](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1161.png?raw=true)
![negative-text1162](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1162.png?raw=true)
![negative-text1163](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1163.png?raw=true)
![negative-text1164](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1164.png?raw=true)
![negative-text1165](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1165.png?raw=true)
![negative-text1166](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1166.png?raw=true)
![negative-text1167](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1167.png?raw=true)
![negative-text1168](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1168.png?raw=true)
![negative-text1169](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1169.png?raw=true)
![negative-text1170](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1170.png?raw=true)
![negative-text1171](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1171.png?raw=true)
![negative-text1172](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1172.png?raw=true)
![negative-text1173](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1173.png?raw=true)
![negative-text1174](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1174.png?raw=true)
![negative-text1175](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1175.png?raw=true)
![negative-text1176](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1176.png?raw=true)
![negative-text1177](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1177.png?raw=true)
![negative-text1178](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1178.png?raw=true)
![negative-text1179](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1179.png?raw=true)
![negative-text1180](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1180.png?raw=true)
![negative-text1181](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1181.png?raw=true)
![negative-text1182](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1182.png?raw=true)
![negative-text1183](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1183.png?raw=true)
![negative-text1184](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1184.png?raw=true)
![negative-text1185](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1185.png?raw=true)
![negative-text1186](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1186.png?raw=true)
![negative-text1187](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1187.png?raw=true)
![negative-text1188](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1188.png?raw=true)
![negative-text1189](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1189.png?raw=true)
![negative-text1190](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1190.png?raw=true)
![negative-text1191](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1191.png?raw=true)
![negative-text1192](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1192.png?raw=true)
![negative-text1193](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1193.png?raw=true)
![negative-text1194](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1194.png?raw=true)
![negative-text1195](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1195.png?raw=true)
![negative-text1196](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1196.png?raw=true)
![negative-text1197](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1197.png?raw=true)
![negative-text1198](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1198.png?raw=true)
![negative-text1199](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1199.png?raw=true)
![negative-text1200](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text1200.png?raw=true)
![negative-text801](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text801.png?raw=true)
![negative-text802](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text802.png?raw=true)
![negative-text803](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text803.png?raw=true)
![negative-text804](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text804.png?raw=true)
![negative-text805](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text805.png?raw=true)
![negative-text806](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text806.png?raw=true)
![negative-text807](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text807.png?raw=true)
![negative-text808](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text808.png?raw=true)
![negative-text809](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text809.png?raw=true)
![negative-text810](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text810.png?raw=true)
![negative-text811](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text811.png?raw=true)
![negative-text812](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text812.png?raw=true)
![negative-text813](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text813.png?raw=true)
![negative-text814](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text814.png?raw=true)
![negative-text815](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text815.png?raw=true)
![negative-text816](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text816.png?raw=true)
![negative-text817](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text817.png?raw=true)
![negative-text818](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text818.png?raw=true)
![negative-text819](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text819.png?raw=true)
![negative-text820](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text820.png?raw=true)
![negative-text821](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text821.png?raw=true)
![negative-text822](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text822.png?raw=true)
![negative-text823](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text823.png?raw=true)
![negative-text824](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text824.png?raw=true)
![negative-text825](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text825.png?raw=true)
![negative-text826](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text826.png?raw=true)
![negative-text827](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text827.png?raw=true)
![negative-text828](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text828.png?raw=true)
![negative-text829](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text829.png?raw=true)
![negative-text830](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text830.png?raw=true)
![negative-text831](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text831.png?raw=true)
![negative-text832](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text832.png?raw=true)
![negative-text833](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text833.png?raw=true)
![negative-text834](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text834.png?raw=true)
![negative-text835](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text835.png?raw=true)
![negative-text836](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text836.png?raw=true)
![negative-text837](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text837.png?raw=true)
![negative-text838](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text838.png?raw=true)
![negative-text839](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text839.png?raw=true)
![negative-text840](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text840.png?raw=true)
![negative-text841](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text841.png?raw=true)
![negative-text842](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text842.png?raw=true)
![negative-text843](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text843.png?raw=true)
![negative-text844](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text844.png?raw=true)
![negative-text845](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text845.png?raw=true)
![negative-text846](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text846.png?raw=true)
![negative-text847](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text847.png?raw=true)
![negative-text848](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text848.png?raw=true)
![negative-text849](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text849.png?raw=true)
![negative-text850](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text850.png?raw=true)
![negative-text851](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text851.png?raw=true)
![negative-text852](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text852.png?raw=true)
![negative-text853](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text853.png?raw=true)
![negative-text854](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text854.png?raw=true)
![negative-text855](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text855.png?raw=true)
![negative-text856](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text856.png?raw=true)
![negative-text857](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text857.png?raw=true)
![negative-text858](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text858.png?raw=true)
![negative-text859](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text859.png?raw=true)
![negative-text860](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text860.png?raw=true)
![negative-text861](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text861.png?raw=true)
![negative-text862](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text862.png?raw=true)
![negative-text863](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text863.png?raw=true)
![negative-text864](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text864.png?raw=true)
![negative-text865](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text865.png?raw=true)
![negative-text866](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text866.png?raw=true)
![negative-text867](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text867.png?raw=true)
![negative-text868](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text868.png?raw=true)
![negative-text869](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text869.png?raw=true)
![negative-text870](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text870.png?raw=true)
![negative-text871](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text871.png?raw=true)
![negative-text872](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text872.png?raw=true)
![negative-text873](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text873.png?raw=true)
![negative-text874](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text874.png?raw=true)
![negative-text875](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text875.png?raw=true)
![negative-text876](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text876.png?raw=true)
![negative-text877](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text877.png?raw=true)
![negative-text878](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text878.png?raw=true)
![negative-text879](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text879.png?raw=true)
![negative-text880](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text880.png?raw=true)
![negative-text881](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text881.png?raw=true)
![negative-text882](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text882.png?raw=true)
![negative-text883](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text883.png?raw=true)
![negative-text884](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text884.png?raw=true)
![negative-text885](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text885.png?raw=true)
![negative-text886](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text886.png?raw=true)
![negative-text887](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text887.png?raw=true)
![negative-text888](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text888.png?raw=true)
![negative-text889](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text889.png?raw=true)
![negative-text890](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text890.png?raw=true)
![negative-text891](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text891.png?raw=true)
![negative-text892](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text892.png?raw=true)
![negative-text893](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text893.png?raw=true)
![negative-text894](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text894.png?raw=true)
![negative-text895](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text895.png?raw=true)
![negative-text896](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text896.png?raw=true)
![negative-text897](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text897.png?raw=true)
![negative-text898](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text898.png?raw=true)
![negative-text899](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text899.png?raw=true)
![negative-text900](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text900.png?raw=true)
![negative-text901](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text901.png?raw=true)
![negative-text902](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text902.png?raw=true)
![negative-text903](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text903.png?raw=true)
![negative-text904](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text904.png?raw=true)
![negative-text905](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text905.png?raw=true)
![negative-text906](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text906.png?raw=true)
![negative-text907](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text907.png?raw=true)
![negative-text908](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text908.png?raw=true)
![negative-text909](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text909.png?raw=true)
![negative-text910](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text910.png?raw=true)
![negative-text911](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text911.png?raw=true)
![negative-text912](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text912.png?raw=true)
![negative-text913](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text913.png?raw=true)
![negative-text914](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text914.png?raw=true)
![negative-text915](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text915.png?raw=true)
![negative-text916](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text916.png?raw=true)
![negative-text917](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text917.png?raw=true)
![negative-text918](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text918.png?raw=true)
![negative-text919](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text919.png?raw=true)
![negative-text920](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text920.png?raw=true)
![negative-text921](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text921.png?raw=true)
![negative-text922](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text922.png?raw=true)
![negative-text923](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text923.png?raw=true)
![negative-text924](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text924.png?raw=true)
![negative-text925](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text925.png?raw=true)
![negative-text926](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text926.png?raw=true)
![negative-text927](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text927.png?raw=true)
![negative-text928](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text928.png?raw=true)
![negative-text929](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text929.png?raw=true)
![negative-text930](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text930.png?raw=true)
![negative-text931](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text931.png?raw=true)
![negative-text932](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text932.png?raw=true)
![negative-text933](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text933.png?raw=true)
![negative-text934](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text934.png?raw=true)
![negative-text935](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text935.png?raw=true)
![negative-text936](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text936.png?raw=true)
![negative-text937](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text937.png?raw=true)
![negative-text938](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text938.png?raw=true)
![negative-text939](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text939.png?raw=true)
![negative-text940](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text940.png?raw=true)
![negative-text941](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text941.png?raw=true)
![negative-text942](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text942.png?raw=true)
![negative-text943](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text943.png?raw=true)
![negative-text944](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text944.png?raw=true)
![negative-text945](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text945.png?raw=true)
![negative-text946](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text946.png?raw=true)
![negative-text947](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text947.png?raw=true)
![negative-text948](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text948.png?raw=true)
![negative-text949](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text949.png?raw=true)
![negative-text950](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text950.png?raw=true)
![negative-text951](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text951.png?raw=true)
![negative-text952](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text952.png?raw=true)
![negative-text953](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text953.png?raw=true)
![negative-text954](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text954.png?raw=true)
![negative-text955](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text955.png?raw=true)
![negative-text956](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text956.png?raw=true)
![negative-text957](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text957.png?raw=true)
![negative-text958](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text958.png?raw=true)
![negative-text959](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text959.png?raw=true)
![negative-text960](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text960.png?raw=true)
![negative-text961](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text961.png?raw=true)
![negative-text962](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text962.png?raw=true)
![negative-text963](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text963.png?raw=true)
![negative-text964](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text964.png?raw=true)
![negative-text965](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text965.png?raw=true)
![negative-text966](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text966.png?raw=true)
![negative-text967](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text967.png?raw=true)
![negative-text968](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text968.png?raw=true)
![negative-text969](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text969.png?raw=true)
![negative-text970](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text970.png?raw=true)
![negative-text971](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text971.png?raw=true)
![negative-text972](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text972.png?raw=true)
![negative-text973](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text973.png?raw=true)
![negative-text974](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text974.png?raw=true)
![negative-text975](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text975.png?raw=true)
![negative-text976](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text976.png?raw=true)
![negative-text977](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text977.png?raw=true)
![negative-text978](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text978.png?raw=true)
![negative-text979](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text979.png?raw=true)
![negative-text980](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text980.png?raw=true)
![negative-text981](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text981.png?raw=true)
![negative-text982](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text982.png?raw=true)
![negative-text983](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text983.png?raw=true)
![negative-text984](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text984.png?raw=true)
![negative-text985](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text985.png?raw=true)
![negative-text986](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text986.png?raw=true)
![negative-text987](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text987.png?raw=true)
![negative-text988](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text988.png?raw=true)
![negative-text989](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text989.png?raw=true)
![negative-text990](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text990.png?raw=true)
![negative-text991](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text991.png?raw=true)
![negative-text992](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text992.png?raw=true)
![negative-text993](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text993.png?raw=true)
![negative-text994](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text994.png?raw=true)
![negative-text995](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text995.png?raw=true)
![negative-text996](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text996.png?raw=true)
![negative-text997](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text997.png?raw=true)
![negative-text998](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text998.png?raw=true)
![negative-text999](https://github.com/mohammadrezaeicode/open-screenshot-close/blob/main/done/n801-1200/negative-text999.png?raw=true)


## Example result

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex1.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex2.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex3.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex4.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex5.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex6.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex7.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex8.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex9.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex10.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex11.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex12.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex13.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex14.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex15.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex16.PNG?raw=true)
