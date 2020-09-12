<template>
  <div class="content">
    <div>
      <div class="top-navigation">
        <h1 class="logo">
          <a href="#">网易云音乐</a>
        </h1>
        <ul class="music-navigation">
          <li>
            <router-link to="/">
              <span>发现音乐</span>
              <span class="cor"></span>
            </router-link>
          </li>
          <li>
            <router-link to="/my/">
              <span>我的音乐</span>
              <span class="cor"></span>
            </router-link>
          </li>
          <li>
            <router-link to="/friend">
              <span>朋友</span>
              <span class="cor"></span>
            </router-link>
          </li>
          <li>
            <a src="/store/product">
              <span>商城</span>
            </a>
          </li>
          <li>
            <a src="/nmusician/web/index#">
              <span>音乐人</span>
            </a>
          </li>
          <li>
            <router-link to="/download">
              <span class="a">下载客户端</span>
              <span class="cor"></span>
              <span class="hot"></span>
            </router-link>
          </li>
        </ul>
        <div class="login">
          <a href="#" @click="loginshow">登录</a> 
        </div>
        <div class="author">创作者中心</div>
        <div class="search">
          <span>
            <input type="text" placeholder="音乐/视频/电台/用户">
            <label></label>
          </span>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="loginPage" v-if="saomapage">
      <div class="loginBar">
        <span class="loginFont">登录</span>
        <span class="close iconfont iconguanbi" @click="loginhide"></span>
      </div>
      <div class="saoma" v-if="sm">
        <div class="saomaImg"></div>
        <div class="erweima">
          <p class="saomadenglu">扫码登录</p>
          <div class="erweimaImg">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=932885204,2985382326&fm=26&gp=0.jpg">
            <div>
              <p>二维码失效</p>
              <p>点击刷新</p>
            </div>
          </div>
          <p class="app">
            使用&nbsp;<a href="#/download">网易云音乐APP</a>&nbsp;扫码登录
          </p>  
        </div>
        <p class="loginMode" @click="hide">
          <a href="javascript:;">选择其他登录模式</a>
        </p>
      </div>
      <div v-else class="saoma">
        <div class="ml">
          <div class="tupian"></div>
          <input type="button" class="phoneLogin" value="手机号登录">
          <input type="button" class="registered" value="注册">
        </div>
        <ul class="loginfangshi">
          <li>
            <span></span>
            <a>微信登录</a>
          </li>
          <li>
            <span></span>
            <a>QQ登录</a>
          </li>
          <li>
            <span></span>
            <a>微博登录</a>
          </li>
          <li>
            <span></span>
            <a>网易邮箱账号登录</a>
          </li>
        </ul>
        <div class="agreements">
          <input type="checkbox">
          <label>同意</label>
          <a href="javascript:;">《服务条款》</a>
          <a href="javascript:;">《隐私条款》</a>
          <a href="javascript:;">《儿童隐私条款》</a>
        </div>
        <div class="trianglema" @click="show">

      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sm: true,
      saomapage: false,
    };
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    loginshow () {
      this.saomapage = true;
    },
    loginhide () {
      this.saomapage = false;
    },
    hide () {
      this.sm = false;
    },
    show () {
      this.sm = true;
    }
  }
}

