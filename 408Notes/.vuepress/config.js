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
            { text: '计算机组成原理', link: '/计算机组成原理/' },
            { text: '计算机网络', link: '/计算机网络/' },
            { text: '操作系统', link: '/操作系统/' },
            { text: '数据结构（新）', link: '/数据结构/' },
            { text: '留言板', link: '/contact' },
            { text: '个人博客', link: 'https://kimyang.cn' },
            // {text: 'GitHub', link: 'https://github.com/KimYangOfCat/2021-CSPostgraduate-408', target: '_blank'},
        ],
        sidebar:
        {
            '/DataStructure/': getDataStructureSidebar(),
            '/数据结构/': getDataStructureSidebar1(),
            '/计算机组成原理/': getComputerOrganizationSidebar(),
            '/计算机网络/': getComputerNetworkSidebar(),
            '/操作系统/': getOperatingSystemSidebar(),
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
    plugins: [
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "有新的内容更新啦！",
                buttonText: "更新"
            }
        }],
        ['@vssue/vuepress-plugin-vssue', {
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
        }],
        [
            //图片放大插件 先安装在配置， npm install @vuepress\plugin-medium-zoom --save
            '@vuepress/medium-zoom',
            {
                selector: '.page img',
                delay: 1000,
                options: {
                    margin: 24,
                    background: 'rgba(25,18,25,0.9)',
                    scrollOffset: 40
                }
            }
        ],
        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
            tip: {
                content: "复制成功!"
            }
        }],
    ]
}
function getDataStructureSidebar1() {
    return [
        '/数据结构/',
        {
            title: '一、绪论',   // 必要的
            path: '/数据结构/DS_1_概述/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '二、线性表',   // 必要的
            path: '/数据结构/DS_2_线性表/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '三、栈和队列',   // 必要的
            path: '/数据结构/DS_3_栈和队列/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '四、串',   // 必要的
            path: '/数据结构/DS_4_串/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '五、数组、矩阵和广义表',   // 必要的
            path: '/数据结构/DS_5_数组矩阵与广义表/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '六、树与二叉树',   // 必要的
            path: '/数据结构/DS_6_树与二叉树/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '七、图',   // 必要的
            path: '/数据结构/DS_7_图/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '八、排序',   // 必要的
            path: '/数据结构/DS_8_排序/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
        {
            title: '九、查找',   // 必要的
            path: '/数据结构/DS_9_查找/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        },
    ]
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
        '/计算机组成原理/',
        {
            title: '一、计算机系统概述',   // 必要的
            path: '/计算机组成原理/CO_1_概述/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/计算机组成原理/CO_1_概述/CO_1_0_计算机系统概述',
                '/计算机组成原理/CO_1_概述/CO_1_1_计算机发展历程',
                '/计算机组成原理/CO_1_概述/CO_1_2_计算机系统层次结构',
                '/计算机组成原理/CO_1_概述/CO_1_3_计算机性能指标',
                '/计算机组成原理/CO_1_概述/CO_1_4_辅助知识点',
            ]
        },
        {
            title: '二、数据的表示和运算',   // 必要的
            path: '/计算机组成原理/CO_2_数据/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/计算机组成原理/CO_2_数据/CO_2_1_数制与编码',
                '/计算机组成原理/CO_2_数据/CO_2_2_定点数的表示和运算',
                '/计算机组成原理/CO_2_数据/CO_2_3_浮点数的表示和运算',
                '/计算机组成原理/CO_2_数据/CO_2_4_算数逻辑单元',
            ]
        },
        {
            title: '三、存储器层次结构',   // 必要的
            path: '/计算机组成原理/CO_3_存储器/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/计算机组成原理/CO_3_存储器/CO_3_1_存储器的基本概念',
                '/计算机组成原理/CO_3_存储器/CO_3_2_存储器的层次化结构',
                '/计算机组成原理/CO_3_存储器/CO_3_3_半导体随机存取存储器',
                '/计算机组成原理/CO_3_存储器/CO_3_4_主存储器与CPU的链接',
                '/计算机组成原理/CO_3_存储器/CO_3_5_双口RAM和多模块存储器',
                '/计算机组成原理/CO_3_存储器/CO_3_6_Cache',
                '/计算机组成原理/CO_3_存储器/CO_3_7_虚拟存储器',
                '/计算机组成原理/CO_3_存储器/CO_3_8_外存储器',
            ]
        },
        {
            title: '四、指令系统',   // 必要的
            path: '/计算机组成原理/CO_4_指令系统/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/计算机组成原理/CO_4_指令系统/CO_4_1_指令格式',
                '/计算机组成原理/CO_4_指令系统/CO_4_2_指令的寻址方式',
                '/计算机组成原理/CO_4_指令系统/CO_4_3_CISC和RISC的基本概念',
            ]
        },
        {
            title: '五、中央处理器',   // 必要的
            path: '/计算机组成原理/CO_5_CPU/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/计算机组成原理/CO_5_CPU/CO_5_1_CPU的功能和基本结构',
                '/计算机组成原理/CO_5_CPU/CO_5_2_指令执行过程',
                '/计算机组成原理/CO_5_CPU/CO_5_3_数据通路的功能和基本结构',
                '/计算机组成原理/CO_5_CPU/CO_5_4_控制器的功能和工作原理',
                '/计算机组成原理/CO_5_CPU/CO_5_5_指令流水线',
                '/计算机组成原理/CO_5_CPU/CO_5_6_中断系统',
            ]
        },
        {
            title: '六、总线',   // 必要的
            path: '/计算机组成原理/CO_6_总线/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/计算机组成原理/CO_6_总线/CO_6_1_总线概述',
                '/计算机组成原理/CO_6_总线/CO_6_2_总线仲裁',
                '/计算机组成原理/CO_6_总线/CO_6_3_总线操作和定时',
                '/计算机组成原理/CO_6_总线/CO_6_4_总线标准',
            ]
        },
        {
            title: '七、输入/输出系统',   // 必要的
            path: '/计算机组成原理/CO_7_IO/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/计算机组成原理/CO_7_IO/CO_7_1_IO系统基本概念',
                '/计算机组成原理/CO_7_IO/CO_7_2_外部设备',
                '/计算机组成原理/CO_7_IO/CO_7_3_IO接口',
                '/计算机组成原理/CO_7_IO/CO_7_4_IO方式',
            ]
        },
        {
            title: '八、非统考知识点补充',   // 必要的
            path: '/计算机组成原理/CO_8_Other/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        }

    ]
}

