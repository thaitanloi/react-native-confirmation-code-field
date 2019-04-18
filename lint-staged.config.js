'use strict';

module.exports = {
  '*.md': 'yaspeller-ci',
  '**/*.js': ['eslint --fix', 'git add'],
  '**/*.json': ['prettier --write', 'git add'],
};
