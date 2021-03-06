module.exports = {
  root: true, // 限制父级目录
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: 'babel-eslint', // 词法解析器使用babel-eslint，以更好的适配es6的新api
  },
  plugins: ['vue'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': ['error', 'windows'],
  },
  settings: {
    'import/resolver': {
      // 解决eslint不是吧webpack alias问题
      alias: {
        map: [
          ['@', './src'],
          ['@utils', './src/utils'],
        ],
        extensions: ['.js', '.jsx', '.json', '.vue'],
      },
    },
  },
};
