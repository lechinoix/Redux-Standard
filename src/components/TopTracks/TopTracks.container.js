// src/component/Artist/Artist.container.js

import { connect } from 'react-redux';

import { selectArtistTopTracks } from '../../entities/Artist/Artist.selectors';
import TopTracks from './TopTracks.component';
import { toJS } from '../../to-js';

const mapStateToProps = (state) => ({
  topTracks: selectArtistTopTracks(state, 27),
});

export default connect(mapStateToProps)(toJS(TopTracks));
