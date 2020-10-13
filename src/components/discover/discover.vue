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
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  // name: 'carrousel',
  components:{
      swiper,
      swiperSlide
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          // type: 'bullets'
        },
//         direction: 'vertical',
// 　　    observer:true,//修改swiper自己或子元素时，自动初始化swiper 
// 　　    observeParents:true,//修改swiper的父元素时，自动初始化swiper 
        spaceBetween: 30,
        noSwiping : true,
        effect: 'fade',
        fadeEffect:{
          crossFade: true,
        },
        autoplay: true,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        swiperSlides:[]
      }
    };
  },

  components: {},

  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },

  mounted () {
    // this.swiper.slideTo(1, 1000, false)
   

  },

  methods: {
    prev() {
      this.swiper.slidePrev();
    },
    next() {
      this.swiper.slideNext()
    }
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