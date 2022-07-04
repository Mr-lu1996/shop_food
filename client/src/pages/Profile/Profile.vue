<template>
  <div class="profile">
    <HeaderTop title="我的"/>
    <!-- 个人登陆栏 -->
    <div class="profile_login">
      <img class="profile_img" src="./imgs/favicon.png" alt="">
      <div class="login_text_style">
        <router-link to="/login">
          <span>登陆/注册</span>
          <div>
            <span class="iconfont icon-shouji"></span>
            <span>暂无绑定手机号</span>
          </div>
        </router-link>     
      </div>
      <div class="login_text_style">
        <span class="iconfont icon-changyongicon-"></span>
      </div>
    </div>
    <!-- 个人信息栏(余额、优惠券、积分) -->
    <div class="profile_info">
      <div class="profile_info_little">
        <div>
          <span class="remainer_num">999</span>
          <span>元</span>
        </div>
        <div>我的余额</div>
      </div>
      <div class="profile_info_little">
        <div>
          <span class="discount_num">999</span>
          <span>个</span>
        </div>
        <div>我的优惠</div>      
      </div>
      <div class="profile_info_little">
        <div>
          <span class="point_num">999</span>
          <span>分</span>
        </div>
        <div>我的积分</div>      
      </div>
    </div>
    <!-- 中间菜单栏 -->
    <ul class="center_menu">
      <li>
        <a href="javascript:;">
          <span class="iconfont icon-wodedingdan"></span>
          <span>我的订单</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <span class="iconfont icon-jifen"></span>
          <span>积分商城</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <span class="iconfont icon-huiyuan"></span>
          <span>会员</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue';
  export default {
    name: "Profile",
    components: { HeaderTop },
    methods: {
      
    }
}
</script>

<style scoped>
  /* 用户登录容器 */
  .profile_login {
    width: 100%;
    height: 100px;
    display: flex;
    margin-top: -20px;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(51, 207, 51);
    border-top: 1px solid rgba(213, 231, 214, 0.92);
  }

  /* 用户头像 */
  .profile_img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  /* 登陆字体样式 */
  .login_text_style {
    font-size: 16px;
    color: #fff;
  }
  .login_text_style a{
    color: #fff;
  }
  /* 个人信息栏(余额、优惠券、积分) */
  .profile_info {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(213, 231, 214, 0.92);
  }

  .profile_info_little {
    width: 120px;
    height: 80px;
    padding-top: 20px;
    border-right: 1px solid rgba(213, 231, 214, 0.92);
  }
  /* 数值样式(余额、优惠券、积分) */
  .remainer_num {
    color:orange;
    font-size: 20px;
    font-weight: bold;
  }
  .discount_num {
    color:red;
    font-size: 20px;
    font-weight: bold;
  }
  .point_num {
    color:greenyellow;
    font-size: 20px;
    font-weight: bold;
  }
  /* 中间菜单栏 */
  .center_menu li{
    width: 100%;
    line-height: 30px;
    text-align: left;
    border-bottom: 1px solid rgba(236, 243, 236, 0.92);
  }
</style>