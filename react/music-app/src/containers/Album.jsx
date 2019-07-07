// import React, { Component } from 'react';
import { connect } from 'react-redux'
import Album from '../components/album/Album'
import { changeSong } from '../redux/action'

//这个文件和redux 有关
// const mapStateToProps = (state) => {}
const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentSong: (song) => {
      dispatch(changeSong(song))
    }
  }
}
export default connect(null, mapDispatchToProps)(Album)
// export default Album



// class Album extends Component {
//   state = {  }
//   render() { 
//     return ( 
//       <div className="music-album">
//         <div ref='albumBg' className="album-img">
//           <div className="filter"></div>
//           <span>播放</span>
//         </div>
//       </div>
//     );
//   }
// }
/**
 * container component
 * pure conmponent
 * !! 看文档
 *   
 */
