<script>
export default {
  name: 'Login',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
img{
  width: 90%;
  height: 90%;
}

  .login-fc{
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .login-fc-photo{
    width: 70%;
  }

  .login-fc-login{
    margin-top: 5%;
    width: 30%;
    align-content: center;
    border: 90px brown;
    border-radius: 0px;
  }

  /*登录框设计*/
  .login-fc-box{
    width: 70%;
    height: 57%;
    margin-top: 5%;
    background-color: #E9EEF3;
    border: 3px solid #B3C0D1;
    border-radius: 6%;
  }

  span{
    font-size: 30px;
    color: deepskyblue;
  }

  .login-fc-box-sel{
    margin-top: 5%;
    margin-left: 5%;
    font-size: 17px;
    display: flex;
    justify-content: left;
  }

  .el-header{
    margin-top: 5px;
  }

  .login-fc-header{
    text-align: right;
    margin-right: 5%;
  }
</style>

<template>
    <div>
      <div class="login-fc-header">
        <el-link><router-link to="/">返回首页</router-link></el-link>
      </div>
      <el-container>
        <el-header><span>LKD用户登录</span></el-header>
        <el-main>
          <div class="login-fc">
            <!--      宣传图片-->
            <div class="login-fc-photo">
              <img src="../../img/login/login.jpg">
            </div>
            <!--登录组件-->
            <div class="login-fc-login">
              <div class="login-fc-box">
                <div class="login-fc-box-sel">
                  <router-link to="/user/login/phone">手机登录</router-link>/
                  <router-link to="/user/login/username">用户名登录</router-link>
                </div>
                <router-view/>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
</template>
