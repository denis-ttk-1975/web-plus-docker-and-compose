import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { WishesModule } from './wishes/wishes.module';
import { WishlistsModule } from './wishlists/wishlists.module';
import { OffersModule } from './offers/offers.module';

import { Wishlist } from './wishlists/entities/wishlist.entity';
import { Wish } from './wishes/entities/wish.entity';
import { User } from './users/entities/user.entity';
import { Offer } from './offers/entities/offer.entity';
import { AuthModule } from './auth/auth.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot({ envFilePath: './../../.env', isGlobal: true }),
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: process.env.POSTGRES_HOST,
//       port: 5432,
//       username: process.env.POSTGRES_USER,
//       password: process.env.POSTGRES_PASSWORD,
//       database: process.env.POSTGRES_DB,
//       entities: [Wishlist, Wish, User, Offer],
//       synchronize: true,
//     }),
//     UsersModule,
//     WishesModule,
//     WishlistsModule,
//     OffersModule,
//     AuthModule,
//   ],
//   controllers: [AppController],
//   providers: [],
// })

// @Module({
//   imports: [
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: (configService: ConfigService) => ({
//         type: 'postgres',
//         host: configService.get('POSTGRES_HOST') || 'db',
//         port: 5432,
//         username: configService.get('POSTGRES_USER') || 'student',
//         password: configService.get('POSTGRES_PASSWORD') || 'student',
//         database: configService.get('POSTGRES_DB') || 'kupipodariday',
//         entities: [Wishlist, Wish, User, Offer],
//         synchronize: true,
//       }),
//       inject: [ConfigService],
//     }),
//     UsersModule,
//     WishesModule,
//     WishlistsModule,
//     OffersModule,
//     AuthModule,
//   ],
//   controllers: [AppController],
//   providers: [],
// })

// @Module({
//   imports: [
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: (configService: ConfigService) => ({
//         type: 'postgres',
//         host: 'db',
//         port: 5432,
//         username: 'student',
//         password: 'student',
//         database: 'kupipodariday',
//         entities: [Wishlist, Wish, User, Offer],
//         synchronize: true,
//       }),
//       inject: [ConfigService],
//     }),
//     UsersModule,
//     WishesModule,
//     WishlistsModule,
//     OffersModule,
//     AuthModule,
//   ],
//   controllers: [AppController],
//   providers: [],
// })

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'student',
      password: 'student',
      database: 'kupipodariday',
      entities: [Wishlist, Wish, User, Offer],
      synchronize: true,
    }),
    UsersModule,
    WishesModule,
    WishlistsModule,
    OffersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
