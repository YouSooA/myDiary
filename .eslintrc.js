module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 파일 확장자 명시하기
    'import/extensions': 'off',
    // 불필요한 콘솔 창은 주의
    'no-console': 'warn',
    // indent 깊이 2
    'max-depth': ['error', 2],
    // 함수 최대 코드 줄 수 15
    'max-lines-per-function': ['error', 15],
    'no-alert': 'off',
  },
};
