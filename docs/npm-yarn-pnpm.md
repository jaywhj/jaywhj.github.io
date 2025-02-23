---
title: npm-yarn-pnpm 国内镜像源设置
icon: fontawesome/brands/npm
---


# npm-yarn-pnpm 国内镜像源设置



## 1. npm 设置国内镜像源

### 1.1 镜像源概述

镜像源是软件包管理工具用来下载和安装软件包的服务器地址。由于网络原因，直接使用官方源可能会导致速度慢或连接失败的问题。国内镜像源可以提供更快的访问速度和更稳定的连接。

### 1.2 镜像源的选择

国内有许多可用的npm镜像源，包括但不限于淘宝镜像、腾讯云镜像、cnpm等。这些镜像源通常会同步官方npm源的包，但可能会有一些延迟。

#### 1.2.1 淘宝镜像

淘宝镜像源是目前国内使用较为广泛的镜像源之一。根据最新的信息，淘宝镜像的地址已更新为 `https://registry.npmmirror.com/`。

#### 1.2.2 腾讯云镜像

腾讯云镜像源提供了另一个选择，地址为 `https://mirrors.cloud.tencent.com/npm/`，同样可以提供快速的下载速度。

#### 1.2.3 cnpm

cnpm是一个基于npm的中国镜像源，地址为 `https://r.cnpmjs.org/`，它提供了npm包的完整镜像，并且更新速度较快。

### 1.3 设置方法

设置npm使用国内镜像源可以通过命令行进行，以下是设置淘宝镜像源的步骤：

```bash
npm get registry    # 查询当前使用的镜像源
npm config set registry https://registry.npmmirror.com/ # 设置为淘宝镜像源
npm config set registry https://registry.npmjs.org/     # 还原为官方镜像源
```

### 1.4 验证设置

```bash
npm get registry
```

如果输出的地址是设置的国内镜像源地址，则表示设置成功。



## 2. yarn 设置国内镜像源

### 2.1 镜像源概述

与npm类似，yarn也有国内镜像源的选项，以提升在中国大陆地区的访问速度和稳定性。

### 2.2 镜像源的选择

yarn用户可以选择以下国内镜像源之一来加速包的下载：

#### 2.2.1 淘宝镜像

淘宝镜像源是yarn用户常用的一个镜像源，其地址为 `https://registry.npmmirror.com/`。

#### 2.2.2 腾讯云镜像

腾讯云镜像源地址为 `https://mirrors.cloud.tencent.com/npm/`，提供了快速的yarn包下载服务。

#### 2.2.3 官方源作为备选

在某些情况下，如果国内镜像源无法满足需求，用户可以选择切换回yarn的官方源 `https://registry.yarnpkg.com/`。

### 2.3 设置方法

设置yarn使用国内镜像源的步骤如下：

```bash
yarn config get registry    # 查询当前使用的镜像源
yarn config set registry https://registry.npmmirror.com/    # 设置为淘宝镜像源
yarn config set registry https://registry.yarnpkg.com/      # 还原为官方镜像源
```

### 2.4 验证设置

通过以下命令可以验证yarn是否成功切换到指定的镜像源：

```bash
yarn config get registry
```

如果输出的地址是设置的国内镜像源地址，则表示设置成功。



## 3. pnpm 设置国内镜像源

### 3.1 镜像源概述

pnpm作为新兴的包管理工具，同样支持使用国内镜像源以优化在中国大陆地区的使用体验。

### 3.2 镜像源的选择

pnpm用户可以选择以下国内镜像源之一来提高下载速度和稳定性：

#### 3.2.1 淘宝镜像

淘宝镜像源是pnpm用户常用的镜像源之一，地址为 `https://registry.npmmirror.com/`。

#### 3.2.2 腾讯云镜像

腾讯云镜像源提供了快速的pnpm包下载服务，地址为 `https://mirrors.cloud.tencent.com/npm/`。

#### 3.2.3 官方源作为备选

在某些情况下，如果国内镜像源无法满足需求，用户可以选择切换回pnpm的官方源 `https://registry.npmjs.org/`。

### 3.3 设置方法

设置pnpm使用国内镜像源的步骤如下：

```bash
pnpm get registry   # 查询当前使用的镜像源
pnpm config set registry https://registry.npmmirror.com/    # 设置为淘宝镜像源
pnpm config set registry https://registry.npmjs.org/        # 还原为官方镜像源
```

### 3.4 验证设置

通过以下命令可以验证pnpm是否成功切换到指定的镜像源：

```shell
pnpm get registry
```

如果输出的地址是设置的国内镜像源地址，则表示设置成功。



参考[原文](https://www.cnblogs.com/shenhuanjie/p/18428209/npm-yarn-pnpm-latest-domestic-mirror-portion-source-setting-and-common-problems-solve-zyb4mp)。