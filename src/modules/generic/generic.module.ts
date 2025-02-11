import { Module } from '@nestjs/common';
import { GenericService } from './application/services/generic.service';
import { GenericController } from './presentation/controllers/generic.controller';
import { Generic } from './domain/generic';

@Module({
  controllers: [GenericController],
  providers: [GenericService, Generic],
})
export class GenericModule {}
