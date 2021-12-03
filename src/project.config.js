const { NODE_ENV } = process.env;

const config = {
  spacingjs: true,
  dev: NODE_ENV === 'development' ? true : false,
}

module.exports = config;