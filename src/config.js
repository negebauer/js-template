const { NODE_ENV = 'development' } = process.env

const isDev = NODE_ENV === 'dev'
const isProd = NODE_ENV === 'production'
const isTest = NODE_ENV === 'test'

const config = {
  env: {
    isDev,
    isProd,
    isTest,
  },
}

module.exports = config
