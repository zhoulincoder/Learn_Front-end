import React, { Component } from 'react';
import Swiper from 'swiper';
import { getCarousel, getNewAlbum } from '../../api/recommend';
// import { CODE_SUCCESS } from '../../api/config';
import { createAlbumByItem } from '../../model/album';
import Scroll from '../../common/scroll/Scroll';
import Lazyload, { forceCheck } from 'react-lazyload';
import Loading from '../../common/loading/Loading'
import 'swiper/dist/css/swiper.css';
import './recommend.styl';

class Recommend extends Component {
  state = {
    show: true,
    slideList: [],
    albumList: [],
    refreshScroll: false
  }
  componentDidMount() {
    //获取轮播图
    getCarousel().then(res => {
      this.setState({
        slideList: res.data.slider
      }, () => {
        if (!this.sliderSwiper) {
          //不懂 不能直接加吗
          this.sliderSwiper = new Swiper('.slider-container', {
            loop: true,
            autoplay: true,
            pagination: '.swiper-pagination'
          })
        }
       
      })
    })
    // 获取专辑
    getNewAlbum().then(res => {
      let albumList = res.albumlib.data.list;
      console.log('albumList', albumList);
      this.setState({
        albumList,
        show: false
      }, () => {
        //刷新scroll
        this.setState({
          refreshScroll: true
        })
      })
    })

  }
  renderAlbum() {
     // 渲染 album
    const { albumList = [] } = this.state;
    return albumList.map(item => {
      const album = createAlbumByItem(item);
      return (
        <div className="album-wrapper" key={album.mId}>
          <div className="left">
            <Lazyload >
              <img src={album.img} width="100%" height="100%" alt=""/>
            </Lazyload>
          </div>
          <div className="right">
            <div className="album-name">
              { album.name }
            </div>
            <div className="singer-name">
              { album.singer }
            </div>
            <div className="public-time">
              { album.publicTime }
            </div>
          </div>
        </div>
      )
    })
  }
  renderSwiperItem() {
    //渲染轮播图
    const { slideList } = this.state;
    return (
      <>
      { slideList.map((slider) => {
        return (
          <div className="swiper-slide" key={slider.id}>
            <a href={slider.linkUrl} className="slider-nav">
              <img src={slider.picUrl}
              width="100%" height="100%" alt=""/>
            </a>
          </div>
        )
      }) }
      </>
    )
  }
  render() {
    const { refreshScroll } = this.state;
    return ( 
      <div className="music-recommend">
        
        <Scroll refresh={refreshScroll} onScroll={forceCheck}>
        <div>
          <div className="slider-container">
            {/* slider -> swiper */}
            <div className="swiper-wrapper">
              { this.renderSwiperItem() }
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <div className="album-container">
            <h1 className="title">最新专辑</h1>
            <div className="album-list">
              { this.renderAlbum() }
            </div>
          </div>
        </div>
        </Scroll>
        <Loading title="正在加载中" show={this.state.show} />
      </div>
     );
  }
}
 
export default Recommend;
