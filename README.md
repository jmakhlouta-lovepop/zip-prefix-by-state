# zip-state-by-prefix

## Background

United states zip code prefixes (the first 3 digits) generally map to the US states. A reverse lookup (state-to-zip prefix) might be useful for adapting data and operations from a state context in a client to a subsystem that only understands zips (or zip prefixes, anyway).

## Design overview

Running the simple script yields a json document at `~/output/zip-prefix-by-state.json`.

The data is sourced from an underlying NPM module that relates zip prefixes to their corresponding states and cities. That project claims to use https://en.wikipedia.org/wiki/List_of_ZIP_Code_prefixes as its source. Special thanks to https://github.com/billfienberg/zip3 for packaging the data in an easy to use way.

## Usage

```sh
npm i
npm start
```

## Credits

- https://github.com/billfienberg/zip3
