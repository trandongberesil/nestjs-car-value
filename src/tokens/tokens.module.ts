import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenEntity } from './token.entity';
import { TokensService } from './tokens.service';

@Module({
  imports: [TypeOrmModule.forFeature([TokenEntity])],
  providers: [TokensService],
  exports: [TokensService],
})
export class TokensModule {}