function getComputerNetworkSidebar() {
    return [
        '/计算机网络/',
        {
            title: '一、计算机网络体系结构',   // 必要的
            path: '/计算机网络/CN_1_概述/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/计算机网络/CN_1_概述/CN_1_1_概述',
                '/计算机网络/CN_1_概述/CN_1_2_体系结构与参考模型',
            ]
        },
        {
            title: '二、物理层',   // 必要的
            path: '/计算机网络/CN_2_物理层/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/计算机网络/CN_2_物理层/CN_2_1_通信基础',
                '/计算机网络/CN_2_物理层/CN_2_2_传输介质',
                '/计算机网络/CN_2_物理层/CN_2_3_物理层设备',
            ]
        },
        {
            title: '三、数据链路层',   // 必要的
            path: '/计算机网络/CN_3_数据链路层/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/计算机网络/CN_3_数据链路层/CN_3_1_数据链路层功能与组帧',
                '/计算机网络/CN_3_数据链路层/CN_3_2_差错控制',
                '/计算机网络/CN_3_数据链路层/CN_3_3_流量控制与可靠传输机制',
                '/计算机网络/CN_3_数据链路层/CN_3_4_介质访问控制',
                '/计算机网络/CN_3_数据链路层/CN_3_5_局域网',
                '/计算机网络/CN_3_数据链路层/CN_3_6_广域网',
                '/计算机网络/CN_3_数据链路层/CN_3_7_链路层设备',
            ]
        },
        {
            title: '四、网络层',   // 必要的
            path: '/计算机网络/CN_4_网络层/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/计算机网络/CN_4_网络层/CN_4_1_网络层功能',
                '/计算机网络/CN_4_网络层/CN_4_2_路由算法',
                '/计算机网络/CN_4_网络层/CN_4_3_IPV4',
                '/计算机网络/CN_4_网络层/CN_4_4_IPV6',
                '/计算机网络/CN_4_网络层/CN_4_5_路由协议',
                '/计算机网络/CN_4_网络层/CN_4_6_IP组播',
                '/计算机网络/CN_4_网络层/CN_4_7_移动IP',
                '/计算机网络/CN_4_网络层/CN_4_8_网络层设备',
            ]
        },
        {
            title: '五、传输层',   // 必要的
            path: '/计算机网络/CN_5_传输层/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/计算机网络/CN_5_传输层/CN_5_1_传输层服务',
                '/计算机网络/CN_5_传输层/CN_5_2_UDP',
                '/计算机网络/CN_5_传输层/CN_5_3_TCP',
            ]
        },
        {
            title: '六、应用层',   // 必要的
            path: '/计算机网络/CN_6_应用层/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/计算机网络/CN_6_应用层/CN_6_1_网络应用模型',
                '/计算机网络/CN_6_应用层/CN_6_2_DNS系统',
                '/计算机网络/CN_6_应用层/CN_6_3_FTP',
                '/计算机网络/CN_6_应用层/CN_6_4_电子邮件',
                '/计算机网络/CN_6_应用层/CN_6_5_WWW',
            ]
        },
        {
            title: '七、其他知识补充',   // 必要的
            path: '/计算机网络/CN_7_补充/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        }
    ]
}

