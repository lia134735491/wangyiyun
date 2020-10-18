<!--  -->
<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <div class="my-swiper-slide">
          <div class="img-content">
            <img src="../../images/109951165310022374.jpg">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="my-swiper-slide">
          <div class="img-content">
            <img src="../../images/109951165310209788.jpg">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="my-swiper-slide">
          <div class="img-content">
            <img src="../../images/109951165310529613.jpg">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="my-swiper-slide">
          <div class="img-content">
            <img src="../../images/109951165310532936.jpg">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="my-swiper-slide">
          <div class="img-content">
            <img src="../../images/109951165310568420.jpg">
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
　　  <div class="swiper-button-next" slot="button-next" @click="next"></div>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
    <div class="downloadapp">
      <a href="javascript:;">下载客户端</a>
      <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
    </div>
    <div class="component-content">
      <div class="content-left">
        <div>
          <div class="tuijian">
            <div class="tuijian-left">
              <a href="javascript:;">热门推荐</a>
            </div>
            <ul class="select">
              <li>
                <a>华语</a>
                <span>|</span>
              </li>
              <li>
                <a>流行</a>
                <span>|</span>
              </li>
              <li>
                <a>摇滚</a>
                <span>|</span>
              </li>
              <li>
                <a>民谣</a>
                <span>|</span>
              </li>
              <li>
                <a>电子</a>
              </li>
            </ul>
            <span class="tuijian-more">
              <a>更多</a>
              <span></span>
            </span>
          </div>
        </div>
      </div>
      <div class="content-right"></div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  components:{
      swiper,
      swiperSlide
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          autoplay: true,
          clickable: true,
          // type: 'bullets'
        },
        // centeredSlides: true,
        // loopAdditionalSlides: 100,
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
    var downloadapp = document.getElementsByClassName('downloadapp')[0];
    var imgContent = document.getElementsByClassName('img-content')[0];

    var img = imgContent.firstChild;
    var imgContentLeft = img.offsetLeft;
    var imgWidth = img.scrollWidth;
    this.$nextTick(function () {
      downloadapp.style.left = (imgContentLeft+imgWidth-2)+"px";
      window.onresize = function () {
        imgWidth = img.scrollWidth;
        imgContentLeft = img.offsetLeft;

        downloadapp.style.left = (imgContentLeft+imgWidth-2)+"px";
      }
    })
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
.swiper-container {
  width: 100%;
  position: relative;
  // border: 1px solid red;
  // width: 100% !important;
  .my-swiper-slide {
    background: url('../../images/1099511653100223741.jpg'); 
    width: 100%;
    .img-content {
      margin: 0 auto;
      width: 982px;
      height: 285px;
      padding-right: 254px;
      img {
        width: 730px;
        height: 100%;
      }  
    }
  }
  
}
.downloadapp {
  position: absolute;
  width: 254px;
  height: 285px;
  background: url('../../images/download.png');
  top: 105px;
  z-index: 100;
  a {
    display: inline-block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    text-indent: -999999px;
    background: url('../../images/download.png') -19px -186px;
    &:hover {
      background-position: 0 -290px;
    }
  }
  p {
    margin: 10px auto;
    color: #8d8d8d;
    font-size: 12px;
    text-align: center;
  }
}
.component-content {
  width: 982px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  background: #fff;
  .content-left {
    display: inline-block;
    width: 730px;
    padding: 20px 20px 40px 20px;
    .tuijian {
      height: 35px;
      padding: 0 10px 0 34px;
      border-bottom: 2px solid #C10D0C;
      background: url('../../images/index.png') no-repeat -225px -156px;
      .tuijian-left {
        float: left;
        a {
          font-size: 20px;
          font-weight: normal;
          line-height: 28px;
          color: #333;
          &:hover {
            text-decoration: none;
          }
        }
      }
      .select {
        display: inline-block;
        margin: 7px 0 0 20px;
        font-size: 12px;
        li {
          display: inline-block;
          a {
            color: #666;
          }
          span {
            margin: 0 10px;
          }
        }
      }
      .tuijian-more {
        float: right;
        margin-top: 9px;
        a {
          font-size: 12px;
        }
        span {
          width: 12px;
          height: 12px;
          margin-left: 4px;
          display: inline-block;
          background: url('../../images/index.png') 0 -240px;
        }
      }
    }
  }
  .content-right {
    display: inline-block;
    width: 250px;
  }
}
</style>