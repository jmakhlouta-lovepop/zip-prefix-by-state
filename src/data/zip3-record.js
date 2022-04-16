const stateFilterPattern = /[^a-zA-Z]/gi;

class Zip3Record {
  constructor(record) { 
    this.record = record;
  }

  get isStateZipPrefix() {
    return this.record.state;
  }

  get state() { 
    return this.record.state.replace(stateFilterPattern, "");
  }

  get description() {
    if (this.isStateZipPrefix) {
      throw new Error("State records do not contain descriptions.");
    }
  
    // The data seems to put a note/memo in the city field when there is no state.
    return this.record.city;
  }
}

export { Zip3Record };