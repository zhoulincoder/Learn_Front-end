const baiduMap = {
  show() {
    baidu: console.log('开始渲染百度地图')
  }
}
const googleMap = {
  show() {
    baidu: console.log('开始渲染谷歌地图')
  }
}
const gaodeMap = {
  show() {
    baidu: console.log('开始渲染高德地图')
  }
}
const sosoMap = {}

const renderMap = (map) => {
  
  // if(map.show && typeof map.show === 'function') {
  //   map.show();
  // } else console.log('错误');
  if(map.show && map.show instanceof Function){
    map.show();
  }
}

renderMap(baiduMap);
renderMap(googleMap);
renderMap(sosoMap);