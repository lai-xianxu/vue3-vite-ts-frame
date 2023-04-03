module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['vue', '@typescript-eslint', 'prettier', 'simple-import-sort'],
  parser: 'vue-eslint-parser' /* 解析 .vue 文件 */,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 1. 接入 prettier 的规则
    'plugin:prettier/recommended',
  ],
  rules: {
    // 关闭驼峰命名
    'vue/multi-word-component-names': 'off',
    // 禁止使用多余的包
    'import/no-extraneous-dependencies': 0,
    // 确保在导入路径内一致使用文件扩展名
    'import/extensions': 0,
    // 确保导入指向可以解析的文件/模块
    'import/no-unresolved': 0,
    // 首选默认导出导入/首选默认导出
    'import/prefer-default-export': 0,
    // 要求使用 let 或 const 而不是 var
    'no-var': 'error',
    // 禁止使用 new 以避免产生副作用
    'no-new': 1,
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 0,
    // 禁用 console
    'no-console': 0,
    // 禁止标识符中有悬空下划线
    'no-underscore-dangle': 0,
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': 0,
    // 禁用一元操作符 ++ 和 --
    'no-plusplus': 0,
    // 禁止对 function 的参数进行重新赋值
    'no-param-reassign': 0,
    // 禁用特定的语法
    'no-restricted-syntax': 0,
    // 禁止在变量定义之前使用它们
    'no-use-before-define': 0,
    // 禁止直接调用 Object.prototypes 的内置属性
    'no-prototype-builtins': 0,
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': 'error',
    // 禁止重复模块导入
    // 'no-duplicate-imports': 'error',
    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 'error',
    // 禁止不必要的转义字符
    'no-useless-escape': 0,
    // 禁用 continue 语句
    'no-continue': 0,
    // 强制使用一致的缩进
    indent: ['error', 2, { SwitchCase: 1 }],
    // 强制使用骆驼拼写法命名约定
    camelcase: 0,
    // 强制类方法使用 this
    'class-methods-use-this': 0,
    // 要求构造函数首字母大写
    'new-cap': 0,
    // 强制一致地使用 function 声明或表达式
    'func-style': 0,
    // 强制一行的最大长度
    'max-len': [
      'error',
      {
        code: 80,
        comments: 80,
        // 忽略注释
        ignoreUrls: true,
        // 忽略字符串
        ignoreStrings: true,
        // 忽略模板字符串
        ignoreTemplateLiterals: true,
        // 忽略正则表达式
        ignoreRegExpLiterals: true,
      },
    ],
    // 要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': 0,
    // 强制switch要有default分支
    'default-case': 2,
    // 强制剩余和扩展运算符及其表达式之间有空格
    'rest-spread-spacing': 'error',
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 'error',
    // 强制在花括号中使用一致的空格
    'arrow-spacing': 'error',
    // 只强制对象解构，不强制数组解构
    'prefer-destructuring': ['error', { object: true, array: false }],
    // 关闭any类型的警告
    '@typescript-eslint/no-explicit-any': ['off'],
    // 关闭函数返回值类型的警告
    'simple-import-sort/imports': 'error',
    // 关闭函数返回值类型的警告
    'simple-import-sort/exports': 'error',
    // 关闭函数返回值类型的警告
    '@typescript-eslint/no-empty-function': 'off',
  },
};
