'use strict';

import * as fs from "fs";
import { stateToZipPrefix } from "./data/zip-prefix-by-state.js";

if (!fs.existsSync("output")) {
  fs.mkdirSync("output");
}
fs.writeFileSync('output/zip-prefix-by-state.json', JSON.stringify(stateToZipPrefix));