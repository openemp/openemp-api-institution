import { Module } from '@nestjs/common';
import { InstitutionsModule } from './institutions/institutions.module';

@Module({
  imports: [InstitutionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
