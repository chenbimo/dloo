# dloo - NPM 包下载工具

作者：[陈随易 https://chensuiyi.me](https://chensuiyi.me)

### 名称

-   `dl` = `download` 下载。
-   `oo` = `一幅眼镜` 查找。

结合起来就是，带着眼镜下载。

### 安装

👉 全局安装

```bash
npm install -g dloo
# 或
pnpm add -g dloo
```

👉 升级版本

```bash
npm update -g dloo
# 或
pnpm update -g dloo
```

### 使用

-   `-r 仓库地址`，默认值 `https://registry.npmmirror.com`
-   `-n npm包名称`，如 `yibase`、`@funpi/api`
-   `-v 版本`，默认值 `latest`

```bash
# 打印版本
dloo # 回车
# 下载 yibase 包
dloo -t yibase
# 下载 @funpi/api 包的 7.2.0 版本
dloo -t @funpi/api -v 7.2.0
```

### 注意

下载后请将 `.dloo` 中的所有文件移至目标目录下。

### 赞赏作者

![赞赏](https://static.yicode.tech/images/zan-shang.jpg)
