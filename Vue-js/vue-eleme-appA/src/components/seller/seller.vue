<template>
  <div class="sellerPage">
    <div class="sellerContent">
      <div class="sellerHead">
        <span class="sellerName">{{seller.name}}</span>
        <div class="sellerMore">
          <div class="Rating-gray">
            <i v-for="(item, index) in itemClasses" :key="index" class="fa" :class="item"></i>
          </div>
          <div class="ratingCount">({{seller.ratingCount}})</div>
          <div class="sellCount">月售{{seller.sellCount}}单</div>
        </div>
        <div class="sellerLove">收藏</div>
        <div class="loveImg"></div>
      </div>

      <div class="sellerFoot">
        <div class="seller deliverSeller">
          <div class="minTitle">起送价</div>
          <span class="minContent">{{seller.minPrice}}</span>
          <span class="minPrice">元</span>
        </div>
        <div class="seller deliverPrice"><div class="minTitle">商家配送</div><span class="minContent">{{seller.deliveryPrice}}</span><span class="minPrice">元</span></div>
        <div class="seller deliveryTime"><div class="minTitle">平均配送时间</div><span class="minContent">{{seller.deliveryTime}}</span><span class="minPrice">分钟</span></div>
      </div>
    </div>
    <div class="sellerNotice">
      <div class="noticeContent">
        <span class="noticeTitle">公告与活动</span>
        <p class="noticeText">{{seller.bulletin}}</p>
      </div>
      <ul class="supports" v-if="seller.supports">
        <li class="support-item border-1px" v-for="(item, index) in seller.supports" :key="index">
          <span class="icon" :class="classMap[seller.supports[index].type]"></span>
          <span class="text">{{seller.supports[index].description}}</span>
        </li>
      </ul>
    </div>  
  </div>
</template>
<script>
 // 星星长度
const LENGTH = 5;
// 星星对应的class,亮星
const CLS_ON = "fa-star";
// 半星
const CLS_HALF = "fa-star-half-empty";
// 灰星
const CLS_OFF = "fa-star-o";
export default {
  name: "seller",
  data() {
    return {
      rating:0,
      classMap:[]
    }
  },
  props: {
    seller:{
      type:Object
    }
  },
  computed: {
    itemClasses() {
      this.rating = this.seller.score
      // 如4.8 四个全星 1个半星
      let result = [];
      // 对分数进行处理, 向下取0.5的倍数
      let score = Math.floor(this.rating * 2) / 2;
      // 控制半星
      let hasDecimal = score % 1 !== 0;
      // 全星
      let integer = Math.floor(score);
      // 全星放入到数组中
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON);
      }
      // 半星
      if (hasDecimal) {
        result.push(CLS_HALF);
      }
      // 补齐
      while (result.length < LENGTH) {
        result.push(CLS_OFF);
      }
      return result;
    }
  },
  created() {
    console.log(this.seller)
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
  }
}
</script>
<style lang='stylus' scoped>
@import '../../common/stylus/mixin'
.sellerPage
  width 100%
  height 100%
  background-color rgba(7, 17, 27, 0.1)
  .sellerContent
    background-color white
    height 155px
    width 100%
    box-sizing border-box
    border-bottom 1px solid #aaaaaa
    .sellerHead
      height 77px
      width 100%
      // border-bottom 1px solid #aaa
      position relative
      &:after
        content ''
        position absolute
        bottom 0
        // right auto
        left 18px
        width 90%
        height 1px
        background-color #8796a9
      .sellerName
        margin 19px 0 5px 18px
        display inline-block
        font-weight bolder
      .sellerMore
        .Rating-gray
          // display inline-block
          // width 98px
          // height 17px
          margin-left 18px
          margin-right 1.066667vw
          color #ffbe00 
          display inline-block
        .ratingCount
          display inline-block
          margin-left 10px
        .sellCount
          display inline-block 
          margin-left 18px
      .sellerLove
        position absolute
        bottom 15px
        right 23px
      .loveImg  
        background-size 22px 22px
        background-repeat no-repeat
        height 22px
        width 22px
        background-image url('./love1.png')
        position absolute
        top 20px
        right 26px
    .sellerFoot
      .seller
        float left
        // display flex
        // flex 1
        padding 16px 30px 16px 
        // border-left  1px solid #9ea1a3
        text-align center
        position relative
        .minTitle
          font-size 14px
          color #9ea1a3
        .minContent
          font-size 28px
          font-weight 300

      .deliverSeller:after,.deliverPrice:after
        content ''
        position absolute
        top 20%
        right 0
        height 44px
        width 1px
        background-color #8796a9
  .sellerNotice
    background-color white
    .noticeContent
      margin-top 16px
      border-top 1px solid  #9ea1a3
      .noticeTitle
        display inline-block
        font-weight bold
        padding 17px 0px 13px 18px
      .noticeText
        display inline-block
        font-size 14px
        width 316px
        line-height 26px
        color #f05a5e
        padding-left 22px

    .supports
      .support-item
        display flex
        margin 18px
        padding-top 18px
        border-top-1px(rgba(7, 17, 27, 0.5))
        .icon
          display inline-block
          vertical-align top
          width 16px
          height 16px
          margin-right 4px
          background-size 16px 16px
          background-repeat no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          line-height 16px
          font-size 14px
</style>
