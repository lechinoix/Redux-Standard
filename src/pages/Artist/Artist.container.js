// src/component/Artist/Artist.container.js

import { connect } from 'react-redux';
import {
  startFetchArtistById,
  startFetchArtistTopTracks,
} from '../../entities/Artist/Artist.actions';
import {
  selectArtist,
} from '../../entities/Artist/Artist.selectors';
import Artist from './Artist.component';
  
const mapStateToProps = (state) => ({
  artist: selectArtist(state, 27),
});

const mapDispatchToProps = {
  fetchArtist: () => startFetchArtistById(27),
  fetchTopTracks: () => startFetchArtistTopTracks(27),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Artist);
