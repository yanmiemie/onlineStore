import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import User from "./views/User.vue";

import Profile from "./views/Profile.vue";
// import Orders from "./views/Orders.vue";
// import MProducts from "./views/MProducts.vue";

import {fb} from './firebase'

Vue.use(Router);

const router =  new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
    {
         path: "/home",
         name: "home",
         component: Home
    },
    {
      path: "/user",
      name: "user",
      component: User,
      meta: { requiresAuth: true }, // 登入前須經過驗證
      // User.vue的子分頁
      children:[
        {
          path: "profile",
          name: "profile",
          component: Profile
        },
        // {
        //   path: "orders",
        //   name: "orders",
        //   component: Orders
        // },
        // {
        //   path: "Mproducts",
        //   name: "Mproducts",
        //   component: MProducts
        // },
      ]
    },
    // {
    //   path: "/wordList",
    //   name: "wordList",
    //   component: () =>
    //     import("./views/WordList.vue")
    // },
    {
      path: "/copyMsg",
      name: "copyMsg",
      component: () =>
        import("./views/copyMsg.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import("./views/About.vue")
    },
    {
      path: "/products",
      name: "products",
      component: () =>
        import("./views/Products.vue")
    },
    {
      path: "/stores",
      name: "stores",
      component: () =>
        import("./views/Stores.vue")
    },
    
    {
      path: "/news",
      name: "news",
      component: () =>
        import("./views/News.vue")
    },
    // {
    //   path: "/",
    //   name: "todoList",
    //   component: () =>
    //     import("./views/todoList.vue")
    // },
    {
      path: "/",
      name: "todoList",
      component: () =>
        import("./views/todoList.vue")
    },
    {
      path: "/todoList",
      name: "todoList",
      component: () =>
        import("./views/todoList.vue")
    },
    {
      path: "/imgList",
      name: "imgList",
      component: () =>
        import("./views/imgList.vue")
    },
    // {
    //   path: "/UpLoadFile",
    //   name: "UpLoadFile",
    //   component: () =>
    //     import("./views/UpLoadFile.vue")
    // },
    {
      path: "/FileZone",
      name: "FileZone",
      component: () =>
        import("./views/FileZone.vue")
    },  
    {
        path: "/FileNameRule",
        name: "FileNameRule",
        component: () =>
          import("./views/FileNameRule.vue")
      },
      {
        path: "/UpLoadFile",
        name: "UpLoadFile",
        component: () =>
          import("./views/UpLoadFile.vue")
      }, 
      {
        path: "/DateList",
        name: "DateList",
        component: () =>
          import("./views/DateList.vue")
      },

 
    // {
    //   path: "/UpLoadFile",
    //   name: "UpLoadFile",
    //   component: () =>
    //     import("./views/FileZone.vue"),
    //   meta: { requiresAuth: true }, // 登入前須經過驗證
    //   // User.vue的子分頁
    //   children:[
    //     {
    //       path: "/FileNameRule",
    //       name: "FileNameRule",
    //       component: () =>
    //         import("./views/FileNameRule.vue")
    //     },
    //     {
    //       path: "/UpLoadFile",
    //       name: "UpLoadFile",
    //       component: () =>
    //         import("./views/UpLoadFile.vue")
    //     }, 
 
        // {
        //   path: "orders",
        //   name: "orders",
        //   component: Orders
        // },
        // {
        //   path: "Mproducts",
        //   name: "Mproducts",
        //   component: MProducts
        // },
    //   ]
    // },
  ]
});

//需經過驗證才可登入
router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  // 未經過驗證則到首頁
  if (requiresAuth && !currentUser) {
      next('/')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

export default router;