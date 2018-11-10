# create-react-app

### 引入less
- npm i less less-loader -D

- 找到config/webpack.config.dev.js

- 生产环境相同位置修改

```js
// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
// 修改成
const cssRegex = /\.(css|less)$/;
const cssModuleRegex = /\.module\.(css|less)$/;

// "postcss" loader applies autoprefixer to our CSS.
// "css" loader resolves paths in CSS and adds assets as dependencies.
// "style" loader turns CSS into JS modules that inject <style> tags.
// In production, we use a plugin to extract that CSS to a file, but
// in development "style" loader enables hot editing of CSS.
// By default we support CSS Modules with the extension .module.css
{
  test: cssRegex,
  exclude: cssModuleRegex,
  use: getStyleLoaders({ importLoaders: 1 })
}
// 修改成
{
  test: cssRegex,
  exclude: cssModuleRegex,
  use: getStyleLoaders({ importLoaders: 1 }, 'less-loader')
}
```

### 集成antd mobile

- npm install antd-mobile -S

- npm install babel-plugin-import -D

- 按需引入需要修改webpack配置，找到config/webpack.config.dev.js，找到rules里的plugins大概在228行，生产环境同理修改webpack.config.prod.js

```js
// 修改前
              plugins: [
                [
                  require.resolve('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                      },
                    },
                  },
                ],
              ],
// 添加antd文档里的一个配置 修改后
plugins: [
                [
                  require.resolve('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                      },
                    },
                  },
                ],
                // 加入antd的按需引入
                ["import", { libraryName: "antd-mobile", style: "css" }] // `style: true` 会加载 less 文件
              ],
```

