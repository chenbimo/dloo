#!/usr/bin/env node
import fs from 'node:fs';
import pacote from 'pacote';
import { cli4state } from 'cli4state';
import { minimist } from './minimist.js';

// 模板列表
const templateLists = [
    {
        name: 'funpiba 接口项目开发模板',
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
const templateNames = templateLists.map((item) => item.value);
const registry = 'https://registry.npmmirror.com';
const dd = 1;

async function main() {
    console.log(cli4state.info, '开发者：陈随易（https://chensuiyi.me）');
    console.log('-----------------------------------------');

    try {
        const options = minimist(process.argv.slice(2));
        const teimplateInfo = templateLists.find((item) => item.value === options.t);
        if (!teimplateInfo) {
            console.log(cli4state.error, `模板名称错误，请指定 ${templateNames} 模板之一`);
        }
        const version = options.v ? options.v : 'latest';
        console.log(cli4state.info, teimplateInfo.name + '下载中...');
        const fetchData = await fetch(`${registry}/${options.t}/${version}`);
        const metaData = await fetchData.json();
        const downMeta = await pacote.extract(metaData.dist.tarball, './.dloo', {});
        console.log(cli4state.success, '资源已下载到默认的 .dloo 目录，请移动到正确的目录!');
    } catch (err) {
        console.log(cli4state.error, '资源错误或不存在，请检查版本是否正确');
    }
}

main();
