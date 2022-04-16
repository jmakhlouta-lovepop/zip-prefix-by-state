import { Zip3Record } from "./zip3-record.js"

import * as zipDataModule from "zip3";

const zip3Data = zipDataModule.default;
const stateToZipPrefix = {};
const nonStateZips = [];

for (let zip3Key in zip3Data) {
  const record = new Zip3Record(zip3Data[zip3Key]);
  
  if (record.isStateZipPrefix) {
    const state = record.state;
    stateToZipPrefix[state] = stateToZipPrefix[state] || [];
    stateToZipPrefix[state].push(zip3Key);
  } else {
    const description = record.description;
    nonStateZips.push({ zipPrefix: zip3Key, description });
  }
}

export { stateToZipPrefix };