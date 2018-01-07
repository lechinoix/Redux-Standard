// src/redux/entities/Album/Album.schema.js

import { schema } from 'normalizr';
import { artistSchema } from '../Artist/Artist.schema';
import { trackSchema } from '../Track/Track.schema';

export const albumSchema = new schema.Entity('album', {
  artist: artistSchema,
  tracks: [trackSchema],
});
