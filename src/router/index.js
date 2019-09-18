import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import PhoneLogin from "../components/user/login/PhoneLogin";
import UserNameLogin from "../components/user/login/UserNameLogin";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user/login',
      name: 'Login',
      component: Login,
      children: [
        {
          path: '/user/login/phone',
          name: 'PhoneLogin',
          component: PhoneLogin
        },
        {
          path: '/user/login/username',
          name: 'UserNameLogin',
          component: UserNameLogin
        }
      ]
    },
    {
      path: '/user/register',
      name: 'Register',
      component: Register
    }
  ]
})
