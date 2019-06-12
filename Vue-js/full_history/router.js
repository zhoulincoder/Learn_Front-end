//有三个路由  a标签的点击   切换content  显示
class Router {
  //路由的配置
  constructor (options) {
    this.routes = {}
    this.init()
    this.bindEvent()
    options.forEach( item => {
      this.route(item.path, () => {
        document.getElementById('content').innerHTML = item.component
      })
    })
    console.log(this.routes)
  }
  bindEvent () {
    const _this = this;
    const links = document.getElementsByTagName( 'a');
    // 遍历links
    [].forEach.call(links, link => {
      link.addEventListener('click', function () {
        const url = this.getAttribute('data-href')
        _this.push(url)
      })
    })
  }
  push(url) {
    //进入浏览器历史栈
    window.history.pushState({}, null, url)
    this.updateView()
  }
  route (path, cb) {
    this.routes[path] = cb

  }
  init () {
    window.addEventListener('load', this.updateView.bind(this))
    // bind确保this指针
    window.addEventListener('popstate', this.updateView.bind(this))
  }
  updateView () {
    //当前的url
    const currentUrl = window.location.pathname || '/' 
    this.routes[currentUrl] && this.routes[currentUrl] ()
  }
}