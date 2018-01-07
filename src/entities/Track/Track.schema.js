// src/redux/entities/Track/Track.schema.js

import { normalize, schema } from 'normalizr';
import { albumSchema } from '../Album/Album.schema';
import { artistSchema } from '../Artist/Artist.schema';

export const trackSchema = new schema.Entity('track', {
  artist: artistSchema,
  album: albumSchema,
  contributors: [artistSchema],
});

export const normalizeTrackList = (trackList) =>
  normalize(trackList, [trackSchema]);
