import express from "express";
import ExcelTable from "mr-excel";
import * as examplae from "./exx.js";
const app = express();
app.get("/", async (req, response) => {
  response.setHeader(
    "Content-Disposition",
    "attachment; filename=" + "Report.xlsx"
  );
  const result = await ExcelTable.generateExcel({
    ...examplae.ex.data,
    backend: true,
    generateType: "nodebuffer",
  });
  response.send(result);
});
app.get("/ex/:id", async (req, response) => {
  let ex;
  if (typeof req.params.id !== "undefined" && examplae[("ex" + req.params.id)]) {
    ex = examplae["ex" + req.params.id];
  } else {
    ex = examplae["ex0"];
  }
  response.setHeader(
    "Content-Disposition",
    "attachment; filename=" + "Report.xlsx"
  );
  const result = await ExcelTable.generateExcel({
    ...ex.data,
    backend: true,
    generateType: "nodebuffer",
  });
  response.send(result);
});
app.listen(3000, function () {
  console.log("run on 3000");
});