function getOperatingSystemSidebar() {
    return [
        '/操作系统/',
        {
            title: '一、绪论',   // 必要的
            path: '/操作系统/OS_1_绪论/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/操作系统/OS_1_绪论/OS_1_1_基本概念',
                '/操作系统/OS_1_绪论/OS_1_2_发展与分类',
                '/操作系统/OS_1_绪论/OS_1_3_运行环境',
                '/操作系统/OS_1_绪论/OS_1_4_体系结构',
            ]
        },
        {
            title: '二、进程管理',   // 必要的
            path: '/操作系统/OS_2_进程管理/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/操作系统/OS_2_进程管理/OS_2_1_进程与线程',
                '/操作系统/OS_2_进程管理/OS_2_2_处理器调度',
                '/操作系统/OS_2_进程管理/OS_2_3_同步与互斥',
                '/操作系统/OS_2_进程管理/OS_2_4_死锁',
            ]
        },
        {
            title: '三、内存管理',   // 必要的
            path: '/操作系统/OS_3_内存管理/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/操作系统/OS_3_内存管理/OS_3_1_内存管理基础',
                '/操作系统/OS_3_内存管理/OS_3_2_虚拟内存管理',
                '/操作系统/OS_3_内存管理/OS_3_3_对比',

            ]
        },
        {
            title: '四、文件管理',   // 必要的
            path: '/操作系统/OS_4_文件管理/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/操作系统/OS_4_文件管理/OS_4_1_文件系统基础',
                '/操作系统/OS_4_文件管理/OS_4_2_文件系统实现',
                '/操作系统/OS_4_文件管理/OS_4_3_磁盘组织与管理',
            ]
        },
        {
            title: '五、设备管理',   // 必要的
            path: '/操作系统/OS_5_设备管理/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/操作系统/OS_5_设备管理/OS_5_1_IO管理概述',
                '/操作系统/OS_5_设备管理/OS_5_2_IO核心子系统',
            ]
        },
        {
            title: '六、补充',   // 必要的
            path: '/操作系统/OS_6_补充/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        }
    ]
}