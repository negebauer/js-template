# @negebauer/js-template

[![CircleCI][circleci_badge]][circleci_url]
[![Coveralls][coveralls_badge]][coveralls_url]

A js project template.

## Libraries

- eslint: Linter
  - @negebauer/eslint-config-base: My base linter config
- prettier: For formatting code
  - @negebauer/prettier-config: My prettier config
- jest: For running tests
- nodemon: For development
- prettier-package-json: For formatting package.json
- standard-version: For releasing with a CHANGELOG and automatic versioning with conventional commit messages

## Other

- ci: Configured to run in CircleCI
- `config.js`: File where env variables are loaded
- coveralls: For reporting code coverage changes

<!-- Badges -->
[circleci_badge]:https://img.shields.io/circleci/build/github/negebauer/js-template?token=c7d8b663cadf1c13b681e91c4c3ae48e0ece60ce
[circleci_url]:https://circleci.com/gh/negebauer/js-template

[coveralls_badge]:https://coveralls.io/repos/github/negebauer/js-template/badge.svg?branch=master
[coveralls_url]:https://coveralls.io/github/negebauer/js-template?branch=master
