console.log('hello ts');
interface IDrawerConfig {
  enterDOM: HTMLElement | null
  leaveDOM: HTMLElement | null
  duration?: number   // ？ 可定义也可不定义 没有就用默认值
  ease?: string
}
class Drawer implements IDrawerConfig{
  enterDOM: HTMLElement   //声明
  leaveDOM: HTMLElement 
  _duration: number = 2
  _ease: string = "ease"
  constructor(opt) {
    this.enterDOM = opt.enterDOM
    this.leaveDOM = opt.leaveDOM
    this.initDOMStyle()
  }

  get duration() {
    return this._duration;
  }
  set duration(duration: number) {
    this._duration = duration
  }
  get ease () {
    return this._ease
  }
  set ease(ease: string) {
    this._ease = ease
  }

  initDOMStyle () {
    if(this.enterDOM && this.leaveDOM ) {
      this.enterDOM.setAttribute('style', `transition: left${this.duration}s ${this.ease}`)
      this.leaveDOM.setAttribute('style', `transition: margin-left ${this.duration}s ${this.ease}`)
    }
  }
  enter() {
    if(this.enterDOM && this.leaveDOM) {
      this.enterDOM.setAttribute('style', `left: 0px; transition: left ${this.duration}s ${this.ease}`)
      this.leaveDOM.setAttribute('style', `margin-left: 200px; transition: margin-left ${this.duration}s ${this.ease}`)
    }
  }
  leave() {
    this.initDOMStyle()
  }
}
