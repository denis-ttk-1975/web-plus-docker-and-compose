import { Wishlist } from '../wishlists/entities/wishlist.entity';
import { Wish } from '../wishes/entities/wish.entity';
import { User } from '../users/entities/user.entity';
import { Offer } from '../offers/entities/offer.entity';
import { AuthModule } from '../auth/auth.module';

import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config({ path: './../../../.env' });

export default () => ({
  database: {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'db',
    username: process.env.POSTGRES_USER || 'student',
    password: process.env.POSTGRES_PASSWORD || 'student',
    database: process.env.POSTGRES_DB || 'kupipodariday',
    entities: [User, Wish, Wishlist, Offer],
    synchronize: true,
  },
});
