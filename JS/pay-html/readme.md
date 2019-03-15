<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://cdn.bootcss.com/weui/1.1.3/style/weui.css" rel="stylesheet">
  <link rel="stylesheet" href="./style.css">
  <title>Document</title>
</head>
<body>
  <div class="page">
    <div class="page__hd">
      <div class="tilt">vip</div>
      <div class="price">
        <div class="weui-flex">
          <div class="weui-flex__item">
            <div class="placeholder">
              <div class="item-price">
                <p class="item-price__month">一个月</p>
                <p class="item-price__old">原价19.9元</p>
                <p class="item-price__new">现价9元</p>
              </div>
            </div>
          </div>
          <div class="weui-flex__item mar">
            <div class="placeholder">
              <div class="item-price">
                <p class="item-price__month">三个月</p>
                <p class="item-price__old">原价19.9元</p>
                <p class="item-price__new">现价9元</p>
              </div>
            </div>
          </div>
          <div class="weui-flex__item">
            <div class="placeholder">
              <div class="item-price">
                <p class="item-price__month">六个月</p>
                <p class="item-price__old">原价19.9元</p>
                <p class="item-price__new">现价9元</p>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
    <div class="page__ct">
      <div class="wrapper">
        <a class="weui-cell weui-cell_access bottom-border" href="javascript:;">
          <div class="weui-cell__hd">
            <img src="./candy.png">
          </div>
          <div class="weui-cell__bd weui-cell_primary">
            <p>糖果支付</p>
            <p>dasda</p>
          </div>
          <span class="price-way"></span>
        </a>
        <a class="weui-cell weui-cell_access bottom-border" href="javascript:;">
          <div class="weui-cell__hd">
            <img src="./wechat.png">
          </div>
          <div class="weui-cell__bd weui-cell_primary">
            <p>微信支付</p>
          </div>
          <span class="price-way"></span>
        </a>
      </div>
    </div>
    <div class="page__bd">
      <a href="javascript:;" class="weui-btn weui-btn_pay">去支付</a>
    </div>
  </div>
  <script>
    var oType = document.querySelectorAll('.item-price');
    console.log(oType)
    for (let i = 0; i < oType.length; i++) {
      console.log(i)
      oType[i].addEventListener('click', function () {
        for (let j of oType) {
          j.classList.remove('active')
        }
        this.classList.add('active')
      })
    }
  </script>
</body>
</html>
【讲师】抚州-蜗牛 2019/3/14 17:17:06
html,body{
  font-size: 20px;
  width: 100%;
  height: 100%;
}
.active{
  border-color: blue !important; 
}
.page{
  width: 100%;
  height: 100%;
  background-color: #f5fafe;
}
.page__hd{
  background-color: #fff;
  padding-bottom: 20px;
}
.tilt{
  padding: 15px;
}
.price{
  padding: 0 15px;
}
.item-price{
  border: 1px solid rgba(153,153,153,1);
  border-radius: 10px;
  line-height: 1;
  text-align: center;
}
.item-price__month{
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: rgba(51,51,51,1)
}
.item-price__old{
  margin-top: 0.5rem;
  font-size: 0.6rem;
  font-weight: 400;
  color: rgba(153,153,153,1);
  text-decoration: line-through;
}
.item-price__new{
  margin-top: 0.75rem;
  font-size: 0.85rem;
  font-weight: bold;
  color: rgba(72,166,253,1);
  margin-bottom: 1rem;
}
.mar{
  margin: 0 5px;
}
.page__ct{
  margin-top: 10px;
  background-color: #fff;
}
.weui-cell__hd{
  width: 1.85rem;
  height: 1.85rem;
}
.weui-cell__hd img{
  display: block;
  width: 100%;
  height: 100%;
}
.price-way{
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid #aaa;
}
.page__bd{
  position: fixed;
  bottom: 1.3rem;
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
}
.weui-btn_pay{
  background-color: #2f81fe;
  border-radius: 30px;
}