import lodash from 'lodash-es'
import style from './index.css'
const sync = function() {
  console.log('sync');
  document.getElementById('app').innerHTML = `<h1 class=${style.test}>吼吼哈嘿css module</h1>`
}
const testIsArray = function(arg) {
  console.log('isArray');
  console.log(lodash.isArray(arg));
  // 将lodash也全部打包了
}
export {
  sync,
  testIsArray
}
