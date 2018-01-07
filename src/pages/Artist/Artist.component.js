import React from 'react';

class Artist extends React.Component {
  static defaultProps = {
    artist: {},
    topTracks: [],
  };

  componentWillMount() {
    this.props.fetchArtist();
  }

  _onClick = () => this.props.fetchTopTracks()

  renderTrackLine = (track) => (
    <li key={track.id} className="artist__track">{`${track.title} (${track.album.title})`}</li>
  )

  render() {
    const { artist, topTracks } = this.props;
    return (
      <div className="artist__wrapper">
        <div className="artist__picture">
          <img
            src={artist.picture}
            alt={artist.name}
          />
        </div>
        <h3 className="artist__name">{artist.name}</h3>
        <button onClick={this._onClick}>
          Fetch Top tracks
        </button>
        <ul className="artist__top-tracks">
          {topTracks && topTracks.map(this.renderTrackLine)}
        </ul>
      </div>
    );
  };
};

export default Artist;
