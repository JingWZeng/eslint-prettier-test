module.exports = {
  // root:true 的作用是 防止ESLint检测的时候往父级目录找。所以我们直接将.eslintrc文件放在项目的根目录啦
  root: true,
  /*
  指定环境，指定不同的环境可以使用对应环境下预设的全局变量。
  比如说在 browser 环境下，可以使用 window 全局变量;在 node 环境下，可以使用 process 全局变量
  browser：浏览器全局变量;
  node：Node.js 全局变量和作用域;
  es6：es6 中除了模块之外的其他特性，同时将自动设置 parserOptions.ecmaVersion 参数为 6;以此类推 ES2017 是 7，而 ES2021 是 12;
  es2017：parserOptions.ecmaVersion 为 8;
  es2020：parserOptions.ecmaVersion 为 11;
  es2021：parserOptions.ecmaVersion 为 12;
  */
  env: {
    node: true
  },
  // 配置扩展 使用业内大家普通使用的、遵循的编码规范;然后通过 extends 去引入这些规范 extends 配置的时候接受字符串或者数组：
  /*
extends 支持的配置类型可以是以下几种
eslint 开头的：是 ESLint 官方的扩展;
plugin 开头的：是插件类型扩展，比如 plugin:vue/essential;
eslint-config 开头的：来自 npm 包，使用时可以省略前缀 eslint-config-，比如上面的可以直接写成 standard;
@开头的：扩展和 eslint-config 一样，只是在 npm 包上面加了一层作用域 scope;
一个执行配置文件的相对路径或绝对路径;
   */
  'extends': [
    'eslint:recommended', // eslint:recommended：ESLint 内置的推荐规则，即 ESLint Rules 列表中打了钩的那些规则;
    'plugin:vue/essential',
    "plugin:prettier/recommended" //  必须拿到最后 作用就是冲突的时候覆盖前面的起冲突的规则
  ],
 
  // ESLint 默认解析器，也可以指定成别的 
  parserOptions: {
    // @babel/eslint-parser：使 Babel 和 ESLint 兼容，对一些 Babel 语法提供支持;
    // @typescript-eslint/parser：TSLint 被弃用后，TypeScript 提供了此解析器用于将其与 ESTree 兼容，使 ESLint 对 TypeScript 进行支持;
    parser: 'babel-eslint',
      // // 指定要使用的 ECMAScript 版本，默认值 5 
      // ecmaVersion: 5, 
      // // 设置为 script (默认) 或 module（如果你的代码是 ECMAScript 模块) 
      // sourceType: "script", 
      // // 这是个对象，表示你想使用的额外的语言特性,所有选项默认都是 false 
      // ecmafeatures: { 
      //     // 是否允许在全局作用域下使用 return 语句 
      //     globalReturn: false, 
      //     // 是否启用全局 strict 模式（严格模式） 
      //     impliedStrict: false, 
      //     // 是否启用JSX 
      //     jsx: false, 
      //     // 是否启用对实验性的objectRest/spreadProperties的支持 
      //     experimentalObjectRestSpread: false
      // } 
  },
  /**
off 或 0：关闭对该规则的校验;
warn 或 1：启用规则，不满足时抛出警告，且不会退出编译进程;
error 或 2：启用规则，不满足时抛出错误，且会退出编译进程;
   */
  // 通过 rules 单独配置的规则优先级比 extends 高
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    /*
     这个插件的工作原理是先调用 Prettier 对你的代码进行格式化，然后会把格式化前后不一致的地方进行标记，
     通过配置 'prettier/prettier': 'error' 此条规则会将标记地方进行 error 级别的报错提示，
     然后可以通过 ESLint 的 --fix 自动修复功能将其修复。
     */
  }
}
 