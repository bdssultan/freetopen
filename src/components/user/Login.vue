<template>
  <div class="login-container">
    <div class="login-content">
      <h1 class="login-title">Login to SpringSocial</h1>
      <div class="social-login">
        <a class="btn btn-block social-btn google" @click="login">
          <img src="../img/google-logo.png" alt="Google" /> Log in with Google
        </a>
        <a class="btn btn-block social-btn facebook" :href="consts.FACEBOOK_AUTH_URL">
          <img src="../img/fb-logo.png" alt="Facebook" /> Log in with Facebook
        </a>
        <a class="btn btn-block social-btn github" :href="consts.GITHUB_AUTH_URL">
          <img src="../img/github-logo.png" alt="Github" /> Log in with Github
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Constants from "../../constants";
import Service from "../../service";
export default {
  name: "Login",
  data: () => {
    return {
      activeUser: null,
      consts: Constants
    };
  },

  methods: {
    login: function() {
      Service.loginSocial(Constants.GOOGLE_AUTH_URL)
        .then(response => {
          localStorage.setItem(
            Constants.ACCESS_TOKEN,
            response.data.accessToken
          );
          console.log(response);
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-container {
  text-align: center;
}

.login-content {
  background: #fff;
  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);
  border-radius: 2px;
  width: 500px;
  display: inline-block;
  margin-top: 30px;
  vertical-align: middle;
  position: relative;
  padding: 35px;
}

.signup-link {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}

.login-title {
  font-size: 1.5em;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 30px;
  color: rgba(0, 0, 0, 0.65);
}

.social-btn {
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 16px;
}

.social-btn img {
  height: 32px;
  float: left;
  margin-top: 10px;
}

.social-btn.google {
  margin-top: 7px;
}

.social-btn.facebook img {
  height: 24px;
  margin-left: 3px;
}

.social-btn.github img {
  height: 24px;
  margin-left: 3px;
}
</style>
