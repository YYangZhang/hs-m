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
    {
        // 新闻详情页面
        path: '/newsDetail',
        name: 'newsDetail',
        component: () => import('@/views/publicService/newsDetail')
    },
    {
        // 就诊人列表
        path: '/patientList',
        name: 'patientList',
        component: () => import('@/views/patient/patientList')
    },
    {
        // 新增、编辑就诊人
        path: '/patientEdit',
        name: 'patientEdit',
        component: () => import('@/views/patient/patientEdit')
    },
    {
        // 选择就诊人列表
        path: '/patientSelect',
        name: 'patientSelect',
        meta: {
            title: "选择就诊人"
        },
        component: () => import('@/views/patient/patientSelect')
    },
    {
        // 预约挂号页面
        path: '/orderRegister1',
        name: 'orderRegister1',
        meta: {
            title: "预约挂号"
        },
        component: () => import('@/views/outPatientService/orderRegister/orderRegister1')
    },
    {
        // 预约挂号页面
        path: '/orderRegister2',
        name: 'orderRegister2',
        meta: {
            title: "预约挂号"
        },
        component: () => import('@/views/outPatientService/orderRegister/orderRegister2')
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