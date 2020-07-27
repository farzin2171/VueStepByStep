import Vue from 'vue'
import Router from 'vue-router'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Error404 from './Pages/404'




Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/profile/:name?',
            name:'profile',
            component:Profile
        },
        {
            path:'*',
            name:'404',
            component:Error404
        }
    ]
})