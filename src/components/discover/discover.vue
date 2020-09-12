<!--  -->
<template>
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
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style lang='scss' scoped>
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
              span {
                display: inline-block;
                margin: 7px 17px 0;
                font-size: 12px;
                padding: 0 13px;
                color: #fff;
                line-height: 20px;
                border-radius: 20px;
                &:visited {
                  background: #9B0909;
                }
              }
            }
          }
        }
    }
}
</style>