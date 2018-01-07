import topTracks from './topTracks.json';
import artist from './artist.json';

export const fetchArtist = (artistId) => {
  // Using Deezer API
  // return request.get(`https://api.deezer.com/artist/${artistId}`);
  return new Promise((resolve, reject) => resolve(artist));
};

export const fetchArtistTopTracks = (artistId) => {
  // Using Deezer API
  // return request.get(`https://api.deezer.com/artist/${artistId}/top`);
  return new Promise((resolve, reject) => resolve(topTracks));
};
