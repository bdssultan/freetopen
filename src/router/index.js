import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import Login from '../components/user/Login'
import Constants from '../constants'

Vue.use(VueRouter)

const OAuth2RedirectHandler = (to, from) => {
   console.log(to);
   console.log(from);
   window.location.href = "/"
    return "/";
  };

export default new VueRouter({
    mode: "history", // Use browser history
    routes: [
      {
        path: "/",
        name: "App",
        component: App
      },
      {
        path: "/Login",
        name: "login",
        component:Login
      },
      {
        path: Constants.OAUTH2_REDIRECT_ROUTE,
        name: "OAuth2RedirectHandler",
        redirect:OAuth2RedirectHandler
      }
    ]  
  });