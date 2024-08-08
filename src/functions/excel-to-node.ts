import { type ReadResult } from "../data-model/excel-table";
export const defaultConfig = {
  firstHeader: true,
  returnTableNodes: false,
  emptyNodeDefaultString: " ",
  removeContainerChildNode: true,
  containerNodeStyle: {
    display: "flex",
    flexDirection: "column",
  },
  tableStyle: {
    borderSpacing: "0",
    border: "1px solid #EEEEEEF1",
  },
  cellStyle: {
    width: "68px",
    height: "24px",
    border: "1px solid #EEEEEEF1",
  },
  buttonContainerStyle: {
    display: "flex",
  },
  buttonStyle: {
    height: "40px",
    width: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "0",
    background: "transparent",
    cursor: "pointer",
  },
  activeButtonStyle: {
    background: "#EEEDEB",
  },
};
export async function excelToNode(
  uri: string,
  queryForTable?: string | null,
  containerElement?: HTMLDivElement | null,
  fetchFunc?: Function,
  firstHeader: boolean = true,
  returnTableNodes: boolean = false,
  emptyNodeDefaultString: string = " ",
  removeContainerChildNode = true,
  containerNodeStyle: object = {
    display: "flex",
    flexDirection: "column",
  },
  tableStyle: object = {
    borderSpacing: "0",
    border: "1px solid #EEEEEEF1",
  },
  cellStyle: object = {
    width: "68px",
    height: "24px",
    border: "1px solid #EEEEEEF1",
  },
  buttonContainerStyle: object = {
    display: "flex",
  },
  buttonStyle: object = {
    height: "40px",
    width: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "0",
    background: "transparent",
    cursor: "pointer",
  },
  activeButtonStyle: object = {
    background: "#EEEDEB",
  }
) {
  let excelData: ReadResult = await import("../utils/read-utils").then(
    async (m) => await m.extractExcelData(uri, false, fetchFunc)
  );
  let containerNode: HTMLElement | null = null;
  if (queryForTable) {
    containerNode = document.querySelector(queryForTable)!;
  } else if (containerElement) {
    containerNode = containerElement;
  }
  if (containerNode == null && !returnTableNodes) {
    throw "Container Node not found";
  }

  const containerNodeStyleKeys = Object.keys(containerNodeStyle);
  const tableStyleKeys = Object.keys(tableStyle);
  const cellStyleKeys = Object.keys(cellStyle);
  const buttonContainerStyleKeys = Object.keys(buttonContainerStyle);
  const buttonStyleKeys = Object.keys(buttonStyle);
  const activeButtonStyleKeys = Object.keys(activeButtonStyle);
  let tabButtonContainer = document.createElement("div");
  buttonContainerStyleKeys.forEach((keyStyle: string) => {
    tabButtonContainer.style[keyStyle as keyof object] =
      buttonContainerStyle[keyStyle as keyof object];
  });
  if (!returnTableNodes) {
    if (removeContainerChildNode && containerNode != null) {
      containerNode.innerText = "";
    }
    containerNodeStyleKeys.forEach((keyStyle: string) => {
      containerNode!.style[keyStyle as keyof object] =
        containerNodeStyle[keyStyle as keyof object];
    });
    containerNode!.appendChild(tabButtonContainer);
  }
  let resultTables: HTMLTableElement[] = [];
  let isDone = false;
  let displayTab = "unset";
  let sheetCounter = 0;
  do {
    sheetCounter++;
    const element = excelData.sheetName.next();
    if (!element.value) {
      break;
    }
    const tabContentContainer = document.createElement("div");
    tabContentContainer.style.display = "none";
    if (!returnTableNodes) {
      const button = document.createElement("button");
      buttonStyleKeys.forEach((keyStyle: string) => {
        button.style[keyStyle as keyof object] =
          buttonStyle[keyStyle as keyof object];
      });
      button.addEventListener("click", (ev: MouseEvent) => {
        const sheetId = button.getAttribute("data-sheet");
        const element: HTMLDivElement | null = containerNode!.querySelector(
          'div[data-sheet="' + sheetId + '"]'
        );

        if (element) {
          activeButtonStyleKeys.forEach((styleKey: string) => {
            button.style[styleKey as keyof object] =
              activeButtonStyle[styleKey as keyof object];
          });
          const perviousBtn: HTMLElement | null = containerNode!.querySelector(
            "[data-sheet-button-activate]"
          );
          let perviousElement: HTMLElement | null =
            containerNode!.querySelector("[data-sheet-activate]");
          element.setAttribute("data-sheet-activate", "1");
          element.style.display = "flex";
          button.setAttribute("data-sheet-button-activate", "1");
          if (perviousBtn) {
            buttonStyleKeys.forEach((styleKey: string) => {
              perviousBtn.style[styleKey as keyof object] =
                buttonStyle[styleKey as keyof object];
            });
            perviousBtn.removeAttribute("data-sheet-button-activate");
          }
          if (perviousElement) {
            perviousElement.style.display = "none";
            perviousElement.removeAttribute("data-sheet-activate");
          }
        } else {
          console.error("Sheet content not found!!" + " id is " + sheetId);
        }
      });
      button.setAttribute("data-sheet", sheetCounter + "");
      tabContentContainer.setAttribute("data-sheet", sheetCounter + "");
      button.innerText = element.value[1] || element.value[0];
      tabButtonContainer.appendChild(button);
      containerNode!.appendChild(tabContentContainer);
    }
    let nodeType = firstHeader ? "th" : "td";
    const tableNode = document.createElement("table");
    tableStyleKeys.forEach((keyStyle: string) => {
      tableNode.style[keyStyle as keyof object] =
        tableStyle[keyStyle as keyof object];
    });
    const sheetData: (string | null | undefined)[][] =
      excelData.data[element.value[0]] || excelData.data[element.value[1]];
    const colLength =
      excelData.maxLengthOfColumn[element.value[0]] ||
      excelData.maxLengthOfColumn[element.value[1]];
    if (Array.isArray(sheetData)) {
      const len = sheetData.length;
      for (let index = 0; index < len; index++) {
        const v = sheetData[index];

        const tr = document.createElement("tr");
        const isArray = Array.isArray(v);
        for (let index = 0; index <= colLength; index++) {
          let text = emptyNodeDefaultString;
          if (isArray) {
            const el = v[index];
            if (typeof el === "string") {
              text = el;
            }
          }
          const docNode = document.createElement(nodeType);
          cellStyleKeys.forEach((keyStyle: string) => {
            docNode.style[keyStyle as keyof object] =
              cellStyle[keyStyle as keyof object];
          });
          docNode.innerText = text;
          tr.appendChild(docNode);
        }
        tableNode.appendChild(tr);
        nodeType = "td";
      }
    }
    if (returnTableNodes) {
      resultTables.push(tableNode);
    } else {
      tabContentContainer.appendChild(tableNode);
      containerNode?.appendChild(tabContentContainer);
    }
    isDone = element.done!;
    displayTab = "hidden";
  } while (!isDone);
  if (returnTableNodes) {
    return resultTables;
  } else {
    const one: HTMLElement | null = containerNode!.querySelector(
      'div[data-sheet="1"]'
    );
    if (one) {
      one.style.display = "flex";
      one.setAttribute("data-sheet-activate", "1");
    }
    const oneButton: HTMLElement | null = containerNode!.querySelector(
      'button[data-sheet="1"]'
    );
    if (oneButton) {
      activeButtonStyleKeys.forEach((styleKey: string) => {
        oneButton.style[styleKey as keyof object] =
          activeButtonStyle[styleKey as keyof object];
      });
      oneButton.setAttribute("data-sheet-button-activate", "1");
    }
    return "Done";
  }
}
