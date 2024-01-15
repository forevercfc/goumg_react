//index.js

import ReactDom from "react-dom";
import React from "react";
import { App } from "./App";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";

ReactDom.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  document.getElementById("root")
);
