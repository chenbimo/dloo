#!/usr/bin/env node
import fs from 'node:fs';
import pacote from 'pacote';
import { cli4state } from 'cli4state';
import { minimist } from './utils/minimist.js';
import { log4state } from './utils/index.js';
const registry = 'https://registry.npmmirror.com';

async function main() {
    try {
        const options = minimist(process.argv.slice(2));
        const version = options.v ? options.v : 'latest';
        console.log(log4state('info'), options.t + ' 下载中...');
        const fetchData = await fetch(`${registry}/${options.t}/${version}`);
        const metaData = await fetchData.json();
        const downMeta = await pacote.extract(metaData.dist.tarball, './.dloo', {});
        console.log(log4state('success'), '资源已下载到默认的 [.dloo] 目录，请移动到正确的目录!');
    } catch (err) {
        console.log(log4state('error'), '资源错误或不存在，请检查 [名称] 或 [版本] 是否正确');
    }
}

main();
