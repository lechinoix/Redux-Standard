import React from 'react';

import Toggle from '../../components/Toggle';
import TopTracks from '../../components/TopTracks';

class Artist extends React.Component {
  static defaultProps = {
    artist: {},
  };

  componentWillMount() {
    this.props.fetchArtist();
  }

  render() {
    const { artist, topTracks } = this.props;
    console.log('render Table');
    return (
      <div className="artist__wrapper">
        <div className="artist__picture">
          <img
            src={artist.picture}
            alt={artist.name}
          />
        </div>
        <h3 className="artist__name">{artist.name}</h3>
        <button onClick={this.props.fetchTopTracks}>
          Fetch Top Tracks
        </button>
        <Toggle />
        <TopTracks />
      </div>
    );
  };
};

export default Artist;
