export function debounce(func, delay) {
  let timer 
  return function(...args) {
    if(timer) {
      clearInterval(timer)
    }
    timer = setTimeout(() => {
      func.apply(this,args)
    }, delay)

  }
}