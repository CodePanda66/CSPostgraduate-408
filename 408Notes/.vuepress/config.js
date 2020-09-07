module.exports = {
    title: "CSPostgraduate",
    base: "/",
    repo: "https://github.com/KimYangOfCat/2021-CSPostgraduate-408",
    description:"2021 CSPostgraduate 408",
    port:4080,

    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'icons.png',
        head:[
            ['link',{rel:'icon',href:'/favicon.ico',type:"image/x-icon"}],
            ['link',{rel:' short icon',href:'/favicon.ico',type:"image/x-icon"}],
            ['link', { rel: 'apple-touch-icon', href: `/favicon.ico`,type:"image/x-icon" }],
        ],
        nav: [
            {text: '首页', link: '/'},
            {text: '数据结构', link: '/DataStructure/'},
            {text: '计算机组成原理', link: '/ComputerOrganization/'},
            {text: '计算机网络', link: '/ComputerNetwork/'},
            {text: '操作系统', link: '/OperatingSystem/'},
            {text: '留言板', link: '/contact'},
            // {text: 'GitHub', link: 'https://github.com/KimYangOfCat/2021-CSPostgraduate-408', target: '_blank'},
        ],
        sidebar:
            {
                '/DataStructure/': getDataStructureSidebar(),
                '/ComputerOrganization/': getComputerOrganizationSidebar(),
                '/ComputerNetwork/': getComputerNetworkSidebar(),
                '/OperatingSystem/': getOperatingSystemSidebar(),
                // fallback
                '/': [
                    // '',        /* / */
                    'contact', /* /contact.html */
                ]
            },
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        lastUpdated:"最后更新时间：",
        smoothScroll: true,
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'KimYangOfCat/2021-CSPostgraduate-408',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'KimYangOfCat/2021-CSPostgraduate-408',
        // 假如文档不是放在仓库的根目录下：
        docsDir: '408Notes',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们完善此页面吧～'
    },
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
            baseURL:"https://github.com",

            platform: 'github-v4', //v3的platform是github，v4的是github-v4
            locale: 'zh', //语言
            // 其他的 Vssue 配置
            owner: 'KimYangOfCat', //github账户名
            repo: '2021-CSPostgraduate-408', //github一个项目的名称
            clientId: '0b51066b027f4cb4a5a3',//注册的Client ID
            clientSecret: '4b816edafb10d7e828c0faaaa18df1e7d08585c2',//注册的Client Secret
            autoCreateIssue:false,// 自动创建评论，默认是false
            labels:['Comments'],//Vssue 通过 title 和 labels 来确定用来存储评论的对应 Issue
            prefix:'[Comments]',//Issue 标题的前缀
            locale:'zh',//使用的语言。
            issueContent: ({ url }) =>`这个 Issue 由评论系统自动创建，用来存储该页面的评论：${url}`,
        },
    },
}

function getDataStructureSidebar() {
    return [
        '/DataStructure/',
        {
            title: '零、绪论',   // 必要的
            path: '/DataStructure/DS_0_Introduction',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/DataStructure/DS_0_Introduction/Doc_0_0_数据结构基本概念',
                '/DataStructure/DS_0_Introduction/Doc_0_1_算法基本概念',
            ]
        },
        {
            title: '一、线性表',   // 必要的
            path: '/DataStructure/DS_1_LinearList',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/DataStructure/DS_1_LinearList/Doc_1_0_线性表',
                '/DataStructure/DS_1_LinearList/Doc_1_1_顺序表',
                '/DataStructure/DS_1_LinearList/Doc_1_2_单链表',
                '/DataStructure/DS_1_LinearList/Doc_1_3_双链表',
                '/DataStructure/DS_1_LinearList/Doc_1_4_循环链表',
                '/DataStructure/DS_1_LinearList/Doc_1_5_静态链表',
                '/DataStructure/DS_1_LinearList/Doc_1_6_章节总结',
            ]
        },
        {
            title: '二、栈与队列',   // 必要的
            path: '/DataStructure/DS_2_StackAndQueue',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/DataStructure/DS_2_StackAndQueue/Doc_2_0_栈',
                '/DataStructure/DS_2_StackAndQueue/Doc_2_1_顺序栈',
                '/DataStructure/DS_2_StackAndQueue/Doc_2_2_链栈',
                '/DataStructure/DS_2_StackAndQueue/Doc_2_3_队列',
                '/DataStructure/DS_2_StackAndQueue/Doc_2_4_顺序队列',
                '/DataStructure/DS_2_StackAndQueue/Doc_2_5_链式队列',
                '/DataStructure/DS_2_StackAndQueue/Doc_2_6_双端队列',
                '/DataStructure/DS_2_StackAndQueue/Doc_2_7_栈的应用',
                '/DataStructure/DS_2_StackAndQueue/Doc_2_8_队列的应用',
            ]
        },
        {
            title: '三、字符串',   // 必要的
            path: '/DataStructure/DS_3_String',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/DataStructure/DS_3_String/Doc_3_0_串',
                '/DataStructure/DS_3_String/Doc_3_1_串的存储结构',
                '/DataStructure/DS_3_String/Doc_3_2_模式匹配',
                '/DataStructure/DS_3_String/Doc_3_3_KMP算法',
                '/DataStructure/DS_3_String/Doc_3_4_KMP算法的优化',
            ]
        },
        {
            title: '四、树与二叉树',   // 必要的
            path: '/DataStructure/DS_4_TreeAndBinaryTree',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_0_树',
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_1_树的性质',
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_2_二叉树',
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_3_二叉树的性质',
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_4_二叉树的存储结构',
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_5_二叉树的遍历',
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_6_二叉树的构造',
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_7_线索二叉树',
                '/DataStructure/DS_4_TreeAndBinaryTree/Doc_4_8_二叉树的线索化',
            ]
        },
        {
            title: '五、图',   // 必要的
            path: '/DataStructure/DS_5_Graph/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '六、搜索',   // 必要的
            path: '/DataStructure/DS_6_Search/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '七、排序',   // 必要的
            path: '/DataStructure/DS_7_Sort/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },

    ]
}

function getComputerOrganizationSidebar() {
    return [
        '/ComputerOrganization/',
    ]
}

function getComputerNetworkSidebar() {
    return [
        '/ComputerNetwork/',
    ]
}

function getOperatingSystemSidebar() {
    return [
        '/OperatingSystem/',
    ]
}