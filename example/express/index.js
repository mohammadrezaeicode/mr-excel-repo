import express from "express";
import * as ExcelTable from "mr-excel";
import * as example from "./example.js";
const app = express();
app.get("/", async (req, response) => {
  response.setHeader(
    "Content-Disposition",
    "attachment; filename=" + "Report.xlsx"
  );
  const result = await ExcelTable.generateExcel({
    ...example.ex1(),
    backend: true,
    generateType: "nodebuffer",
  });
  response.send(result);
});
import fs from 'fs'
app.get("/ex/:id", async (req, response) => {
  let ex;
  if (typeof req.params.id !== "undefined" && example["ex" + req.params.id]) {
    ex = example["ex" + req.params.id];
  } else {
    ex = example["ex1"];
  }
  response.setHeader(
    "Content-Disposition",
    "attachment; filename=" + "Report.xlsx"
  );
  const data = {
    ...ex(),
    backend: true,
    generateType: "nodebuffer",
  };
  fs.writeFileSync("data.json",JSON.stringify(data))
  const result = await ExcelTable.generateExcel(data);
  response.send(result);
});
app.listen(3000, function () {
  console.log("run on 3000");
});
