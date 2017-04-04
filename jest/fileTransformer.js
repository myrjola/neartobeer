const path = require('path');

module.exports = { process: (_, filename) => `module.exports = '${JSON.stringify(path.basename(filename))}';` };

// Local Variables:
// mode: js2-jsx
// End:
