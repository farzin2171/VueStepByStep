import Vue from 'vue'
import Router from 'vue-router'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Error404 from './Pages/404'
import Stats from './Pages/Stats'





Vue.use(Router)

const router= new Router({
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
            component:Profile,
            beforeEnter(to,from,next){
              console.log("entering Profile");
              console.log(to);
              console.log(from);  
              next();
            },
            meta:{
              auth:true
            },
            children:[
                {
                    path:'stats',
                    component:Stats
                }
            ]
        },
        {
            path:'*',
            name:'404',
            component:Error404
        }
    ]
})

router.beforeEach((to,from,next)=>{
   if(to.matched.some(record=>record.meta.auth))
   {
       //Check if it is autonticated 
       let authenticated=true;
       if(authenticated){
           console.log('user authenticated');
           next();
       }
       else
       {
           //redirct to login
       }

   }
   next();
});   

export default router;
