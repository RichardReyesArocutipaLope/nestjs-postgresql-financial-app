import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: (configService:ConfigService)=>{
        console.log('JWT_SECRET', configService.get('JWT_SECRET'))
        return {
          secret: process.env.JWT_SECRET,
          signOptions: {
            expiresIn: '3h'
          }
        }
      }
    })
  ],
  exports: [
    UsersService,
    TypeOrmModule,
  ]
})
export class UsersModule { }
