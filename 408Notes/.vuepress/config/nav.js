module.exports=[
    { text: '首页', link: '/', icon: 'reco-home' },
    {
        text: '数据结构',
        items: [
            // { text: '数据结构笔记', link: '/数据结构/', icon: 'reco-document' },
            // {text:'数据结构错题集',link:'/数据结构错题集/'},
            { text: "数据结构笔记(旧版)", link: '/DataStructure/', icon: 'reco-document' },
        ],
        icon: 'reco-category'
    },
    // { text: '计算机组成原理', link: '/计算机组成原理/', icon: 'reco-category' },
    // { text: '计算机网络', link: '/计算机网络/', icon: 'reco-category' },
    {
        text: '操作系统',
        items: [
            { text: '操作系统笔记', link: '/操作系统/', icon: 'reco-document' },
            { text: '操作系统错题集', link: '/操作系统错题集/', icon: 'reco-suggestion' },
        ],
        icon: 'reco-category'
    },
    // { text: '留言板', link: '/contact', icon: "reco-suggestion" },
    {
        text: '其他',
        items: [
            { text: '赞赏', link: '/sponsor', icon: 'reco-three' },
            { text: 'RSS', link: 'https://408.kimyang.cn/rss.xml', icon: 'reco-rss' },
            {
                text: '联系我', items: [
                    { text: '微信公众号', link: 'https://mp.weixin.qq.com/s/kSfjVbzlP46oB-Ux-MPWzA', icon: 'reco-wechat' },
                    { text: '个人博客', link: 'https://kimyang.cn', icon: 'reco-blog' },
                    { text: 'GitHub', link: 'https://github.com/KimYangOfCat', icon: 'reco-github' },
                    { text: 'BiliBili', link: 'https://space.bilibili.com/240836280', icon: 'reco-bilibili' },
                    { text: 'Email', link: 'mailto:Kim.Yang.HG@outlook.com', icon: 'reco-mail' },
                ]
            },
        ],
        icon: 'reco-other'
    },

]