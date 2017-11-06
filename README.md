A jsdoc plugin to prevent comments to be parsed. 

# How to use

```npm install jsdoc-prevent-comment-parse-plugin --save-dev```

Add this plugin in your jsdoc configuraiton file: 

```
    "plugins": ["node_modules/jsdoc-prevent-comment-parse-plugin"],
```

And just put the annotation `@jsdoc-prevent-comment-parse-plugin` in the jsdocs comments

# Motivation

There is no way to prevent comment parsing in jsdoc. ```@ignore``` won't prevent parsing a comment - just prevents its output. 

There are some things that jsdoc3 can't accomplish and now typescript / modern ides allows us to do typechecking with pure JavaScript validating types against the jsdocs. 

For example, there is no way to declare a property of Class type in jsdoc but there is in typescript/vscode. For example, this is valid in typescript-jsdoc but not in jsdoc: 

```javascript
// artificially documenting types of a native library that exports an object with properties are classes. 
/**
 * 
 * @typedef {Object} Lucy
 * @property {typeof FullTextType} FullTextType
 * @property {typeof Schema} Schema
 * @property {typeof IndexSearcher} IndexSearcher
 * @property {typeof EasyAnalyzer} EasyAnalyzer
 */

/**
 * @type {Lucy}
 */
module.exports = require("bindings")("lucy");`// native type
```

