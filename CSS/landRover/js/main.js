(function () {
  /**
   * nav bar
   * <i class="material-icons">
            search->close
          </i>
   */
  $('.ui.navbar .search-icon i').click(function () {
    const icon = $(this);//之后才有text, parents 等方法
    if(icon.text() === 'search'){
      icon
      .text('close')
      .parents('.content')
      .addClass('searching')
    } else {
      icon
      .text('search')
      .parents('.content')
      .removeClass('searching')
    }
  })
  // carousel 轮播图的左右按钮
  $('.ui.hero.carousel')
  .slick({
    prevArrow: '<button class="ui prev button bottom"><i class="material-icons">chevron_left</i></button>',
    nextArrow: '<button class="ui next button bottom"><i class="material-icons">chevron_right</i></button>'
  })
})()