</script>
<style lang='scss' scoped>
.content {
  font-size: 0;
  background: #242424;
  .top-navigation {
    width: 1100px;
    height: 70px;
    margin: auto;
    .logo {
      display: inline-block;
      width: 157px;
      height: 69px;
      box-sizing: content-box;
      padding-right: 20px;
      background: url(./images/topbar.png) 0 0;
      vertical-align: top;
      a {
        text-indent: -99999px;
      }
    }
    .music-navigation {
      display: inline-block;
      vertical-align: top;
      width: 508px;
      height: 100%;
      li {
        display: inline-block;
        height: 100%;
        font-size: 14px;
        text-decoration: top;
        &:hover{
          background: #000;
        }
        a {
          display: inline-block;
          text-decoration: none;
          height: 100%;
          position: relative;
          padding: 0 19px;
          color: #fff;
          span {
            display: block;
            &:first-child {
              height: 70px;
              line-height: 70px;
            }
          }
          // 顶部导航点击相应导航出现三角形
          .cor {
            width: 12px;
            height: 7px;
            position: absolute;
            background: url('./images/topbar.png') -226px 0;
            left: 50%;
            margin-left: -6px;
            top: 64px;
          }
          .hot {
            position: absolute;
            top: 21px;
            left: 100px;
            width: 28px;
            height: 19px;
            background: url('./images/topbar.png') -190px 0;
          }
        }
      }
    }
    .login {
      float: right;
      height: 45px;
      margin: 19px 0 0 20px;
      padding-right: 22px;
      background-position: right -47px;
      a {
        display: inline-block;
        color: #787878;
        margin-top: 7px;
        font-size: 14px;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .author {
      float: right;
      width: 100px;
      height: 32px;
      margin: 19px 0 0 12px;
      box-sizing: border-box;
      padding-left: 16px;
      border: 1px solid #4F4F4F;
      line-height: 32px;
      color: #ccc;
      border-radius: 20px;
      font-size: 14px;
      &:hover {
        border: 1px solid #ccc;
      }
    }
    .search {
      width: 158px;
      float: right;
      height: 32px;
      margin-top: 19px;
      border-radius: 32px;
      background: url('./images/topbar.png') 0 -99px #fff;
      input {
        border: none;
        width: 80%;
        display: inline-block;
        margin: 8px 0 0 30px;
        box-sizing: border-box;
        font-size: 12px;
        outline: none;
      }
    }
  }
  .loginPage {
    border-radius: 4px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.8);
    position: absolute;
    border-radius: 3px 3px 0 0;
    z-index: 9998;
    width: 530px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .loginBar {
      position: relative;
      background: #2d2d2d;
      padding: 0 45px 0 18px;
      .loginFont {
        height: 38px;
        color: #fff;
        font-size: 14px;
        line-height: 38px;
      }
      .close {
        position: absolute;
        cursor: pointer;
        top: 50%;
        right: 20px;
        color: #fff;
        font-size: 12px;
        transform: translateY(-50%);
      }
    }
  }
  .saoma {
    padding: 38px 0 20px;
    background: #fff;
    .saomaImg {
      vertical-align: top;
      display: inline-block;
      margin-left: 101px;
      width: 125px;
      height: 220px;
      background: url('./images/qr_guide.png');
      background-size: contain;
    }
    .erweima {
      display: inline-block;
      margin-left: 25px;
      width: 200px;
      .saomadenglu {
        font-size: 18px;
        text-align: center;
        font-weight: 500;
      }
      .erweimaImg {
        margin: 13px 31px;
        padding: 4px;
        img {
          width: 130px;
          height: 130px;
        }
      }
      .app {
        text-align: center;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.4);
        a {
          color: #0c73c2;
        }
      }
    }
    .loginMode {
      margin-top: 20px;
      text-align: center;
      a {
        display: inline-block;
        width: 118px;
        line-height: 28px;
        border: 1px solid #979797;
        font-size: 12px;
        border-radius: 15px;
        color: rgba(0,0,0,0.80);
      }
    }
    .ml {
      display: inline-block;
      box-sizing: content-box;
      width: 224px;
      padding: 0 35px 3px 40px;
      border-right: 1px dotted #ccc;
      .tupian {
        height: 120px;
        background: url('./images/platform.png') no-repeat 13px 0;
      }
      .phoneLogin {
        padding: 0;
        margin: 10px 0 0 0;
        width: 224px;
        color: #fff;
        background: rgb(54,133,209);
        text-align: center;
        line-height: 31px;
        border-radius: 4px;
      }
      .registered {
        padding: 0;
        margin: 10px 0 0 0;
        width: 224px;
        font-size: 12px;
        color: #333;
        background: rgb(255,255,255);
        text-align: center;
        line-height: 31px;
        border-radius: 4px;
        border: 1px solid black;
      }
    }
    .loginfangshi {
      display: inline-block;
      margin-top: -15px;
      padding: 3px 0 3px 39px;
      vertical-align: top;
      li {
        margin-top: 15px;
        span { 
          display: inline-block;
          width: 38px;
          height: 38px;
          margin-right: 14px;
        }
        &:nth-child(1) {
          span {
            background: url('./images/logo.png') -150px -670px;
          }
        }
        &:nth-child(2) {
          span {
            background: url('./images/logo.png') -190px -670px;
          }
        }
        &:nth-child(3) {
          span {
            background: url('./images/logo.png') -230px -670px;
          }
        }
        &:nth-child(4) {
          span {
            background: url('./images/logo.png') -270px -670px;
          }
        }
        a {
          vertical-align: top;
          display: inline-block;
          font-size: 12px;
          line-height: 38px;
        }
      } 
    }
    .agreements {
      margin: 30px 0 0 40px;
      input {
        vertical-align: baseline;
      }
      label {
        margin-left: 2px;
        cursor: default;
        font-size: 10px;
      }
      a {
        color: #507daf;
        font-size: 10px;
      }
    }
    // .loginMode {

    // }
  }
  .trianglema {
    position: absolute;
    width: 52px;
    height: 52px;
    bottom: 0;
    right: 0;
    background: url('./images/qr_login_icon.png');
    background-size: contain;
    cursor: pointer;
  }
}
</style>