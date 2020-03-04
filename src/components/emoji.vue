<template>
  <div class="emoji-selector" v-show="isShowEmoji">
    <div class="triangle"></div>
    <div class="emoji-content">
      <div class="emoji-picker emoji-picker">
        <div class="emojis">
          <ul class="category">
            <li class="item" v-for="(item, index) in faceList" :key="index" @click="shoseEmoji(item.value)">
              <a href="javaScript:;">
                <img class="emoji" draggable="false" alt="😃" :src="item.url" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "emoji",
   props:["isShowEmoji","inputAdd"], // 父亲传 谁用谁接受（儿子接受）
  data() {
    return {
      activeFace: "face",
      faceList: [
        // 存放在本地文件的图片的获取方式需要用require
        {
          value: "1f1e8-1f1f3",
          url: require("../../static/images/1f1e8-1f1f3.svg")
        }, // value为表情对应的unicode码，url为路径
        { value: "1f319", url: require("../../static/images/1f319.svg") },
        { value: "1f31f", url: require("../../static/images/1f31f.svg") },
        { value: "1f339", url: require("../../static/images/1f339.svg") },
        { value: "1f33b", url: require("../../static/images/1f33b.svg") },
        { value: "1f341", url: require("../../static/images/1f341.svg") },
        { value: "1f343", url: require("../../static/images/1f343.svg") },
        { value: "1f349", url: require("../../static/images/1f349.svg") },
        { value: "1f357", url: require("../../static/images/1f357.svg") },
        { value: "1f37a", url: require("../../static/images/1f37a.svg") },
        { value: "1f380", url: require("../../static/images/1f380.svg") },
        { value: "1f381", url: require("../../static/images/1f381.svg") },
        { value: "1f382", url: require("../../static/images/1f382.svg") },
        { value: "1f385", url: require("../../static/images/1f385.svg") },
        { value: "1f389", url: require("../../static/images/1f389.svg") },
        { value: "1f3a3", url: require("../../static/images/1f3a3.svg") },
        { value: "1f3a4", url: require("../../static/images/1f3a4.svg") },
        { value: "1f3a7", url: require("../../static/images/1f3a7.svg") },
        { value: "1f3a8", url: require("../../static/images/1f3a8.svg") },
        { value: "1f3ae", url: require("../../static/images/1f3ae.svg") },
        { value: "1f3b8", url: require("../../static/images/1f3b8.svg") },
        { value: "1f3c0", url: require("../../static/images/1f3c0.svg") },
        { value: "1f3c6", url: require("../../static/images/1f3c6.svg") },
        { value: "1f3ca", url: require("../../static/images/1f3ca.svg") },
        { value: "1f3e0", url: require("../../static/images/1f3e0.svg") },
        {
          value: "1f3f3-fe0f-200d-1f308",
          url: require("../../static/images/1f3f3-fe0f-200d-1f308.svg")
        },
        { value: "1f3f8", url: require("../../static/images/1f3f8.svg") },
        { value: "1f408", url: require("../../static/images/1f408.svg") },
        { value: "1f415", url: require("../../static/images/1f415.svg") },
        { value: "1f41b", url: require("../../static/images/1f41b.svg") },
        { value: "1f431", url: require("../../static/images/1f431.svg") },
        { value: "1f435", url: require("../../static/images/1f435.svg") },
        { value: "1f436", url: require("../../static/images/1f436.svg") },
        { value: "1f444", url: require("../../static/images/1f444.svg") },
        { value: "1f446", url: require("../../static/images/1f446.svg") },
        { value: "1f447", url: require("../../static/images/1f447.svg") },
        { value: "1f448", url: require("../../static/images/1f448.svg") },
        { value: "1f449", url: require("../../static/images/1f449.svg") },
        { value: "1f44a", url: require("../../static/images/1f44a.svg") },
        { value: "1f44b", url: require("../../static/images/1f44b.svg") },
        { value: "1f44c", url: require("../../static/images/1f44c.svg") },
        { value: "1f44d", url: require("../../static/images/1f44d.svg") },
        { value: "1f44e", url: require("../../static/images/1f44e.svg") },
        { value: "1f44f", url: require("../../static/images/1f44f.svg") },
        { value: "1f457", url: require("../../static/images/1f457.svg") },
        { value: "1f466", url: require("../../static/images/1f466.svg") },
        { value: "1f467", url: require("../../static/images/1f467.svg") },
        {
          value: "1f468-200d-1f4bb",
          url: require("../../static/images/1f468-200d-1f4bb.svg")
        },
        { value: "1f468", url: require("../../static/images/1f468.svg") },
        {
          value: "1f469-200d-1f4bb",
          url: require("../../static/images/1f469-200d-1f4bb.svg")
        },
        { value: "1f469", url: require("../../static/images/1f469.svg") },
        { value: "1f46e", url: require("../../static/images/1f46e.svg") },
        { value: "1f47b", url: require("../../static/images/1f47b.svg") },
        { value: "1f47d", url: require("../../static/images/1f47d.svg") },
        { value: "1f47f", url: require("../../static/images/1f47f.svg") },
        { value: "1f48a", url: require("../../static/images/1f48a.svg") },
        { value: "1f48e", url: require("../../static/images/1f48e.svg") },
        { value: "1f494", url: require("../../static/images/1f494.svg") },
        { value: "1f4a3", url: require("../../static/images/1f4a3.svg") },
        { value: "1f4a4", url: require("../../static/images/1f4a4.svg") },
        { value: "1f4a9", url: require("../../static/images/1f4a9.svg") },
        { value: "1f4aa", url: require("../../static/images/1f4aa.svg") },
        { value: "1f4af", url: require("../../static/images/1f4af.svg") },
        { value: "1f4bb", url: require("../../static/images/1f4bb.svg") },
        { value: "1f4c5", url: require("../../static/images/1f4c5.svg") },
        { value: "1f4cc", url: require("../../static/images/1f4cc.svg") },
        { value: "1f4d7", url: require("../../static/images/1f4d7.svg") },
        { value: "1f4f1", url: require("../../static/images/1f4f1.svg") },
        { value: "1f50d", url: require("../../static/images/1f50d.svg") },
        { value: "1f51e", url: require("../../static/images/1f51e.svg") },
        { value: "1f525", url: require("../../static/images/1f525.svg") },
        { value: "1f559", url: require("../../static/images/1f559.svg") },
        { value: "1f601", url: require("../../static/images/1f601.svg") },
        { value: "1f602", url: require("../../static/images/1f602.svg") },
        { value: "1f603", url: require("../../static/images/1f603.svg") },
        { value: "1f604", url: require("../../static/images/1f604.svg") },
        { value: "1f607", url: require("../../static/images/1f607.svg") },
        { value: "1f609", url: require("../../static/images/1f609.svg") },
        { value: "1f60a", url: require("../../static/images/1f60a.svg") },
        { value: "1f60c", url: require("../../static/images/1f60c.svg") },
        { value: "1f60d", url: require("../../static/images/1f60d.svg") },
        { value: "1f60e", url: require("../../static/images/1f60e.svg") },
        { value: "1f60f", url: require("../../static/images/1f60f.svg") },
        { value: "1f612", url: require("../../static/images/1f612.svg") },
        { value: "1f613", url: require("../../static/images/1f613.svg") },
        { value: "1f614", url: require("../../static/images/1f614.svg") },
        { value: "1f616", url: require("../../static/images/1f616.svg") },
        { value: "1f618", url: require("../../static/images/1f618.svg") },
        { value: "1f61a", url: require("../../static/images/1f61a.svg") },
        { value: "1f61c", url: require("../../static/images/1f61c.svg") },
        { value: "1f61d", url: require("../../static/images/1f61d.svg") },
        { value: "1f61e", url: require("../../static/images/1f61e.svg") },
        { value: "1f620", url: require("../../static/images/1f620.svg") },
        { value: "1f621", url: require("../../static/images/1f621.svg") },
        { value: "1f622", url: require("../../static/images/1f622.svg") },
        { value: "1f623", url: require("../../static/images/1f623.svg") },
        { value: "1f625", url: require("../../static/images/1f625.svg") },
        { value: "1f628", url: require("../../static/images/1f628.svg") },
        { value: "1f62a", url: require("../../static/images/1f62a.svg") },
        { value: "1f62d", url: require("../../static/images/1f62d.svg") },
        { value: "1f630", url: require("../../static/images/1f630.svg") },
        { value: "1f631", url: require("../../static/images/1f631.svg") },
        { value: "1f632", url: require("../../static/images/1f632.svg") },
        { value: "1f633", url: require("../../static/images/1f633.svg") },
        { value: "1f637", url: require("../../static/images/1f637.svg") },
        { value: "1f639", url: require("../../static/images/1f639.svg") },
        { value: "1f640", url: require("../../static/images/1f640.svg") },
        { value: "1f644", url: require("../../static/images/1f644.svg") },
        { value: "1f64f", url: require("../../static/images/1f64f.svg") },
        { value: "1f697", url: require("../../static/images/1f697.svg") },
        { value: "1f6a9", url: require("../../static/images/1f6a9.svg") },
        { value: "1f6cc", url: require("../../static/images/1f6cc.svg") },
        { value: "1f913", url: require("../../static/images/1f913.svg") },
        { value: "1f914", url: require("../../static/images/1f914.svg") },
        { value: "1f916", url: require("../../static/images/1f916.svg") },
        { value: "1f917", url: require("../../static/images/1f917.svg") },
        { value: "1f91d", url: require("../../static/images/1f91d.svg") },
        { value: "1f92a", url: require("../../static/images/1f92a.svg") },
        { value: "1f92c", url: require("../../static/images/1f92c.svg") },
        { value: "1f92e", url: require("../../static/images/1f92e.svg") },
        { value: "1f933", url: require("../../static/images/1f933.svg") },
        { value: "1f984", url: require("../../static/images/1f984.svg") },
        { value: "2122", url: require("../../static/images/2122.svg") },
        { value: "231a", url: require("../../static/images/231a.svg") },
        { value: "2328", url: require("../../static/images/2328.svg") },
        { value: "2600", url: require("../../static/images/2600.svg") },
        { value: "2601", url: require("../../static/images/2601.svg") },
        { value: "2614", url: require("../../static/images/2614.svg") },
        { value: "2615", url: require("../../static/images/2615.svg") },
        { value: "26a1", url: require("../../static/images/26a1.svg") },
        { value: "26bd", url: require("../../static/images/26bd.svg") },
        { value: "2705", url: require("../../static/images/2705.svg") },
        { value: "2709", url: require("../../static/images/2709.svg") },
        { value: "270a", url: require("../../static/images/270a.svg") },
        { value: "270c", url: require("../../static/images/270c.svg") },
        { value: "2764", url: require("../../static/images/2764.svg") },
        { value: "a9", url: require("../../static/images/a9.svg") },
        { value: "ae", url: require("../../static/images/ae.svg") }
      ]
    };
  },
  methods: {
    shoseEmoji(emoji) {
      this.$emit("select", emoji);
    }
  }
};
</script>
<style lang="stylus" scoped>
.emoji-selector {
  padding: 15px;
    position: absolute;
    top: 35px;
    z-index: 1;
    bottom: 0;
    width: 800px;
    height: 195px;
    border-radius: 5px;
    background-color: #fff;
  box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.16);
  .triangle {
    position: absolute;
    top: -10px;
    left: 3%;
    width: 0;
    height: 0;
    transform: translate(-50%, -50%);
    border: 0.8rem solid transparent;
    border-bottom-color: #fff;
  }

  .emoji-content {
    overflow: auto;
    margin-bottom: 10px;
    .category {
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      .item {
        font-size: 1.4rem;
        padding: 5px 4.5px;
        cursor: pointer;
        list-style: none;

        .emoji {
          width: 22px;
          height: 22px;
          display: block;
        }
      }
    }
  }
}
</style>
