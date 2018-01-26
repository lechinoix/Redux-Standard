import React from 'react';

class TopTracks extends React.Component {
  renderTrackLine = (track) => (
    <li key={track.id} className="artist__track">{`${track.title} (${track.album.title})`}</li>
  )

  render() {
    const { topTracks } = this.props;
    console.log('render topTracks');
    return (
      <ul className="artist__top-tracks">
        {topTracks && topTracks.map(this.renderTrackLine)}
      </ul>
    );
  }
}

export default TopTracks;
