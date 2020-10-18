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

</style>