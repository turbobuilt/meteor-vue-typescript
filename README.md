# Integrate TypeScript with vue single-file components for Meteor

This meteor package adds [TypeScript](https://www.typescriptlang.org/) support in your single-file `.vue` components.
[TypeScript class component's](https://vuejs.org/v2/guide/typescript.html) are not currently supported.

## Prerequisites
This package is an add-on for [akryum:vue-component](https://github.com/Akryum/vue-meteor). You must first have that package installed.

## Installation

    meteor add nathantreid:vue-typescript


## Usage

```html
<script lang="typescript">
let message: string;

export default {
    ready() {
        message = 'world';
        console.log(`Hello, ${message}!`);
    }
}
</script>
```

---

## Importing TypeScript files
This plugin only handles compilation of TypeScript within .vue files. To import other TypeScript files, you must install a .ts compiler such as [barbatus:typescript](https://github.com/barbatus/typescript).

LICENCE ISC - Created by Nathan Reid (@nathantreid)
