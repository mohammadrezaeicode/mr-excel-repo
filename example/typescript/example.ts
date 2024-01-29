//<https: //colorhunt.co/palette/f9ed69f08a5db83b5e6a2c70>
import { DataModel } from "mr-excel";
export function ex1(): DataModel.ExcelTable {
  const data: DataModel.ExcelTable = {
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
  return data;
}
export function ex2(): DataModel.ExcelTable {
  const data: DataModel.ExcelTable = {
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

  return data;
}
export function ex3(): DataModel.ExcelTable {
  const color = { c1: "08D9D6", c2: "252A34", c3: "FF2E63", c4: "EAEAEA" };
  const data: DataModel.ExcelTable = {
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

  return data;
}
export function ex4(): DataModel.ExcelTable {
  const colorPalette = {
    c1: "2B2E4A",
    c2: "E84545",
    c3: "903749",
    c4: "53354A",
  };
  const data: DataModel.ExcelTable = {
    creator: "mr",
    styles: {
      headerStyle: {
        backgroundColor: colorPalette.c1,
        fontFamily: "Times New Roman",
        color: colorPalette.c2,
        // size: 20
      },
      customFormulaStyle: {
        backgroundColor: colorPalette.c2,
        fontFamily: "Times New Roman",
        color: colorPalette.c1,
        size: 15,
        border: {
          full: {
            color: colorPalette.c4,
            style: "dashDot",
          },
        },
      },
      formulaStyle: {
        backgroundColor: colorPalette.c1,
        fontFamily: "Times New Roman",
        color: colorPalette.c2,
        size: 15,
        border: {
          full: {
            color: colorPalette.c3,
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
            formula: { styleId: "formulaStyle", type: "COUNT" },
          },
          {
            label: "Column 1",
            text: "Column 1",
            formula: { styleId: "formulaStyle", type: "AVERAGE" },
          },
          {
            label: "Column 2",
            text: "Column 2",
            formula: { styleId: "formulaStyle", type: "SUM" },
          },
          {
            label: "Column 3",
            text: "Column 3",
            formula: { styleId: "formulaStyle", type: "MAX" },
          },
          {
            label: "Column 4",
            text: "Column 4",
            formula: { styleId: "formulaStyle", type: "MIN" },
          },
          {
            label: "Column 5",
            text: "Column 5",
            formula: { styleId: "formulaStyle", type: "COUNT" },
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
  return data;
}
export function ex5(): DataModel.ExcelTable {
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
  const data: DataModel.ExcelTable = {
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
        } as DataModel.AlignmentOption,
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
        } as DataModel.AlignmentOption,
      },
      "Long Number Column 2": {
        ...rowStyle,
        format: "num_sep",
        alignment: {
          ltr: true,
          horizontal: "left",
        } as DataModel.AlignmentOption,
      },
      headerStyle: {
        ...headerStyle,
      },
    },
    sheet: [
      {
        styleCellCondition(
          data: DataModel.Header | string | number | undefined,
          object: DataModel.Header | DataModel.Data,
          rowIndex: number,
          colIndex: number,
          fromHeader: boolean,
          styleKeys: string[]
        ) {
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
  return data;
}
export function ex6(): DataModel.ExcelTable {
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
    } as DataModel.AlignmentOption,
  } as DataModel.StyleBody;
  const headerStyle = {
    backgroundColor: colorPalette.c4,
    fontFamily: "Times New Roman",
    color: colorPalette.c2,
  };
  const merge: Record<string, any> = {};
  let mergeStart = false;
  const data: DataModel.ExcelTable = {
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
        mergeRowDataCondition(
          data: DataModel.Header | string | number | undefined,
          key: string | null,
          index: number,
          fromHeader: boolean
        ) {
          if (fromHeader || !key) {
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
        styleCellCondition(
          data: DataModel.Header | string | number | undefined,
          object: DataModel.Header | DataModel.Data,
          rowIndex: number,
          colIndex: number,
          fromHeader: boolean,
          styleKeys: string[]
        ) {
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
  return data;
}
export function ex7(): DataModel.ExcelTable {
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
    } as DataModel.AlignmentOption,
  } as DataModel.StyleBody;
  const headerStyle = {
    backgroundColor: colorPalette.c4,
    fontFamily: "Times New Roman",
    color: "112D4E",
  } as DataModel.StyleBody;
  const data: DataModel.ExcelTable = {
    creator: "mr",
    styles: {
      rowStyle,
      headerStyle,
    },
    sheet: [
      {
        styleCellCondition(
          data: DataModel.Header | string | number | undefined,
          object: DataModel.Header | DataModel.Data,
          rowIndex: number,
          colIndex: number,
          fromHeader: boolean,
          styleKeys: string[]
        ) {
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
  return data;
}
export function ex8(): DataModel.ExcelTable {
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
    } as DataModel.AlignmentOption,
  };
  const headerStyle = {
    backgroundColor: colorPalette.c4,
    fontFamily: "Times New Roman",
    color: "6A2C70",
  };
  const data: DataModel.ExcelTable = {
    creator: "mr",
    styles: {
      rowStyle,
      headerStyle,
    },
    sheet: [
      {
        mapSheetDataOption: {
          hidden: "notShow",
          height: "h",
          outlineLevel: "group",
        },
        styleCellCondition(
          data: DataModel.Header | string | number | undefined,
          object: DataModel.Header | DataModel.Data,
          rowIndex: number,
          colIndex: number,
          fromHeader: boolean,
          styleKeys: string[]
        ) {
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
  return data;
}
export function ex9(): DataModel.ExcelTable {
  const colorPalette = {
    c4: "2B2E4A",
    c2: "E84545",
  };
  const rowAlignment = {
    alignment: {
      horizontal: "left",
      vertical: "center",
    } as DataModel.AlignmentOption,
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
  const data: DataModel.ExcelTable = {
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
        styleCellCondition(
          data: DataModel.Header | string | number | undefined,
          object: DataModel.Header | DataModel.Data,
          rowIndex: number,
          colIndex: number,
          fromHeader: boolean,
          styleKeys: string[]
        ) {
          if (fromHeader) {
            return "headerStyle";
          } else {
            if (colIndex == 0 && typeof data == "number" && data < 0.3) {
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
  return data;
}
export function ex10(): DataModel.ExcelTable {
  const colorPalette = {
    c4: "FFC7C7",
    c2: "8785A2",
  };
  const rowAlignment = {
    alignment: {
      horizontal: "left",
      vertical: "center",
    } as DataModel.AlignmentOption,
  } ;
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
  const data: DataModel.ExcelTable = {
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
        styleCellCondition(
          data: DataModel.Header | string | number | undefined,
          object: DataModel.Header | DataModel.Data,
          rowIndex: number,
          colIndex: number,
          fromHeader: boolean,
          styleKeys: string[]
        ) {
          if (fromHeader) {
            return "headerStyle";
          } else {
            if (colIndex == 0 && typeof data == "number" && data < 0.3) {
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
  return data;
}
export function ex11(): DataModel.ExcelTable {
  const colorPalette = {
    c4: "FFC7C7",
    c2: "8785A2",
  };
  const rowAlignment = {
    alignment: {
      horizontal: "left",
      vertical: "center",
    } as DataModel.AlignmentOption,
  };
  const rowStyle = {
    backgroundColor: colorPalette.c2,
    fontFamily: "Times New Roman",
    color: "6A2C70",
    ...rowAlignment,
  } as DataModel.StyleBody;
  const headerStyle = {
    backgroundColor: colorPalette.c4,
    fontFamily: "Times New Roman",
    color: "#FFFFFF",
  };
  const data: DataModel.ExcelTable = {
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
          shiftTop: 1,
          shiftLeft: -1,
          consommeRow: 4,
          consommeCol: 6,
          // height: 100,
          // styleId: '',
          text: "Title",
        },
        styleCellCondition(
          data: DataModel.Header | string | number | undefined,
          object: DataModel.Header | DataModel.Data,
          rowIndex: number,
          colIndex: number,
          fromHeader: boolean,
          styleKeys: string[]
        ) {
          if (fromHeader) {
            return "headerStyle";
          } else {
            if (colIndex == 0 && typeof data == "number" && data < 0.3) {
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
  return data;
}
export function ex14(): DataModel.ExcelTable {
  const colorPalette = {
    c4: "61677A",
    c2: "FFF6E0",
  };
  const rowAlignment = {
    alignment: {
      horizontal: "left",
      vertical: "center",
    } as DataModel.AlignmentOption,
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
  const data: DataModel.ExcelTable = {
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
          data: DataModel.Header | string | number | undefined,
          object: null | DataModel.Data,
          headerKey: string,
          rowIndex: number,
          colIndex: number,
          fromHeader: boolean
        ) {
          if (fromHeader) {
            let textDataC0 = (<DataModel.Header>data).text.charAt(0);
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
        styleCellCondition(
          data: DataModel.Header | string | number | undefined,
          object: DataModel.Header | DataModel.Data,
          rowIndex: number,
          colIndex: number,
          fromHeader: boolean,
          styleKeys: string[]
        ) {
          if (fromHeader) {
            return "headerStyle";
          } else {
            if (colIndex == 0 && typeof data == "number" && data < 0.3) {
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
  return data;
}
export function ex15(): DataModel.ExcelTable {
  const colorPalette = {
    c4: "F7E987",
    c2: "5B9A8B",
  };
  const rowAlignment = {
    alignment: {
      horizontal: "left",
      vertical: "center",
    } as DataModel.AlignmentOption,
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
  const data: DataModel.ExcelTable = {
    addDefaultTitleStyle: true,
    creator: "mr",
    styles: {
      title: {
        size: 48,
        backgroundColor: "E5BA73",
        alignment: {
          horizontal: "center",
          vertical: "center",
        } as DataModel.AlignmentOption,
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
          data: DataModel.Header | string | number | undefined,
          object: null | DataModel.Data,
          headerKey: string,
          rowIndex: number,
          colIndex: number,
          fromHeader: boolean
        ) {
          if (fromHeader && !!data) {
            let textDataC0 = (<DataModel.Header>data).text.charAt(0);
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
        styleCellCondition(
          data: DataModel.Header | string | number | undefined,
          object: DataModel.Header | DataModel.Data,
          rowIndex: number,
          colIndex: number,
          fromHeader: boolean,
          styleKeys: string[]
        ) {
          if (fromHeader) {
            return "headerStyle";
          } else {
            if (colIndex == 0 && typeof data == "number" && data < 0.3) {
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
  return data;
}
export function ex16(): DataModel.ExcelTable {
  const color = { c4: "00ADB5", c2: "393E46" };
  const alignLeft = {
    alignment: {
      horizontal: "left",
      vertical: "center",
    } as DataModel.AlignmentOption,
  };
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
  const data: DataModel.ExcelTable = {
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
        alignment: {
          horizontal: "center",
          vertical: "center",
        } as DataModel.AlignmentOption,
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
          data: DataModel.Header | string | number | undefined,
          object: null | DataModel.Data,
          headerKey: string,
          rowIndex: number,
          colIndex: number,
          fromHeader: boolean
        ) {
          return null
          // if (!data) {
          //   return {};
          // }
          // if (fromHeader) {
          //   let charList = (<DataModel.Header>data).text.match(/./g);
          //   if (!charList) {
          //     return {};
          //   }
          //   let result: {
          //     curr: "";
          //     result: { reg: any[] };
          //   } = charList.reduce(
          //     (res, curr, index) => {
          //       try {
          //         new RegExp(curr);
          //       } catch (error) {
          //         curr = "\\" + curr;
          //       }
          //       if (index % 2 == 0) {
          //         res.result.reg.push({
          //           reg: new RegExp("[" + curr + "]"),
          //           styleId: "col1",
          //         });
          //         return res;
          //       } else {
          //         res.result.reg.push({
          //           reg: new RegExp("[" + curr + "]"),
          //           styleId: "col2",
          //         });
          //         return res;
          //       }
          //     },
          //     { curr: "", result: { reg: [] } }
          //   );
          //   return result.result;
          // } else {
          //   let charList = data.match(/./g);
          //   let result = charList.reduce(
          //     (res, curr, index) => {
          //       try {
          //         new RegExp(curr);
          //       } catch (error) {
          //         curr = "\\" + curr;
          //       }
          //       if (index % 2 == 0) {
          //         res.result.reg.push({
          //           reg: new RegExp("[" + curr + "]"),
          //           styleId: "col1",
          //         });
          //         return res;
          //       } else {
          //         res.result.reg.push({
          //           reg: new RegExp("[" + curr + "]"),
          //           styleId: "col2",
          //         });
          //         return res;
          //       }
          //     },
          //     { curr: "", result: { reg: [] } }
          //   );
          //   return result.result;
          // }
        },
        commentCondition: function (
          o: DataModel.Header | string | number | undefined,
          r: null | DataModel.Data,
          i: string,
          s: number,
          u: number,
          c: boolean
        ) {
          if (c) {
            let d = (<DataModel.Header>o).text.charAt(0);
            if (d.toUpperCase() != d)
              return {
                comment: `
  Header should start with ${d.toUpperCase()}`,
                author: "System",
              } as DataModel.Comment;
          }
          return false;
        },
        styleCellCondition(
          o: DataModel.Header | string | number | undefined,
          r: DataModel.Header | DataModel.Data,
          s: number,
          i: number,
          u: boolean,
          sk: string[]
        ) {
          return u
            ? "headerStyle"
            : i == 0 && typeof o == "number" && o < 0.3
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
  return data;
}
export function ex17(): DataModel.ExcelTable {
  const data: DataModel.ExcelTable = {
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
            type: "one",
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
  return data;
}
export function ex18(): DataModel.ExcelTable {
  const data: DataModel.ExcelTable = {
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
  return data;
}
export function ex19(): DataModel.ExcelTable {
  const data: DataModel.ExcelTable = {
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
  return data;
}
export function ex20(): DataModel.ExcelTable {
  const data: DataModel.ExcelTable = {
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
  return data;
}
export function ex21(): DataModel.ExcelTable {
  const data: DataModel.ExcelTable = {
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
  return data;
}
export function ex22(): DataModel.ExcelTable {
  const colorPalette = {
    c1: "2B2E4A",
    c2: "E84545",
    c3: "903749",
    c4: "53354A",
  };
  const t = { c1: "2C3639", c2: "3F4E4F", c3: "A27B5C", c4: "DCD7C9" },
    n = { backgroundColor: t.c2, fontFamily: "Times New Roman", color: t.c4 },
    a = { backgroundColor: t.c4, fontFamily: "Times New Roman", color: t.c2 };
  const data: DataModel.ExcelTable = {
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
  return data;
}
// export function ex23():DataModel.ExcelTable {
//   const colorPalette = {
//     c1: "2C3639",
//     c2: "3F4E4F",
//     c3: "A27B5C",
//     c4: "DCD7C9",
//   };
//   const rowStyle = {
//     backgroundColor: colorPalette.c2,
//     fontFamily: "Times New Roman",
//     color: colorPalette.c4,
//   };
//   const headerStyle = {
//     backgroundColor: colorPalette.c4,
//     fontFamily: "Times New Roman",
//     color: colorPalette.c2,
//   };
//   const headers = [
//     { label: "Date", text: "Date" },
//     { label: "Time", text: "Time" },
//     { label: "Percentage", text: "Percentage" },
//     { label: "Float", text: "Float" },
//     { label: "Fraction", text: "Fraction" },
//     { label: "Long Number Column 1", text: "Long Number Column 1", size: 50 },
//     { label: "Long Number Column 2", text: "Long Number Column 2", size: 50 },
//   ];
//   const items = [
//     {
//       Date: "2023-08-01",
//       Time: "09:00 AM",
//       Percentage: 0.7525,
//       Float: 0.7525,
//       Fraction: "1/4",
//       "Long Number Column 1": 123456789012345,
//       "Long Number Column 2": 987654321098765,
//     },
//     {
//       Date: "2023-08-02",
//       Time: "02:30 PM",
//       Percentage: 0.4275,
//       Float: 0.4275,
//       Fraction: "3/8",
//       "Long Number Column 1": 456789012345678,
//       "Long Number Column 2": 876543210987654,
//     },
//     {
//       Date: "2023-08-03",
//       Time: "10:45 AM",
//       Percentage: 0.955,
//       Float: 0.955,
//       Fraction: "5/6",
//       "Long Number Column 1": 789012345678901,
//       "Long Number Column 2": 765432109876543,
//     },
//     {
//       Date: "2023-08-04",
//       Time: "04:15 PM",
//       Percentage: 0.2875,
//       Float: 0.2875,
//       Fraction: "2/7",
//       "Long Number Column 1": 123450987654321,
//       "Long Number Column 2": 654321098765432,
//     },
//     {
//       Date: "2023-08-05",
//       Time: "08:20 AM",
//       Percentage: 0.6,
//       Float: 0.6,
//       Fraction: "4/5",
//       "Long Number Column 1": 543210987654321,
//       "Long Number Column 2": 543210987654321,
//     },
//   ];
//   const data:DataModel.ExcelTable = {
//     creator: "mr",
//     styles: {
//       Date: {
//         ...rowStyle,
//         format: "short_date",
//       },
//       Time: {
//         ...rowStyle,
//         format: "time",
//       },
//       Percentage: {
//         ...rowStyle,
//         format: "percentage",
//       },
//       Float: {
//         ...rowStyle,
//         format: "float_2",
//         alignment: {
//           horizontal: "left",
//         },
//       },
//       Fraction: {
//         ...rowStyle,
//         format: "fraction",
//       },
//       "Long Number Column 1": {
//         ...rowStyle,
//         format: "dollar_2",
//         alignment: {
//           indent: 3,
//           rtl: true,
//           horizontal: "left",
//         },
//       },
//       "Long Number Column 2": {
//         ...rowStyle,
//         format: "num_sep",
//         alignment: {
//           ltr: true,
//           horizontal: "left",
//         },
//       },
//       headerStyle: {
//         ...headerStyle,
//       },
//     },
//     sheet: [
//       {
//         styleCellCondition(data, fullData, rowIndex, colIndex, fromHeader) {
//           if (fromHeader) {
//             return "headerStyle";
//           } else {
//             if (colIndex == 0) {
//               return "Date";
//             } else if (colIndex == 1) {
//               return "Time";
//             } else if (colIndex == 2) {
//               return "Percentage";
//             } else if (colIndex == 3) {
//               return "Float";
//             } else if (colIndex == 4) {
//               return "Fraction";
//             } else if (colIndex == 5) {
//               return "Long Number Column 1";
//             } else {
//               return "Long Number Column 2";
//             }
//           }
//         },
//         headers: [],
//         data: [],
//       },
//     ],
//   };
//   ExcelTable.addGlobalOptionFromExcelTable("global-1", data);
//   ExcelTable.generateExcel(
//     {
//       sheet: [
//         {
//           headers,
//           data: items,
//         },
//       ],
//     },
//     "global-1"
//   );
// }
// let flag = false;
// function switchStyle() {
//   if (!flag) {
//     ExcelTable.addGlobalOptions(
//       "global-1",
//       "styles.headerStyle.backgroundColor",
//       colorPalette.c2
//     );
//     ExcelTable.addGlobalOptions(
//       "global-1",
//       "styles.headerStyle.color",
//       colorPalette.c4
//     );
//   } else {
//     ExcelTable.addGlobalOptions(
//       "global-1",
//       "styles.headerStyle.backgroundColor",
//       colorPalette.c4
//     );
//     ExcelTable.addGlobalOptions(
//       "global-1",
//       "styles.headerStyle.color",
//       colorPalette.c2
//     );
//   }
//   flag = !flag;
// return data;
// }
export function ex24(): DataModel.ExcelTable {
  const data: DataModel.ExcelTable = {
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
  return data;
}
export function ex25(): DataModel.ExcelTable {
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
  }as DataModel.StyleBody;
  const second = {
    type: "HF",
    backgroundColor: colorPalette.c1,
    fontFamily: "Times New Roman",
    color: colorPalette.c2,
  } as DataModel.StyleBody;
  const data: DataModel.ExcelTable = {
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
        } as DataModel.PageOption,
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
  return data;
}
export function ex26(): DataModel.ExcelTable {
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
  } as DataModel.StyleBody;
  const second = {
    type: "HF",
    backgroundColor: colorPalette.c4,
    fontFamily: "Times New Roman",
    color: colorPalette.c2,
  }as DataModel.StyleBody;
  const data: DataModel.ExcelTable = {
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
  return data;
}
export function ex27(): DataModel.ExcelTable {
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
  } as DataModel.StyleBody;
  const second = {
    type: "HF",
    backgroundColor: colorPalette.c4,
    fontFamily: "Times New Roman",
    color: colorPalette.c2,
  } as DataModel.StyleBody;
  const data: DataModel.ExcelTable = {
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
  return data;
}
export function ex28(): DataModel.ExcelTable {
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
  } as DataModel.StyleBody;
  const second = {
    type: "HF",
    backgroundColor: colorPalette.c4,
    fontFamily: "Times New Roman",
    color: colorPalette.c2,
  } as DataModel.StyleBody;
  const data: DataModel.ExcelTable = {
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
  return data;
}
export function ex29(): DataModel.ExcelTable {
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
  } as DataModel.StyleBody;
  const second = {
    type: "HF",
    backgroundColor: colorPalette.c4,
    fontFamily: "Times New Roman",
    color: colorPalette.c2,
  } as DataModel.StyleBody;
  const data: DataModel.ExcelTable = {
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
  return data;
}
export function ex30(): DataModel.ExcelTable {
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
  } as DataModel.StyleBody;
  const second = {
    type: "HF",
    backgroundColor: colorPalette.c4,
    fontFamily: "Times New Roman",
    color: colorPalette.c2,
  } as DataModel.StyleBody;
  const data: DataModel.ExcelTable = {
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
  return data;
}
export function ex31(): DataModel.ExcelTable {
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
  } as DataModel.StyleBody;
  const second = {
    type: "HF",
    backgroundColor: colorPalette.c4,
    fontFamily: "Times New Roman",
    color: colorPalette.c2,
  } as DataModel.StyleBody;
  const data: DataModel.ExcelTable = {
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
  return data;
}
export function ex32(): DataModel.ExcelTable {
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
  } as DataModel.StyleBody;
  const second = {
    type: "HF",
    backgroundColor: colorPalette.c4,
    fontFamily: "Times New Roman",
    color: colorPalette.c2,
  } as DataModel.StyleBody;
  const data: DataModel.ExcelTable = {
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
  return data;
}
export function ex33(): DataModel.ExcelTable {
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
  } as DataModel.StyleBody;
  const second = {
    type: "HF",
    backgroundColor: colorPalette.c4,
    fontFamily: "Times New Roman",
    color: colorPalette.c2,
  } as DataModel.StyleBody;
  const data: DataModel.ExcelTable = {
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
  return data;
}
export function ex34(): DataModel.ExcelTable {
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
  } as DataModel.StyleBody;
  const second = {
    type: "HF",
    backgroundColor: colorPalette.c4,
    fontFamily: "Times New Roman",
    color: colorPalette.c2,
  } as DataModel.StyleBody;
  const data: DataModel.ExcelTable = {
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
  return data;
}
export function ex35(): DataModel.ExcelTable {
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
  } as DataModel.StyleBody;
  const second = {
    type: "HF",
    backgroundColor: colorPalette.c4,
    fontFamily: "Times New Roman",
    color: colorPalette.c2,
  } as DataModel.StyleBody;
  const data: DataModel.ExcelTable = {
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
  return data
}
