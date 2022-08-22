import router from './router'

router.beforeEach((to, from, next) => {
    if (to.path == '/') {
        next({ name: "Index" })
    }
    else if (to.path != from.path) {
        next()
    }
})