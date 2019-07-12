<template>
  <section class="hello">
    <div class="scroll-box">
      <text-scroll scrolltype="scroll-up" :dataList="data"></text-scroll>
    </div>
     <div class="scroll-box">
      <text-scroll scrolltype="scroll-left" :dataList="data"></text-scroll>
    </div>
  </section>
</template>
<script>
import textScroll from './textscroll' 
export default {
  data () {
    return {
      data: [
        { text: "第一个data的一条数据" }, { text: "第一个data的二条数据" }, { text: "第一个data的三条数据" }
      ]
    }
  },
  components: {
    textScroll
  }
}
</script>
<style>
  .scroll-box{
    background-color: #f9f9f9;
    border: 1px solid #18181a;
    border-radius: 5px;
  }
  .hello{
    width: 300px;
    background-color: #f9f9f9;
    border: 1px solid #e7e8e9;
    overflow: hidden;
    padding: 10px;
    box-sizing: border-box;
  }
</style>

