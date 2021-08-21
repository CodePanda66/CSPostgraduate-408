const plugins=require('./config/plugins')
const nav=require('./config/nav')
const sidebar=require('./config/sidebar')

module.exports = {
    title: "CSPostgraduate-408",
    base: process.env.BASE408,
    description: "一研为定！一战成硕！",
    port: 4080,
    theme: 'reco',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    themeConfig: {
        //reco 主题相关
        noFoundPageByTencent: false,
        startYear: 2020,
        author: "Kim Yang",
        //默认主题支持
        logo: '/icons.png',
        head: [
            ['link', { rel: 'icon', href: '/favicon.ico', type: "image/x-icon" }],
            ['link', { rel: ' short icon', href: '/favicon.ico', type: "image/x-icon" }],
            ['link', { rel: 'apple-touch-icon', href: `/favicon.ico`, type: "image/x-icon" }],
        ],
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        lastUpdated: "最后更新时间：",
        smoothScroll: true,
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        // repo: 'KimYangOfCat/2021-CSPostgraduate-408',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        // repoLabel: '查看源码',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'KimYangOfCat/2021-CSPostgraduate-408',
        // 假如文档不是放在仓库的根目录下：
        docsDir: '408Notes',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '发现错误？点击修正！',

        // vssueConfig: {
        //     platform: 'github',
        //     owner: 'CodePanda66',
        //     repo: 'CSPostgraduate-408', //github一个项目的名称
        //     clientId: '0b51066b027f4cb4a5a3',//注册的Client ID
        //     clientSecret: '4b816edafb10d7e828c0faaaa18df1e7d08585c2',//注册的Client Secret
        //     locale: 'zh', //语言
        //     labels: ["留言板"],//Vssue 通过 title 和 labels 来确定用来存储评论的对应 Issue
        //     prefix: '[Comments]',//Issue 标题的前缀
        // }
    },
    nav,
    sidebar,
    plugins,
}