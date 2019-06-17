<template>
  <div>
    <div class="sellerContent">
      <div class="sellerHead">
        <span class="sellerName">{{seller.name}}</span>
        <div class="sellerMore">
          <div class="sellerScore">{{seller.score}}</div>
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
  </div>
</template>
<script>
export default {
  name: "seller",
  data() {
    return {
      seller:{}
    }
  },
  created() {
    this.$http.get("https://www.easy-mock.com/mock/5d00f4f64dc8d904a40b1806/eleme/seller")
      .then( res => {
        if(res.data.errno === 0) {
          this.seller = res.data.data
        }
        console.log(this.seller);
        
      })
  }
}
</script>
<style lang='stylus' scoped>
.sellerContent
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
      .sellerScore
        display inline-block
        width 98px
        height 17px
        margin-left 18px
      .ratingCount
        display inline-block
        margin-left 14px
      .sellCount
        display inline-block 
        margin-left 24px
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
      

</style>
