// Disable warnings about template strings in this file, as we do lots of
// string concatenation so options/help in the CLI app display nicely.
// jscs:disable requireTemplateStrings
import argv from 'yargs';
import { version } from 'json!../package';


export default argv
  .usage('Usage: ./$0 [options] addon-package \n\n' +
    'Add-ons Validator (JS Edition) v' + version)
  .option('type', {
    alias: 't',
    describe: 'The type that you expect your add-on to be detected as.',
    type: 'string',
    default: 'any',
    choices: [
      'any', 'extension', 'theme',
      'dictionary', 'languagepack',
      'search', 'multi',
    ],
  })
  .option('output', {
    alias: 'o',
    describe: 'The type of output to generate',
    type: 'string',
    default: 'text',
    choices: ['json', 'text'],
  })
  .option('pretty', {
    describe: 'Prettify JSON output',
    type: 'boolean',
    default: false,
  })
  .option('stack', {
    describe: 'Show stacktraces when errors are thrown',
    type: 'boolean',
    default: false,
  })
  .option('selfhosted', {
    describe: 'Indicates that the addon will not be hosted on ' +
      'addons.mozilla.org. This allows the <em:updateURL> element ' +
      'to be set.',
    type: 'boolean',
    default: false,
  })
  .option('determined', {
    describe: 'This flag will continue running tests in successive ' +
      'tests even if a lower tier fails',
    type: 'boolean',
    default: false,
  })
  .option('boring', {
    describe: 'Disables colorful shell output',
    type: 'boolean',
    default: false,
  })
  .option('target-maxversion', {
    describe: "JSON string to override the package's " +
      'targetapp_maxVersion for validation. The JSON object ' +
      'should be a dict of versions keyed by application ' +
      "GUID. For example, setting a package's max Firefox " +
      'version to 5.*: ' +
      '{"{ec8030f7-c20a-464f-9b0e-13a3a9e97384}": "5.*"} ',
    type: 'string',
  })
  .option('target-minversion', {
    describe: "JSON string to override the package's " +
      'targetapp_minVersion for validation. The JSON object ' +
      'should be a dict of versions keyed by application ' +
      "GUID. For example, setting a package's min Firefox " +
      'version to 5.*: ' +
      '{"{ec8030f7-c20a-464f-9b0e-13a3a9e97384}": "5.*"}',
    type: 'string',
  })
  .option('for-appversions', {
    describe: 'JSON string to run validation tests for ' +
      'compatibility with a specific app/version. The JSON ' +
      'object should be a dict of version lists keyed by ' +
      'application GUID. For example, running Firefox 6.* ' +
      'compatibility tests: ' +
      '{"{ec8030f7-c20a-464f-9b0e-13a3a9e97384}": ["6.*"]',
    type: 'string',
  })
  // Require one non-option.
  .demand(1)
  .help('help')
  .alias('h', 'help')
  .wrap(78);
