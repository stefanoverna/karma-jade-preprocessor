var jade = require('jade');

var createJadePreprocessor = function(logger, basePath) {
  var log = logger.create('preprocessor.jade');

  return function(content, file, done) {
    var processed = null;

    log.debug('Processing "%s".', file.originalPath);
    file.originalPath = file.originalPath.replace(/\.jade$/, '.html');

    var templateName = file.originalPath.replace(/^.*\/([^\/]+)\.jade$/, '$1');

    try {
        var jadeOptions = {
            filename: file.originalPath,
            client: true,
            pretty: true
        };
        processed = jade.render(content, jadeOptions);    
    } catch (e) {
      log.error('%s\n  at %s', e.message, file.originalPath);
    }
    log.debug('Processed content as:\n%s', processed);
    done(processed);
  };
};

createJadePreprocessor.$inject = ['logger', 'config.basePath'];

// PUBLISH DI MODULE
module.exports = {
  'preprocessor:jade': ['factory', createJadePreprocessor]
};
