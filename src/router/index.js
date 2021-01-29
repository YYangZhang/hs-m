import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        // 权限获取
        path: '/',
        name: 'auth',
        component: () => import('@/views/auth')
    },
    {
        // menu页面
        path: '/menu',
        name: 'menu',
        meta: {
            title: "首页"
        },
        component: () => import('@/views/menu'),
        children: [{
                // service页面
                path: '',
                name: 'service',
                meta: {
                    title: "医疗服务"
                },
                component: () => import('@/views/service/index'),
            },
            {
                // info页面
                path: '/info',
                name: 'info',
                meta: {
                    title: "医院信息"
                },
                component: () => import('@/views/info/index'),
            },
            {
                // user页面
                path: '/user',
                name: 'user',
                meta: {
                    title: "个人中心"
                },
                component: () => import('@/views/user/index'),
            }
        ]
    },
    {
        // 新闻列表页面
        path: '/newsList',
        name: 'newsList',
        meta: {
            title: "新闻列表"
        },
        component: () => import('@/views/publicService/newsList')
    },
]

const router = new VueRouter({
    routes
})


router.beforeEach((to, from, next) => { //beforeEach是router的钩子函数，在进入路由前执行
    if (to.meta.title) { //判断是否有标题
        document.title = to.meta.title
    }
    next() //执行进入路由，如果不写就不会进入目标页
})

export default router