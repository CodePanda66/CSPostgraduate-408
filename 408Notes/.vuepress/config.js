module.exports = {
    title: "CSPostgraduate",
    base: "/",
    repo: "https://github.com/KimYangOfCat/2021-CSPostgraduate-408",
    description: "2021 CSPostgraduate 408",
    port: 4080,

    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/icons.png',
        head: [
            ['link', { rel: 'icon', href: '/favicon.ico', type: "image/x-icon" }],
            ['link', { rel: ' short icon', href: '/favicon.ico', type: "image/x-icon" }],
            ['link', { rel: 'apple-touch-icon', href: `/favicon.ico`, type: "image/x-icon" }],
        ],
        nav: [
            { text: '首页', link: '/' },
            { text: '数据结构', link: '/DataStructure/' },
            { text: '计算机组成原理', link: '/ComputerOrganization/' },
            { text: '计算机网络', link: '/ComputerNetwork/' },
            { text: '操作系统', link: '/OperatingSystem/' },
            { text: '留言板', link: '/contact' },
            { text: '个人博客', link: 'https://kimyang.cn' },
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
                // 'contact', /* /contact.html */
            ]
        },
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        lastUpdated: "最后更新时间：",
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
        editLinkText: '发现错误？点击修正！'
    },
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
            baseURL: "https://github.com",

            platform: 'github-v4', //v3的platform是github，v4的是github-v4
            locale: 'zh', //语言
            // 其他的 Vssue 配置
            owner: 'CodePanda66', //github账户名
            repo: 'CSPostgraduate-408', //github一个项目的名称
            clientId: '0b51066b027f4cb4a5a3',//注册的Client ID
            clientSecret: '4b816edafb10d7e828c0faaaa18df1e7d08585c2',//注册的Client Secret
            autoCreateIssue: false,// 自动创建评论，默认是false
            labels: ["留言板"],//Vssue 通过 title 和 labels 来确定用来存储评论的对应 Issue
            prefix: '[留言板]',//Issue 标题的前缀
            locale: 'zh',//使用的语言。
            issueContent: ({ url }) => `这个 Issue 由评论系统自动创建，用来存储该页面的评论：${url}`,
        },
    },
}

