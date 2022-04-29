import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { institutionsModule } from './institutions/institutions.module';

@Module({
  imports: [institutionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
