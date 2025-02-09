#!/usr/bin/env node

import fs from 'node:fs';
import pacote from 'pacote';
import { minimist } from './utils/minimist.js';
import { log4state } from './utils/index.js';

async function main() {
    try {
        const options = minimist(process.argv.slice(2));
        if (options.n) {
            const version = options.v ? options.v : 'latest';
            console.log(log4state('info'), options.n + ' 下载中...');
            const fetchData = await fetch(`${options.r ?? 'https://registry.npmmirror.com'}/${options.n}/${version}`);
            const metaData = await fetchData.json();
            const downMeta = await pacote.extract(metaData.dist.tarball, './.dloo', {});
            console.log(log4state('success'), '资源已下载到默认的 [.dloo] 目录，请移动到正确的目录!');
        } else {
            const { default: packageJson } = await import('./package.json', { with: { type: 'json' } });
            console.log(log4state('info'), `当前 dloo 版本为 ${packageJson.version}`);
            console.log(log4state('error'), `请使用 -n 参数指定要下载的包名`);
        }
    } catch (err) {
        console.log(log4state('error'), '资源错误或不存在，请检查 [名称] 或 [版本] 是否正确');
    }
}

main();
