require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDom from "react-dom";
import { App } from "./app";
import "./style.scss";
ReactDom.render(<App />, document.getElementById("root"));
