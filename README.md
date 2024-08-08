# dloo - 陈随易官方 NPM 项目模板下载工具

作者：[陈随易 https://chensuiyi.me](https://chensuiyi.me)

### 用途

下载 `npm` 项目模板到当前目录的 `dloo-package` 目录下。

### 使用

如果你使用的是 `npm`：

```bash
npx dloo -t yibase
```

如果你使用的是 `pnpm`：

```bash
pnpm dlx dloo -t yibase
```

### 指令

-   `-t 模板名称`
-   `-v 版本`，默认值 latest

### 注意

下载后请将 `.dloo` 中的文件移至目标目录下进行开发。

### 模板

```javascript
const templateLists = [
    {
        name: 'funpi 接口项目开发模板',
        value: 'funpiba'
    },
    {
        name: 'yibase 基础项目开发模板',
        value: 'yibase'
    },
    {
        name: 'yiadmin 后台项目开发模板',
        value: 'yiadmin'
    },
    {
        name: 'yiuni 小程序项目开发模板',
        value: 'yiuni'
    },
    {
        name: 'yidocs 易文档基础模板',
        value: 'yidocs'
    }
];
```

### 赞赏作者

![赞赏](https://static.yicode.tech/images/zan-shang.jpg)
