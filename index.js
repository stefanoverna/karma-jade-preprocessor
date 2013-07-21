var handlebars = require('handlebars');

var createJadePreprocessor = function(logger, basePath) {
  var log = logger.create('preprocessor.jade');

  return function(content, file, done) {
    var processed = null;

    log.debug('Processing "%s".', file.originalPath);
    file.path = file.originalPath.replace(/\.jade$/, '.html');

    var templateName = file.originalPath.replace(/^.*\/([^\/]+)\.jade$/, '$1');

    try {
        jade.compile(content, jadeOptions)
    } catch (e) {
      log.error('%s\n  at %s', e.message, file.originalPath);
    }

    done(processed);
  };
};

createHandlebarsPreprocessor.$inject = ['logger', 'config.basePath'];

// PUBLISH DI MODULE
module.exports = {
  'preprocessor:handlebars': ['factory', createHandlebarsPreprocessor]
};
