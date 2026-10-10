import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccountModule } from '../../internal/account/account.module';

@Module({
  controllers: [AuthController, AccountModule],
  providers: [AuthService]
})
export class AuthModule {}
