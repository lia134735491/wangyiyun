<!--  -->
<template>
  <div class="select-zj">
    <div class="content">
      <div class="top">
        <span>华语</span>
        <select>
          <option>华语</option>
          <option>华语</option>
          <option>华语</option>
        </select>
        <span>热门</span>
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
      <div class="fyq">
        <el-pagination
          background
          :page-size="20"
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
var $ = require('jquery')

export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  created () {
    this.axios.get('http://localhost:7300/mock/5f8bbcb340cf330dec977db7/wangyiyun/singlesong').then(function (response) {
      console.log(111)
    })
  },

  mounted () {},

  methods: {}
}

</script>
<style lang='scss' scoped>
  .select-zj {
    width: 980px;
    margin: 0 auto;
    padding: 40px 40px 40px 40px;
    .content {
      .top {
        height: 40px;
        border-bottom: 2px solid #c20c0c;
        span:first-child {
          font-size: 24px;
          font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
          vertical-align: top;
          color: #333;
          font-weight: normal;
          // line-height: 34px;
        }
        span:last-child {
          float: right;
          width: 46px;
          color: #fff;
          height: 29px;
          line-height: 29px;
          text-align: center;
          font-size: 12px;
          background-color: red;
          border-radius: 6px;
        }
        select {
          font-size: 12px;
          width: 91px;
          font-weight: normal;
          color: #0c73c2 !important;
          height: 31px;
          line-height: 31px;
          margin: 2px 0 0 12px;
          border-radius: 4px;
          text-align: center;
          text-align-last:center;
        }
      }
      .tuijian-content {
        margin: 20px 0 0 -50px;
        li {
          display: inline-block;
          padding: 0 0 30px 50px;
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
            margin: 8px 0 2px;
            width: 140px;
            font-size: 14px;
          }
        }
      }
      .fyq {
        .el-pagination {
          display: inline-block;
          margin: 0 auto;
        }
      }
    }
  }
</style>