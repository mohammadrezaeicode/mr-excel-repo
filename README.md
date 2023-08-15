# MR Excel

## Introduction

Welcome to our JavaScript library designed to effortlessly generate .xlsx files from input objects. This versatile library offers exceptional flexibility and can seamlessly operate on both the client and backend sides of applications.

Our library offers comprehensive support for a wide range of features, including data formatting, formulas, styles, merged cells, and grouped rows.[more info](https://mohammadrezaeicode.github.io/mr-excel-page/), [Express/backend example](https://github.com/mohammadrezaeicode/mr-excel-repo/tree/main/example/express), [TypeScript example](https://github.com/mohammadrezaeicode/mr-excel-repo/tree/main/example/typescript)

In version 2.1.0, we introduced a new feature called "convertTableToExcel," which enables the generation of an Excel file from a specified table or DOM element (table). The provided query is expected to be a valid input for the querySelector method. This enhancement allows for greater flexibility and convenience when creating Excel files directly from HTML tables.

## Installation

Via CDN

You can utilize our library, which comes bundled with Vite, by including the following link:

```html
<script src="https://unpkg.com/mr-excel@latest/dist/excel-table.umd.js"></script>
```

Alternatively, you have the option to use the bundle with Webpack by incorporating the link provided below:

```html
<script src="https://unpkg.com/mr-excel@latest/dist2/excel-table.js"></script>
```

Easily integrate our library into your project using either of these methods, and unlock efficient generation of Excel tables with exceptional flexibility.

Using a Package Manager
To seamlessly integrate our library, you can install it using your preferred package manager:

Via npm:

```terminal/bash
npm install mr-excel
```

Using yarn:

```terminal/bash
npm install mr-excel
```

Alternatively, you have the option to use pnpm:

```terminal/bash
npm install mr-excel
```

Choose the package manager that suits your workflow, and effortlessly bring the power of our library into your project, enabling smooth generation of Excel tables with ease and efficiency.

## Getting Started

After adding the library to your project, generating XLSX files becomes straightforward. You can achieve this by creating a data object similar to the code snippet below:

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

<summary>result of Example in ./example/conv1.html</summary>

![ex](./example/ex13.PNG)

</details>

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
  formula?: {
    type: FormulaType;
    styleId?: string;
  };
}

export interface Data extends DataOptions {
  [key: string]: string | number | undefined;
}
export interface DataOptions {
  [key: string]: "0" | "1" | number | string | undefined;
  outlineLevel?: number;
  hidden?: "0" | "1" | number;
  rowStyle?: string;
  height?: number;
}
export interface MergeRowConditionMap {
  [columnKey: string]: {
    inProgress: boolean;
    start: number;
  };
}
export type StyleCellConditionFunction = (
  data: Header | string | number | undefined,
  object: Header | Data,
  colIndex: number,
  rowIndex: number,
  fromHeader: boolean,
  stylekeys: string[]
) => string;
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
  sortAndfilter?: SortAndFilter;
  state?: "hidden" | "visible";
  headerRowOption?: any; // Define the type if needed
  protectionOption?: ProtectionOption;
  headerHeight?: number;
  headers: Header[];
  data: Data[];
}
export interface HeaderRowOption {
  outlineLevel: "string";
}
// export interface Tab {
//   headers: Header[];
//   data: Data[];
// }
export interface StyleMapper {
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
  mapSheetDataOption?: any; // Define the type if needed
  styles?: Styles;
  sheet: Sheet[];
}

// Now you can use 'YourObject' as the type for your data.
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

### Version 1.1.0 (2023-08-12)

#### Bug Fixes

- Fixed: Resolved an issue where the library was not functioning correctly in the backend, causing a "blob" error.
- Fixed: Addressed TypeScript type and interface inconsistencies related to optional properties.

#### New Features

- Feature: Introduced the ability to apply text formatting options such as bold, italic, underline, and double underline to cells.
- Feature: Added the "Shift Top" and "Shift Left" features, enabling users to adjust the starting point for table generation.
- Feature: Added the option to include titles for tables easily.

## Changelog

For a detailed list of all changes, please refer to the [changelog](CHANGELOG.md).

## Thank You

Thank you for choosing our library! We greatly value your feedback and suggestions as we continue to improve and enhance our product.

## Example result

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex1.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex2.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex3.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex4.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex5.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex6.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex7.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex8.PNG?raw=true)

![ex](https://github.com/mohammadrezaeicode/mr-excel-page-repo/blob/main/public/img/ex9.PNG?raw=true)

![ex](./example/ex13.PNG)
