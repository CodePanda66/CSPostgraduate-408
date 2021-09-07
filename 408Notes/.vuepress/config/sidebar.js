module.exports={
    '/DataStructure/': getDataStructureSidebar(),
    '/数据结构/': getDataStructureSidebar1(),
    '/计算机组成原理/': getComputerOrganizationSidebar(),
    '/计算机网络/': getComputerNetworkSidebar(),
    '/操作系统/': getOperatingSystemSidebar(),
    '/操作系统错题集/': getOperatingSystemWrongSetSidebar(),
    // fallback
    '/': [
        // '',        /* / */
        // 'contact', /* /contact.html */
    ]
}

function getDataStructureSidebar1() {
    return [
        // '/数据结构/',
        {
            title: '一、绪论',   // 必要的
            // path: '/数据结构/DS_1_概述/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/数据结构/DS_1_概述/DS-1-1-代码书写规范以及语言基础',
                '/数据结构/DS_1_概述/DS-1-2-算法时空复杂度分析',
                '/数据结构/DS_1_概述/DS-1-3-数据结构和算法基本概念',
            ]
        },
        {
            title: '二、线性表',   // 必要的
            // path: '/数据结构/DS_2_线性表/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/数据结构/DS_2_线性表/DS-2-1-基本概念与实现',
                '/数据结构/DS_2_线性表/DS-2-1-结构体定义和基本操作',
            ]
        },
        {
            title: '三、栈和队列',   // 必要的
            // path: '/数据结构/DS_3_栈和队列/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/数据结构/DS_3_栈和队列/DS-3-1-栈和队列的基本概念',
                '/数据结构/DS_3_栈和队列/DS-3-2-栈和队列的存储结构',
                '/数据结构/DS_3_栈和队列/DS-3-3-抽象数据类型',
            ]
        },
        {
            title: '四、串',   // 必要的
            path: '/数据结构/DS_4_串/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/数据结构/DS_4_串/DS-4-1-串数据类型的定义',
                '/数据结构/DS_4_串/DS-4-2-串的模式匹配算法',
            ]
        },
        {
            title: '五、数组、矩阵和广义表',   // 必要的
            // path: '/数据结构/DS_5_数组矩阵与广义表/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/数据结构/DS_5_数组矩阵与广义表/DS-5-1-数组',
                '/数据结构/DS_5_数组矩阵与广义表/DS-5-2-矩阵的压缩存储',
                '/数据结构/DS_5_数组矩阵与广义表/DS-5-3-广义表',

            ]
        },
        {
            title: '六、树与二叉树',   // 必要的
            // path: '/数据结构/DS_6_树与二叉树/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/数据结构/DS_6_树与二叉树/DS-6-1-树的基本概念',
                '/数据结构/DS_6_树与二叉树/DS-6-2-二叉树',
                '/数据结构/DS_6_树与二叉树/DS-6-3-树和森林与二叉树的互相转换',
                '/数据结构/DS_6_树与二叉树/DS-6-4-树和二叉树的应用',
            ]
        },
        {
            title: '七、图',   // 必要的
            // path: '/数据结构/DS_7_图/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/数据结构/DS_7_图/DS-7-1-图的基本概念',
                '/数据结构/DS_7_图/DS-7-2-图的存储结构',
                '/数据结构/DS_7_图/DS-7-3-图的遍历算法操作',
                '/数据结构/DS_7_图/DS-7-4-最小代价生成树',
                '/数据结构/DS_7_图/DS-7-5-最短路径',
                '/数据结构/DS_7_图/DS-7-6-拓扑排序',
                '/数据结构/DS_7_图/DS-7-7-关键路径',
            ]
        },
        {
            title: '八、排序',   // 必要的
            // path: '/数据结构/DS_8_排序/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/数据结构/DS_8_排序/DS-8-1-排序的基本概念',
                '/数据结构/DS_8_排序/DS-8-2-插入类排序',
                '/数据结构/DS_8_排序/DS-8-3-交换类排序',
                '/数据结构/DS_8_排序/DS-8-4-选择类排序',
                '/数据结构/DS_8_排序/DS-8-5-二路归并排序',
                '/数据结构/DS_8_排序/DS-8-6-基数排序',
                '/数据结构/DS_8_排序/DS-8-7-外部排序',
            ]
        },
        {
            title: '九、查找',   // 必要的
            // path: '/数据结构/DS_9_查找/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/数据结构/DS_9_查找/DS-9-1-查找的基本概念',
                '/数据结构/DS_9_查找/DS-9-2-二叉排序树和平衡二叉树',
                '/数据结构/DS_9_查找/DS-9-3-B-树',
                '/数据结构/DS_9_查找/DS-9-4-散列表',
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
    ]
}

function getComputerOrganizationSidebar() {
    return [
        // '/计算机组成原理/',
        {
            title: '一、计算机系统概述',   // 必要的
            // path: '/计算机组成原理/CO_1_概述/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
            // path: '/计算机组成原理/CO_2_数据/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
            // path: '/计算机组成原理/CO_3_存储器/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
            // path: '/计算机组成原理/CO_4_指令系统/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
            // path: '/计算机组成原理/CO_5_CPU/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
            // path: '/计算机组成原理/CO_6_总线/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
            // path: '/计算机组成原理/CO_7_IO/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
            // path: '/计算机组成原理/CO_8_Other/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        }

    ]
}

function getComputerNetworkSidebar() {
    return [
        // '/计算机网络/',
        {
            title: '一、计算机网络体系结构',   // 必要的
            // path: '/计算机网络/CN_1_概述/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/计算机网络/CN_1_概述/CN_1_1_概述',
                '/计算机网络/CN_1_概述/CN_1_2_体系结构与参考模型',
            ]
        },
        {
            title: '二、物理层',   // 必要的
            // path: '/计算机网络/CN_2_物理层/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
            // path: '/计算机网络/CN_3_数据链路层/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
            // path: '/计算机网络/CN_4_网络层/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
            // path: '/计算机网络/CN_5_传输层/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
            // path: '/计算机网络/CN_6_应用层/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
            // path: '/计算机网络/CN_7_补充/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        }
    ]
}

function getOperatingSystemSidebar() {
    return [
        // '/操作系统/',
        {
            title: '一、绪论',   // 必要的
            // path: '/操作系统/OS_1_绪论/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
            // path: '/操作系统/OS_2_进程管理/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
            // path: '/操作系统/OS_3_内存管理/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
            // path: '/操作系统/OS_4_文件管理/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
            // path: '/操作系统/OS_5_设备管理/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/操作系统/OS_5_设备管理/OS_5_1_IO管理概述',
                '/操作系统/OS_5_设备管理/OS_5_2_IO核心子系统',
            ]
        },
        {
            title: '六、补充',   // 必要的
            // path: '/操作系统/OS_6_补充/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            ]
        }
    ]
}
function getOperatingSystemWrongSetSidebar() {
    return [
        // '/操作系统错题集/',
        // '/操作系统错题集/Err_OS_1_绪论',
        {
            title: '一、绪论',   // 必要的
            // path: '/操作系统错题集/Err_OS_1_绪论/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/操作系统错题集/Err_OS_1_绪论/Err_OS_1_天勤',
            ]
        },
        {
            title: '二、进程管理',   // 必要的
            // path: '/操作系统错题集/Err_OS_1_绪论/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                '/操作系统错题集/Err_OS_2_进程管理/Err_OS_2_天勤',
            ]
        }
    ]
}