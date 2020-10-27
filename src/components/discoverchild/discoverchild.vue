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
              <a href="#/discover/playlist/" @click="yinyueselect">热门推荐</a>
            </div>
            <ul class="select">
              <li>
                <a href="">华语</a>
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
              <a href="/discover/playlist/">更多</a>
              <span></span>
            </span>
          </div>
          <div class="tuijian-content">
            <ul>
              <li>
                <div>
                  <img src="http://p2.music.126.net/tWrF4w6xCJiR7joQt4hYYA==/109951165401204896.jpg?param=140y140">
                  <a title="[华语速爆新歌] 薛之谦高甜单曲与你遇见"></a>
                  <p class="bottom">
                    <span></span>
                    <span class="bofangliang">111万</span>
                    <a></a>
                  </p>
                </div>
                <p class="bottom-title">
                  <a>[华语速爆新歌] 薛之谦高甜单曲与你遇见</a>
                </p>
              </li>
              <li>
                <div>
                  <img src="http://p2.music.126.net/tWrF4w6xCJiR7joQt4hYYA==/109951165401204896.jpg?param=140y140">
                  <a title="[华语速爆新歌] 薛之谦高甜单曲与你遇见"></a>
                  <p class="bottom">
                    <span></span>
                    <span class="bofangliang">111万</span>
                    <a></a>
                  </p>
                </div>
                <p class="bottom-title">
                  <a>[华语速爆新歌] 薛之谦高甜单曲与你遇见</a>
                </p>
              </li><li>
                <div>
                  <img src="http://p2.music.126.net/tWrF4w6xCJiR7joQt4hYYA==/109951165401204896.jpg?param=140y140">
                  <a title="[华语速爆新歌] 薛之谦高甜单曲与你遇见"></a>
                  <p class="bottom">
                    <span></span>
                    <span class="bofangliang">111万</span>
                    <a></a>
                  </p>
                </div>
                <p class="bottom-title">
                  <a>[华语速爆新歌] 薛之谦高甜单曲与你遇见</a>
                </p>
              </li><li>
                <div>
                  <img src="http://p2.music.126.net/tWrF4w6xCJiR7joQt4hYYA==/109951165401204896.jpg?param=140y140">
                  <a title="[华语速爆新歌] 薛之谦高甜单曲与你遇见"></a>
                  <p class="bottom">
                    <span></span>
                    <span class="bofangliang">111万</span>
                    <a></a>
                  </p>
                </div>
                <p class="bottom-title">
                  <a>[华语速爆新歌] 薛之谦高甜单曲与你遇见</a>
                </p>
              </li><li>
                <div>
                  <img src="http://p2.music.126.net/tWrF4w6xCJiR7joQt4hYYA==/109951165401204896.jpg?param=140y140">
                  <a title="[华语速爆新歌] 薛之谦高甜单曲与你遇见"></a>
                  <p class="bottom">
                    <span></span>
                    <span class="bofangliang">111万</span>
                    <a></a>
                  </p>
                </div>
                <p class="bottom-title">
                  <a>[华语速爆新歌] 薛之谦高甜单曲与你遇见</a>
                </p>
              </li><li>
                <div>
                  <img src="http://p2.music.126.net/tWrF4w6xCJiR7joQt4hYYA==/109951165401204896.jpg?param=140y140">
                  <a title="[华语速爆新歌] 薛之谦高甜单曲与你遇见"></a>
                  <p class="bottom">
                    <span></span>
                    <span class="bofangliang">111万</span>
                    <a></a>
                  </p>
                </div>
                <p class="bottom-title">
                  <a>[华语速爆新歌] 薛之谦高甜单曲与你遇见</a>
                </p>
              </li><li>
                <div>
                  <img src="http://p2.music.126.net/tWrF4w6xCJiR7joQt4hYYA==/109951165401204896.jpg?param=140y140">
                  <a title="[华语速爆新歌] 薛之谦高甜单曲与你遇见"></a>
                  <p class="bottom">
                    <span></span>
                    <span class="bofangliang">111万</span>
                    <a></a>
                  </p>
                </div>
                <p class="bottom-title">
                  <a>[华语速爆新歌] 薛之谦高甜单曲与你遇见</a>
                </p>
              </li><li>
                <div>
                  <img src="http://p2.music.126.net/tWrF4w6xCJiR7joQt4hYYA==/109951165401204896.jpg?param=140y140">
                  <a title="[华语速爆新歌] 薛之谦高甜单曲与你遇见"></a>
                  <p class="bottom">
                    <span></span>
                    <span class="bofangliang">111万</span>
                    <a></a>
                  </p>
                </div>
                <p class="bottom-title">
                  <a>[华语速爆新歌] 薛之谦高甜单曲与你遇见</a>
                </p>
              </li>
            </ul>
          </div>
          <div class="space-white"></div>
          <div class="tuijian">
            <div class="tuijian-left">
              <a href="javascript:;">新碟上架</a>
            </div>
            <span class="tuijian-more">
              <a>更多</a>
              <span></span>
            </span>
          </div>
          <div class="xindie-content">
            <a class="left-sanjiao">&nbsp;</a>
            <div class="xindie-song">
              <ul>
                <li>
                  <div>
                    <img src="http://p3.music.126.net/q6h3zFrzr6Y3NlQT8rir6w==/109951165373635125.jpg?param=100y100">
                    <a class="backi"></a>
                  </div>
                  <p>
                    <a>Hybrid Theory (20th Anniversary Edition)</a>
                  </p>
                  <p>
                    <a>Linkin Park</a>
                  </p>
                </li>
                <li>
                  <div>
                    <img src="http://p3.music.126.net/q6h3zFrzr6Y3NlQT8rir6w==/109951165373635125.jpg?param=100y100">
                    <a class="backi"></a>
                  </div>
                  <p>
                    <a>Hybrid Theory (20th Anniversary Edition)</a>
                  </p>
                  <p>
                    <a>Linkin Park</a>
                  </p>
                </li>
                <li>
                  <div>
                    <img src="http://p3.music.126.net/q6h3zFrzr6Y3NlQT8rir6w==/109951165373635125.jpg?param=100y100">
                    <a class="backi"></a>
                  </div>
                  <p>
                    <a>Hybrid Theory (20th Anniversary Edition)</a>
                  </p>
                  <p>
                    <a>Linkin Park</a>
                  </p>
                </li>
                <li>
                  <div>
                    <img src="http://p3.music.126.net/q6h3zFrzr6Y3NlQT8rir6w==/109951165373635125.jpg?param=100y100">
                    <a class="backi"></a>
                  </div>
                  <p>
                    <a>Hybrid Theory (20th Anniversary Edition)</a>
                  </p>
                  <p>
                    <a>Linkin Park</a>
                  </p>
                </li>

                <li>
                  <div>
                    <img src="http://p3.music.126.net/q6h3zFrzr6Y3NlQT8rir6w==/109951165373635125.jpg?param=100y100">
                    <a class="backi"></a>
                  </div>
                  <p>
                    <a>Hybrid Theory (20th Anniversary Edition)</a>
                  </p>
                  <p>
                    <a>Linkin Park</a>
                  </p>
                </li>
              </ul>
            </div>
            <a class="right-sanjiao">&nbsp;</a>
          </div>
          <div class="tuijian">
            <div class="tuijian-left">
              <a href="javascript:;">新碟上架</a>
            </div>
            <span class="tuijian-more">
              <a>更多</a>
              <span></span>
            </span>
          </div>
          <div class=bangdan-content>
            <dl>
              <dt>
                <div class="img">
                  <img src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100">
                </div>
                <div class="yunyinyue">
                  <a>云音乐飙升榜</a>
                  <div>
                    <a>播放</a>
                    <a>收藏</a>
                  </div>
                </div>
              </dt>
              <dd>
                <ol>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>

                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>


                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>

                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                </ol>
              </dd>
            </dl>
            <dl>
              <dt>
                <div class="img">
                  <img src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100">
                </div>
                <div class="yunyinyue">
                  <a>云音乐飙升榜</a>
                  <div>
                    <a>播放</a>
                    <a>收藏</a>
                  </div>
                </div>
              </dt>
              <dd>
                <ol>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>

                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>


                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>

                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                </ol>
              </dd>
            </dl>
            <dl>
              <dt>
                <div class="img">
                  <img src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100">
                </div>
                <div class="yunyinyue">
                  <a>云音乐飙升榜</a>
                  <div>
                    <a>播放</a>
                    <a>收藏</a>
                  </div>
                </div>
              </dt>
              <dd>
                <ol>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>

                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>


                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>

                  <li>
                    <span>1</span>
                    <a>2222</a>
                  </li>
                </ol>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="content-right">
        <div class="uselogin">
          <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <a>用户登录</a>
        </div>
        <div class="geshou">
          <div class="geshou-content">
            <div class="top">
              <span>入驻歌手</span>
              <a>查看全部 ></a>
            </div>
            <div class="geshou-list">
              <ul>
                <li>
                  <a href="">
                    <img src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" alt="">
                    <div>
                      <p>张惠妹aMEI</p>
                      <p>台湾歌手张惠妹</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" alt="">
                    <div>
                      <p>张惠妹aMEI</p>
                      <p>台湾歌手张惠妹</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="">
                    <img src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" alt="">
                    <div>
                      <p>张惠妹aMEI</p>
                      <p>台湾歌手张惠妹</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" alt="">
                    <div>
                      <p>张惠妹aMEI</p>
                      <p>台湾歌手张惠妹</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="">
                    <img src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" alt="">
                    <div>
                      <p>张惠妹aMEI</p>
                      <p>台湾歌手张惠妹</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="shenqing">
              <a href="">申请成为网易音乐人</a>
            </div>
            <div class="top1">
              <span>热门主播</span>
            </div>
            <div class="remenzhubo">
              <ul>
                <li>
                  <a href="">
                    <img src="http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" alt="">
                  </a>
                  <div>
                    <a href="">陈立</a>
                    <p>心理学家、美食家陈立教授</p>
                  </div>
                </li>
                <li>
                  <a href="">
                    <img src="http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" alt="">
                  </a>
                  <div>
                    <a href="">陈立</a>
                    <p>心理学家、美食家陈立教授</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
    yinyueselect () {
      this.router.push('/discover/playlist/')
    },
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
  display: flex;
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
    .tuijian-content {
      margin: 20px 0 0 -42px;
      li {
        display: inline-block;
        padding: 0 0 30px 42px;
        div {
          width: 140px;
          height: 140px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          >a {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
          }
          .bottom {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            height: 27px;
            background: url('../../images/coverall.png') 0 -537px;
            span:first-child {
              float: left;
              width: 14px;
              height: 11px;
              
              margin: 9px 5px 9px 10px;
              background: url('../../images/iconall.png');
              background-position: 0 -24px;
            }
            .bofangliang {
              float: left;
              margin: 7px 0 0 0;
              color: #ccc;
              font-size: 12px;
            }
            a {
              position: absolute;
              right: 10px;
              bottom: 5px;
              width: 16px;
              height: 17px;
              background: url('../../images/iconall.png');
              background-position: 0 0;
              
            }
          }
        }
        .bottom-title {
          margin: 8px 0 3px;
          width: 140px;
          font-size: 14px;
        }
      }
    }
    .space-white {
      margin-bottom: 35px;
    }
    .xindie-content {
      position: relative;
      margin: 20px 0 37px;
      border: 1px solid #d3d3d3;
      background: #f5f5f5;
      height: 186px;
      padding-left: 16px;
      .left-sanjiao {
        position: absolute;
        left: 4px;
        background: url('../../images/index.png') -266px -76px;
        top: 71px;
        width: 17px;
        height: 17px;
      }
      .right-sanjiao {
        background: url('../../images/index.png') -306px -76px;
        position: absolute;
        right: 2px;
        top: 71px;
        width: 17px;
        height: 17px;
      }
      .xindie-song {
        width: 645px;
        margin-top: 28px;
        ul {
          overflow: hidden;
          white-space:nowrap;
          li {
            
            display: inline-block;
            margin-left: 11px;
            width: 118px;
            height: 150px;
            // background: red;
            p {
              width: 90%;
              font-size: 12px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              a {
                line-height: 18px;
              }
            }
            div {
              position: relative;
              width: 100px;
              height: 100px;
              margin-bottom: 7px;
              img {
                display: block;
                width: 100%;
                height: 100%;
              }
              .backi {
                position: absolute;
                top: 0;
                left: 0;
                width: 118px;
                height: 100px;
                background: url('../../images/coverall.png') 0 -570px;
              }
            }
          }
        }
      }
    }
    .bangdan-content {
      margin-top: 20px;
      height: 472px;
      width: 690px;
      background: url('../../images/index_bill.png');
      dl {
        display: inline-block;
        width: 230px;
        dt {
          box-sizing: content-box;
          padding: 20px 0 0 19px;
          height: 100px;
          div {
            display: inline-block;
            vertical-align: top;
            
            img {
              width: 80px;
              height: 80px;
            }
          }
          .yunyinyue {
            width: 116px;
            margin: 6px 0 0 10px;
            // border: 1px solid red;
            >a {
              color: #333;
              font-size: 12px;
            }
            div {
              margin-top: 10px;
              font-size: 12px;
              a {
                display: inline-block;
                width: 22px;
                height: 22px;
                margin-right: 10px;
                text-indent: -9999px;
                &:first-child {
                  background: url('../../images/index.png') -266px -206px;
                }
                &:last-child {
                  background: url('../../images/index.png') -300px -206px;
                }
              }
            }
          }
        }
        dd {
          width: 230px;
          ol {
            margin-left: 15px;
            li {
              display: block;
              font-size: 12px;
              height: 32px;
             
              line-height: 32px;
              span {
                text-align: center;
                display: inline-block;
                width: 35px;
                // margin-left: -35px;
                height: 32px;
              }
              a {
                display: inline-block;
                height: 32px;
                width: 170px;
              }
            }
          }
        }
      }
    }
  }
  .content-right {
    border-left: 1px solid #d3d3d3;
    
    float: right;
    width: 250px;
    .uselogin {
      width: 100%;
      height: 126px;
      background: url('../../images/index.png');
      font-size: 12px;
      p {
        color: #666;
        
        margin: 0 auto;
        padding: 16px 0;
        width: 205px;
        line-height: 22px;
      }
      a {
        margin: 0 auto;
        background: url('../../images/index.png') 0 -196px;
        display: block;
        width: 100px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        color: #fff;
        text-shadow: 0 1px 0 #8a060b;
      }
    }
    .geshou {
      margin-top: 15px;
      padding: 0 20px;
      .geshou-content {
        .top {
          height: 23px;
          border-bottom: 1px solid #ccc;
          color: #333;
          font-size: 12px;
          a {
            float: right;
          }
        }
        .geshou-list {
          margin-top: 6px;
          li {
            margin-top: 14px;
            width: 210px;
            height: 62px;
            background: #fafafa;
            a {
              display: inline-block;
              width: 100%;
              height: 100%;
              img {
                width: 62px;
                height: 62px;
                vertical-align: top;
              }
              >div {
                display: inline-block;
                width: 148px;
                height: 100%;
                padding-left: 14px;
                border: 1px solid #e9e9e9;
                &:hover {

                }
                p{
                  margin-top: 12px;
                  width: 90%;
                  font-size: 14px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  &:first-child {
                    font-weight: bold;
                    color: #333;
                    font-family: Arial, Helvetica, sans-serif;
                  }
                  &:last-child {
                    color: #666;
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
        .shenqing {
          a{
            display: inline-block;
            width: 100%;
            height: 31px;
            line-height: 31px;
            text-align: center;
            margin: 14px 0 0 0px;
            border-radius: 4px;
            color: #333;
            font-weight: bold;
            background: url('../../images/button2.png') no-repeat;
            background-position: 0 -306px;
            font-size: 14px;
          }
        }
        .top1 {
          margin-top: 15px;
          height: 23px;
          border-bottom: 1px solid #ccc;
          color: #333;
          font-size: 12px;
          a {
            float: right;
          }
        }
        .remenzhubo {
          margin-top: 20px;
          ul {
            li {
              height: 50px;
              >a {
                // display: block;
                vertical-align: top;
                font-size: 12px;
                color: #333;
                box-shadow: 0 0 1px #333333 inset;
                margin-right: 10px;
                img {
                  
                  width: 40px;
                  height: 40px;
                }
              }
              div {
                display: inline-block;
                font-size: 12px;
                color: #333;
                width: 159px;
                line-height: 21px;
              }
            }
          }
        }
      }
    }
  }
}
</style>