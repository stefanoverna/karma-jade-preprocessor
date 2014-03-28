# karma-jade-preprocessor

> Preprocessor to compile Jade templates on the fly.

## Installation

The easiest way is to keep `karma-jade-preprocessor` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-jade-preprocessor": "~0.1"
  }
}
```

You can simple do it by:
```bash
npm install karma-jade-preprocessor --save-dev
```

## Configuration
Following code shows the default configuration...
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.jade': ['jade']
    }
  });
};
```

## Chaining preprocessors
The jade preprocessor can be used in conjunction with others (eg. [karma-ng-html2js-preprocessor](https://github.com/karma-runner/karma-ng-html2js-preprocessor)). Simply include it in an array that specifies the chain of processors.
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.jade': ['jade', 'ng-html2js']
    }
  });
};
```

----

For more information on Karma see the [homepage].


[homepage]: http://karma-runner.github.com