function getDataStructureSidebar() {
    return [
        '/DataStructure/',
        {
            title: '一、绪论',   // 必要的
            path: '/DataStructure/DS_0_Introduction/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/DataStructure/DS_0_Introduction/DS_Doc_0_0_数据结构基本概念',
                '/DataStructure/DS_0_Introduction/DS_Doc_0_1_算法基本概念',
            ]
        },
        {
            title: '二、线性表',   // 必要的
            path: '/DataStructure/DS_1_LinearList/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/DataStructure/DS_1_LinearList/DS_Doc_1_0_线性表',
                '/DataStructure/DS_1_LinearList/DS_Doc_1_1_顺序表',
                '/DataStructure/DS_1_LinearList/DS_Doc_1_2_单链表',
                '/DataStructure/DS_1_LinearList/DS_Doc_1_3_双链表',
                '/DataStructure/DS_1_LinearList/DS_Doc_1_4_循环链表',
                '/DataStructure/DS_1_LinearList/DS_Doc_1_5_静态链表',
                '/DataStructure/DS_1_LinearList/DS_Doc_1_6_章节总结',
            ]
        },
        {
            title: '三、栈与队列',   // 必要的
            path: '/DataStructure/DS_2_StackAndQueue/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/DataStructure/DS_2_StackAndQueue/DS_Doc_2_0_栈',
                '/DataStructure/DS_2_StackAndQueue/DS_Doc_2_1_顺序栈',
                '/DataStructure/DS_2_StackAndQueue/DS_Doc_2_2_链栈',
                '/DataStructure/DS_2_StackAndQueue/DS_Doc_2_3_队列',
                '/DataStructure/DS_2_StackAndQueue/DS_Doc_2_4_顺序队列',
                '/DataStructure/DS_2_StackAndQueue/DS_Doc_2_5_链式队列',
                '/DataStructure/DS_2_StackAndQueue/DS_Doc_2_6_双端队列',
                '/DataStructure/DS_2_StackAndQueue/DS_Doc_2_7_栈的应用',
                '/DataStructure/DS_2_StackAndQueue/DS_Doc_2_8_队列的应用',
            ]
        },
        {
            title: '四、字符串',   // 必要的
            path: '/DataStructure/DS_3_String/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/DataStructure/DS_3_String/DS_Doc_3_0_串',
                '/DataStructure/DS_3_String/DS_Doc_3_1_串的存储结构',
                '/DataStructure/DS_3_String/DS_Doc_3_2_模式匹配',
                '/DataStructure/DS_3_String/DS_Doc_3_3_KMP算法',
                '/DataStructure/DS_3_String/DS_Doc_3_4_KMP算法的优化',
            ]
        },
        {
            title: '五、树与二叉树',   // 必要的
            path: '/DataStructure/DS_4_TreeAndBinaryTree/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/DataStructure/DS_4_TreeAndBinaryTree/DS_Doc_4_0_树',
                '/DataStructure/DS_4_TreeAndBinaryTree/DS_Doc_4_1_树的性质',
                '/DataStructure/DS_4_TreeAndBinaryTree/DS_Doc_4_2_二叉树',
                '/DataStructure/DS_4_TreeAndBinaryTree/DS_Doc_4_3_二叉树的性质',
                '/DataStructure/DS_4_TreeAndBinaryTree/DS_Doc_4_4_二叉树的存储结构',
                '/DataStructure/DS_4_TreeAndBinaryTree/DS_Doc_4_5_二叉树的遍历',
                '/DataStructure/DS_4_TreeAndBinaryTree/DS_Doc_4_6_二叉树的构造',
                '/DataStructure/DS_4_TreeAndBinaryTree/DS_Doc_4_7_线索二叉树',
                '/DataStructure/DS_4_TreeAndBinaryTree/DS_Doc_4_8_二叉树的线索化',
            ]
        },
        {
            title: '六、图',   // 必要的
            path: '/DataStructure/DS_5_Graph/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '七、搜索',   // 必要的
            path: '/DataStructure/DS_6_Search/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '八、排序',   // 必要的
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
        {
            title: '一、计算机系统概述',   // 必要的
            path: '/ComputerOrganization/CO_0_Introduction/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/ComputerOrganization/CO_0_Introduction/CO_0_0_计算机系统概述'
            ]
        },
        {
            title: '二、数据的表示和运算',   // 必要的
            path: '/ComputerOrganization/CO_1_Data/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                // '/ComputerNetwork/CO_0_Introduction/CO_0_0_计算机系统概述'
            ]
        },
        {
            title: '三、存储器层次结构',   // 必要的
            path: '/ComputerOrganization/CO_2_Memory/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                // '/ComputerNetwork/CO_0_Introduction/CO_0_0_计算机系统概述'
            ]
        },
        {
            title: '四、指令系统',   // 必要的
            path: '/ComputerOrganization/CO_3_CommandSystem/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                // '/ComputerNetwork/CO_0_Introduction/CO_0_0_计算机系统概述'
            ]
        },
        {
            title: '五、中央处理器',   // 必要的
            path: '/ComputerOrganization/CO_4_CPU/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                // '/ComputerNetwork/CO_0_Introduction/CO_0_0_计算机系统概述'
            ]
        },
        {
            title: '六、总线',   // 必要的
            path: '/ComputerOrganization/CO_5_Bus/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                // '/ComputerNetwork/CO_0_Introduction/CO_0_0_计算机系统概述'
            ]
        },
        {
            title: '七、输入/输出系统',   // 必要的
            path: '/ComputerOrganization/CO_6_IO/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                // '/ComputerNetwork/CO_0_Introduction/CO_0_0_计算机系统概述'
            ]
        },
        {
            title: '八、非统考知识点补充',   // 必要的
            path: '/ComputerOrganization/CO_7_Other/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                // '/ComputerNetwork/CO_0_Introduction/CO_0_0_计算机系统概述'
            ]
        }

    ]
}

function getComputerNetworkSidebar() {
    return [
        '/ComputerNetwork/',
        {
            title: '一、计算机网络体系结构',   // 必要的
            path: '/ComputerNetwork/CN_1_概述/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '二、物理层',   // 必要的
            path: '/ComputerNetwork/CN_2_物理层/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '三、数据链路层',   // 必要的
            path: '/ComputerNetwork/CN_3_数据链路层/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '四、网络层',   // 必要的
            path: '/ComputerNetwork/CN_4_网络层/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '五、传输层',   // 必要的
            path: '/ComputerNetwork/CN_5_传输层/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '六、应用层',   // 必要的
            path: '/ComputerNetwork/CN_6_应用层/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '七、其他知识补充',   // 必要的
            path: '/ComputerNetwork/CN_7_补充/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        }
    ]
}

function getOperatingSystemSidebar() {
    return [
        '/OperatingSystem/',
        {
            title: '一、绪论',   // 必要的
            path: '/OperatingSystem/OS_1_绪论/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '二、进程管理',   // 必要的
            path: '/OperatingSystem/OS_2_进程管理/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '三、内存管理',   // 必要的
            path: '/OperatingSystem/OS_3_内存管理/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '四、设备管理',   // 必要的
            path: '/OperatingSystem/OS_4_设备管理/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '五、文件管理',   // 必要的
            path: '/OperatingSystem/OS_5_文件管理/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '六、补充',   // 必要的
            path: '/OperatingSystem/OS_6_补充/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        }
    ]
}