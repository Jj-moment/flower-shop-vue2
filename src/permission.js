import router from "@/route";
import cookies from "@/utils/cookies";

/*路由守卫*/
router.beforeEach((to, from, next) => {
    /*判断是否存在token*/
    if (!cookies.getToken() && to.path!=='/') {
        next({name: 'login'})
    }
    next()
})