import { connect } from 'react-redux';
import Player from '../components/player/Player'

const mapStateToprops = (state) => {
  return {
    showStatus: state.showStatus,
    currentSong: state.song
  }
}

export default connect(mapStateToprops)(Player)