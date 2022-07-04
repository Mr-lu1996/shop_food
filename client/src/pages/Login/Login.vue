<template>
  <div class="login">
    <div>
      <!-- 顶部返回图标 -->
      <!-- <router-link to="/profile"> -->
      <span class="iconfont icon-changyongicon-1 back" @click="$router.back()"></span>
      <!-- </router-link>  -->
    </div>
    <div class="login_header">
      <h2>南山外卖</h2>
      <div class="login_style">
        <span :class="{onMsg}" @click="click_msg">短信登录</span>
        <span :class="{onPwd}" @click="click_pwd">密码登录</span>
      </div>
    </div>
    <div class="login_content">
      <form action="">
        <!-- 短信登录 -->
        <div class="login_message" v-if="onMsg">
          <div>
            <input type="tel" maxlength="11" placeholder="请输入手机号"/>
            <button class="getCode_btn" >获取验证码</button>  
          </div>                         
          <input type="text" maxlength="6" placeholder="验证码"/> 
          <p class="msg">
            <span>温馨提示：未注册南山外卖账号的手机号，登录时自动将自动注册，且代表已同意</span> 
            <span><a>《用户服务协议》</a></span>
          </p>                 
        </div>
        <!-- 密码登录 -->
        <div class="login_password" v-else>
          <div>
            <input type="text" placeholder="手机/邮箱/用户名"/>  
          </div>  
          <div>
            <input type="password" placeholder="密码"/>
          </div>                       
           <div>
             <input type="text" placeholder="验证码"/>
             <img class="code_img" src="./imgs/code_img.jpeg" alt="">
           </div>
                       
        </div>
        
        <div >
          <button class="login_btn">登录</button>
          <button class="about_btn">关于我们</button>
        </div>
      </form>     
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        onMsg: true,
        onPwd: false,
      }
    },
    methods: {
      click_msg() {
        this.onMsg = true
        this.onPwd = false
      },
      click_pwd() {
        this.onMsg = false
        this.onPwd = true
      },

    }
  }
</script>

<style scoped>
  .login {
    width: 100%;
  }
  /* 顶部返回图标 */
  .back {
    position: absolute;
    top: 5px;
    left: 5px;
    color: black;
  }
  /* 登录标题 */
  .login_header h2{
    color: rgb(51, 207, 51);
    font-weight: bold;
    margin-bottom: 20px;
  }
  /*  */
  .login_style {
    margin-bottom: 20px;
  }
  .login_style span {
    margin-left: 20px
  }
  .onMsg, .onPwd {
    color: rgb(51, 207, 51);
  }
  /* 登陆content框 */
  .login_content {
    margin-top: 10px;
  }
  form {
    width: 70%;
    margin: 0 auto;
  }
  .login_message input,
  .login_password input {
    width: 240px;
    height: 30px;
    margin-bottom: 20px;
  }
  .login_password .code_img {
    position: absolute;
    width: 90px;
    height: 32px;
    right: 65px;
  }
  .getCode_btn{
    position: absolute;
    top: 156px;
    right: 65px;
    background-color: #fff;
    border: none;   
    outline: none;
  }
  .msg {
    font-size: 12px;
    color: #C2B6B5;
  }
  .login_btn,.about_btn {
    width: 100%;
    line-height: 40px;
    border-radius: 5px;
    margin-top: 10px;
    background-color: rgb(51, 207, 51);
  }
  .about_btn {
    background-color: transparent;
    border: none;
  }
</style>