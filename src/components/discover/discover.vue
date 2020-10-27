<!--  -->
<template>
  <div>
    <div class="nav2">
      <div class="childbar">
        <ul>
            <li>
              <router-link to="/discover">
                <span>推荐</span>
              </router-link>
            </li>
            <li>
              <router-link to="/discover/toplist">
                <span>排行榜</span>
              </router-link>
            </li>
            <li>
              <router-link to="/discover/playlist">
                <span>歌单</span>
              </router-link>
            </li>
            <li>
              <router-link to="/discover/djradio">
                <span>主播电台</span>
              </router-link>
            </li>
            <li>
              <router-link to="/discover/artist">
                <span>歌手</span>
              </router-link>
            </li>
            <li>
              <router-link to="/discover/album">
                <span>新碟上架</span>
              </router-link>
            </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
    <footer>
      <div class="footer-content">
        <div class="left">
          <ul>
            <li>
              <a>服务条款</a>
              <span>|</span>
            </li>
            <li>
              <a>隐私政策</a>
              <span>|</span>
            </li>
            <li>
              <a>儿童隐私政策</a>
              <span>|</span>
            </li>
            <li>
              <a>版权投诉指引</a>
              <span>|</span>
            </li>
            <li>
              <a>意见反馈</a>
              <span>|</span>
            </li>

          </ul>
          <p>
            <span>网易公司版权所有©1997-2020</span>
            <span>杭州乐读科技有限公司运营: </span>
            <a>浙网文[2018]3506-263号</a>
          </p>
          <p>
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：</span>
            <a>945904863@qq.com</a>
          </p>
          <p>
            <span>粤B2-20090191-18</span>
            <a class="span">工业和信息化部备案管理系统网站</a>
            <a class="baojing">浙公网安备 33010902002564号</a>
          </p>
        </div>
        <div class="right">
          <ul>
            <li>
              <a href=""></a>
              <span>用户认证</span>
            </li>
            <li>
              <a href=""></a>
              <span>用户认证</span>
            </li>
            <li>
              <a href=""></a>
              <span>用户认证</span>
            </li>
            <li>
              <a href=""></a>
              <span>用户认证</span>
            </li>

            <li>
              <a href=""></a>
              <span>用户认证</span>
            </li>
            
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>


export default {
  // name: 'carrousel',
  
  data () {
    return {
      
    };
  },
  components: {},

  computed: {
    
  },

  mounted () {
    // this.swiper.slideTo(1, 1000, false)
   

  },

  methods: {
    
  }
}

</script>
<style lang='scss' scoped>
@import '../../../node_modules/swiper/swiper-bundle.css';
.nav2 {
    min-height: 5px;
    background: #c20c0c;
    border-bottom: 1px solid #a40011;
    box-sizing: content-box;
    .childbar {
        width: 1100px;
        margin: 0 auto;
        // height: 34px;
        ul {
          padding-left: 180px;
          height: 34px;
          li {
            display: inline-block;
            a {
              display: inline-block;
              height: 34px;
              &:hover {
                span {
                  background: #9B0909;
                }
              }
              span {
                display: inline-block;
                margin: 7px 17px 0;
                font-size: 12px;
                padding: 0 13px;
                color: #fff;
                line-height: 20px;
                border-radius: 20px;
                
              }
            }
          }
        }
    }
}
footer {
  border-top: 1px solid #d3d3d3;
  height: 172px;
  background: #f2f2f2;
  .footer-content {
    width: 980px;
    margin: 0 auto;
    height: 100%;
    >div {
      display: inline-block;
    }
    .left {
      width: 520px;
      padding-top: 15px;
      font-size: 12px;
      line-height: 24px;
      font-family: Arial, Helvetica, sans-serif;
      color: #999;
      ul {
        li {
          display: inline-block; 
          span {
            margin: 0 8px 0 10px;
          }
        }
      }
      p{
        span:first-child {
          margin-right: 14px;
        }
        .span {
          margin-right: 5px;
        }
        .baojing {
          &::before {
            content: '';
            display: inline-block;
            width: 14px;
            height: 14px;
            background: url('../../images/police.png');
            margin-right: 2px;
            background-size: cover;
            vertical-align: -2px;
          }
        }
      }
    }
    .right {
      float: right;
      width: 420px;
      margin-top: 33px;
      ul {
        li {
          margin-left: 30px;
          display: inline-block;
          width: 60px;
          height: 70px;
          &:first-child {
            margin-left: 0;
          }
          a {
            display: block;
            width: 50px;
            height: 45px;
            margin: 0 auto;
            background: url('../../images/foot_enter_new.png') no-repeat -63px -456.5px/110px 552px;
          }
          span {
            display: inline-block;
            font-size: 12px;
            text-align: center;
            color: #666;
            font-family: Arial, Helvetica, sans-serif;
            margin: 5px 5px 0;
          }
        }
      }
    }
  }
}

</style>