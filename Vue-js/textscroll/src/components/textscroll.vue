<template>
  <section>
    <div class="textscroll">
      <!-- 循环体ul -->
      <transition-group tag="ul" :name="scrolltype">
        <li v-for="(item,index) in dataList" :key="index+1" v-show="index==count">
          <!-- <router-link to=""> -->
          <p>{{item.text}}</p>
          <!-- </router-link> -->
        </li>
      </transition-group>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      // dataList: [{ text: "坚持" }, { text: "不要脸" }, { text: "坚持不要脸" }],
      count: 0
    };
  },
  props: ["scrolltype", "dataList"],
  methods: {
    getText() {
      let len = this.dataList.length; // 获取数组长度
      if (len == 0) {
        return; // 当数组为空时，直接返回
      }
      if (this.count == len - 1) {
        // 当前为最后一个时
        this.count = 0; // 从第一个开始
      } else {
        this.count++; // 自增
      }
    }
  },
  created() {
    setInterval(() => {
      this.getText();
    }, 2000);
  }
};
</script>
<style>
ul {
  margin: 5px 0;
  padding: 0;
  background-color: #fff;
  overflow: hidden;
  height: 40px;
}
li {
  height: 40px;
  list-style-type: none;
  line-height: 1;
  overflow: hidden;
}
/* 从下网上滚动 */
.scroll-up-leave-active,
.scroll-up-enter-active {
  transition: all 1s ease;
}
.scroll-up-enter {
  transform: translate3d(0, 100%, 0);
}
.scroll-up-leave-to {
  transform: translate3d(0, -100%, 0);
}
/* 从做滚动 */
.scroll-left-leave-active,
.scroll-left-enter-active {
  transition: all 1s ease;
}
.scroll-left-enter {
  transform: translate3d(100%, 0, 0);
}
.scroll-left-leave-to {
  transform: translate3d(-100%, 0, 0);
}
</style>



